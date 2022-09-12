 import Head from "next/head";
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
import { DisplayingErrorMessagesLoginSchema } from "../../../src/utiles/ErrorSchema";
import { ILogin } from "../../../src/interfaces/data/objects";
import { LoginUser } from "../../../src/functions/User";
import Textbox from "../../../src/components/textbox";
import Textbox1 from "../../../src/components/forms/textbox";
import {wrapper } from '../../../src/redux/store';

export default () => {
  const intl = useIntl();
  const { language } = router.query;
  const disptach = useDispatch();
  const routerr = useRouter()

  const Language = useSelector((x) => x.Language);
  const PostData = async (values) => {
 //@ts-ignore
disptach(LoginUser(values,routerr))
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
              }}
              validationSchema={DisplayingErrorMessagesLoginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await PostData(values);
              }}
            >
              {({ errors, touched, getFieldProps, handleSubmit }) => {
                return (
                  <div className="login-form p-an">
                    <h5 className="text-center">Welcome Back</h5>
                    <h6 className="text-center mb-3">
                      Sign in to your account
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
                      <div className="d-flex jusity-content-end pb-2 kjado3er">
                        <div className="ml-auto">
                          {" "}
                          <a
                            href="/en-AE/forgot"
                            id="blue"
                            className="text-danger text-decoration-none"
                          >
                            Forgot password?
                          </a>{" "}
                        </div>
                      </div>
                      <button
                        type="submit"
                        defaultValue="Log in"
                        className="btn-brd"
                      >
                        <span> Login</span>
                      </button>
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
          </div>
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


 