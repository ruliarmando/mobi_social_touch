Ext.define('Mobi.store.Groups', {
    extend: 'Ext.data.Store',
    xtype: 'groups', // the xtype
    config: {
        storeId: 'groups',
        model: 'Mobi.model.Group',
        //sorters: [{ property: 'timestamp', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            url: Mobi.app.baseUrl + '/groupList',
            reader: {
                type: 'json',
                rootProperty: 'groups'
            }
        }
    }
});