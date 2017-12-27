hexo.extend.filter.register('before_post_render', function (data){

    const content = data.content;

    const REG = /npm:((?:@?[a-z\d_-]+\/)?[a-z\d._-]+)/;
    if (REG.test(content)) {
        data.content = content.replace(new RegExp(REG, "g"), (words) => {
            const {
                1: packageName
            } = words.match(REG);
            const url = `https://www.npmjs.com/package/${packageName}`;
            const title = `"Node Library: ${packageName}"`;
            return `[${packageName}](${url} ${title})`;
        });
    }

    return data;
});
