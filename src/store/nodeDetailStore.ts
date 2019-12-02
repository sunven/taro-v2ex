import { observable } from "mobx";

const nodeDetailStore = observable({
  nodeDetailData: [],
  setNodeDetailData(data) {
    this.nodeDetailData = data;
  }
});
export default nodeDetailStore;
