Ext.define('Mobi.view.profile.AvatarPanel', {
    extend: 'Ext.Container',
    alias: 'widget.avatarpanel',
    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'panel',
                flex: 1,
                itemId: 'avatarImage',
                margin: '10 auto',
                width: 'auto',
                tpl: Ext.create('Ext.XTemplate',
                    '<img src="http://localhost/mobi_social_web/images/{avatar}" height="200"  />'
                )
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        itemId: 'fileBtn',
                        width: '90%',
                        centered: true,
                        xtype: 'fileupload',
                        autoUpload: false,
                        url:  Mobi.app.baseUrl + '/editPicture'
                    }
                ]
            }
        ]
    }
});