const { readdirSync } = require('fs');

module.exports = {
  title: 'collect.js',
  description: 'Convenient and dependency free wrapper for working with arrays and objects.',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/png',
      href: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/gem-stone_1f48e.png',
    }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation.md' },
      { text: 'Usage', link: '/usage.md' },
      { text: 'API', link: '/api.md' },
      { text: 'GitHub', link: 'https://github.com/ecrmnn/collect.js' },
    ],
    sidebar: [{
      title: 'Get started',
      collapsable: false,
      children: [
        'installation',
        'usage',
      ],
    }, {
      title: 'API',
      collapsable: false,
      children: readdirSync('docs/api', 'utf-8').map(file => `/api/${file}`),
    }],
  },
};
