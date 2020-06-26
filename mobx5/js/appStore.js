import { observable, action } from 'mobx';
var appStore = observable({
  counter: 0
});
appStore.addCount = action(() => {
  appStore.counter += 1;
});
appStore.subCount = action(() => {
  if (appStore.counter <= 0) {
    return;
  }
  appStore.counter -= 1;
});
appStore.changeCount = action((key) => {
  if (key <= 0) {
    appStore.counter = 0;
  }
  appStore.counter = parseInt(key);
});
export default appStore
