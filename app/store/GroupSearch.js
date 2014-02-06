Ext.define('Mobi.store.GroupSearch', {
    extend: 'Ext.data.Store',
    xtype: 'groupsearch',
    config: {
        storeId: 'groupsearch',
        model: 'Mobi.model.Group',
        pageSize: 9999,
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'groups'
            }
        }
    }
});