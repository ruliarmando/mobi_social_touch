Ext.define('Mobi.view.chat.ChatForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.chatform',
    requires: ['Ext.field.TextArea'],
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
                title: 'Kirim Pesan',
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
            },
            {
                xtype: 'textareafield',
                placeHolder: 'Tulis Pesan',
                name: 'content',
                clearIcon: false,
                required: 'true'
            },
            {
                xtype: 'button',
                itemId: 'chatSendButton',
                ui: 'confirm',
                width: '95%',
                padding: 10,
                margin: '10 auto',
                text: 'Kirim'
            }
        ],
        listeners: [
            {
                delegate: '#closeFormButton',
                event: 'tap',
                fn: 'onCloseForm'
            },
            {
                delegate: '#chatSendButton',
                event: 'tap',
                fn: 'onChatSendButtonTap'
            }
        ]
    },
    onCloseForm: function(){
        this.reset();
        this.hide();
    },
    onChatSendButtonTap: function(){
        var me = this;
        this.fireEvent('chatSend', me);
        this.reset();
    }
});