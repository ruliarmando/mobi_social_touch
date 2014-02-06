Ext.define('Mobi.view.status.StatusForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.statusform',
    requires: ['Ext.field.TextArea'],
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Buat Status',
                items: [
                    {
                        xtype: 'textareafield',
                        itemId: 'statusText',
                        placeHolder: 'Apa yang kamu pikirkan?',
                        name: 'status',
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
                        itemId: 'statusSubmitButton',
                        ui: 'confirm',
                        margin: '5',
                        text: 'Bagikan!'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: '#statusSubmitButton',
                event: 'tap',
                fn: 'onStatusSubmitButtonTap'
            }
        ]
    },
    onStatusSubmitButtonTap: function(){
        var me = this;
        this.fireEvent('statusSubmit', me);
        this.reset();
    }
});