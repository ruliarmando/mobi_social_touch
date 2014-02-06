Ext.define('Mobi.store.GroupPosts', {
    extend: 'Ext.data.Store',
    xtype: 'groupposts', // the xtype
    config: {
        storeId: 'groupposts',
        model: 'Mobi.model.GroupPost',
        //sorters: [{ property: 'timestamp', direction: 'DESC' }],
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'groupposts'
            }
        }
    }
});