Ext.define('Mobi.view.chat.FriendListPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.friendlistpanel',
    config: {
        layout: {
            type: 'fit'
        },
        left: 0,
        top: 0,
        hideOnMaskTap: true,
        width: 300,
        height: "50%",
        items: [
            {
                xtype: 'friendlist',
            }
        ]
    }
});