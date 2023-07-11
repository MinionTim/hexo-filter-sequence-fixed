var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.sequence = assign({
  webfont: 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.27/webfontloader.js',
  // sequence-diagram 1.x 版本依赖 raphael, 2.x版本依赖 snap
  raphael: 'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js',
  snap: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js',
  underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
  // v1.0.6 has bug. e.g. https://github.com/bramp/js-sequence-diagrams/issues/15js-sequence-diagrams，use v2.x
  sequence: 'https://cdn.jsdelivr.net/npm/@rokt33r/js-sequence-diagrams@2.0.6-2/dist/sequence-diagram-min.js',
  css: '',
  options: {
    theme: 'simple'
  }
}, hexo.config.sequence);

hexo.extend.filter.register('before_post_render', renderer.render, 9);