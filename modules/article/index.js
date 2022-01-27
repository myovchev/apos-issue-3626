const area = require('../../lib/area');

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
  },
  fields: {
    add: {
      _tags: {
        type: 'relationship',
        withType: 'tag',
        label: 'Tags'
      },

      content: {
        type: 'area',
        label: 'Content',
        options: {
          widgets: area
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          '_tags',
          'content'
        ]
      }
    }
  }
};
