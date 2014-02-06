Ext.define('Mobi.model.GroupPost', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'avatar', type: 'string' },
            { name: 'group_id', type: 'int' },
            { name: 'content', type: 'string' },
            { name: 'timestamp', type: 'date' }
        ]
    }
});