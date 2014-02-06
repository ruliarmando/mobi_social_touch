Ext.define('Mobi.view.status.RetweetPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.retweetpanel',
    config: {
        padding: 5,
        width: '90%',
        height: '50%',
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        showAnimation: 'slideIn',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Retweet',
                ui: 'neutral',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        iconCls: 'delete',
                        ui: 'plain',
                        align: 'right',
                        itemId: 'closeFormButton'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: '#closeFormButton',
                event: 'tap',
                fn: 'onCloseForm'
            },
            {
                delegate: '#postSubmitButton',
                event: 'tap',
                fn: 'onPostSubmitButtonTap'
            }
        ]
    },
    onCloseForm: function(){
        this.hide();
    },
    onPostRetweetButtonTap: function(){
        var me = this;
        this.fireEvent('retweet', me);
    }
});