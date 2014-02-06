Ext.define('Mobi.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maintabpanel',
    requires: ['Mobi.view.LoginForm', 'Mobi.view.RegisterForm'],
    config: {
        activeTab: 0,
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'loginform',
                title: 'Login',
                iconCls: 'lock'
            },{
                xtype: 'registerform',
                title: 'Register',
                iconCls: 'compose'
            }
        ]
    }
});