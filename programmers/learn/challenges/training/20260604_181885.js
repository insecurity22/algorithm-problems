function solution(todo_list, finished) {
    return todo_list.map((todo, i) => {
        if(!finished[i]) {
            return todo;
        }
    }).filter((v) => v);
}

// 1. 아래와 같이 더 간단하게 작성 가능하다...
// return todo_list.filter((todo, i) => !finished[i]);