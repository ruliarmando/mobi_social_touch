Ext.define('Mobi.controller.Search', {
    extend: 'Ext.app.Controller',
    config: {
        timer: null,
        refs: {
            peopleSearchForm: 'searchpanel searchtabpanel peoplesearchpanel peoplesearchform #peopleSearchField',
            groupSearchForm: 'searchpanel searchtabpanel groupsearchpanel groupsearchform #groupSearchField',
            infokomSearchForm: 'searchpanel searchtabpanel infokomsearchpanel infokomsearchform #infokomSearchField',
            materiSearchForm: 'searchpanel searchtabpanel materisearchpanel materisearchform #materiSearchField',
        },
        control: {
            peopleSearchForm: {
                keyup: 'onPeopleSearchKeyUp',
                clearicontap: 'onClearSearch',
            },
            groupSearchForm: {
                keyup: 'onGroupSearchKeyUp',
                clearicontap: 'onClearSearch',
            },
            infokomSearchForm: {
                keyup: 'onInfokomSearchKeyUp',
                clearicontap: 'onClearSearch',
            },
            materiSearchForm: {
                keyup: 'onMateriSearchKeyUp',
                clearicontap: 'onClearSearch',
            }
        }
    },
    onPeopleSearchKeyUp: function(searchField){
        var queryString = searchField.getValue();
        
        var peopleStore = Ext.getStore('peoplesearch');
        
        clearTimeout(this.timer); // debounce
        this.timer = setTimeout(function(){
            peopleStore.getProxy().setUrl(Mobi.app.baseUrlNoService+'/peopleSearch/'+queryString);
            peopleStore.load();
        }, 300);
    },
    onGroupSearchKeyUp: function(searchField){
        var queryString = searchField.getValue();
        
        var groupStore = Ext.getStore('groupsearch');
        
        clearTimeout(this.timer); // debounce
        this.timer = setTimeout(function(){
            groupStore.getProxy().setUrl(Mobi.app.baseUrlNoService+'/groupSearch/'+queryString);
            groupStore.load();
        }, 300);
    },
    onInfokomSearchKeyUp: function(searchField){
        var queryString = searchField.getValue();
        
        var infokomStore = Ext.getStore('infokomsearch');
        
        clearTimeout(this.timer); // debounce
        this.timer = setTimeout(function(){
            infokomStore.getProxy().setUrl(Mobi.app.baseUrlNoService+'/infokomSearch/'+queryString);
            infokomStore.load();
        }, 300);
    },
    onMateriSearchKeyUp: function(searchField){
        var queryString = searchField.getValue();
        
        var materiStore = Ext.getStore('materisearch');
        
        clearTimeout(this.timer); // debounce
        this.timer = setTimeout(function(){
            materiStore.getProxy().setUrl(Mobi.app.baseUrlNoService+'/materiSearch/'+queryString);
            materiStore.load();
        }, 300);
    },
    onClearSearch: function(){
        Ext.getStore('peoplesearch').removeAll();
        Ext.getStore('groupsearch').removeAll();
        Ext.getStore('infokomsearch').removeAll();
        Ext.getStore('materisearch').removeAll();
    }
});