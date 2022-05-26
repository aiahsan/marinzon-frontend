import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData, IEProduct } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addEProductAM, deleteEProductAM, setEProductAM, updateEProductAM } from "../../redux/actionMethodes/EProduct";
import { repository } from "../../utiles/repository";

export function GetEProduct() {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .GetEProduct(getState().User?.token || "")
          .then((x) => x);
        if (status == 200 && data?.success == true) {

          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
          console.log(data,"ddddd")
            dispatch(setEProductAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function AddEProduct(dataP:IEProduct) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .PostEProduct(getState().User?.token || "",dataP)
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(addEProductAM(data?.data));
            return 1;

        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function UpdateEProduct(dataP:IEProduct) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .UpdateEProduct(getState().User?.token || "",dataP)
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(updateEProductAM(data?.data));
            return 1;
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function DeleteEProduct(dataP:IEProduct) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .DeleteEProduct(getState().User?.token || "",{
            ...dataP,
            recordUserId:getState().User?.Id
          })
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(deleteEProductAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function GetProductsByCategoryID(categoryId:number) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
         dispatch(loadingAction(true));
        const isAdimn=getState()?.User?.isAdmin;
          const { status, data }: any = await repository
          .GetEProductByCategoryId(getState().User?.token || "",isAdimn==false?getState().User?.id:undefined,categoryId)
          .then((x) => x);
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
          dispatch(setEProductAM(data?.data));
          } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}