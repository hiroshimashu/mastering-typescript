function doCalculation(
    a: number,
    b: number,
    c: number
) {
    return (a * b) + c;
}

// Any type 
var item1 : any = { id: 1, name: "item 1" }
item1 = { id: 2 }

// Enums 
enum DoorState {
    open,
    closed,
    Ajar
}

var openDoor = DoorState.open;
console.log(`openDoor is: ${openDoor}`);

// const enums



