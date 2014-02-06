Ext.define('Mobi.view.search.InfokomSearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.infokomsearchform',
    requires: [],
    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'searchfield',
                        label: 'Cari',
                        name: 'query',
                        itemId: 'infokomSearchField'
                    }
                ]
            }
        ]
    }
});