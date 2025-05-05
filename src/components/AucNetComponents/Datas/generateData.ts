import {
  Auction,
  AuctionGrade,
  CarData,
  CarModel,
  Customer,
  Region,
} from "./types";

export const carNames: string[] = [
  "A3 Sportback",
  "TT Coupe",
  "Ranger",
  "Fit",
  "CR-V",
];
export const carTypes: string[] = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Convertible",
  "MiniVan",
];
export const engines: string[] = [
  "1.4 TSLI",
  "V6",
  "flat-6",
  "Rx-7",
  "EV engine",
];
export const imageLink: string[] = [
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_83677_5c2b6269-1017-40b2-b5a4-c9eb947626fb.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_83708_7a3fe97a-2f9c-4c3c-a1ef-b182d1010949.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84061_21956c7c-7de6-4a3a-af8b-04c35cf03157.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84143_e8bc7ee7-7451-473e-b649-25d60982678d.jpg?preset=bigimage",
  "https://cosmo-images-ejawf4gsh8fae3c3.z02.azurefd.net/stock/original/our_84249_cea41aac-2b97-4606-808e-397e288333eb.jpg?preset=bigimage",
];
export const carStatus: string[] = [
  "checkavailability",
  "unavailable",
  "orderconfirmed",
  "canceled",
  "purchased",
  "default",
];

export const conditions: string[] = [
  "Condition",
  "Not Paid",
  "Cancelled",
  "Group",
  "No Bid",
  "Too Low Bid",
  "Hold",
  "Leave,Admin",
];

export const statusSelectBefore: string[] = [
  "No Sales Code",
  "Cancel",
  "Last",
  "SKTSU",
  "Sold",
  "Nego",
  "BGHT",
  "Hold",
];
export const statusSelectAfter: string[] = [
  "Not Auction",
  "Cancelled",
  "Last Bid",
  "Not Bought",
  "Bought",
  "Sold By Nego",
  "Hold",
  "Blocked",
];

export const status: string[] = [
  "New",
  "Approved",
  "Qualified",
  "Processed",
  "Finished",
];

export const region: Region[] = [
  { name: "Japan", count: 53 },
  { name: "Myanmar", count: 74 },
  { name: "Sweeden", count: 23 },
  { name: "Australia", count: 14 },
  { name: "Cyprus", count: 53 },
];

export const customer: Customer[] = [
  { name: "John Doe", count: 3 },
  { name: "Sakuta", count: 54 },
  { name: "John Wick", count: 13 },
  { name: "Son Jin Wu", count: 34 },
  { name: "Talia", count: 23 },
];

export const auction: Auction[] = [
  { name: "JU TOKYO", count: 53 },
  { name: "NISSAN TENDER", count: 4 },
  { name: "KCAA ABINO", count: 43 },
  { name: "USS NIIGATA", count: 24 },
  { name: "AEP", count: 13 },
];

export const model: CarModel[] = [
  { name: "TT Coupe", count: 53 },
  { name: "Hijet Truck", count: 74 },
  { name: "Ranger", count: 23 },
  { name: "CR-V", count: 14 },
  { name: "Fit", count: 53 },
];

export const auctionGrade: AuctionGrade[] = [
  { name: "⭐ 1", count: 23 },
  { name: "⭐ 2", count: 54 },
  { name: "⭐ 3", count: 11 },
  { name: "⭐ 4", count: 43 },
  { name: "⭐ 5", count: 4 },
];

export const sortModes = ["None", "Ascending", "Desending"];

// Utility function
export const getRandomDate = (start: Date, end: Date): string => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export function getRandomTime() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const randomMonth = months[Math.floor(Math.random() * 12)];
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);

  const formattedTime = `${randomMonth} ${randomDay.toString().padStart(2, "0")} ${randomHour.toString().padStart(2, "0")}:${randomMinute.toString().padStart(2, "0")}`;
  
  return formattedTime;
}

