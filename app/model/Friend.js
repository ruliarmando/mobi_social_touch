Ext.define('Mobi.model.Friend', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'username', type: 'string' }
        ]
    }
});