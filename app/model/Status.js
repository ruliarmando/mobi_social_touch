Ext.define('Mobi.model.Status', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'content', type: 'string' },
            { name: 'timestamp', type: 'date' },
            { name: 'avatar', type: 'string' }
        ]
    }
});