Ext.define('Mobi.view.search.GroupSearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.groupsearchform',
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
                        itemId: 'groupSearchField'
                    }
                ]
            }
        ]
    }
});