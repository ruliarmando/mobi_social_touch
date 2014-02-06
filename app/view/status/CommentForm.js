Ext.define('Mobi.view.status.CommentForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.commentform',
    requires: ['Ext.field.TextArea'],
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Beri Komentar',
                items: [
                    {
                        xtype: 'textareafield',
                        placeHolder: 'Tulis Komentar',
                        name: 'comment',
                        clearIcon: false,
                        required: 'true'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 1,
                        itemId: 'commentSubmitButton',
                        ui: 'confirm',
                        padding: 10,
                        margin: '5',
                        text: 'Komentari!'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: '#commentSubmitButton',
                event: 'tap',
                fn: 'onCommentSubmitButtonTap'
            }
        ]
    },
    onCommentSubmitButtonTap: function(){
        var me = this;
        this.fireEvent('commentSubmit', me);
        this.reset();
    }
});