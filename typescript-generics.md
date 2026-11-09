How Do Generics Work in TypeScript?

Introduction: 

Generics are one of the most useful features of TypeScript. They allow developers to create reusable fucntions, interfaces and classes that work with different data types.

Understanding Generics:

A generic type is commonly represented by the Letter T.

function getFirstElement<T>(items: T[]): T | undefined {
return items[0]
}

const names = getFirstElement(["Sajjad", "Maria"]);
const numbers = getFirstElement([10, 20, 30]);

Generics with Constraints:

function getProperty<T, K extends keyof T>(
object: T,
key: K
): T[K] {
return object[key];
}

Consclusion:

Generics help developers build flexible, reusable applications.
