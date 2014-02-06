Ext.define('Mobi.view.search.InfokomSearchPanel', {
    extend: 'Ext.Container',
    alias: 'widget.infokomsearchpanel',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'infokomsearchform',
                flex: 1,
                itemId: 'isf'
            },
            {
                xtype: 'infokomsearchlist',
                flex: 2
            }
        ]
    }
});