Ext.define('Mobi.controller.Group', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            groupList: 'grouplist',
            groupPanel: 'grouppanel',
            createGroupForm:  'creategroupform',
            newGroupButton: '#newGroupButton',
            groupPostForm: 'grouppostform',
            groupPostList: 'grouppostlist',
            newPostButton: '#newPostButton'
        },
        control: {
            groupPanel: {
                showCreateGroupFormCommand: 'onShowCreateGroupForm',
                showCreatePostFormCommand: 'onShowCreatePostForm',
                push: 'onPush',
                pop: 'onPop'
            },
            groupList: {
                itemsingletap: 'onGroupSelect'
            },
            createGroupForm: {
                createGroupCommand: 'onSaveGroup'
            },
            groupPostForm: {
                postSubmit: 'onPostSubmit'
            }
        }
    },
    onPush: function(view, item){
        if(item.xtype == "creategroupform"){
            this.getNewGroupButton().hide();
        }else if(item.xtype == 'grouppostlist'){
            this.getNewGroupButton().hide();
            this.getNewPostButton().show();
        }
    },
    onPop: function(view, item){
        if(item.xtype == "creategroupform"){
            this.getNewGroupButton().show();
        } else if(item.xtype == 'grouppostlist'){
            Ext.getStore('groupposts').removeAll();
            Ext.getStore('groupposts').sync();
            this.getNewGroupButton().show();
            this.getNewPostButton().hide();
        }
    },
    onGroupSelect: function(list, index, target, record){
        var groupId = record.get('id');
        
        if(!this.groupDetail){
            this.groupDetail = Ext.create('Mobi.view.group.GroupPostList');
        }
        
        var groupPostStore = Ext.getStore('groupposts');
        groupPostStore.getProxy().setUrl(Mobi.app.baseUrl+'/groupPostList/'+groupId);
        groupPostStore.load();
        
        this.groupDetail.setGroupId(groupId);
        //this.groupDetail.down('#statusPanel').setData(record.data);
        
        this.getGroupPanel().push(this.groupDetail);
    },
    onShowCreateGroupForm: function(){
        if(!this.createGroupForm){
            this.createGroupForm = Ext.create('Mobi.view.group.CreateGroupForm');
        }
        
        this.getGroupPanel().push(this.createGroupForm);
    },
    onShowCreatePostForm: function(){
        if(!this.createPostForm){
            this.createPostForm = Ext.create('Mobi.view.group.GroupPostForm');
            Ext.Viewport.add(this.createPostForm);
        }
        
        this.createPostForm.show();
    },
    onSaveGroup: function(form){
        var me = this, formValues = form.getValues(), valid = true;
        
        
        form.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/createGroup',
            method: 'post',
            params: formValues,
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    form.setMasked(false);
                    Ext.Msg.alert('Sukses', 'Grup telah berhasil dibuat', Ext.emptyFn);
                    Ext.getStore('groups').load();
                    me.getGroupPanel().pop(form);
                }else{
                    form.setMasked(false);
                    Ext.Msg.alert('Gagal', 'Silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                form.setMasked(false);
                Ext.Msg.alert('Error', 'Server response :' + response.status, Ext.emptyFn);
            }
        });
    },
    onPostSubmit: function(form){
        var me = this, postContent = form.getValues()['content'], groupPostList = this.getGroupPostList();
        var groupId = this.getGroupPostList().getGroupId();
        
        if(postContent === ''){
            Ext.Msg.alert('Peringatan', 'Post belum diisi', Ext.emptyFn);
            return;
        }
        
        form.hide();
        
        groupPostList.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/sendPost/' + groupId,
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    Ext.getStore('groupposts').load();
                    groupPostList.setMasked(false);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim post, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    }
});