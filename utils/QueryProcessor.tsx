export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "kevinren"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "kevin"
    );
  }

  const regStr = /what is (\d+) plus (\d+)\?/;
  const regMatch = query.toLowerCase().match(regStr);

  if (regMatch) {
    return (
      (parseInt(regMatch[1]) + parseInt(regMatch[2])).toString()
    );
  }

  const regStrMax = /which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
  const regMatchMax = query.toLowerCase().match(regStrMax);
  if(regMatchMax) {
    return(
      Math.max(parseInt(regMatchMax[1]), parseInt(regMatchMax[2]), parseInt(regMatchMax[3])).toString()
    )
  }

  var isSquare = function (n: number) { return n > 0 && Math.sqrt(n) % 1 === 0; }

  var isCube = function (n: number) { return n > 0 && Math.cbrt(n) % 1 === 0; }

  const cubsqReg = /which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)\?/;
  const cubsqMatch = query.toLowerCase().match(cubsqReg);
  if (cubsqMatch) {
    for (let i = 0; i < cubsqMatch.length; i++) {
      if (isSquare(parseInt(cubsqMatch[i])) && isCube(parseInt(cubsqMatch[i]))) {
        return (cubsqMatch[i]);
      }
    }
    return ("none");
  }

  return "";
}
