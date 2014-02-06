Ext.define('Mobi.view.search.MateriSearchPanel', {
    extend: 'Ext.Container',
    alias: 'widget.materisearchpanel',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'materisearchform',
                flex: 1,
                itemId: 'msf'
            },
            {
                xtype: 'materisearchlist',
                flex: 2
            }
        ]
    }
});