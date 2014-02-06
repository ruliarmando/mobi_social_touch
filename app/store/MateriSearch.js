Ext.define('Mobi.store.MateriSearch', {
    extend: 'Ext.data.Store',
    xtype: 'materisearch',
    config: {
        storeId: 'materisearch',
        model: 'Mobi.model.Materi',
        pageSize: 9999,
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'materis'
            }
        }
    }
});