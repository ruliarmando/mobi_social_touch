Ext.define('Mobi.view.chat.ChatPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.chatpanel',
    requires: [
        'Mobi.view.chat.ConversationList', 
        'Mobi.view.chat.MessageList', 
        'Mobi.view.chat.ChatForm', 
        'Mobi.view.chat.NewChatForm',
        'Mobi.view.chat.FriendList',
        'Mobi.view.chat.FriendListPanel',
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    iconCls: 'compose',
                    itemId: 'newMessageButton',
                    cls: 'fbButton',
                    align: 'right'
                },
                {
                    xtype: 'button',
                    iconCls: 'compose',
                    itemId: 'messageButton',
                    cls: 'fbButton',
                    align: 'right',
                    hidden: true
                }
            ]
        },
        items: [
            {
                title: 'Percakapan',
                xtype: 'conversationlist',
            }
        ],
        listeners: []
    },
    initialize: function(){
        this.callParent(arguments);
        this.on('afterTab', 'onAfterActiveTabChange', this);
    },
    onAfterActiveTabChange: function(){
        if(!this.storeLoaded){
            this.storeLoaded = true;
            Ext.getStore('conversations').load();
        }
    }
});