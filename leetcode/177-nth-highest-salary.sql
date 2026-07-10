CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N = N - 1;
  RETURN (
      # Write your MySQL query statement below.
      -- N번째로 높은 급여 조회
      -- 1) SET: N을 1 감소
      -- 2) DISTINCT: 중복 급여 제거
      -- 3) OFFSET: N번째 위치까지 건너뛰기
      SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET N
  );
END