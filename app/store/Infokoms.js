Ext.define('Mobi.store.Infokoms', {
    extend: 'Ext.data.Store',
    xtype: 'infokoms',
    config: {
        storeId: 'infokoms',
        model: 'Mobi.model.Infokom',
        sorters: [{ property: 'time', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            url: Mobi.app.baseUrl + '/infokomList',
            reader: {
                type: 'json',
                rootProperty: 'documents'
            }
        }
    }
});