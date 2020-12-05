import * as singleSpa from 'single-spa'; //导入single-spa
/*
* runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
* */
const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};
singleSpa.registerApplication( //注册微前端服务
    'VueApp', 
    async () => {
        await runScript('http://127.0.0.1:4001/js/chunk-vendors.js');
        await runScript('http://127.0.0.1:4001/js/app.js');
        return window.singleVue;
    },
    location => location.pathname.startsWith('/vue') // 配置微前端模块前缀
);
singleSpa.registerApplication(
    'reactApp',
    async () => {
        await runScript('http://127.0.0.1:3003/static/js/bundle.js');
        return window.reactApp;
    },
    location => location.pathname.startsWith('/react')
);
singleSpa.start(); // 启动