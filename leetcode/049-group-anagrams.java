class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
      
        Map<String, List<String>> map = new HashMap<>();

        for(String str : strs) {
            // 정렬
            char[] charArr = str.toCharArray(); 
            Arrays.sort(charArr);

            // 정렬된 키가 없다면 빈 리스트 생성
            String charSortedKey = new String(charArr);
            if(!map.containsKey(charSortedKey)) {
                map.put(charSortedKey, new ArrayList<>());
            }

            // 정렬된 키의 리스트에 현재 문자열 추가
            map.get(charSortedKey).add(str);
        }

        /**
        map = {
            "abt" -> ["bat"]
            "ant" -> ["tan", "nat"],
            "aet" -> ["eat", "tea", "ate"],
        }
        */
        return new ArrayList<>(map.values());
    }
}
