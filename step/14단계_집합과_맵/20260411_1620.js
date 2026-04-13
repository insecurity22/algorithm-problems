/**
 * 26 5
 * Bulbasaur
 * Ivysaur
 * Venusaur
 * Charmander
 * Charmeleon
 * Charizard
 * Squirtle
 * Wartortle
 * Blastoise
 * Caterpie
 * Metapod
 * Butterfree
 * Weedle
 * Kakuna
 * Beedrill
 * Pidgey
 * Pidgeotto
 * Pidgeot
 * Rattata
 * Raticate
 * Spearow
 * Fearow
 * Ekans
 * Arbok
 * Pikachu
 * Raichu
 * 25
 * Raichu
 * 3
 * Pidgey
 * Kakuna
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 도감에 수록되어 있는 포켓몬의 개수, 맞춰야 하는 문제의 개수
const [N, M] = input[0].split(' ').map(Number);

// 포켓몬 도감
const pokemonList = new Array(N + 1);
const pokemonMap = new Map();
for(let i = 1; i <= N; i++) {
    const name = input[i];
    pokemonList[i] = name;
    pokemonMap.set(name, i);
}

const result = [];
for(let i = N + 1; i <= N + M; i++) {
    const inputValue = input[i];
    const isNumber = !isNaN(Number(inputValue));
    if(isNumber) {
        result.push(pokemonList[Number(inputValue)]);
    } else {
        result.push(pokemonMap.get(inputValue));
    }
}
console.log(result.join("\n"));

// 결론
// - Array: 값 탐색 O(N) → 비효율적
// - Map: 키 조회 O(1) → 빠르고 대량 데이터 처리에 적합

// 1. Array 사용 시
// - indexOf()로 값 탐색 → 시간복잡도 O(N)
// - 최악의 경우 끝까지 탐색해야 하므로 비효율적
// - N = 100,000, M = 100,000 → 총 연산량 O(N × M) = 100,000 × 100,000 = 10¹⁰ → 시간초과 발생

// 2. Map 사용 시
// - 해시 기반 키 조회 → 시간복잡도 O(1)
// - pokemonMap.get(name)으로 즉시 값 접근 가능

/**
 * Map(26) {
  'Bulbasaur' => 1,
  'Ivysaur' => 2,
  'Venusaur' => 3,
  'Charmander' => 4,
  'Charmeleon' => 5,
  'Charizard' => 6,
  'Squirtle' => 7,
  'Wartortle' => 8,
  'Blastoise' => 9,
  'Caterpie' => 10,
  'Metapod' => 11,
  'Butterfree' => 12,
  'Weedle' => 13,
  'Kakuna' => 14,
  'Beedrill' => 15,
  'Pidgey' => 16,
  'Pidgeotto' => 17,
  'Pidgeot' => 18,
  'Rattata' => 19,
  'Raticate' => 20,
  'Spearow' => 21,
  'Fearow' => 22,
  'Ekans' => 23,
  'Arbok' => 24,
  'Pikachu' => 25,
  'Raichu' => 26
}
 */
