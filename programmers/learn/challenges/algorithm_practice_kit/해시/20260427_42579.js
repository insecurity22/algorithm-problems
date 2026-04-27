function solution(genres, plays) { // 노래의 장르 배열, 노래별 재생 횟수를 나타내는 정수 배열
    const genresMap = new Map();
    const genresTotalMap = new Map();
    
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        
        if(!genresMap.has(genre)) {
            genresMap.set(genre, []);
        }
        genresMap.get(genre).push([i, plays[i]]);
        genresTotalMap.set(genre, (genresTotalMap.get(genre) || 0) + plays[i]);
    }
    
    const sortedGenresTotal = [...genresTotalMap].sort((a, b) => b[1] - a[1]);
    for (const plays of genresMap.values()) {
        plays.sort((a,b) => b[1] - a[1]);
    }
        
    const result = [];
    for (const [genre] of sortedGenresTotal) {
      const plays = genresMap.get(genre);

      for (let i = 0; i < Math.min(2, plays.length); i++) {
        result.push(plays[i][0]);
      }
    }
    
    return result;
}

// 가공 -> 정렬 -> 결과
