interface IExponentiation {
  basis: number;
  power: number;
}

export function pow({ basis, power }: IExponentiation): number {
  let result: number = 1;
  if (power === 0) {
    return 1;
  }

  for (let i = 0; i < power; i++) {
    result *= basis;
  }
  return result;
}

export const expoBySquaring = ({ basis, power }: IExponentiation): number =>
  squaring(basis, power);

function squaring(basis: number, power: number): number {
  if (power === 0) return 1;
  if (power === 1) return basis;

  if (power % 2 === 0) {
    return squaring(basis * basis, power / 2);
  } else {
    return basis * squaring(basis * basis, (power - 1) / 2);
  }
}
