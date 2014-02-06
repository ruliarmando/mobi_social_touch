Ext.define('Mobi.view.materi.MateriPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.materipanel',
    requires: [
        'Mobi.view.materi.MateriList',
        'Mobi.view.materi.NewMateriForm'
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    iconCls: 'compose',
                    itemId: 'newMateriButton'
                }
            ]
        },
        items: [
            {
                title: 'Materi',
                xtype: 'materilist',
            }
        ],
        listeners: [
            {
                delegate: '#newMateriButton',
                event: 'tap',
                fn: 'onNewMateriButtonTap'
            }
        ]
    },
    initialize: function(){
        this.callParent(arguments);
        this.on('afterTab', 'onAfterActiveTabChange', this);
    },
    onAfterActiveTabChange: function(){
        if(!this.storeLoaded){
            this.storeLoaded = true;
            Ext.getStore('materis').load();
        }
    },
    onNewMateriButtonTap: function(){
        this.fireEvent('showMateriFormCommand');
    }
});