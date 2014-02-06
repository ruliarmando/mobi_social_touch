Ext.define('Mobi.view.search.GroupSearchPanel', {
    extend: 'Ext.Container',
    alias: 'widget.groupsearchpanel',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'groupsearchform',
                flex: 1,
                itemId: 'gsf'
            },
            {
                xtype: 'groupsearchlist',
                flex: 2
            }
        ]
    }
});