Ext.define('Mobi.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    requires: ['Ext.Img', 'Ext.Label', 'Ext.form.FieldSet', 'Ext.field.Text', 'Ext.field.Password', 'Ext.util.DelayedTask'],
    config: {
        title: 'Login',
        items: [
            {
                xtype: 'toolbar',
                cls: [
                    'jogToolbar'
                ],
                docked: 'top'
            },
            {
                xtype: 'image',
                src: Ext.Viewport.getOrientation() == 'portrait' ? 'resources/images/login.png' : 'resources/images/login-small.png',
                style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:80px;height:80px;margin:auto;margin-top:10px;' : 'width:40px;height:40px;margin:auto;margin-top:10px;'
            },
            {
                xtype: 'label',
                html: 'Login gagal, Silahkan ulangi',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;text-align:center;'
            },
            {
                xtype: 'fieldset',
                title: '',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        name: 'username',
                        autoComplete: false,
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        name: 'password',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                ui: 'action',
                padding: '10',
                text: 'Log In',
                width: '90%',
                margin: 'auto'
            }
        ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]
    },
    onLogInButtonTap: function(){
        var me = this, label = me.down('#signInFailedLabel');
            
        label.hide();
        
        var task = Ext.create('Ext.util.DelayedTask', function(){
            label.setHtml('');
            me.fireEvent('signInCommand', me);
            me.reset();
        });
        
        task.delay(500);
    },
    showSignInFailedMessage: function(message){
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});