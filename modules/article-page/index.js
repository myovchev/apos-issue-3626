// modules/article-page/index.js
module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Blog page',
    piecesFilters: [
      { name: '_tags' }
    ]
  }
};
