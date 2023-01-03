export interface Order {
  _id: string;
  quantityPeople: string;
  date: string;
  schedule: string;
  status: 'WAITING' | 'IS_HAPPENING' | 'DONE';
  chef: string;
}
