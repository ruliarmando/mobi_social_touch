Ext.define('Mobi.view.MenuTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.menutabpanel',
    requires: [
        'Mobi.view.status.HomePanel',
        'Mobi.view.profile.ProfilePanel', 
        'Mobi.view.group.GroupPanel',
        'Mobi.view.infokom.InfokomPanel',
        'Mobi.view.materi.MateriPanel',
        'Mobi.view.chat.ChatPanel',
        'Mobi.view.search.SearchPanel',
        'Ext.Menu'
    ],
    config: {
        activeTab: 0,
        tabBar: {
            itemId: 'tabBar',
            docked: 'bottom',
            scrollable: {
                direction: 'horizontal',
                indicators: false
            }
        },
        items: [
            {
                xtype: 'homepanel',
                iconCls: 'list',
                title: 'Status'
            },
            {
                xtype: 'profilepanel',
                title: 'Profil',
                iconCls: 'user'
            },
            {
                xtype: 'grouppanel',
                title: 'Grup',
                iconCls: 'team'
            },
            {
                title: 'Infokom',
                xtype: 'infokompanel',
                iconCls: 'file'
            },
            {
                title: 'Materi',
                xtype: 'materipanel',
                iconCls: 'download'
            },
            {
                title: 'Pesan',
                iconCls: 'chat2',
                xtype: 'chatpanel'
            },
            {
                title: 'Pencarian',
                iconCls: 'search',
                xtype: 'searchpanel'
            }
        ],
        listeners: {
            activeitemchange: {
                fn: function(){
                    var newtab = arguments[1];
                    newtab.fireEvent('afterTab', this, newtab);
                },
                order: 'after'
            }
        }
    }
});