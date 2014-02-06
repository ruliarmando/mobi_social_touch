Ext.define('Mobi.store.Messages', {
    extend: 'Ext.data.Store',
    xtype: 'messages',
    config: {
        storeId: 'messages',
        model: 'Mobi.model.Message',
        sorters: [{ property: 'time', direction: 'ASC' }],
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'messages'
            }
        }
    }
});