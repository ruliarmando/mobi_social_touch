Ext.define('Mobi.store.InfokomSearch', {
    extend: 'Ext.data.Store',
    xtype: 'infokomsearch',
    config: {
        storeId: 'infokomsearch',
        model: 'Mobi.model.Infokom',
        pageSize: 9999,
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'infokoms'
            }
        }
    }
});