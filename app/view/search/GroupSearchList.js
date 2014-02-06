Ext.define('Mobi.view.search.GroupSearchList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.groupsearchlist',
    config: {
        store: {
            xtype: 'groupsearch'
        },
        itemTpl: "{name}",
        emptyText: 'Tidak ditemukan'
    }
});