Ext.define('Mobi.controller.Profile', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            profileForm: 'profileform',
            profilePanel: 'profilepanel',
            fileBtn: 'avatarpanel #fileBtn',
            menuTab: 'menutabpanel'
        },
        control: {
            profilePanel: {
                editProfile: 'onEditProfile',
                saveProfile: 'onSaveProfile',
                cancelEdit: 'onCancelEdit',
                showAvatar: 'onShowAvatar',
                pop: 'onPop',
                push: 'onPush'
            },
            fileBtn: {
                success: 'onFileUploadSuccess',
                failure: 'onFileUploadFailure'
            }
        },
        routes: {
            'profile': 'showProfile'
        }
    },
    onPop: function(){
        var panel = this.getProfilePanel();
        
        panel.down('#avatarButton').show();
        panel.down('#editProfileButton').show();
    },
    onPush: function(){
        var panel = this.getProfilePanel();
        
        panel.down('#avatarButton').hide();
        panel.down('#editProfileButton').hide();
    },
    onEditProfile: function(){
        var profileForm = this.getProfileForm(),
            profilePanel = this.getProfilePanel(),
            editButton = profilePanel.down('#editProfileButton'),
            saveButton = profilePanel.down('#saveProfileButton'),
            cancelButton = profilePanel.down('#cancelEditButton'),
            profileFieldSet = profileForm.down('#profileFieldSet'),
            formFields = profileFieldSet.getItems();
            
        sessionStorage.setItem('previous_profile_values', profileForm.getValues());
            
        editButton.hide();
        saveButton.show();
        cancelButton.show();
            
        formFields.each(function(field){
            if(field.setReadOnly){
                field.setReadOnly(false);
            }
        });
    },
    onSaveProfile: function(){
        var me = this,
            profileForm = this.getProfileForm();
        
        profileForm.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/editProfile',
            method: 'post',
            params: profileForm.getValues(),
            success: function(response){
                var res = Ext.JSON.decode(response.responseText);
                
                if(res.success === 'true'){
                    profileForm.setMasked(false);
                    Ext.Msg.alert('Sukses', 'Profil Pengguna telah di edit', Ext.emptyFn);
                    me.onCancelEdit();
                }else{
                    profileForm.setMasked(false);
                    Ext.Msg.alert('Sukses', 'Profil Pengguna gagal di edit', Ext.emptyFn);
                }
            },
            failure: function(response){
                profileForm.setMasked(false);
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onCancelEdit: function(){
        var profileForm = this.getProfileForm(),
            profilePanel = this.getProfilePanel(),
            editButton = profilePanel.down('#editProfileButton'),
            saveButton = profilePanel.down('#saveProfileButton'),
            cancelButton = profilePanel.down('#cancelEditButton'),
            profileFieldSet = profileForm.down('#profileFieldSet'),
            formFields = profileFieldSet.getItems();
            
        editButton.show();
        saveButton.hide();
        cancelButton.hide();
        
        profileForm.setValues(sessionStorage.getItem('previous_profile_values'));
            
        formFields.each(function(field){
            if(field.setReadOnly){
                field.setReadOnly(true);
            }
        });
    },
    onShowAvatar: function(){
        var userAvatar = this.getProfileForm().down('#avatar').getValue();
        if(!this.avatarPanel){
            this.avatarPanel = Ext.create('Mobi.view.profile.AvatarPanel');
        }
        
        this.avatarPanel.down('#avatarImage').setData({avatar: userAvatar});
        
        this.getProfilePanel().push(this.avatarPanel);
    },
    onFileUploadSuccess: function() {
        
        Ext.Msg.alert('Sukses', 'Foto profil telah diganti', Ext.emptyFn);
    },
    onFileUploadFailure: function(message) {
        console.log('Failure');
                
        Ext.Msg.alert('Error', 'Upload Error' ,Ext.emptyFn);
    },
    showProfile: function(){
        console.log('showProfile');
        var navView = this.getMenuTab().getActiveItem();
    }
});