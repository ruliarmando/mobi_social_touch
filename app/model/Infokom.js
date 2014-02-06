Ext.define('Mobi.model.Infokom', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'user_id', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'avatar', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'time', type: 'date' },
            { name: 'file', type: 'string' },
            { name: 'type', type: 'string' }
        ]
    }
});