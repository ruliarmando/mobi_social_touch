Ext.define('Mobi.view.search.MateriSearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.materisearchform',
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
                        itemId: 'materiSearchField'
                    }
                ]
            }
        ]
    }
});