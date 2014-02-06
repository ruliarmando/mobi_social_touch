Ext.define('Mobi.view.infokom.InfokomDetail', {
    extend: 'Ext.Container',
    alias: 'widget.infokomdetail',
    requires: [
        'Mobi.view.infokom.InfokomCommentList', 
        //'Mobi.view.infokom.InfokomCommentForm'
    ],
    config: {
        infokomId: 0, // custom config
        layout: {
            type: 'vbox'
        },
        items: [
            {
                docked: 'top',
                itemId: 'infokomPanel',
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
                xtype: 'infokomcommentlist',
                flex: 4
            }
        ]
    }
});