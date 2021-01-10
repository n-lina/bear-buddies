import { types } from "mobx-state-tree";

const Template = types
  .model("Template", {
    eat: false, 
    full: 60, 
    clean: 60, 
    energy: 60, 
    happy: 60, 
    calm: 60, 
    health: 60,
    level: 10, 
    levelProgress: 50,
  })
  .actions(self => ({
    functionHere(){

    }
  }))
  .actions(self => ({
    setEat(val){
      self.eat = val
    }, 
  }))
  .views(self => ({
  }));

export default Template;
