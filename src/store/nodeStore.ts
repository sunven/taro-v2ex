import { observable } from "mobx";

const nodeStore = observable({
  nodeData: [],
  setNodeData(data) {
    this.nodeData = data;
  }
});
export default nodeStore;
