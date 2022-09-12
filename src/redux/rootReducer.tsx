import {combineReducers} from "redux";
import * as User from './reducers/user/idnex';
import * as Loader from './reducers/loader/idnex';
import * as Message  from './reducers/messsage/idnex';
 import * as Services  from './reducers/Services/idnex';
 import * as Categories  from './reducers/Category/idnex';
 import * as ServiceItem  from './reducers/Item/idnex';
 import * as Booking  from './reducers/Booking/idnex';
 import * as BookingReview  from './reducers/BookingReview/idnex';
 import * as CurrentBooking  from './reducers/Currentbooking/idnex';
 import * as EProducts  from './reducers/EProduct/idnex';
 import * as EOrders  from './reducers/EOrder/idnex';
 import * as ECategories  from './reducers/ECategory/idnex';
 import * as Cart  from './reducers/Cart/idnex';
 import * as ECoupons  from './reducers/ECoupons/idnex';
 import * as Address  from './reducers/Address/idnex';
//  import * as Home  from './reducers/Home/idnex';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  User:User.userReducer,
  Loading:Loader.loadingReducer,
  Message:Message.messageReducer,
  Services:Services.ServicesReducer,
  Categories:Categories.CategoryReducer,
  ServiceItem:ServiceItem.ItemReducer,
  BookingReviews:BookingReview.BookingReviewReducer,
  Bookings:Booking.BookingReducer,
  Users:User.UsersReducer,
  CurrentBooking:CurrentBooking.CurrentBookingReducer,
  EProducts:EProducts.EProductReducer,
  EOrders:EOrders.EOrderReducer,
  ECategories:ECategories.ECategoryReducer,
  Cart:Cart.CartReducer,
  ECoupons:ECoupons.ECouponsReducer,
  Address:Address.AddressReducer,
  // Home:Home.HomeReducer
 });

const persistConfig={
  key:'root',
  storage,
  whitelist:['User','CurrentBooking','Cart','ECoupons','Address']
}

export default persistReducer(persistConfig,rootReducer )

export function* rootSaga() {

}
