import { IBooking, IBookingReview, ICategory, IECategory, IECoupons, IEOrder, IEProduct, IItem, ILogin, IService } from "../interfaces/data/objects";
import { api } from "./baseUrl";
const login = async (data: ILogin) => {
  return await api.post("/user/login", data);
};
const verify = async (data: ILogin) => {
   return await api.post("/user/verify", data);
};
const resend = async (data: ILogin) => {
  return await api.post("/user/resend", data);
};
const confirmCode = async (data: ILogin) => {
  return await api.post("/user/confirmCode", data);
};
const resetPassword = async (data: ILogin) => {
  return await api.post("/user/resetPassword", data);
};

const register = async (data: ILogin) => {
  return await api.post("/user/register", data);
};

const GetServices = async (token: string) => {
  return await api.get("/Service", undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostServices = async (token: string,data:IService) => {
  return await api.post("/Service",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateServices = async (token: string,data:IService) => {
  return await api.put("/Service",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteServices = async (token: string,data:IService) => {
  return await api.delete("/Service",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetCategory = async (token: string,id?:string,isAdmin?:any,page?:string,search?:string,showApproved?:boolean) => {
  let url=("/Category?page="+(page?page:-1)+"&userId="+id+"&isAdmin="+isAdmin+"&search="+search).toString();
  if(showApproved)
  {
   url+="&showApproved=true"
  } 
   
  return await api.get(url,undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const PostCategory = async (token: string,data:ICategory) => {
  return await api.post("/Category",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateCategory = async (token: string,data:ICategory) => {
  return await api.put("/Category",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteCategory = async (token: string,data:ICategory) => {
  return await api.delete("/Category",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

 
const GetServiceItem = async (token: string,id?:string,isAdmin?:any,page?:string,search?:string,showApproved?:boolean,categoryId?:number,isRental?:boolean) => {

   let url=("/ServiceItem?page="+(page?page:-1)+"&userId="+id+"&isAdmin="+isAdmin+"&search="+search).toString();
  if(showApproved)
  {
   url+="&showApproved=true"
  }  
  if(categoryId)
  {
    url+="&categoryId="+categoryId
  }
  if(isRental)
  {
    url+="&isRental=true"
  }
  return await api.get(url,undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
 
   
};
const GetServiceItemRental = async (token: string,userId?:string) => {
  return await api.get("/ServiceItem/rentals"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const GetServiceItemByCategoryId = async (token: string,userId?:string,categoryId?:number) => {
  return await api.get("/ServiceItem/getbycategoryId?"+(userId!=undefined?`userId=${userId}`:""+(`categoryId=${categoryId}`)),undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const GetServiceItemByServiceId = async (token: string,userId?:string,serviceId?:number) => {
  return await api.get("/ServiceItem/getbyserviceId?"+(userId!=undefined?`userId=${userId}`:""+(`serviceId=${serviceId}`)),undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const PostServiceItem = async (token: string,data:IItem) => {
  return await api.post("/ServiceItem",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateServiceItem = async (token: string,data:IItem) => {
  return await api.put("/ServiceItem",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteServiceItem = async (token: string,data:IItem) => {
  return await api.delete("/ServiceItem",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetBookings = async (token: string,userId?:string) => {
  return await api.get("/Booking"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostBookings = async (token: string,data:IBooking) => {
  return await api.post("/Booking",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookings = async (token: string,data:IBooking) => {
  return await api.put("/Booking",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingStatus = async (token: string,data:IBooking) => {
  return await api.put("/Booking/bookingstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteBookings = async (token: string,data:IBooking) => {
  return await api.delete("/Booking",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
const GetBookingReviews = async (token: string,userId?:string) => {
  return await api.get("/BookingReview"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.post("/BookingReview",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.put("/BookingReview",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingReviewstatus = async (token: string,data:IBookingReview) => {
  return await api.put("/BookingReview/BookingReviewstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.delete("/BookingReview",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
const updateUser = async (token: string,data:ILogin) => {
  return await api.put("/user",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
}

const GetUsers = async (token: string) => {
  return await api.get("/user",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const DeleteUser = async (token: string,data:ILogin) => {
  return await api.delete("/user",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const GetItemById = async (token: string,itemId?:string) => {

  return await api.get("/ServiceItem/getbyid?itemId="+itemId,undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetECategory = async (token: string,id?:string,isAdmin?:any,page?:string,search?:string,showApproved?:boolean) => {
  let url=("/ECategory?page="+(page?page:-1)+"&userId="+id+"&isAdmin="+isAdmin+"&search="+search).toString();
  if(showApproved)
  {
   url+="&showApproved=true"
  } 
   
  return await api.get(url,undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const PostECategory = async (token: string,data:IECategory) => {
  return await api.post("/ECategory",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateECategory = async (token: string,data:IECategory) => {
  return await api.put("/ECategory",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteECategory = async (token: string,data:IECategory) => {
  return await api.delete("/ECategory",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetEProduct = async (token: string,id?:string,isAdmin?:any,page?:string,search?:string,showApproved?:boolean,categoryId?:number) => {
   
  let url=("/EProduct?page="+(page?page:-1)+"&userId="+id+"&isAdmin="+isAdmin+"&search="+search).toString();
  if(showApproved)
  {
   url+="&showApproved=true"
  } 
  if(categoryId)
  {
    url+="&categoryId="+categoryId
  }
  return await api.get(url,undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
}; 
const PostEProduct = async (token: string,data:IEProduct) => {
  return await api.post("/EProduct",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateEProduct = async (token: string,data:IEProduct) => {
  return await api.put("/EProduct",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteEProduct = async (token: string,data:IEProduct) => {
  return await api.delete("/EProduct",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetEProductByCategoryId = async (token: string,userId?:string,categoryId?:number) => {
  return await api.get("/EProduct/getbycategoryId?"+(userId!=undefined?`userId=${userId}`:""+(`categoryId=${categoryId}`)),undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};
const GetEOrder = async (token: string) => {
  return await api.get("/EOrder",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};


const PostEOrder = async (token: string,data:any) => {
  return await api.post("/EOrder",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const UpdateEOrder = async (token: string,data:IEOrder) => {
  return await api.put("/EOrder",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const UpdateEOrderStatus = async (token: string,data:IEOrder) => {
  return await api.put("/EOrder/bookingstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteEOrder = async (token: string,data:IEOrder) => {
  return await api.delete("/EOrder",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
const GetProductById = async (token: string,itemId?:string) => {
   return await api.get("/EProduct/GetProductById?itemId="+itemId,undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const GetECoupons = async (token: string) => {
  return await api.get("/ECoupons",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const GetSingleECoupon = async (token: string,code:string) => {
   return await api.get("/ECoupons/GetCouponBycode?code="+code,undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const PostECoupons = async (token: string,data:IECoupons) => {
  return await api.post("/ECoupons",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const UpdateECoupons = async (token: string,data:IECoupons) => {
  return await api.put("/ECoupons",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

 
const DeleteECoupons = async (token: string,data:IECoupons) => {
  return await api.delete("/ECoupons",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}

const GetDesktop = async (token: string,) => {
  let url=("/ServiceItem/getDesktop").toString();
   
  return await api.get(url,undefined,{
   headers: { Authorization: `Bearer ${token}` },
 });
};

export const repository = {
  login,
  register,
  GetServices,
  PostServices,
  UpdateServices,
  DeleteServices,
  GetCategory,
  PostCategory,
  DeleteCategory,
  UpdateCategory,
  GetServiceItem,
  PostServiceItem,
  UpdateServiceItem,
  DeleteServiceItem,
  GetBookings,
  PostBookings,
  UpdateBookings,
  DeleteBookings,
  GetBookingReviews,
  PostBookingReviews,
  UpdateBookingReviews,
  DeleteBookingReviews,
  UpdateBookingStatus,
  UpdateBookingReviewstatus,
  updateUser,
  GetUsers,
  DeleteUser,
  GetServiceItemByCategoryId,
  GetServiceItemByServiceId,
  GetItemById,
  DeleteECategory,
GetECategory,
PostECategory,
UpdateECategory,
GetEProduct,
PostEProduct,
UpdateEProduct,
GetEOrder,
DeleteEProduct,
PostEOrder,
UpdateEOrder,
UpdateEOrderStatus,
DeleteEOrder,
GetEProductByCategoryId,
GetProductById,
GetECoupons,
DeleteECoupons,
UpdateECoupons,
PostECoupons,
GetSingleECoupon,
GetServiceItemRental,
GetDesktop,
verify,confirmCode,resetPassword,resend
};
