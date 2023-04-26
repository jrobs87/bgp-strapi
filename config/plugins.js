module.exports = {
    // 'previews': {
    //     enabled: true,
    //     resolve: './src/plugins/previews'
    // },
    "content-versioning": {
        enabled: true,
    },
    'preview-button': {
        config: {
            contentTypes: [
                //   {
                //     uid: 'api::home.home',
                //     published: {
                //       url: 'http://localhost:3000',
                //     },
                //   },
                {
                    uid: 'api::pages.pages',
                    draft: {
                        url: 'http://127.0.0.1:8787/demo/{slug}/preview',
                        //   query: {
                        //     type: 'collection',
                        //     id: '{id}',
                        //   },
                    },
                    published: {
                        url: 'http://127.0.0.1:8787/demo/{slug}',
                    },
                },
            ],
        },
    },
    // 'previewer': {
    //     enabled: false,
    //     resolve: './src/plugins/previewer'
    //   },
    // 'preview-products': {
    //     enabled: true,
    //     resolve: './src/plugins/preview-products'
    // },
    'preview': {
        enabled: true,
        resolve: './src/plugins/preview'
      },
};