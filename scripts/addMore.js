hexo.extend.filter.register('before_post_render', function (data){

    // const content = data.content;
    // const MAX_WORDS_COUNT = 500;
    // const MAX_WORDS_LINK = 20;

    // if (content.length > (MAX_WORDS_COUNT + 25)) {
    //     // Words Count Handler
    //     let preContent = content.slice(0, MAX_WORDS_COUNT);
    //     let nextContent = content.slice(MAX_WORDS_COUNT);
    //     let preContentArr;
    //     let strArr = [ ];

    //     // Link Handler
    //     preContentArr = preContent.split(/\n/);
    //     if (preContentArr.length >= MAX_WORDS_LINK) {
    //         const strArr = [ ];
    //         for (let i = 0; i < MAX_WORDS_LINK; i++) {
    //             strArr.push(preContentArr[i]);
    //         }
    //         preContent = strArr.join("\n");
    //     }

    //     // CodeBlock Handler
    //     const codezoonStart = preContent.split("<figure ");
    //     const codezoonEnd = preContent.split("</figure>");
    //     if (codezoonStart.length !== codezoonEnd.length) {
    //         strArr = [ ];
    //         for (let i = 0; i < codezoonStart.length - 2; i++) {
    //             strArr.push(codezoonStart[i]);
    //         }
    //         preContent = strArr.join("<figure ");
    //     }

    //     // CodeBlock Handler
    //     preContentArr = preContent.split("`");
    //     if (((preContentArr.length - 1) / 2) !== ~~((preContentArr.length - 1) / 2)) {
    //         const poi = preContent.lastIndexOf("`");
    //         preContent = preContent.slice(0, poi);
    //     }

    //     nextContent = content.slice(preContent.length);
    //     data.content = `${preContent}<!-- more -->${nextContent}`;
    // }

    return data;
});
