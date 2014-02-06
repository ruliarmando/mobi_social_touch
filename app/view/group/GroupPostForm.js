Ext.define('Mobi.view.group.GroupPostForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.grouppostform',
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
                title: 'Kirim Sesuatu',
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
                placeHolder: '',
                name: 'content',
                clearIcon: false,
                required: 'true'
            },
            {
                xtype: 'button',
                itemId: 'postSubmitButton',
                ui: 'confirm',
                width: '95%',
                padding: 10,
                margin: '10 auto',
                text: 'Kirim!'
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
        this.reset();
        this.hide();
    },
    onPostSubmitButtonTap: function(){
        var me = this;
        this.fireEvent('postSubmit', me);
        this.reset();
    }
});