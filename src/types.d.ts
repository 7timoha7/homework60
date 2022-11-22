export interface MessageType {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface MessageUserType {
  message: string;
  author: string;
}