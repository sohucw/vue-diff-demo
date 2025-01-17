import type { App } from 'vue';
import { app } from './main';
interface Use {
    install: (app: App, ...opitons: any[]) => void;
}
const list = new Set();

export function MyUse<T extends Use>(plugin: T, ...options: any[]) {
    if (list.has(plugin)) {
        return console.warn('重新添加插件');
    } else {
        plugin.install(app, ...options);
        list.add(plugin);
    }
}
