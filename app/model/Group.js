Ext.define('Mobi.model.Group', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'desc', type: 'string' },
            { name: 'creator', type: 'int' },
            { name: 'created', type: 'date' }
        ]
    }
});