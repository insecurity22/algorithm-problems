function solution(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    if(arr1Length !== arr2Length) {
        return arr1Length > arr2Length ? 1 : -1;
    }
    
    const arr1Sum = arr1.reduce((acc, curr) => acc + curr, 0);
    const arr2Sum = arr2.reduce((acc, curr) => acc + curr, 0);
    if(arr1Sum !== arr2Sum) {
        return arr1Sum > arr2Sum ? 1 : -1;
    } 
    
    return 0;
}

// 1. 간단한 방법.
// const diff = arr1.reduce((a, c) => a + c, 0) - arr2.reduce((a, c) => a + c, 0);
// return diff ? (diff > 0 ? 1 : -1) : 0;