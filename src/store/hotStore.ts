import { observable } from "mobx";

const hotStore = observable({
  hotData: [],
  setHotData(data) {
    this.hotData = data;
  }
});
export default hotStore;
