hexo.extend.filter.register('before_post_render', function (data){

    const content = data.content;

    if (/npm:((?:@?[a-z\d_-]+\/)?[a-z\d_-]+)/i.test(content)) {
        data.content =
            content.replace(/npm:((?:@?[a-z\d_-]+\/)?[a-z\d_-]+)/ig,
                (words) => {
                    const {
                        1: packageName
                    } = words.match(/npm:((?:@?[a-z\d_-]+\/)?[a-z\d_-]+)/i);
                    const url = `https://www.npmjs.com/package/${packageName}`;
                    const title = `Node Library: ${packageName}`;
                    return `[${packageName}](${url} ${title})`;
            });
    }

    return data;
});
