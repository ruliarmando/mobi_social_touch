Ext.define('Mobi.view.group.GroupList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.grouplist',
    config: {
        emptyText: 'Anda belum membuat atau memasuki suatu grup',
        loadingText: 'Loading...',
        store: {
            xtype: 'groups'
        },
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: 'Muat Lebih Banyak..'
            }
        ],
        itemTpl: '<div>{name}</div>'
    }
});