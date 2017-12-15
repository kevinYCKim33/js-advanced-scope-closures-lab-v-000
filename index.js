function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    const start = parseInt(startingBlock.slice(0,2));
    const end = parseInt(endingBlock.slice(0,2));
    const itineary = Math.abs(end - start);
    const rangeDiff = Math.abs(blockRange - itineary);

    if (itineary <= blockRange) {
      return `within range by ${rangeDiff}`;
    } else {
      return `${rangeDiff} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return bill * percentage;
  }
}

function createDriver(name) {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ DriverId;
    }
  };
}
