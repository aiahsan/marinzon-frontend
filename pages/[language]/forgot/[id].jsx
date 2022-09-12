 import Head from "next/head";
 import React from 'react';
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import Navbar from "../../../src/components/header/Navbar2";
import Topbar from "../../../src/components/header/Topbar";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer";
 import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {Formik,Form} from 'formik'
import { DisplayingErrorMessagesVerifySchema ,DisplayingErrorMessagesConfirmSchema,DisplayingErrorMessagesChangeSchema} from "../../../src/utiles/ErrorSchema";
import { ILogin } from "../../../src/interfaces/data/objects";
import { LoginUser } from "../../../src/functions/User";
import Textbox from "../../../src/components/textbox";
import Textbox1 from "../../../src/components/forms/textbox";
import {wrapper } from '../../../src/redux/store';
import {repository} from '../../../src/utiles/repository'
import { messageAction } from "../../../src/redux/actionMethodes/message";
import { loadingAction } from "../../../src/redux/actionMethodes/loader";
import Loader from "../../../src/components/loader";


export default () => {
  const intl = useIntl();
  const { language } = router.query;
  const dispatch = useDispatch();
  const routerr = useRouter()
  const Loading = useSelector((x) => x.Loading);
  const [currentPage,setcurrentPage]=React.useState(0);
  const [CurrentUser,setCurrentUser]=React.useState();
  const Language = useSelector((x) => x.Language);
  const PostData = async (values) => {
   
    (async ()=>{
      try {
        dispatch(loadingAction(true));
         
        const { status, data }  =  await repository
          .verify(values)
          .then((x) => x);
          if (status == 200 && data?.success == true) {
  
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
           setcurrentPage(1);
           setCurrentUser(values);
        } else {
           dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message: data?.message,
            })
          );
        }
      } catch (e) {
         dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 0,
            message: e  ,
          })
        );
      }
     })()
};
const PostData1 = async (values) => {
   
  (async ()=>{
    try {
      dispatch(loadingAction(true));
       
      const { status, data }  =  await repository
        .confirmCode({...values,
        userName:CurrentUser?.userName || undefined
        })
        .then((x) => x);
        if (status == 200 && data?.success == true) {

        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );
         setcurrentPage(2);
         setCurrentUser(values);
      } else {
         dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: data?.message,
          })
        );
      }
    } catch (e) {
       dispatch(loadingAction(false));
      dispatch(
        messageAction({
          type: 0,
          message: e  ,
        })
      );
    }
   })()
};
const PostData2 = async (values) => {
   
  (async ()=>{
    try {
      dispatch(loadingAction(true));
       
      const { status, data }  =  await repository
        .resetPassword({...values,
        userName:CurrentUser?.userName || undefined
        })
        .then((x) => x);
        if (status == 200 && data?.success == true) {

        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );
         setcurrentPage(3);
         setCurrentUser(values);
      } else {
         dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: data?.message,
          })
        );
      }
    } catch (e) {
       dispatch(loadingAction(false));
      dispatch(
        messageAction({
          type: 0,
          message: e  ,
        })
      );
    }
   })()
};
const PostData3 = async ( ) => {
   
  (async ()=>{
    try {
      dispatch(loadingAction(true));
       
      const { status, data }  =  await repository
        .resend({
        userName:CurrentUser?.userName || undefined
        })
        .then((x) => x);
        if (status == 200 && data?.success == true) {

        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );
       } else {
         dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: data?.message,
          })
        );
      }
    } catch (e) {
       dispatch(loadingAction(false));
      dispatch(
        messageAction({
          type: 0,
          message: e  ,
        })
      );
    }
   })()
};
  return (
    <div>
      <div className=" ">
         <Navbar />
      </div>
     
      <div className="login-box-p">
      <div className="container">
      <div className="d-flex justify-content-between align-items-center mv100">
    
        <div className="lgn-p">
       {
        currentPage==0? <div className="lgn-box">
        <Formik
          initialValues={{
            userName: "",
           }}
          validationSchema={DisplayingErrorMessagesVerifySchema}
          onSubmit={async (values, { setSubmitting }) => {
            await PostData(values);
          }}
        >
          {({ errors, touched, getFieldProps, handleSubmit }) => {
            return (
              <div className="login-form p-an">
                <h5 className="text-center">Welcome Back</h5>
                <h6 className="text-center mb-3">
                  Verify your email
                </h6>
                <Form className="pt-4">
                  <div className="d-flex flex-column pb-3 w-100">
                    <Textbox1
                      label="Email / Phone Number"
                      getFieldProps={getFieldProps}
                      feildName="userName"
                      touched={touched.userName}
                      error={errors.userName}
                      placeholder="Input Email / Phone Number"
                      type="input"
                    />
                  </div>
                  
                  <div className="d-flex jusity-content-end pb-2 kjado3er">
                    <div className="ml-auto">
                      {" "}
                      <a
                                  id="blue"

                        href="/en-AE/login"
                        className="text-danger text-decoration-none"
                      >
                       Login
                      </a>{" "}
                    </div>
                  </div>
                  {Loading === true ? <Loader />:<><button
                    type="submit"
                    defaultValue="Log in"
                    className="btn-brd"
                  >
                    <span>Verify Email</span>
                  </button></>}
                 
                    <div className="mt-4">
                    <p>
          {intl.formatMessage({ id: "ac70" })}{" "}
          <span
            id="blue"
            style={{ cursor: "pointer" }}
            onClick={() => {
              language != undefined
                ? router.push("/" + Language + "/signup")
                : router.push("/en-AE/signup");
            }}
          >
            {intl.formatMessage({ id: "ac71" })}
          </span>
        </p>
                    </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>:<>
      {currentPage==1?<div className="lgn-box">
        <Formik
          initialValues={{
            code: "",
           }}
          validationSchema={DisplayingErrorMessagesConfirmSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await PostData1(values);
          }}
        >
          {({ errors, touched, getFieldProps, handleSubmit }) => {
            return (
              <div className="login-form p-an">
                <h5 className="text-center">Code Confirmation</h5>
                <h6 className="text-center mb-3">
                Please check your Email to verify confirmation code
                </h6>
                <Form className="pt-4">
                  <div className="d-flex flex-column pb-3 w-100">
                    <Textbox1
                      label="Confirmation Code"
                      getFieldProps={getFieldProps}
                      feildName="code"
                      touched={touched.code}
                      error={errors.code}
                      placeholder="Input Confirmation code"
                      type="input"
                    />
                  </div>
                  
                  <div className="d-flex jusity-content-end pb-2 kjado3er">
                    <div className="ml-auto">
                      {" "}
                      <a
                      style={{cursor:"pointer"}}
                      id="blue"
                        onClick={(e)=>{
e.preventDefault();
PostData3()
                        }}
                        className="text-danger text-decoration-none"
                      >
                       Resend Code
                      </a>{" "}
                    </div>
                  </div>
                  {Loading === true ? <Loader />:<><button
                    type="submit"
                    defaultValue="Log in"
                    className="btn-brd"
                  >
                    <span>Verify Code</span>
                  </button></>}
                 
                    <div className="mt-4">
                    <p>
          {intl.formatMessage({ id: "ac70" })}{" "}
          <span
            id="blue"
            style={{ cursor: "pointer" }}
            onClick={() => {
              language != undefined
                ? router.push("/" + Language + "/signup")
                : router.push("/en-AE/signup");
            }}
          >
            {intl.formatMessage({ id: "ac71" })}
          </span>
        </p>
                    </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>:<>
      
      {currentPage==2?<div className="lgn-box">
        <Formik
          initialValues={{
            password: "",
           }}
          validationSchema={DisplayingErrorMessagesChangeSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await PostData2(values);
          }}
        >
          {({ errors, touched, getFieldProps, handleSubmit }) => {
            return (
              <div className="login-form p-an">
                <h5 className="text-center">Change Password</h5>
                <h6 className="text-center mb-3">
                Verify confirmation code
                </h6>
                <Form className="pt-4">
                  <div className="d-flex flex-column pb-3 w-100">
                  <Textbox1
                          label="Password"
                          getFieldProps={getFieldProps}
                          feildName="password"
                          touched={touched.password}
                          error={errors.password}
                          placeholder="Input Password"
                          type="password"
                        />
                  </div>
                  
                
                  {Loading === true ? <Loader />:<><button
                    type="submit"
                    defaultValue="Log in"
                    className="btn-brd"
                  >
                    <span>Change Password</span>
                  </button></>}
                 
                    <div className="mt-4">
                    <p>
          {intl.formatMessage({ id: "ac70" })}{" "}
          <span
            id="blue"
            style={{ cursor: "pointer" }}
            onClick={() => {
              language != undefined
                ? router.push("/" + Language + "/signup")
                : router.push("/en-AE/signup");
            }}
          >
            {intl.formatMessage({ id: "ac71" })}
          </span>
        </p>
                    </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>:<>
      <div className="lgn-box">
        <Formik
          initialValues={{
            password: "",
           }}
          validationSchema={DisplayingErrorMessagesConfirmSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await PostData2(values);
          }}
        >
          {({ errors, touched, getFieldProps, handleSubmit }) => {
            return (
              <div className="login-form p-an">
                <h5 className="text-center">Successfully Password Changed</h5>
                <h6 className="text-center mb-3">
                Password has been reset successfully
                </h6>
              
              </div>
            );
          }}
        </Formik>
      </div>
      </>}
      </>}
      </>
       }
         
        </div>
      </div>
    </div>
    </div>
      <div className="container">
        <Footer />
      </div>    </div>
  );
};
function parseCookies(req){
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
   const cookies = new Cookies(req, res)
   const Tokken= cookies.get('token') 
      if (Tokken&&Tokken!=null) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
 }
)


 