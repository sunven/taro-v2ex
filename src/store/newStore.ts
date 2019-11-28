import { observable } from "mobx";

const newStore = observable({
  newData: [],
  setNewData(data) {
    this.newData = data;
  }
});
export default newStore;
