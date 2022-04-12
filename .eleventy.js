module.exports = eleventyConfig => {

  eleventyConfig.on('eleventy.before', async ({ dir, runMode, outputMode }) => {
    console.log('eleventyBefore', dir);
  });

  console.log('configCore');

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',

    dir: {
      input: 'sites',
      output: 'public'
    }
  };

};
