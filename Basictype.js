function doCalculation(a, b, c) {
    return (a * b) + c;
}
// Any type 
var item1 = { id: 1, name: "item 1" };
item1 = { id: 2 };
// Enums 
var DoorState;
(function (DoorState) {
    DoorState[DoorState["open"] = 0] = "open";
    DoorState[DoorState["closed"] = 1] = "closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
var openDoor = DoorState.open;
console.log("openDoor is: " + openDoor);
// const enums
