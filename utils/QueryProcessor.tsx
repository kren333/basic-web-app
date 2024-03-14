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

  const minusStr = /what is (\d+) minus (\d+)\?/;
  const minusMatch = query.toLowerCase().match(minusStr);

  if (minusMatch) {
    return (
      (parseInt(minusMatch[1]) - parseInt(minusMatch[2])).toString()
    );
  }

  const multStr = /what is (\d+) multiplied by (\d+)\?/;
  const multMatch = query.toLowerCase().match(multStr);

  if (multMatch) {
    return (
      (parseInt(multMatch[1]) * parseInt(multMatch[2])).toString()
    );
  }

  const powStr = /what is (\d+) to the power of (\d+)\?/;
  const powMatch = query.toLowerCase().match(powStr);

  if (powMatch) {
    return (
      (parseInt(powMatch[1]) ** parseInt(powMatch[2])).toString()
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

  const isPrime = (num : number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
  }

  const primeReg = /which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)\?/;
  const primeMatch = query.toLowerCase().match(primeReg);
  if (primeMatch) {
    for (let i = 0; i < primeMatch.length; i++) {
      if (isPrime(parseInt(primeMatch[i]))) {
        return (primeMatch[i]);
      }
    }
    return ("none");
  }

  return "";
}
