import { types } from "mobx-state-tree";

const Template = types
  .model("Template", {
  })
  .actions(self => ({
    functionHere(){

    }
  }))
  .actions(self => ({
    functionHere(){
    }, 
  }))
  .views(self => ({
  }));

export default Template;
