import store from './store/index';
import { addArticle } from './actions/index';
// import tar1 from './testexports/exportsource';
// import tar2 from './testexports/exportsource2';
// import * as settings from './testexports/expotsource3';

console.log("============*start*============");
// settings.var1 = 10;
// console.log(settings.var1.value, Object.getOwnPropertyDescriptors(settings.var1));
// setTimeout(() => {
    //     tar1 = {}; // throw an uncaught error for tar1, which means all the imported APIs are read-only
    // }, 3000);
// console.log(tar1);
// console.log("tar1: ", Object.getOwnPropertyDescriptors(tar1), "\n tar2: ", Object.getOwnPropertyDescriptors(tar2));
// console.log(store);
// console.log(store.getState());
store.subscribe(() => {
    console.log("triggering state update functions");
});

console.log("============* end *============");
