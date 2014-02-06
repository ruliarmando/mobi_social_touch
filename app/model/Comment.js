Ext.define('Mobi.model.Comment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'content', type: 'string' },
            { name: 'time', type: 'date' },
            { name: 'avatar', type: 'string' }
        ]
    }
});