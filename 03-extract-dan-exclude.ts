type Car = 'BMW' | 'Mercedes' | 20 | { car: true; motor: false };

type StringCar = Extract<Car, string>;
type ObjectCar = Extract<Car, { car: true }>;
type NumberCar = Extract<Car, number>;

type NonStringCar = Exclude<Car, string>;
type NonObjectCar = Exclude<Car, { car: true }>;
type NonNumberCar = Exclude<Car, number>;
