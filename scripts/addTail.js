const fs = require('fs');

hexo.extend.filter.register('before_post_render', function(data){
    // if(data.copyright == false) return data;

    // Add seperate line
    data.content += '\n___\n';

    // Try to read tail.md
    try {
        let file_content = fs.readFileSync('static/tail.md');
        if(file_content && data.content.length > 50)
        {
            data.content += file_content;
        }
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;

        // No process for ENOENT error
    }

    return data;
});
