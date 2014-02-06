Ext.define('Mobi.view.status.StatusOption', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.statusoption',
    config: {
        items: [
            {
                text: 'Lihat Profil',
                itemId: 'showProfile'
            },
            {
                text: 'Retweet',
                itemId: 'retweetButton'
            },
            {
                text: 'Retweet with Comment',
                itemId: 'retweetCommentButton'
            },
            {
                text: 'Batal',
                ui: 'confirm',
                itemId: 'cancelOption'
            }
        ],
        listeners: [
            {
                delegate: '#cancelOption',
                event: 'tap',
                fn: 'onCancel'
            },
            {
                delegate: '#showProfile',
                event: 'tap',
                fn: 'onShowProfile'
            }
        ]
    },
    onCancel: function(){
        this.hide();
    },
    onShowProfile: function(){
        Mobi.app.redirectTo('profile');
    }
});