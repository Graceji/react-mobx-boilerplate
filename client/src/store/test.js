import { observable, action } from 'mobx';

export default class Test {
  @observable arr = [];
  @action.bound changeArr () {
    this.arr = [
      {
        name: 'jina',
        age: 28,
      },
    ];
    setTimeout(() => {
      this.arr = [
        {
          name: 'jina',
          age: 28,
        },
        {
          name: 'grace',
          age: 28,
        },
      ];
    }, 3000);
  }
}
