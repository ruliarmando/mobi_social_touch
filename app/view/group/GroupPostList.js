Ext.define('Mobi.view.group.GroupPostList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.grouppostlist',
    config: {
        groupId: 0,
        itemHeight: 75,
        emptyText: 'Tidak ada post di group ini',
        loadingText: 'Loading...',
        store: {
            xtype: 'groupposts'
        },
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: 'Muat Lebih Banyak..'
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