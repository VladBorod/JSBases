'use strict';

// ----------------------------------------------------------------

const musicCollection = [{
  title: "Ragoon",
  artist: "Sphread killers",
  year: "1999"
},
{
  title: "Pomp",
  artist: "Destroyer",
  year: "2001"
},
{
  title: "Zikkurat",
  artist: "Black pinguin",
  year: "1994"
},
{
  title: "Def",
  artist: "Def Deffo",
  year: "2002"
}
]

musicCollection[Symbol.iterator] = function() {
  return {
    current: 0, 
    to: this.length,
    next() {
      return this.current < this.to 
      ? { done: false, value: musicCollection[this.current++] } 
      : { done: true }; 
    }
  }
}

for (const album of musicCollection) {
  console.log(album.title, album.artist, album.year);
}

console.log('////////////////////////////////////////////////////////////');

// ----------------------------------------------------------------

// Create a Map to store the dishes and their cooks
const dishes = new Map();
dishes.set("Пицца Маргарита", "Виктор");
dishes.set("Пицца Пепперони", "Виктор");
dishes.set("Суши Филадельфия", "Ольга");
dishes.set("Суши Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

// Create a Map to store the clients and their orders
const orders = new Map();

// Create client objects
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIra = { name: "Ирина" };

// Add orders to the clients
orders.set(clientAlexey, ["Пицца Пепперони", "Тирамису"]);
orders.set(clientMaria, ["Суши Калифорния", "Пицца Маргарита"]);
orders.set(clientIra, ["Чизкейк"]);

// Function to display the orders and the cooks preparing them
function displayOrders() {
  for (const [client, order] of orders.entries()) {
    console.log(`${client.name} заказал:`);
    order.forEach((dish) => {
      const cook = dishes.get(dish);
      console.log(`- ${dish} (повар: ${cook})`);
    });
  }
}

// Display the orders and the cooks preparing them
displayOrders();