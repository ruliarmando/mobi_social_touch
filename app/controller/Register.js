Ext.define('Mobi.controller.Register', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            registerForm: 'registerform',
            mainTabPanel: 'maintabpanel'
        },
        control: {
            registerForm: {
                registerCommand: 'onRegisterCommand'
            }
        }
    },
    onRegisterCommand: function(form){
        var me = this, formValues = form.getValues(), valid = true;
        
        Ext.Object.each(formValues, function(key, value, myself){
            if(key !== 'level' && value.length === 0){
                valid = false;
            }
        });
        
        if(!valid){
            Ext.Msg.alert('Peringatan', 'Mohon Isi semua field', Ext.emptyFn);
            return;
        }
        
        form.setMasked({
            xtype: 'loadmask',
            message: 'Sedang Mendaftarkan...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/register',
            method: 'post',
            params: formValues,
            success: function(response){
                var registerResponse = Ext.JSON.decode(response.responseText);
                
                if(registerResponse.success === 'true'){
                    form.setMasked(false);
                    Ext.Msg.alert('Pendaftaran Sukses', 'Silahkan Login ke Mobi Social', Ext.emptyFn);
                    me.getMainTabPanel().animateActiveItem(0, { type: 'slide', direction: 'right' });
                }else{
                    form.setMasked(false);
                    Ext.Msg.alert('Pendaftaran Gagal', 'Silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                form.setMasked(false);
                Ext.Msg.alert('Error', 'Server response :' + response.status, Ext.emptyFn);
            }
        });
    }
});