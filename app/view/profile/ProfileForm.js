Ext.define('Mobi.view.profile.ProfileForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.profileform',
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Profil Pengguna',
                itemId: 'profileFieldSet',
                defaults: {
                    labelAlign: 'top',
                    xtype: 'textfield',
                    readOnly: true,
                    required: true
                },
                items: [
                    {
                        label: 'Level',
                        name: 'level'
                    },
                    {
                        label: 'Nama',
                        name: 'name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Tanggal Lahir',
                        name: 'birth_date'
                    },
                    {
                        label: 'Kota',
                        name: 'city'
                    },
                    {
                        label: 'Nis/Nip',
                        name: 'nis'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Bio',
                        name: 'bio'
                    },
                    {
                        itemId: 'avatar',
                        xtype: 'hiddenfield',
                        name: 'avatar'
                    }
                ]
            }
        ]
    }
});