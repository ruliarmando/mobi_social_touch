Ext.define('Mobi.store.Conversations', {
    extend: 'Ext.data.Store',
    xtype: 'conversations',
    config: {
        storeId: 'conversations',
        model: 'Mobi.model.Conversation',
        sorters: [{ property: 'time', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            url: Mobi.app.baseUrl + '/conversation',
            reader: {
                type: 'json',
                rootProperty: 'conversations'
            }
        }
    }
});