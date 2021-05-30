export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b38ddf2cd90dc0a31dbe7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rpqqx2iw',
                  apiId: '9f1f81bd-4dab-41c3-825e-a8df6b5ec5ec'
                },
                {
                  buildHookId: '60b38ddeefb68eb1405bf9ed',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cyzygadj',
                  apiId: '42733c72-0721-49c4-9dd0-da2291e79d65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcosmss/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cyzygadj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
