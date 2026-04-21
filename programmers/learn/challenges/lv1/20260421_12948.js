function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 1. 정규식과 replace를 사용하면 가독성이 좋고 간단, 간편하다.. 
// - hide_numbers(s)
// - 예) 카드번호 마스킹, 전화번호 일부 숨김

// return s.replace(/\d(?=\d{4})/g, "*");
// 1) \d: 숫자 1개
// 2) (?=...): 전방 탐색
// - 다음에 뭐가 오는지, 바로 뒤에 특정 조건이 있는지만 확인하고, 내용은 결과에 포함하지 않는 것.
// 3) (?=\d{4}): 뒤에 숫자 4개가 이어져있다.