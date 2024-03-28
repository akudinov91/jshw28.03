//Задача 1.

// class Marker {
//   constructor(color, inkLevel) {
//     this.color = color;
//     this.inkLevel = inkLevel;
//   }

//   print(text) {
//     let printedText = "";
//     for (let char of text) {
//       if (char !== " " && this.inkLevel >= 0.5) {
//         printedText += char;
//         this.inkLevel -= 0.5;
//       } else {
//         printedText += " ";
//       }
//     }
//     console.log(`Printed text in ${this.color}: ${printedText}`);
//   }
// }

// class RefillableMarker extends Marker {
//   refill(inkAmount) {
//     if (inkAmount > 0) {
//       this.inkLevel = Math.min(100, this.inkLevel + inkAmount);
//       console.log(`Marker refilled. Current ink level: ${this.inkLevel}%`);
//     } else {
//       console.log("Invalid ink amount for refill.");
//     }
//   }
// }

// const simpleMarker = new Marker("blue", 50);
// simpleMarker.print("Hello World!");

// const refillableMarker = new RefillableMarker("red", 20);
// refillableMarker.print("Lorem Ipsum");
// refillableMarker.refill(70);
// refillableMarker.print("Lorem Ipsum");

//Задача 2.

// class ExtendedDate extends Date {
//   constructor(year, month, day) {
//     super(year, month, day);
//   }

//   getDateText() {
//     const months = [
//       "января",
//       "февраля",
//       "марта",
//       "апреля",
//       "мая",
//       "июня",
//       "июля",
//       "августа",
//       "сентября",
//       "октября",
//       "ноября",
//       "декабря",
//     ];
//     return `${this.getDate()} ${months[this.getMonth()]}`;
//   }

//   isFuture() {
//     const now = new Date();
//     return this.getTime() >= now.getTime();
//   }

//   isLeapYear() {
//     const year = this.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }

//   getNextDate() {
//     const nextDay = new Date(this);
//     nextDay.setDate(this.getDate() + 1);
//     return nextDay;
//   }
// }

// const extendedDate = new ExtendedDate(2024, 2, 28);

// console.log("Дата текстом:", extendedDate.getDateText());
// console.log("Это будущая или текущая дата?", extendedDate.isFuture());
// console.log("Это високосный год?", extendedDate.isLeapYear());
// console.log("Следующая дата:", extendedDate.getNextDate());
