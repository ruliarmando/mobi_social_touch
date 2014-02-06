Ext.define('Mobi.view.search.SearchPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.searchpanel',
    requires: [
        'Mobi.view.search.SearchTabPanel',
        'Mobi.view.search.PeopleSearchPanel',
        'Mobi.view.search.GroupSearchPanel',
        'Mobi.view.search.InfokomSearchPanel',
        'Mobi.view.search.MateriSearchPanel',
        'Mobi.view.search.PeopleSearchForm',
        'Mobi.view.search.PeopleSearchList',
        'Mobi.view.search.MateriSearchForm',
        'Mobi.view.search.MateriSearchList',
        'Mobi.view.search.InfokomSearchForm',
        'Mobi.view.search.InfokomSearchList',
        'Mobi.view.search.GroupSearchForm',
        'Mobi.view.search.GroupSearchList',
    ],
    config: {
        autoDestroy: false,
        navigationBar: {
            items: [
            ]
        },
        items: [
            {
                title: 'Pencarian',
                xtype: 'searchtabpanel'
            }
        ],
        listeners: [
        ]
    }
});