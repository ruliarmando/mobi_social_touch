Ext.define('Mobi.controller.Infokom', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            infokomPanel: 'infokompanel',
            newInfokomForm : 'newinfokomform',
            newInfokomButton: 'infokompanel #newInfokomButton',
            infokomList: 'infokomlist'
        },
        control: {
            infokomPanel: {
                showInfokomFormCommand: 'onShowNewInfokomForm',
                pop: 'onPop',
                push: 'onPush'
            },
            newInfokomForm: {
                newInfokomCommand: 'onNewInfokom'
            },
            infokomList: {
                itemsingletap: 'onInfokomSingleTap'
            }
        }
    },
    onPop: function(view, item){
        if(item.xtype == "newinfokomform"){
            this.getNewInfokomButton().show();
        }else{
            this.getNewInfokomButton().hide();
        }
    },
    onPush: function(view, item){
        if(item.xtype == "newinfokomform"){
            this.getNewInfokomButton().hide();
        }else{
            this.getNewInfokomButton().show();
        }
    },
    onNewInfokom: function(form){
        var me = this, description = form.getValues()['description'];
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl + '/postInfokom',
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    Ext.getStore('infokoms').load();
                    me.getInfokomPanel().pop(form);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onShowNewInfokomForm: function(){
        if(!this.newInfokomForm){
            this.newInfokomForm = Ext.create('Mobi.view.infokom.NewInfokomForm');
        }
        
        this.getInfokomPanel().push(this.newInfokomForm);
    },
    onInfokomSingleTap: function(list, index, target, record){
        var infokomId = record.get('id');
        
        if(!this.infokomDetail){
            this.infokomDetail = Ext.create('Mobi.view.infokom.InfokomDetail');
        }
        
        var infokomCommentsStore = Ext.getStore('infokomcomments');
        infokomCommentsStore.getProxy().setUrl(Mobi.app.baseUrl+'/infokom/'+statusId);
        infokomCommentsStore.load();
        
        this.infokomDetail.setInfokomId(infokomId);
        this.infokomDetail.down('#infokomPanel').setData(record.data);
        
        this.getInfokomPanel().push(this.infokomDetail);
    }
});