Ext.define('Mobi.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginForm: 'loginform',
            profileForm: 'profileform',
            homePanel: 'homepanel',
            menuTabPanel: 'menutabpanel',
            mainTabPanel : 'maintabpanel'
        },
        control: {
            loginForm: {
                signInCommand: 'onSignInCommand'
            },
            homePanel: {
                signOffCommand: 'onSignOffCommand'
            }
        }
    },
    sessionToken: null,
    onSignInCommand: function(form){
        var me = this, formValues = form.getValues(), valid = true;
        
        Ext.Object.each(formValues, function(key, value){
            if(value.length === 0){
                valid = false;
            }
        });
        
        if(!valid){
            form.showSignInFailedMessage('Masukkan Username dan Password.');
            return;
        }
        
        form.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/login',
            method: 'post',
            params: formValues,
            success: function(response){
                var loginResponse = Ext.JSON.decode(response.responseText);
                
                if(loginResponse.success === 'true'){
                    localStorage.setItem('user_id', loginResponse.user_id);
                    //me.sessionToken = loginResponse.sessionToken;
                    me.setProfile();
                    me.signInSuccess();
                }else{
                    me.signInFailure(loginResponse.message);
                }
            },
            failure: function(){
                me.sessionToken = null;
                me.signInFailure();
            }
        });
        
    },
    signInSuccess: function(){
        var loginForm = this.getLoginForm();
        var menuTabPanel = this.getMenuTabPanel();
        loginForm.setMasked(false);
        
        Ext.getStore('statuses').load();
        Ext.Viewport.animateActiveItem(menuTabPanel, { type: 'slide', direction: 'left' });
    },
    signInFailure: function(message){
        var loginForm = this.getLoginForm();
        loginForm.showSignInFailedMessage(message);
        loginForm.setMasked(false);
    },
    onSignOffCommand: function(){
        var me = this;
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/logout',
            method: 'get',
            success: function(){
                localStorage.removeItem('user_id');
                Ext.getStore('statuses').removeAll();
                Ext.getStore('statuses').sync();
                Ext.Viewport.animateActiveItem(this.getMainTabPanel(), { type: 'slide', direction: 'right' });
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    setProfile: function(){
        var profileForm = this.getProfileForm();
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/profile/' + localStorage.getItem('user_id'),
            method: 'get',
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                var profile = response.profile;
                var level = '';
                if(profile.level == '3'){
                    level = 'Siswa';
                }else if(profile.level == '2'){
                    level = 'Guru';
                }else{
                    level = 'Admin';
                }
                profileForm.setValues({
                    name: profile.name,
                    username: profile.username,
                    email: profile.email,
                    birth_date: new Date(profile.birth_date),
                    avatar: profile.avatar,
                    city: profile.city,
                    school: profile.school,
                    nis: profile.identity_num,
                    bio: profile.bio,
                    level: level
                });
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    }
});