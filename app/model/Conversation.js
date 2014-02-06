Ext.define('Mobi.model.Conversation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'conv_id', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'avatar', type: 'string' },
            { name: 'last_reply_id', type: 'int' },
            { name: 'last_reply_content', type: 'string' },
            { name: 'last_reply_time', type: 'date' },
        ],
        idProperty: 'conv_id'
    }
});