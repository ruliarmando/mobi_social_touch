Ext.define('Mobi.model.Message', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'content', type: 'string' },
            { name: 'user_id', type: 'int' },
            { name: 'conversation_id', type: 'int' },
            { name: 'avatar', type: 'string' },
            { name: 'time', type: 'date' }
        ]
    }
});