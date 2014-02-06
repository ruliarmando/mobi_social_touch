Ext.define('Mobi.view.search.InfokomSearchList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.infokomsearchlist',
    config: {
        store: {
            xtype: 'infokomsearch'
        },
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="run">',
            '    <img src="http://localhost/mobi_social_web/images/{[this.fileIcon(values.file)]}" height="50" width="50" />',
            '    <div class="info">',
            '        <b>{username}</b> &nbsp; mengupload file: <br/><br />  {description}',
            '    </div>',
            '    <div class="time">{[this.timeAgoInWords(values.time)]}</div>',
            '</div>',
            {
                timeAgoInWords: Mobi.app.timeAgo,
                fileIcon: function(filename){
                    var t = filename.split('.');
                    if(t[t.length-1] === 'pdf'){
                        return 'pdf.png';
                    }else if(t[t.length-1] === 'doc' || t[t.length-1] === 'docx'){
                        return 'word.jpg';
                    }else if(t[t.length-1] === 'jpg'){
                        return 'jpg.jpg';
                    }else{
                        return 'png.png';
                    }
                }
            }
        ),
        emptyText: 'Tidak ditemukan'
    }
});