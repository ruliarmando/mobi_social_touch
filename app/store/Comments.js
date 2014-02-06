Ext.define('Mobi.store.Comments', {
    extend: 'Ext.data.Store',
    xtype: 'comments',
    config: {
        storeId: 'comments',
        model: 'Mobi.model.Comment',
        sorters: [{ property: 'timestamp', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'comments'
            }
        }
    }
});