import store from './store/index';
import { addArticle } from './actions/index';
import tar1 from './testexports/exportsource';
import tar2 from './testexports/exportsource2';

console.log("============*start*============");
console.log(tar1);
console.log("tar1: ", Object.getOwnPropertyDescriptors(tar1), "\n tar2: ", Object.getOwnPropertyDescriptors(tar2));
// console.log(store);
// console.log(store.getState());
store.subscribe(() => {
    console.log("triggering state update functions");
});

console.log("============* end *============");
