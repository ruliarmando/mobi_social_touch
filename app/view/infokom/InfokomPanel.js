Ext.define('Mobi.view.infokom.InfokomPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.infokompanel',
    requires: [
        'Mobi.view.infokom.InfokomList',
        'Mobi.view.infokom.NewInfokomForm',
        'Mobi.view.infokom.InfokomDetail'
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    iconCls: 'compose',
                    cls: 'fbButton',
                    itemId: 'newInfokomButton'
                }
            ]
        },
        items: [
            {
                title: 'Infokom',
                xtype: 'infokomlist',
            }
        ],
        listeners: [
            {
                delegate: '#newInfokomButton',
                event: 'tap',
                fn: 'onNewInfokomButtonTap'
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
            Ext.getStore('infokoms').load();
        }
    },
    onNewInfokomButtonTap: function(){
        this.fireEvent('showInfokomFormCommand');
    }
});