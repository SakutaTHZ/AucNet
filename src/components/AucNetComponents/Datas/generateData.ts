// TypeScript Interfaces
import { Auction, AuctionGrade, CarData, CarModel, Customer, Region} from "./types";
  // Constant Arrays
  export const carNames: string[] = ["A3 Sportback", "TT Coupe", "Ranger", "Fit", "CR-V"];
  export const carTypes: string[] = ["Sedan", "Hatchback", "SUV", "Convertible", "MiniVan"];
  export const engines: string[] = ["1.4 TSLI", "V6", "flat-6", "Rx-7", "EV engine"];
  export const imageLink: string[] = [
    "https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_52747_7521ddc6-a312-4852-a12e-2d4a928f1b05.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_79596_1e6432cd-8248-48b8-ab1f-0a785b8b764d.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_53383_754f972b-a419-4f53-8ea4-1691ce7fb661.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_51498_ec5f8b8d-7ca6-4eb7-a424-fd9ac0cf8403.jpg?preset=bigimage",
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
  
  export const status: string[] = ["New", "Approved", "Qualified", "Processed", "Finished"];
  
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
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  // Main Function to Generate Car Data
  export const generateCardData = (): CarData => {
    const cardData: CarData = {
      isFavourite: Math.random() < 0.1, // 10% chance
      isBasket: Math.random() < 0.3,   // 30% chance
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
      comments: [
        {
          name: "John Doe",
          comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
          time: "12 minutes ago",
          reply: [
            { name: "Kelly Kim", comment: "Nice Car", time: "1 week ago" },
            { name: "Talia", comment: "Would recommend", time: "1 day ago" },
          ],
        },
        {
          name: "Kelly Kim",
          comment: "I would buy this",
          time: "1 week ago",
          reply: [
            { name: "Talia", comment: "I think there are some issues...", time: "1 day ago" },
          ],
        },
      ],
      orderDate: getRandomDate(new Date("2024-01-01"), new Date("2024-12-31")),
      chassis: "ABCDS" + Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
      make: "Toyota",
      model: model[Math.floor(Math.random() * model.length)].name,
      region: region[Math.floor(Math.random() * region.length)].name,
      auction: auction[Math.floor(Math.random() * auction.length)].name,
      auctionGrade: auctionGrade[Math.floor(Math.random() * auctionGrade.length)].name,
      statusAfter: status[Math.floor(Math.random() * status.length)],
      customer: customer[Math.floor(Math.random() * customer.length)].name,
      stockPrice: Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
      leaveReason: conditions[Math.floor(Math.random() * conditions.length)],
      stateBefore: statusSelectBefore[Math.floor(Math.random() * statusSelectBefore.length)],
      stateAfter: statusSelectAfter[Math.floor(Math.random() * statusSelectAfter.length)],
      imageUrl: imageLink[Math.floor(Math.random() * imageLink.length)],
      images: Math.floor(Math.random() * (25 - 12 + 1) + 12),
    };
    console.log(cardData)
  
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