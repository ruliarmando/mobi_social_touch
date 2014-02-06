Ext.define('Mobi.view.group.CreateGroupForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.creategroupform',
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Buat Grup Baru',
                defaults: {
                    xtype: 'textfield',
                    required: true
                },
                items: [
                    {
                        placeHolder: 'Nama Grup',
                        name: 'name'
                    },
                    {
                        placeHolder: 'Deskripsi Grup',
                        name: 'desc'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'createGroupBtn',
                ui: 'action',
                padding: '10',
                text: 'Simpan',
                width: '90%',
                margin: 'auto'
            }
        ],
        listeners: [
            {
                delegate: '#createGroupBtn',
                event: 'tap',
                fn: 'onCreateGroup'
            }
        ]
    },
    onCreateGroup: function(){
        var me = this;
            
        var task = Ext.create('Ext.util.DelayedTask', function(){
            me.fireEvent('createGroupCommand', me);
            me.reset();
        });
        
        task.delay(500);
    }
});