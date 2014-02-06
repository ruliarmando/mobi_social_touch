Ext.define('Mobi.view.search.PeopleSearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.peoplesearchform',
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
                        itemId: 'peopleSearchField'
                    }
                ]
            }
        ]
    }
});