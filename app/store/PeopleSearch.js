Ext.define('Mobi.store.PeopleSearch', {
    extend: 'Ext.data.Store',
    xtype: 'peoplesearch',
    config: {
        storeId: 'peoplesearch',
        model: 'Mobi.model.Friend',
        pageSize: 9999,
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'people'
            }
        }
    }
});