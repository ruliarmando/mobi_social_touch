Ext.define('Mobi.view.status.StatusDetail', {
    extend: 'Ext.Container',
    alias: 'widget.statusdetail',
    requires: ['Mobi.view.status.CommentList', 'Mobi.view.status.CommentForm'],
    config: {
        statusId: 0, // custom config
        layout: {
            type: 'vbox'
        },
        items: [
            {
                docked: 'top',
                itemId: 'statusPanel',
                //styleHtmlContent: true,
                tpl: Ext.create('Ext.XTemplate',
                    "<div class='statusContainer'>",
                    "   <img src='http://localhost/mobi_social_web/images/{avatar}' height='50' width='50' />",
                    "   <div class='name'><strong>{username}</strong></div>",
                    "   <p>{content}</p>",
                    "   <div class='stime'>{[this.timeAgoInWords(values.timestamp)]}</div>",
                    "</div>",
                    {
                        timeAgoInWords: Mobi.app.timeAgo
                    }
                )
            },
            {
                xtype: 'commentlist',
                flex: 4
            }
        ]
    }
});