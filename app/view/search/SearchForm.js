Ext.define('Mobi.view.search.SearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchform',
    requires: [],
    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'searchfield',
                        label: 'Cari',
                        name: 'query'
                    }
                ]
            }
        ]
    }
});