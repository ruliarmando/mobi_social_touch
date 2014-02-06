Ext.define('Mobi.view.status.CommentList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.commentlist',
    config: {
        itemHeight: 75,
        ui: 'round',
        emptyText: 'Tidak ada Komentar',
        loadingText: 'Loading...',
        disableSelection: true,
        store: {
            xtype: 'comments'
        },
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: 'Lihat Komentar Sebelumnya..'
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
            '        <b>{username}</b> &nbsp; {content}',
            '    </div>',
            '    <div class="time">{[this.timeAgoInWords(values.time)]}</div>',
            '</div>',
            {
                timeAgoInWords: Mobi.app.timeAgo
            }
        )
    }
});