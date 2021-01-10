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
    calm: 30,
    health: 80,
    level: 1,
    levelProgress: 50,
    name: "'"
  })
  .actions(self => ({
    checkLevelUp() {
      if (self.full >= 100 && self.clean >= 100 && self.health >= 100 && self.energy >= 100 && self.calm >= 100 && self.happy >= 100) {
        self.levelProgress += 10
        if (self.levelProgress >= 100){
          self.level += 1
          self.levelProgress = 0
        } 
      }
    }
  }))
  .actions(self => ({
    handleEat(val){
      self.eatBool = val
      if (self.full >= 100) return
      if (val) {
        self.full = Math.min(100, self.full + 10)
        self.checkLevelUp()
      }
    }, 
    handleClean(val){
      self.cleanBool = val
      if (self.clean >= 100) return
      if (val) {
        self.clean = Math.min(100, self.clean +10)
        self.checkLevelUp()
      }
    }, 
    handlePlay(val){
      self.healthBool = val
      if (self.health >= 100) return
      if (val) {
        self.health = Math.min(100, self.health +10)
        self.checkLevelUp()
      }
    }, 
    handleSleep(val){
      self.sleepBool = val
      if (self.energy >= 100) return
      if (val) {
        self.energy = Math.min(100, self.energy + 10)
        self.checkLevelUp()
      }
    }, 
    handleBreathe(val){
      self.breatheBool = val
      if (self.calm >= 100) return
      if (val) {
        self.calm = Math.min(100, self.calm + 10)
        self.checkLevelUp()
      }
    }, 
    handlePet(val){
      self.petBool = val
      if (self.happy >= 100) return
      if (val) {
        self.happy = Math.min(100, self.happy + 10)
        self.checkLevelUp()
      }
    },
    setName(name){
      self.name = name
    }, 
    setHealth(val){
      self.health = val
    }, 
    setFull(val){
      self.full = val 
    }, 
    setClean(val){
      self.clean = val
    }, 
    setEnergy(val){
      self.energy = val
    }, 
    setHappy(val){
      self.happy = val
    }, 
    setCalm(val){
      self.calm = val
    }, 
    setLevel(val){
      self.level = val
    }, 
    setLvlProgress(val){
      self.levelProgress = val
    }
  }))
  .views(self => ({
  }));

export default Template;
