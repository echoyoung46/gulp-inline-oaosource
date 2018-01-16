const { isFilepath } = require('./utils');
const context = require('./context');
const path = require('path');
const parse = require('./parse');
const run = require('./run');

function inlineSource(htmlpath, options = {}, callback) {
  return new Promise(async (resolve, reject) => {
    const ctx = context.create(options);

    // Load html content
    if (isFilepath(htmlpath)) {
      ctx.htmlpath = path.resolve(htmlpath);
      try {
        ctx.html = ctx.fs.readFileSync(ctx.htmlpath, 'utf8');
      } catch (err) {
        return reject(err);
      }
      // Passed file content instead of path
    } else {
      ctx.html = htmlpath;
    }

    try {
      await parse(ctx);
      if (ctx.sources.length > 0) {
        await run(ctx, ctx.sources, ctx.swallowErrors);
      }
    } catch (err) {
      return reject(err);
    }
    resolve(ctx.html);
    callback(false, ctx.html);
  });
};

module.exports = inlineSource;
