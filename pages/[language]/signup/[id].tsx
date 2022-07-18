import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import Navbar from "../../../src/components/header/Navbar2";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import {
  DisplayingErrorMessagesLoginSchema,
  DisplayingErrorMessagesSignupSchema,
} from "../../../src/utiles/ErrorSchema";
import { ILogin } from "../../../src/interfaces/data/objects";
import { LoginUser, RegisterUser } from "../../../src/functions/User";
import Textbox from "../../../src/components/textbox";
import { wrapper } from "../../../src/redux/store";
import Textbox1 from "../../../src/components/forms/textbox";

export default () => {
  const intl = useIntl();
  const { language } = router.query;
  const disptach = useDispatch();
  const routerr = useRouter();

  const Language = useSelector((x) => x.Language);
  const PostData = async (values) => {
    //@ts-ignore
    disptach(RegisterUser(values, routerr));
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
         
          <div className="lgn-box">
            <Formik
            initialValues={{
              userName: "",
              password: "",
              FullName: "",
            }}
            validationSchema={DisplayingErrorMessagesSignupSchema}
onSubmit={async (values, { setSubmitting }) => {
  await PostData(values);
}}
            >
              {({ errors, touched, getFieldProps, handleSubmit }) => {
                return (
                  <div className="login-form p-an">
                    <h5 className="text-center">Welcome Back</h5>
                    <h6 className="text-center mb-3">
                      Create Account
                    </h6>
                    <Form className="pt-4">
                      <div className="d-flex flex-column pb-3 w-100">
                        <Textbox1
                          label="Full Name"
                          getFieldProps={getFieldProps}
                          feildName="FullName"
                          touched={touched.FullName}
                          error={errors.FullName}
                          placeholder="Input Full Name"
                          type="input"
                        />
                      </div>
                      <div className="d-flex flex-column pb-3 w-100">
                        <Textbox1
                          label="Email"
                          getFieldProps={getFieldProps}
                          feildName="userName"
                          touched={touched.userName}
                          error={errors.userName}
                          placeholder="Input Email"
                          type="input"
                        />
                      </div>
                      <div className="d-flex flex-column pb-3">
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
                   
                      <div className="text-left">
          <p>{intl.formatMessage({ id: "ac79" })}</p>
          <p>{intl.formatMessage({ id: "ac80" })}</p>
        </div>
                      <button
                        type="submit"
                        defaultValue="Log in"
                        className="btn-brd"
                      >
                        <span> Register Now</span>
                      </button>
                        <div className="mt-4">
                        <div className="d-flex jusity-content-end pb-2 kjado3er">
                        <div className="ml-auto">
                          <p>already have an account <span
                            id="blue"
                            className="text-danger text-decoration-none"
                            
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              language != undefined
                                ? router.push("/" + Language + "/login")
                                : router.push("/en-AE/login");
                            }}
                          >
                            Login
                          </span></p>
                        </div>
                      </div>
                        </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div className="container">
        <Footer />
      </div>{" "}
    </div>
  );
};
function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res, ...etc }) => {
      const cookies = new Cookies(req, res);
      const Tokken = cookies.get("token");
      if (Tokken && Tokken != null) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
);
