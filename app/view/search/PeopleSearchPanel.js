Ext.define('Mobi.view.search.PeopleSearchPanel', {
    extend: 'Ext.Container',
    alias: 'widget.peoplesearchpanel',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'peoplesearchform',
                flex: 1,
                itemId: 'psf'
            },
            {
                xtype: 'peoplesearchlist',
                flex: 2
            }
        ]
    }
});