Ext.define('Mobi.view.status.StatusList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.statuslist',
    config: {
        itemHeight: 75,
        striped: true,
        emptyText: 'Tidak ada Status',
        loadingText: 'Loading...',
        store: {
            xtype: 'statuses'
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
            '        <b>{username}</b> &nbsp; {content}',
            '    </div>',
            '    <div class="time">{[this.timeAgoInWords(values.timestamp)]}</div>',
            '</div>',
            {
                timeAgoInWords: Mobi.app.timeAgo
            }
        )
    }
});