Ext.define('Mobi.view.infokom.NewInfokomForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.newinfokomform',
    requires: [
        'Ext.field.TextArea'
    ],
    config: {
        padding: 5,
        enctype: 'multipart/form-data',
        items: [
            {
                xtype: 'textareafield',
                placeHolder: 'Tulis Sesuatu',
                name: 'description',
                margin: 5,
                clearIcon: false,
                required: 'true'
            },
            {
                xtype: 'filefield',
                placeholder: 'Upload Dokumen',
                name: 'file'
            },
            {
                xtype: 'button',
                itemId: 'newInfokomSubmitButton',
                ui: 'confirm',
                width: '95%',
                padding: 10,
                margin: '10 auto',
                text: 'Bagikan!'
            }
        ],
        listeners: [
            {
                delegate: '#newInfokomSubmitButton',
                event: 'tap',
                fn: 'onNewInfokomSubmitButtonTap'
            }
        ]
    },
    onNewInfokomSubmitButtonTap: function(){
        var me = this;
        this.fireEvent('newInfokomCommand', me);
        this.reset();
    }
});