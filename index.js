const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(getSumBatteries);

function getSumBatteries(acc, curr){
     return acc + curr;
}

console.log(totalBatteries);

// Code your solution here
