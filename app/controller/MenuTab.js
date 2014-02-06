Ext.define('Mobi.controller.MenuTab', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            menuTab: 'menutabpanel',
            tabBar: 'menutabpanel #tabBar'
        },
        control: {
            menuTab: {
                menuTabChange: 'onMenuTabChange'
            },
            tabBar: {
                tabChange: 'onTabChange'
            }
        }
    },
    onMenuTabChange: function(tab, current, old){
        
    },
    onTabChange: function(bar, newTab, oldTab){
        
    }
});