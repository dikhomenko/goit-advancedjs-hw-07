// Key class
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); // Generate a random signature
  }

  getSignature(): number {
    return this.signature; // Return the signature
  }
}

// Person class
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key; // Store the Key object
  }

  getKey(): Key {
    return this.key; // Return the stored key
  }
}

// Abstract House class
abstract class House {
  protected door: boolean = false; // Door is initially closed
  protected key: Key; // Key object for the house
  protected tenants: Person[] = []; // Array to store tenants

  constructor(key: Key) {
    this.key = key; // Store the key for the house
  }

  abstract openDoor(key: Key): void; // Abstract method to open the door

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person); // Add person to tenants if the door is open
      console.log(`${person.getKey().getSignature()} has entered the house.`);
    } else {
      console.log('The door is closed. Cannot enter.');
    }
  }
}

// MyHouse class
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true; // Open the door if the key matches
      console.log('The door is now open.');
    } else {
      console.log('The key does not match. The door remains closed.');
    }
  }
}

// Scenario
const key = new Key(); // Create a new Key
const house = new MyHouse(key); // Create a new MyHouse with the Key
const person = new Person(key); // Create a new Person with the Key

// Try to open the door and come in
house.openDoor(person.getKey()); // Open the door with the person's key
house.comeIn(person); // Attempt to enter the house

export {};