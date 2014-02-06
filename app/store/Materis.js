Ext.define('Mobi.store.Materis', {
    extend: 'Ext.data.Store',
    xtype: 'materis',
    config: {
        storeId: 'materis',
        model: 'Mobi.model.Materi',
        sorters: [{ property: 'time', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            url: Mobi.app.baseUrl + '/materiList',
            reader: {
                type: 'json',
                rootProperty: 'materis'
            }
        }
    }
});