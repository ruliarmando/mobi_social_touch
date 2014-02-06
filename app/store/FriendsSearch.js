Ext.define('Mobi.store.FriendsSearch', {
    extend: 'Ext.data.Store',
    xtype: 'friendssearch',
    config: {
        storeId: 'friendssearch',
        model: 'Mobi.model.Friend',
        pageSize: 9999,
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'friends'
            }
        }
    }
});