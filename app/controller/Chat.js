Ext.define('Mobi.controller.Chat', {
    extend: 'Ext.app.Controller',
    config: {
        conversationId: 0,
        timer: null,
        refs: {
            convList: 'conversationlist',
            chatPanel: 'chatpanel',
            messageList: 'messagelist',
            newChatForm: 'newchatform',
            chatForm: 'chatform',
            newMessageButton: 'chatpanel #newMessageButton',
            messageButton: 'chatpanel #messageButton',
            chatSendButton: 'chatpanel #chatSendButton',
            toTextField: 'newchatform #toTextField',
            userIdHidden: 'newchatform #userIdHidden',
            friendListPanel: 'friendlistpanel',
            friendList: 'friendlist'
        },
        control: {
            convList: {
                itemsingletap: 'onConversationSelect'
            },
            chatPanel: {
                pop: 'onPop',
                push: 'onPush'
            },
            newMessageButton: {
                tap: 'onNewMessage'
            },
            messageButton: {
                tap: 'onMessage'
            },
            newChatForm: {
                newChatSend: 'onNewMessageSend'
            },
            chatForm: {
                chatSend: 'onMessageSend'
            },
            toTextField: {
                clearicontap: 'onClearSearch',
                keyup: 'onSearchKeyUp'
            },
            friendList: {
                itemtap: 'onSelectRow'
            }
        }
    },
    onPop: function(view, item){
        if(item.xtype == "newchatform"){
            this.getNewMessageButton().show();
        }else{
            Ext.getStore('messages').removeAll();
            this.getMessageButton().hide();
            this.getNewMessageButton().show();
        }
    },
    onPush: function(view, item){
        if(item.xtype == "newchatform"){
            this.getNewMessageButton().hide();
            this.getMessageButton().hide();
        }else{
            this.getMessageButton().show();
            this.getNewMessageButton().hide();
        }
    },
    onConversationSelect: function(list, index, target, record){
        var convId = record.get('conv_id'), me = this;
        
        if(!this.messageList){
            this.messageList = Ext.create('Mobi.view.chat.MessageList');
        }
        
        var messageStore = Ext.getStore('messages');
        messageStore.getProxy().setUrl(Mobi.app.baseUrl + '/message/' + convId);
        messageStore.load();
        
        this.conversationId = convId;
        this.getChatPanel().push(this.messageList);
        
        setTimeout(function(){
            me.messageList.scrollToRecord(messageStore.last());
        }, 300);
    },
    onNewMessage: function(){
        if(!this.newChatForm){
            this.newChatForm = Ext.create('Mobi.view.chat.NewChatForm');
        }
        
        this.getChatPanel().push(this.newChatForm);
    },
    onMessage: function(){
        if(!this.chatForm){
            this.chatForm = Ext.create('Mobi.view.chat.ChatForm');
            Ext.Viewport.add(this.chatForm);
        }
        
        this.chatForm.show();
    },
    onNewMessageSend: function(form){
        var me = this, messageContent = form.getValues()['content'], convList = this.getConvList();
        
        if(messageContent === ''){
            Ext.Msg.alert('Peringatan', 'Pesan belum diisi', Ext.emptyFn);
            return;
        }
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl + '/sendNewMessage',
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    Ext.getStore('conversations').load();
                    me.getChatPanel().pop(form);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim pesan, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onMessageSend: function(form){
        var me = this, messageContent = form.getValues()['content'], messageList = this.getMessageList();
        
        if(messageContent === ''){
            Ext.Msg.alert('Peringatan', 'Pesan belum diisi', Ext.emptyFn);
            return;
        }
        
        form.hide();
        
        messageList.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/sendMessage',
            method: 'post',
            params: {
                content: messageContent,
                conv_id: me.conversationId
            },
            success: function(response){
                var response = Ext.JSON.decode(response.responseText);
                
                if(response.success === 'true'){
                    Ext.getStore('messages').load();
                    messageList.setMasked(false);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim pesan, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(response){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    },
    onSearchKeyUp: function(searchField){
        var queryString = searchField.getValue();
    
        if(!this.friendListPanel){
            this.friendListPanel = Ext.create('Mobi.view.chat.FriendListPanel');
            Ext.Viewport.add(this.friendListPanel);
        }
        
        this.friendListPanel.showBy(searchField, 'tr-br?');
        
        var friendStore = Ext.getStore('friendssearch');
        
        clearTimeout(this.timer); // debounce
        this.timer = setTimeout(function(){
            friendStore.getProxy().setUrl(Mobi.app.baseUrlNoService+'/friendSearch/'+queryString);
            friendStore.load();
        }, 300);
    },
    onClearSearch: function(){
        Ext.getStore('friendssearch').removeAll();
        this.friendListPanel.hide();
    },
    onSelectRow: function(view, index, target, record, event){
        this.getToTextField().setValue(record.get('username'));
        this.getUserIdHidden().setValue(record.get('id'));
        this.onClearSearch();
    }
});