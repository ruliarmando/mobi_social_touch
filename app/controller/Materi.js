Ext.define('Mobi.controller.Materi', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            materiPanel: 'materipanel',
            newMateriForm: 'newmateriform',
            newMateriButton: 'materipanel #newMateriButton'
        },
        control: {
            materiPanel: {
                showMateriFormCommand: 'onShowNewMateriForm',
                pop: 'onPop',
                push: 'onPush'
            },
            newMateriForm: {
                newMateriCommand: 'onNewMateri'
            }
        }
    },
    onPop: function(view, item){
        if(item.xtype == "newmateriform"){
            this.getNewMateriButton().show();
        }else{
            this.getNewMateriButton().hide();
        }
    },
    onPush: function(view, item){
        if(item.xtype == "newmateriform"){
            this.getNewMateriButton().hide();
        }else{
            this.getNewMateriButton().show();
        }
    },
    onNewMateri: function(form){
        var me = this, content = form.getValues()['content'];
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl + '/postMateri',
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    Ext.getStore('conversations').load();
                    me.getChatPanel().pop(form);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim pesan, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onShowNewMateriForm: function(){
        if(!this.newMateriForm){
            this.newMateriForm = Ext.create('Mobi.view.materi.NewMateriForm');
        }
        
        this.getMateriPanel().push(this.newMateriForm);
    }
});