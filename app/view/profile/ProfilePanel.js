Ext.define('Mobi.view.profile.ProfilePanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.profilepanel',
    requires: [
        'Mobi.view.profile.ProfileForm', 'Mobi.view.profile.AvatarPanel'
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    itemId: 'avatarButton',
                    iconCls: 'photos',
                    align: 'left'
                },
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    itemId: 'editProfileButton',
                    text: 'Edit',
                    align: 'right'
                },
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    itemId: 'saveProfileButton',
                    iconCls: 'check2',
                    ui: 'confirm',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    cls: 'fbButton',
                    itemId: 'cancelEditButton',
                    iconCls: 'delete',
                    ui: 'decline',
                    align: 'right',
                    hidden: true
                }
            ]
        },
        items: [
            {
                title: 'Profil',
                xtype: 'profileform'
            }
        ],
        listeners: [
            {
                delegate: '#editProfileButton',
                event: 'tap',
                fn: 'onEditButtonTap'
            },
            {
                delegate: '#cancelEditButton',
                event: 'tap',
                fn: 'onCancelEditButtonTap'
            },
            {
                delegate: '#saveProfileButton',
                event: 'tap',
                fn: 'onSaveButtonTap'
            },
            {
                delegate: '#avatarButton',
                event: 'tap',
                fn: 'onAvatarButtonTap'
            },
            {
                delegate: '#uploadAvatarButton',
                event: 'tap',
                fn: 'onUploadAvatarButtonTap'
            }
        ]
    },
    onEditButtonTap: function(){
        this.fireEvent('editProfile');
    },
    onSaveButtonTap: function(){
        this.fireEvent('saveProfile');
    },
    onCancelEditButtonTap: function(){
        this.fireEvent('cancelEdit');
    },
    onAvatarButtonTap: function(){
        this.fireEvent('showAvatar');
    },
    onUploadAvatarButtonTap: function(){
        this.fireEvent('showAvatarForm');
    }
});