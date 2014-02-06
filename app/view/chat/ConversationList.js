Ext.define('Mobi.view.chat.ConversationList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.conversationlist',
    config: {
        itemHeight: 75,
        striped: true,
        emptyText: 'Tidak ada Percakapan',
        loadingText: 'Loading...',
        store: {
            xtype: 'conversations'
        },
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: 'Muat Lebih Banyak..'
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: 'Tarik kebawah untuk me-refresh',
                releaseRefreshText: 'Lepaskan...'
            }
        ],
        itemTpl: Ext.create('Ext.XTemplate', 
             '<div class="run">',
            '    <img src="http://localhost/mobi_social_web/images/{avatar}" height="50" width="50" />',
            '    <div class="info">',
            '        <b>{username}</b> &nbsp; {last_reply_content}',
            '    </div>',
            '    <div class="time">{[this.timeAgoInWords(values.last_reply_time)]}</div>',
            '</div>',
            {
                timeAgoInWords: Mobi.app.timeAgo
            }
        )
    }
});