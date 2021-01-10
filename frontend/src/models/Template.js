import { types } from "mobx-state-tree";

const Template = types
  .model("Template", {
    eatBool: false, 
    cleanBool: false, 
    healthBool: false, 
    sleepBool: false, 
    breatheBool: false, 
    petBool: false,
    full: 80, 
    clean: 80, 
    energy: 80, 
    happy: 80, 
    calm: 80, 
    health: 80,
    level: 1, 
    levelProgress: 50,
  })
  .actions(self => ({
    checkLevelUp(){
      if (self.full >= 100 && self.clean >= 100 && self.health >= 100 && self.energy >= 100 && self.calm >= 100 && self.happy >= 100){
        self.levelProgress += 10
        if (self.levelProgress >= 100) self.level += 1
      }
    }
  }))
  .actions(self => ({
    handleEat(val){
      if (self.full >= 100) return
      self.eatBool = val
      if (val) {
        self.full = Math.max(100, self.full + 10)
        self.checkLevelUp()
      }
    }, 
    handleClean(val){
      if (self.clean >= 100) return
      self.cleanBool = val
      if (val) {
        self.clean = Math.max(100, self.clean +10)
        self.checkLevelUp()
      }
    }, 
    handlePlay(val){
      if (self.health >= 100) return
      self.playBool = val
      if (val) {
        self.health = Math.max(100, self.health +10)
        self.checkLevelUp()
      }
    }, 
    handleSleep(val){
      if (self.energy >= 100) return
      self.sleepBool = val
      if (val) {
        self.energy = Math.max(100, self.energy + 10)
        self.checkLevelUp()
      }
    }, 
    handleBreathe(val){
      if (self.calm >= 100) return
      self.calmBool = val
      if (val) {
        self.calm = Math.max(100, self.calm + 10)
        self.checkLevelUp()
      }
    }, 
    handlePet(val){
      if (self.happy >= 100) return
      self.happyBool = val
      if (val) {
        self.happy = Math.max(100, self.happy + 10)
        self.checkLevelUp()
      }
    }, 
  }))
  .views(self => ({
  }));

export default Template;
