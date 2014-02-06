Ext.define('Mobi.view.chat.NewChatForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.newchatform',
    requires: ['Ext.field.TextArea', ],
    config: {
        padding: 5,
        items: [
            {
                xtype: 'textfield',
                label: 'Teman',
                name: 'to',
                margin: 5,
                style: 'border: 1px solid #ccc;border-radius: 5px',
                itemId: 'toTextField'
            },
            {
                xtype: 'hiddenfield',
                name: 'user_id',
                itemId: 'userIdHidden'
            },
            {
                xtype: 'textareafield',
                placeHolder: 'Tulis Pesan',
                name: 'content',
                margin: 5,
                style: 'border: 1px solid #ccc;border-radius: 5px',
                clearIcon: false,
                required: 'true'
            },
            {
                xtype: 'button',
                itemId: 'newChatSendButton',
                ui: 'confirm',
                width: '95%',
                padding: 10,
                margin: '10 auto',
                text: 'Kirim'
            }
        ],
        listeners: [
            {
                delegate: '#newChatSendButton',
                event: 'tap',
                fn: 'onNewChatSendButtonTap'
            }
        ]
    },
    onNewChatSendButtonTap: function(){
        var me = this;
        this.fireEvent('newChatSend', me);
        this.reset();
    }
});