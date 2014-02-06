Ext.define('Mobi.view.chat.FriendList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.friendlist',
    config: {
        store: {
            xtype: 'friendssearch'
        },
        itemTpl: "{username}",
        emptyText: 'Tidak ditemukan'
    }
});