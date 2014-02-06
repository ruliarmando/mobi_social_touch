Ext.define('Mobi.view.RegisterForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.registerform',
    requires: ['Ext.field.Email', 'Ext.field.Select'],
    config: {
        title: 'Register',
        items: [{
                xtype: 'fieldset',
                title: 'Register',
                items: [
                    {
                        xtype: 'emailfield',
                        placeHolder: 'Email',
                        name: 'email',
                        required: true
                    },{
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        name: 'username',
                        required: true
                    },{
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        name: 'password',
                        required: true
                    },{
                        xtype: 'textfield',
                        placeHolder: 'Nama Lengkap',
                        name: 'name',
                        required: true
                    },{
                        xtype: 'textfield',
                        placeHolder: 'NIS/NIP',
                        name: 'nis',
                        required: true
                    }
                ]
            },{
                xtype: 'button',
                itemId: 'registerButton',
                ui: 'action',
                padding: '10',
                text: 'Register',
                width: '90%',
                margin: 'auto'
            }
        ],
        listeners: [
            {
                delegate: '#registerButton',
                event: 'tap',
                fn: 'onRegisterButtonTap'
            }
        ]
    },
    onRegisterButtonTap: function(){
        var me = this;
            
        var task = Ext.create('Ext.util.DelayedTask', function(){
            me.fireEvent('registerCommand', me);
                
            me.setValues({
                email: '',
                username: '',
                password: '',
                name: '',
                nis: ''
            });
        });
        
        task.delay(500);
    }
});