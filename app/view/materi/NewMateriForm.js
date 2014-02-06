Ext.define('Mobi.view.materi.NewMateriForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.newmateriform',
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
                name: 'content',
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
                itemId: 'newMateriSubmitButton',
                ui: 'confirm',
                width: '95%',
                padding: 10,
                margin: '10 auto',
                text: 'Bagikan!'
            }
        ],
        listeners: [
            {
                delegate: '#newMateriSubmitButton',
                event: 'tap',
                fn: 'onNewMateriSubmitButtonTap'
            }
        ]
    },
    onNewMateriSubmitButtonTap: function(){
        var me = this;
        this.fireEvent('newMateriCommand', me);
        this.reset();
    }
});