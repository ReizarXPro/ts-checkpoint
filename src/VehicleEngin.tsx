import React from "react";

function start() {
  console.log(" Car Engine started");
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = start;
  }
  displayInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

export default function MyApp() {
  const myCar = new Car("GR", "Supra", 2024);

  myCar.start();

  return (
    <div>
      <h1>Car Information</h1>
      <p>{myCar.displayInfo()}</p>
    </div>
  );
}
