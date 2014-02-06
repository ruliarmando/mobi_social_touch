Ext.define('Mobi.view.group.GroupPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.grouppanel',
    requires: [
        'Mobi.view.group.GroupList', 
        'Mobi.view.group.GroupPostList', 
        'Mobi.view.group.CreateGroupForm', 
        'Mobi.view.group.GroupPostForm'
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Buat Grup',
                    itemId: 'newGroupButton',
                    cls: 'fbButton',
                    align: 'right'
                },
                {
                    xtype: 'button',
                    iconCls: 'compose',
                    itemId: 'newPostButton',
                    cls: 'fbButton',
                    align: 'right',
                    hidden: true
                }
            ]
        },
        items: [
            {
                title: 'Grup',
                xtype: 'grouplist',
            }
        ],
        listeners: [
            {
                delegate: '#newGroupButton',
                event: 'tap',
                fn: 'onNewGroupButtonTap'
            },
            {
                delegate: '#newPostButton',
                event: 'tap',
                fn: 'onNewPostButtonTap'
            }
        ]
    },
    initialize: function(){
        this.callParent(arguments);
        this.on('afterTab', 'onAfterActiveTabChange', this);
    },
    onAfterActiveTabChange: function(){
        if(!this.storeLoaded){
            this.storeLoaded = true;
            Ext.getStore('groups').load();
        }
    },
    onNewGroupButtonTap: function(){
        this.fireEvent('showCreateGroupFormCommand');
    },
    onNewPostButtonTap: function(){
        this.fireEvent('showCreatePostFormCommand');
    }
});