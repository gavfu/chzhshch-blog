const visit = require('unist-util-visit');

const adsense = (slot) => ({
  type: 'html',
  value: `
    <div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686832782200002" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-5686832782200002"
        data-ad-slot="9479333372">
      </ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>`,
});

const plugin = (options) => {
  const transformer = async (ast, vfile) => {
    // if (!vfile.path.endsWith('stocks/006.md')) {
    //   return;
    // }
    // console.log(`Processing file ${vfile.path}`);

    visit(ast, 'heading', (node, index, parent) => {
      if (parent && parent.children) {
        parent.children.splice(index + 1, 0, adsense("4993301259"));
        return visit.EXIT;
      }
    });
  };
  return transformer;
};

module.exports = plugin;