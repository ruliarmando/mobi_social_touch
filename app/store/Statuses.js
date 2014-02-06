Ext.define('Mobi.store.Statuses', {
    extend: 'Ext.data.Store',
    xtype: 'statuses', // the xtype
    config: {
        storeId: 'statuses',
        model: 'Mobi.model.Status',
        sorters: [{ property: 'timestamp', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            url: 'http://localhost/mobi_social_web/service/statusList',
            reader: {
                type: 'json',
                rootProperty: 'statuses'
            }
        }
    }
});