What is Type Narrowing in TypeScript?

TypeScript is a strongly typed programming language that helps developers write safer and more predicatble code. Type Narrowing is an important feature that allows TypeScript to identify a more specific type of a variable within a particular condition.

1. Using tyeof

The typeof operator checks the primitive typeof a variable.

function processValue(value: string | number): string{
if(typeof value === "string") {
return value.toUpperCase();
}

    return value.toString();

}

2. Using instanceof

The instanceof operator checks whather an object belongs to a particular class:

class Dog {
bark(): string {
return "Woof";
}

    function makeSound(animal: Dog | Date):string {
        if(animal instnaceof Dog) {
            return animal.bark();
        }
        return animal.toDateString()
    }

}

3.Using the in Opearator

The in Operator checks weather an object contains a specific property.

type Admin= {role: string};
type User = {username: string};

    function getInfo(person: Admin | User): string{
    if("role" in person)
    {
     return person.role
    }
    return person.username;
    }


    TypeScript Narrowing makes TypeScript applications more reliable and readable.
