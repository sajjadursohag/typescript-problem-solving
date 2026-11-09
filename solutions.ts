// Problem 1:

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// Problem 2:

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  if (typeof input === "boolean") {
    return input ? "Active " : "Inactive";
  }
  return input;
}
