export default {
    plugins: [
        ['umi-plugin-react', {
            // 配置
            antd: true,
            dva: true
        }]
    ],

    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                { path: '/', component: './puzzlecards' },
                { path: 'puzzlecards', component: './puzzlecards' },
                {
                    path: '/dashboard',
                    routes: [
                        { path: 'analysis', component: 'Dashboard/Analysis' },
                        { path: 'monitor', component: 'Dashboard/Monitor' },
                        { path: 'workplace', component: 'Dashboard/Workplace' }
                    ]
                }
            ]
        }
    ],

    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true
        }
    }
}
