import Stack from "./Stack";

class Tower {
  constructor() {
    this.disks = new Stack();
  }

  add(value, color) {
    if (!this.disks.top) {
      this.disks.push(value, color);
    } else {
      if (this.disks.top.value > value) {
        this.disks.push(value, color);
      }
    }
  }

  moveTopTo(towerDestination) {
    if (!towerDestination.disks.top) {
      const value = this.disks.pop();
      towerDestination.disks.push(value.value);
      return true;
    } else {
      if (towerDestination.disks.top.value > this.disks.top.value) {
        const value = this.disks.pop();
        towerDestination.disks.push(value.value);
        return true;
      }
    }
    return false;
  }

  moveDisks(towerDestination) {
    this.moveTopTo(towerDestination);
  }
}

export default Tower;
