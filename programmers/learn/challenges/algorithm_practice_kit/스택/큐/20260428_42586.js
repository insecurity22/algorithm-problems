function solution(progresses, speeds) { 
    const days = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    });
    
    let mark = days[0];
    let featureCount = 1;
    let deployedFeatureArr = [];
    for(let i = 1; i < days.length; i++) {
        if(mark >= days[i]) {
            featureCount++;
        } else {
            deployedFeatureArr.push(featureCount);
            mark = days[i];
            featureCount = 1;
        }
    }
    deployedFeatureArr.push(featureCount);
    return deployedFeatureArr;
}

// 1. 핵심
// - 시간 흐름을 직접 시뮬레이션 하려 하는게 아닌, 시간을 압축해 계산하는 것이 핵심이다.
// - 이 차이 때문에 코드가 복잡해지고, 버그가 계속 생긴다.

// 2. 앞으로
// - 시뮬레이션 하다가 복잡해지면 결과(완료) 시점으로 바꿔 생각하자.

// 3. 큐 방식(FIFO = 줄 서기 = 먼저 들어온 데이터는 먼저 처리)
// - shift(), push()
