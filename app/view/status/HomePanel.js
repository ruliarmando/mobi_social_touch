Ext.define('Mobi.view.status.HomePanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.homepanel',
    requires: [
        'Mobi.view.status.StatusList', 
        'Mobi.view.status.StatusDetail', 
        'Mobi.view.status.StatusForm', 
        'Mobi.view.status.StatusOption',
        'Mobi.view.status.RetweetPanel'
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    id: 'statusButton',
                    iconCls: 'compose',
                    align: 'left'
                },
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    id: 'commentButton',
                    iconCls: 'compose',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    iconCls: 'power',
                    itemId: 'logOffButton',
                    align: 'right'
                }
                
            ]
        },
        items: [
            {
                title: 'Status',
                xtype: 'statuslist',
            }
        ],
        listeners: [{
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        }]
    },
    onLogOffButtonTap: function(){
        this.fireEvent('signOffCommand');
    }
});