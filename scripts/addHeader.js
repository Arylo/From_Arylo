hexo.extend.filter.register('before_post_render', function (data){

//     const content = data.content;
//     let header = "";

//     // 添加具体文章链接, 不需要去掉即可
//     const permalink = `> 本文链接：${data.permalink}`;
//     header += `${permalink}\n`;

//     if (content.length >= 1000) {
//         const second = Math.ceil(content.length / 20);
//         let readtime = `> 大概需要阅读时间: `
//         if (second >= 60) {
//             readtime += `${~~Math.ceil(second / 60)}分钟`;
//         } else {
//             readtime += `${second}秒`;
//         }
//         header += `${readtime}\n`;
//     }

//     data.content = `${header}\n---\n${content}`;
    return data;
});