const usernames = [
  "John Doe", "Okarun", "Jinx", "Vi", "Chansey", "Granny", "Sakuta", "Bruda"
];
const comments = [
  "Nice Car", "Cool Car", "Is it Available?", "How Much?", 
  "What is the Price?", "Is it in Good Condition?", 
  "Is it damaged?", "Love this Car"
];
const times = [
  "12 minutes ago", "1 hour ago", "3 hours ago", 
  "1 day ago", "1 week ago", "2 weeks ago"
];

// Helper function to generate a random item from an array
const getRandomItem = (array:any) => array[Math.floor(Math.random() * array.length)];

// Helper function to generate a random number between min and max (inclusive)
const getRandomNumber = (min:any, max:any) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate random replies
const generateReplies = () => {
  const replies = [];
  const numReplies = getRandomNumber(0, 3); // 1 to 3 replies
  for (let i = 0; i < numReplies; i++) {
    replies.push({
      name: getRandomItem(usernames),
      comment: getRandomItem(comments),
      time: getRandomItem(times),
    });
  }
  return replies;
};

// Function to generate random comments
const generateRandomComments = (count = 5) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      name: getRandomItem(usernames),
      comment: getRandomItem(comments),
      time: getRandomItem(times),
      reply: generateReplies(), // Replies without further replies
    });
  }
  return result;
};


// Main Function to Generate Car Data
export const generateCardData = (): CarData => {
  const cardData: CarData = {
    isFavourite: Math.random() < 0.1, // 10% chance
    isBasket: Math.random() < 0.3, // 30% chance
    name: carNames[Math.floor(Math.random() * carNames.length)],
    type: carTypes[Math.floor(Math.random() * carTypes.length)],
    link: imageLink[Math.floor(Math.random() * imageLink.length)],
    engineType: engines[Math.floor(Math.random() * engines.length)],
    availabilityStatus: carStatus[Math.floor(Math.random() * carStatus.length)],
    status: status[Math.floor(Math.random() * status.length)],
    price: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    enginePower: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    mileage: Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000,
    year: Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980,
    comments: generateRandomComments(getRandomNumber(0, 3)),
    orderDate: getRandomDate(new Date("2024-01-01"), new Date("2024-12-31")),
    chassis: "ABCDS" + Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
    make: "Toyota",
    model: model[Math.floor(Math.random() * model.length)].name,
    region: region[Math.floor(Math.random() * region.length)].name,
    auction: auction[Math.floor(Math.random() * auction.length)].name,
    auctionGrade:
      auctionGrade[Math.floor(Math.random() * auctionGrade.length)].name,
    statusAfter: status[Math.floor(Math.random() * status.length)],
    customer: customer[Math.floor(Math.random() * customer.length)].name,
    stockPrice: Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
    leaveReason: conditions[Math.floor(Math.random() * conditions.length)],
    stateBefore:
      statusSelectBefore[Math.floor(Math.random() * statusSelectBefore.length)],
    stateAfter:
      statusSelectAfter[Math.floor(Math.random() * statusSelectAfter.length)],
    imageUrl: imageLink[Math.floor(Math.random() * imageLink.length)],
    images: Math.floor(Math.random() * (25 - 12 + 1) + 12),
  };
  console.log(cardData);

  return cardData;
};

export const generateNotifications = () => {
  const refCar = generateCardData();

  const adminComment = [
    `Admin replied “This is the admin reply” to your comment in ${refCar.name} ${refCar.engineType} listing.`,
    `The ${refCar.name} ${refCar.engineType} is currently unavailable. Please browse our catalog for other options.`,
  ];

  const normalComment = [
    `John Doe replied “This is the admin reply” to your comment in ${refCar.name} ${refCar.engineType} listing.`,
  ];

  const type = Math.floor(Math.random() * 10);
  const notification = {
    isRead: Math.floor(Math.random() * 10) % 2 == 0,
    image: refCar.link,
    time: new Date().toLocaleString(),
    replyType: type % 2 == 0,
    message:
      type % 2 == 0
        ? adminComment[Math.floor(Math.random() * adminComment.length)]
        : normalComment[Math.floor(Math.random() * normalComment.length)],
    toCar: refCar,
  };
  return notification;
};
