export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            // 配置
            antd: true
        }]
    ],
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                {path: '/', component: './Helloworld'}
            ]
        }
    ]
}
