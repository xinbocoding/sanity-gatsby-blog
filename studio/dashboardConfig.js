export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2f6e5e83a12aa6532e771d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-exqjtr8s',
                  apiId: '435100e9-4b4e-44df-bdbf-613970bdfa90'
                },
                {
                  buildHookId: '5e2f6e5e666cd7e6e369f042',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8v13zxtn',
                  apiId: 'ed8e904c-d1cc-4f45-bc6e-09d6a521eb4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xinbocoding/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8v13zxtn.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
