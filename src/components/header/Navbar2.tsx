import React from "react";
import Image from "next/image";
import { BiCategoryAlt } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import {FaOpencart} from 'react-icons/fa'
import {ImageUrl} from '../../utiles/baseUrl'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import router, { useRouter } from "next/router";
import { LogOutAction } from "../../redux/actionMethodes/user/idnex";
import { Dropdown } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import CategoryAccordian from '../../components/generic/CategoryAccordian'
import Loader from "../loader";
let expand = "xl";
const LogoImage = require("../../images/image 5.png");

export default ({isHome}:{isHome?:boolean}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1199px)'
  })
  const intl = useIntl();
  const { language } = router.query;
  const Language = useSelector((x) => x.Language);
  const Services = useSelector((x) => x.Categories);
  const User = useSelector((x: IReduxStore) => x.User);
  const [currentS, setcurrentS] = React.useState(undefined);
  const dispatch = useDispatch();
  //@ts-ignore
  const Carts=useSelector(x=>x.Cart);
  const Loading = useSelector((x: IReduxStore) => x.Loading);

  console.log(Services,"cccc");
  return (
    <>
      {" "}
      <div className="ankf-js3eiwne">
        <Navbar key={expand} bg="" expand={expand} fixed="top" id="nav-main-cst" className={`m-0 ${isHome?"":"hkjadfhsd-3213"}`}>
          <Container fluid>
            <Navbar.Brand onClick={()=>{
                     language != undefined
                     ? router.push("/" + Language )
                     : router.push("/en-AE");
                  }}>
              <Image src={LogoImage} width={120} height={31} className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               Marinzon
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="nckdsma-serma d-flex w-100 align-items-center justify-content-between ksan-2enj23">
                  
              <div className="sdmkasd-wew">
                    <ul className="exo-menu">
                      <li className="mega-drop-down">
                        <div className="nav-span-box">
                          <BiCategoryAlt color="white" size={22} />
                          <h5>Categories</h5>
                        </div>
                        <div className="animated fadeIn mega-menu">
                          <div className="mega-menu-wrap">
                            <div className="row">
                              {
                                /*
                                <div className="col-md-3 d-flex flex-column">
                                <h5>Services</h5>
                                {Services.map((x) => (
                                  <p
                                    onClick={() => {
                                      setcurrentS(x);
 
                                    }}
                                   
                                    onMouseEnter={() => {
                                      setcurrentS(x);
                                    }}
                                  >
                                    {x.title}
                                  </p>
                                ))}
                              </div>
                                */
                              }
                               <div className="col-md-4 d-flex flex-column">
                                <h5>Categories</h5>
                                {Loading === true ? <Loader /> : Services?.map((data) => (
                                  
                                  <p
                                    onClick={() => {
                                      language != undefined
                                      ? router.push({pathname:Language != undefined ? "/"+Language + "/explore" : "/en-AE/explore",query:{
                                        dataqurey:(data?.title+" "+data?.id).replaceAll(' ', '-').toLowerCase()
                                    }})
                                      : router.push({pathname:"/en-AE/explore",query:{
                                        dataqurey:(data?.title+" "+data?.id).replaceAll(' ', '-').toLowerCase()
                                    }});
                                    }}
                                    onMouseEnter={() => {
                                      }}
                                  >
                                    {data.title}
                                   </p>
                                ))}
                                
                              </div>
                              {
                                
                                currentS!=undefined?<>
                               
                              {/* <div className="col-md-4 d-flex flex-column">
                                <img src={ImageUrl+currentS?.image}/>
                                 
                              </div> */}
                                </>:<></>
                              }
                              {/* <div className="col-md-4">
                                {Services.map(x=><a>{x.title}</a>)}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <>
                  {/* <Nav.Link   onClick={() => {
                      language != undefined
                      ? router.push("/" + Language + "/services")
                      : router.push("/en-AE/services");
                    }}>Services</Nav.Link> */}
                  <Nav.Link   onClick={() => {
                      language != undefined
                      ? router.push("/" + Language + "/ecommerce")
                      : router.push("/en-AE/ecommerce");
                    }}>Store</Nav.Link>
   <Nav.Link   onClick={() => {
                      language != undefined
                      ? router.push("/" + Language + "/rental")
                      : router.push("/en-AE/rental");
                    }}>Rental</Nav.Link>
                  {/* <div className="topSearchbar">
                    <div className="w-100">
                      <input
                        type="text"
                        placeholder="Search everything at Marinzon"
                      />
                    </div>
                    <div className="icon-search-bx">
                      <GoSearch color="white" />
                    </div>
                  </div> */}
                   <Nav.Link href="#action1">Contact Us</Nav.Link>
                  <Nav.Link onClick={()=>{
                     language != undefined
                     ? router.push("/" + Language + "/about")
                     : router.push("/en-AE/about");
                  }}>About Us</Nav.Link>
                  <a target="blank" className="nav-link" href="http://vendor.marinzon.com/">Vendor Login</a>
                  
                  <Nav.Link
                    onClick={() => {
                      if (User != null) {
                        dispatch(LogOutAction());
                      } else {
                        language != undefined
                          ? router.push("/" + Language + "/login")
                          : router.push("/en-AE/login");
                      }
                    }}
                    className="lgn-btn"
                  >
                    {User != null
                      ? "Log out"
                      : intl.formatMessage({ id: "en8" })}
                  </Nav.Link>
                  <Nav.Link onClick={()=>{
                     language != undefined
                     ? router.push("/" + Language + "/cart")
                     : router.push("/en-AE/cart");
                  }}  className="cart-lg">
                    <FaOpencart/>
                      {
                        Carts.length>0? <div className="nlaksd-ame">
                        {
                          Carts?.length
                        }
                      </div>:<></>
                      }
                  </Nav.Link>
 
                  <div className="top-bar">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src="/eng.png" />{" "}
                        {intl.formatMessage({ id: "language" })}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            if (router?.pathname == "/") {
                              router.push("/en-AE");
                            } else {
                              router.query.language = "en-AE";
                              router.push(router);
                            }
                          }}
                        >
                          English
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            if (router?.pathname == "/") {
                              router.push("/ar-AE");
                            } else {
                              router.query.language = "ar-AE";
                              router.push(router);
                            }
                          }}
                        >
                          Arabic
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    
                  </div>
                 

                  </>
                </div>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
