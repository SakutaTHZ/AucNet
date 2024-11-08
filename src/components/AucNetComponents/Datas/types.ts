export interface CommentReply {
  name: string;
  comment: string;
  time: string;
}

export interface Comment {
  name: string;
  comment: string;
  time: string;
  reply: CommentReply[];
}

export interface Region {
  name: string;
  count: number;
}

export interface Customer {
  name: string;
  count: number;
}

export interface Auction {
  name: string;
  count: number;
}

export interface CarModel {
  name: string;
  count: number;
}

export interface AuctionGrade {
  name: string;
  count: number;
}

export interface CarData {
  isFavourite: boolean;
  isBasket: boolean;
  name: string;
  type: string;
  link: string;
  engineType: string;
  availabilityStatus:string;
  status: string;
  price: number;
  enginePower: number;
  mileage: number;
  year: number;
  comments: Comment[];
  orderDate: string;
  chassis: string;
  make: string;
  model: string;
  region: string;
  auction: string;
  auctionGrade: string;
  statusAfter: string;
  customer: string;
  stockPrice: number;
  leaveReason: string;
  stateBefore: string;
  stateAfter: string;
  imageUrl: string;
  images: number;
}
