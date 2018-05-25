import { observable, computed, action } from 'mobx';

export default class AppState {
  @observable count = 0; // 类的实例属性可以用等式写入类的定义之中
  @observable name = 'grace';
  @computed get msg () {
    return `${this.name} say count is ${this.count}`;
  }
  @action add () {
    this.count += 2;
  }
}

// export default class AppState {
//   constructor () {
//     this.count = 0;
//     this.name = 'grace';
//   }
//   // count = 0; // 类的实例属性可以用等式写入类的定义之中
//   // name = 'grace';
//   get msg () {
//     return `${this.name} say count is ${this.count}`;
//   }
//   add () {
//     this.count += 2;
//   }
//   changeCount () {
//     setInterval(() => {
//       this.count += 2;
//     }, 1000);
//   }
// }

// decorate(AppState, {
//   count: observable,
//   name: observable,
//   msg: computed,
//   add: action,
// });
