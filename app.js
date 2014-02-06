Ext.Loader.setPath({
    'Ext.ux': 'ux'
});

Ext.application({
    name: 'Mobi',
    requires: ['Ext.ux.Fileup'],
    controllers: [
        'Login',
        'Register',
        'Status',
        'Comment',
        'Profile',
        'MenuTab',
        'Group',
        'Chat',
        'Search',
        'Materi',
        'Infokom'
    ],
    models: [
        'Status', 
        'Comment',
        'Infokom',
        'Materi',
        'Group',
        'GroupPost',
        'Message',
        'Conversation',
        'Friend'
    ],
    stores: [
        'Statuses', 
        'Comments', 
        'Groups', 
        'GroupPosts', 
        'Conversations', 
        'Infokoms',
        'Materis',
        'Messages',
        'FriendsSearch',
        'GroupSearch',
        'InfokomSearch',
        'MateriSearch',
        'PeopleSearch'
    ],
    views: [
        'MainTabPanel',
        'MenuTabPanel'
    ],
    startupImage: {
        '320x460': 'resources/images/phone_startup.png'
    },
    launch: function(){
        Ext.Viewport.add([
            { xtype: 'maintabpanel' },
            { xtype: 'menutabpanel' }
        ]);
    },
    baseUrl: 'http://localhost/mobi_social_web/service',
    baseUrlNoService: 'http://localhost/mobi_social_web',
    timeAgo: function(date) {
        var parsed_date = Date.parse(date);

        var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
        var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);

        if(delta < 60) {
           return 'less than a minute ago';
        } else if(delta < 120) {
           return 'about a minute ago';
        } else if(delta < (45*60)) {
           return (parseInt(delta / 60)).toString() + ' minutes ago';
        } else if(delta < (90*60)) {
               return 'about an hour ago';
        } else if(delta < (24*60*60)) {
           return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
        } else if(delta < (48*60*60)) {
           return '1 day ago';
        } else {
           return Ext.Date.format(new Date(date), 'jS M \'y');
        }
    }
});