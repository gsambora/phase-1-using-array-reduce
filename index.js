const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function(countObj, currentBatch){
    //console.log("Current batch has "+currentBatch+". The total count so far is "+countObj+".")
    return currentBatch + countObj;
})

console.log(totalBatteries)