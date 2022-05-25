import { IBooking, IBookingReview, ICategory, IECategory, IEOrder, IEProduct, IItem, ILogin,  IService } from "./objects";
export interface IReduxStore {
  User: ILogin | null;
  Users: ILogin[] | [];
  Loading: boolean;
  Message:IMessage | null;
   Services:IService[] | [];
   Categories:ICategory[] | [];
   ServiceItem:IItem[] | [];
    Bookings:IBooking[] | [];
    BookingReviews:IBookingReview[] | [];
    CurrentBooking:IBooking | null;
    EProducts:IEProduct[] | [];
    EOrders:IEOrder[] | [];
    ECategories:IECategory[] | [];
    Cart:IEProduct[] | [];

 }

export interface IMessage {
  type: number;
  message: string;
}
