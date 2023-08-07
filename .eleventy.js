const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/bundle.css");
    eleventyConfig.addPassthroughCopy("src/medias");

    eleventyConfig.setBrowserSyncConfig({
		files: './public/bundle.css'
	});

    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true
    };

    eleventyConfig.setLibrary("md", markdownIt(mdOptions));

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};