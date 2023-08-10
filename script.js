'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const  openingHours =  {
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day${1+ 3}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

  },
  openingHours,
  orderDelivery ({ date, loc, items }) {
    console.log(date, loc, items);
  },
  orderPizza (...items) {
    console.log(items);
  }
};





// restaurant.orderDelivery({
//   date : 1241,
//   loc: "akgdfa ahdf aasf",
//   items: [123,345,456]
// })


// let [first, second] = restaurant.categories;
// [first, second] = [second, first]
// console.log(first, second);

// const[starter, mainCourse] = restaurant.order(0, 1)
// console.log(starter, mainCourse);

// const nasted = [1,423,[2,3],4,5];

// const [ one, ,two] = nasted
// console.log(one, two);

// const arr = [1, 2, 3, 4]
// const [one, two, x, y, z] = arr
// console.log(z);

// const {openingHours, location} = restaurant;
// const { menu  : [], openingHours : open, categories : cat} = restaurant;
// console.log(open, cat);

// let a = 10;
// let b = 20;
// const obj = { a: 3333, b: 66666 };
// ({ a, b } = obj)
// console.log(a,b);
// console.log(a,b);


// const {fri} = restaurant.openingHours
// console.log(fri);


// const arr = [1,2,3,4,5,6,7]
// const arr2 = [0,10,20, ...arr]
// console.log(...arr);

// const arr3 = [...restaurant.mainMenu, "dfasd", "SDASA"];

// const arr4 = [...arr2, ...arr, ...arr3]
// console.log(arr4);

// const str = "abcdefghijklmn"

// const strArr = [...str]
// console.log(...str);

// const [... others] = [1,2,3,4,...restaurant.mainMenu]
// console.log(others);

// const {sun , ...others} = restaurant.openingHours
// console.log(sun, others);

// restaurant.orderPizza("adcs", "Adfwef", "ASdf")

// function add(...nums){
//   let sum = 0;
//   for (let index = 0; index < nums.length; index++) {
//     sum += nums[index]
//   }
//    console.log(sum);

// }
// add(2,3)
// add(2,3,4,32,35,23)
// add(2,3,4,32,35,23,565,234,5652,234)

// const num = [23,56,23,645,12]
// add(...num)

// console.log(3 || "shdg");
// console.log(null || null);
// console.log(undefined || null);
// console.log(546 || null);
// console.log("" || null);
// console.log(true || null);
// console.log(0 || null);

// console.log(0 && "asdh");
// console.log(10 && "asdh");
// console.log(undefined && null);
// console.log(null && "usdub");
// console.log(10 && "usdub");

// restaurant.orderPizza && restaurant.orderPizza("dfadc", "Asdfadc", "ASDFwae")

// restaurant.guestes = 20
// const guestes =  restaurant.guestes || 10
// console.log(guestes);

// restaurant.guestes = 0
// const guestes =  restaurant.guestes ?? 10
// console.log(guestes);

// console.log(0 ?? null);
// console.log((0 || undefined || 10 && "" && 0 || "jkj") ?? null);
// console.log(undefined ?? null);


// Coding Challenge -- 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2]= game.players

// console.log(players1, players2);

const [ gk , ...fieldPlayers] = players1
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

const playersFinal = ['Thiago', 'Coutinho' ,'Perisic', ...players1]
// console.log(playersFinal);

const {team1, x : draw, team2} = game.odds
// console.log(team1, team2 , draw);

function printGoals(...args){

  console.log(...args);
}

// printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')

// printGoals(...game.scored)

// team1 > team2 && console.log("team 1 win") || console.log("team 2 win");

///////////////////////////////////////////////


// for(const x of players1){
//   console.log(x);
// }

// for(const [first , second] of players1.entries()){
//   console.log(`${first + 1}: ${second}`);
// }

// console.log(...players1.entries());