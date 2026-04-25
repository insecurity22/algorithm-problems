function solution(nums) {
  // 포켓몬의 종류 번호가 담긴 배열 nums
  const maxPick = nums.length / 2;
  const uniquedLength = new Set(nums).size;
  return Math.min(uniquedLength, maxPick);
}
