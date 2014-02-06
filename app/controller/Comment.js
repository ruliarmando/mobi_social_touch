Ext.define('Mobi.controller.Comment', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            statusDetail: 'statusdetail',
            commentButton: '#commentButton',
            commentForm: 'commentform',
            commentList: 'commentlist',
            homePanel: 'homepanel'
        },
        control: {
            commentButton: {
                tap: 'onCommentButtonTap'
            },
            commentForm: {
                commentSubmit: 'onCommentSubmit'
            }
        }
    },
    onCommentButtonTap: function(){
        if(!this.commentForm){
            this.commentForm = Ext.create('Mobi.view.status.CommentForm');
        }
        
        this.getHomePanel().push(this.commentForm);
    },
    onCommentSubmit: function(form){
        var me = this, commentContent = form.getValues()['comment'], commentList = this.getCommentList();
        
        if(commentContent === ''){
            Ext.Msg.alert('Peringatan', 'Komentar belum diisi', Ext.emptyFn);
            return;
        }
        
        form.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
        
        Ext.Ajax.request({
            url: Mobi.app.baseUrl+'/postComment/' + this.getStatusDetail().getStatusId(),
            method: 'post',
            params: form.getValues(),
            success: function(response){
                var resp = Ext.JSON.decode(response.responseText);
                
                if(resp.success === 'true'){
                    Ext.getStore('comments').load();
                    form.setMasked(false);
                    me.getHomePanel().pop(form);
                }else{
                    Ext.Msg.alert('Error', 'Error saat mengirim comment, silahkan coba lagi', Ext.emptyFn);
                }
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Server Error', Ext.emptyFn);
            }
        });
    }
});