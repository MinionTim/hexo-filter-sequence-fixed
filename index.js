var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.sequence = assign({
  webfont: 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.27/webfontloader.js',
  snap: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js',
  underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
  // v1.0.6 has bug. e.g. https://github.com/bramp/js-sequence-diagrams/issues/15js-sequence-diagrams，use v2.x
  sequence: 'https://npm.elemecdn.com/@rokt33r/js-sequence-diagrams@2.0.6-2/dist/sequence-diagram-min.js',
  css: '',
  options: {
    theme: 'simple'
  }
}, hexo.config.sequence);

hexo.extend.filter.register('before_post_render', renderer.render, 9);