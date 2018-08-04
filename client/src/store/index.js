import { observable, computed, action } from 'mobx';

export default class AppState {
  @observable count = 0; // 类的实例属性可以用等式写入类的定义之中
  @observable name = 'grace';
  @computed get msg () {
    return `${this.name} say count is ${this.count}`;
  }
  @action add () {
    setInterval(() => { this.count += 2; }, 1000);
  }
}
