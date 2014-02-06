Ext.define('Mobi.controller.Status', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            statusList: 'statuslist',
            homePanel: 'homepanel',
            statusButton: '#statusButton',
            logOffButton: '#logOffButton',
            commentButton: '#commentButton',
            statusForm: 'statusform',
            statusOption: 'statusoption',
            statusTextArea: 'statusform #statusText',
            retweetButton: 'statusoption #retweetButton'
        },
        control: {
            statusList: {
                itemsingletap: 'onStatusSelect',
                itemdoubletap: 'onDoubleTap'
            },
            homePanel: {
                pop: 'onPop',
                push: 'onPush'
            },
            statusButton: {
                tap: 'onStatusButtonTap'
            },
            statusForm: {
                statusSubmit: 'onStatusSubmit'
            },
            statusTextArea: {
                keyup: 'onStatusKeyUp'
            },
            retweetButton: {
                tap: 'onRetweetButtonTap'
            }
        }
    },
    onPop: function(me, view){
        if (view.xtype === 'statusform') {
            this.getCommentButton().hide();
            this.getStatusButton().show();
            this.getLogOffButton().show();
        }else if(view.xtype === 'statusdetail'){
            Ext.getStore('comments').removeAll();
            this.getCommentButton().hide();
            this.getStatusButton().show();
            this.getLogOffButton().show();
        }else{
            this.getCommentButton().show();
            this.getStatusButton().hide();
            this.getLogOffButton().hide();
        }
    },
    onPush: function(me, view){
        if (view.xtype === 'statusform') {
            this.getCommentButton().hide();
            this.getStatusButton().hide();
            this.getLogOffButton().hide();
        }else if(view.xtype === 'statusdetail'){
            this.getStatusButton().hide();
            this.getCommentButton().show();
            this.getLogOffButton().hide();
        }else{
            this.getStatusButton().hide();
            this.getCommentButton().hide();
            this.getLogOffButton().hide();
        }
    },
    onStatusSelect: function(list, index, target, record){
        var statusId = record.get('id');
        
        if(!this.statusDetail){
            this.statusDetail = Ext.create('Mobi.view.status.StatusDetail');
        }
        
        var commentsStore = Ext.getStore('comments');
        commentsStore.getProxy().setUrl(Mobi.app.baseUrl+'/status/'+statusId);
        commentsStore.load();
        
        this.statusDetail.setStatusId(statusId);
        this.statusDetail.down('#statusPanel').setData(record.data);
        
        this.getHomePanel().push(this.statusDetail);
    },
    onDoubleTap: function(){
        if(!this.statusOption){
            this.statusOption = Ext.create('Mobi.view.status.StatusOption');
            Ext.Viewport.add(this.statusOption);
        }
        
        this.statusOption.show();
    },
    onStatusButtonTap: function(){
        if(!this.statusForm){
            this.statusForm = Ext.create('Mobi.view.status.StatusForm');
        }
        
        this.getHomePanel().push(this.statusForm);
    },
    onStatusSubmit: function(form){
        var me = this, statusContent = form.getValues()['status'];
        
        if(statusContent === ''){
            Ext.Msg.alert('Peringatan', 'Status belum diisi', Ext.emptyFn);
            return;
        }
        
        form.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/postStatus',
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                
                if(resp.success === 'true'){
                    Ext.getStore('statuses').load();
                    form.setMasked(false);
                    me.getHomePanel().pop(form);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim status, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onStatusKeyUp: function(theField){
        
    },
    onRetweetButtonTap: function(){
        if(!this.retweetPanel){
            this.retweetPanel = Ext.create('Mobi.view.status.RetweetPanel');
            Ext.Viewport.add(this.retweetPanel);
        }
        
        this.getStatusOption().hide();
        
        this.retweetPanel.show();
    }
});