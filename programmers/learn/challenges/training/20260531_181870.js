function solution(strArr) {
    return strArr.filter((str) => !str.includes("ad"));
}

// 1. includes 대신 str.indexOf("ad") === -1 사용 가능