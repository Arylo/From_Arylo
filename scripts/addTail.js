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

    // 添加具体文章链接, 不需要去掉即可
    let permalink = `\n本文链接：${data.permalink}`;
    data.content += permalink;

    return data;
});
