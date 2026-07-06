function solution(id_pw, db) {
    const [id, pw] = id_pw;

    for (const [find_id, find_pw] of db) {
        if (find_id === id && find_pw === pw) return "login";
        if (find_id === id && find_pw !== pw) return "wrong pw";
    }

    return "fail";
}

// 1. forEach는 반복만 수행해 return으로 종료할 수 없다.
// - find / for / some 함수는 조건에 따라 중간 종료가 가능하다.