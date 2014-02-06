Ext.define('Mobi.view.search.SearchTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.searchtabpanel',
    config: {
        activeTab: 0,
        tabBar: {
            docked: 'top'
        },
        items: [
            {
                title: 'Orang',
                xtype: 'peoplesearchpanel',
            },
            {
                title: 'Grup',
                xtype: 'groupsearchpanel'
            },
            {
                title: 'Infokom',
                xtype: 'infokomsearchpanel'
            },
            {
                title: 'Materi',
                xtype: 'materisearchpanel'
            }
        ]
    }
});