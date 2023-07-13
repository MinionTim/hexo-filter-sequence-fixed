# hexo-filter-sequence-fixed

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/MinionTim/hexo-filter-sequence-fixed/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-sequence-fixed.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-sequence-fixed)
[![Package Quality](https://npm.packagequality.com/shield/hexo-filter-sequence-fixed.svg)](https://packagequality.com/#?package=hexo-filter-sequence-fixed)

> Generate UML sequence diagrams for Hexo.<br>
>origin project[hexo-filter-sequence](https://github.com/bubkoo/hexo-filter-sequence)is not maintained。Fork to rebuid.
## Install

```
npm install --save hexo-filter-sequence-fixed
```

## Changelog
- 2023/07/13 feature: support svg scale. 
- 2023/07/11 bugfix 
  > 1、plugin not works on hexo；<br>
  > 2、update sequence-diagram-min.js version to 2.0.x to fix in [isses](https://github.com/bramp/js-sequence-diagrams/issues/15js-sequence-diagrams)

## Usage

This plugin is based on [js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams), so you can defined the chart as follow:  
([js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams) v1.x is not supported now. Please use 2.x instead.)

    ```sequence
    Alice->Bob: Hello Bob, how are you?
    Note right of Bob: Bob thinks
    Bob-->Alice: I am good thanks!
    ```

![snapshot.svg](https://cdn.rawgit.com/MinionTim/hexo-filter-sequence-fixed/master/snapshot.svg)

## Config
   
In your site's `_config.yml`:

```yaml
sequence:
  # webfont:     # optional, the source url of webfontloader.js
  # snap:        # optional, the source url of snap.svg.js
  # underscore:  # optional, the source url of underscore.js
  # sequence:    # optional, the source url of sequence-diagram.js
  # css: # optional, the url for css, such as hand drawn theme 
  options: 
    theme: 
    css_class: 
```
   
Your config will be merged into default config:

```json
{
  "webfont": "https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.27/webfontloader.js",
  "snap": "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js",
  "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
  "sequence": "http://npm.elemecdn.com/@rokt33r/js-sequence-diagrams@2.0.6-2/dist/sequence-diagram-min.js",
  "style": "",
  "options": {
    "theme": "simple",
    "css_class": ""
  }
}
```   
`Recommend:` Define your svg style, such as align center:
```css
/* NOTE: add to your css files */

/* style for svg container tag, e.g. <div/> */
.sequence-container {
  text-align: center;
  overflow: auto;
}

/* style for svg tag */
.sequence {
  overflow: hidden; 
  position: relative; 
  max-width: 100%; 
  height: auto;
}
```

## Related

- [hexo-toc](https://github.com/bubkoo/hexo-toc) Insert a markdown TOC before posts be rendered.
- [hexo-filter-fenced-code](https://github.com/bubkoo/hexo-filter-fenced-code) Extend syntax for the native fenced code block.
- [hexo-filter-flowchart](https://github.com/bubkoo/hexo-filter-flowchart) Generate flowchart diagrams for Hexo.
- [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
- [hexo-filter-sup](https://github.com/bubkoo/hexo-filter-sup) Generate superscript (`<sup>`) tag for Hexo.
- [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-filter-sequence/issues/new).
