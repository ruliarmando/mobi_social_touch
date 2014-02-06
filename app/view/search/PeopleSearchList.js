Ext.define('Mobi.view.search.PeopleSearchList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.peoplesearchlist',
    config: {
        store: {
            xtype: 'peoplesearch'
        },
        itemTpl: '{username}',
        emptyText: 'Tidak ditemukan'
    }
});