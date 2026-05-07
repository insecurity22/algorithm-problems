function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let truckWeightSum = 0;
    let time = 0;
    
    while(bridge.length) {
        truckWeightSum -= bridge.pop();
        time++;
        
        if(truck_weights.length) {
            const nextTruck = truck_weights[0];
            if(truckWeightSum + nextTruck <= weight) {
                // 무게 견딜 수 있으면 다리에 트럭 올라감
                const truck = truck_weights.shift();
                truckWeightSum += truck;
                bridge.unshift(truck);
            } else {
                // 무게 견딜 수 없으면 다리에 트럭 지나가게 놔둠
                bridge.unshift(0);
            }
        }
    }
    
    // 트럭 전체가 다 건너려면 몇 초가 걸리는지
    return time;
}