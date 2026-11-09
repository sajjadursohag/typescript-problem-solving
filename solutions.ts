// Problem 1:

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// Problem 2:

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if (input === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

// Problem 3:

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
