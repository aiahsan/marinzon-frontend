import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { ImageUrl } from "../../utiles/baseUrl";
const images = [
  "https://cdn.wallpaper.com/main/2015/10/heesen_p.jpg",
  "https://pro-theme.com/html/nevica/assets/img/b001.jpg",
  "https://pro-theme.com/html/nevica/assets/img/b001.jpg",
  "https://demo.themeies.com/davit/images/slider/slider3.jpg",
];
const App = () => {
  const intl = useIntl();
  const { language } = router.query;
  const Language = useSelector((x) => x.Language);
  const items = useSelector((x: IReduxStore) => x.ServiceItem);
  return (
    <div>
      <main>
        <section className="results-section results--grid">
          {items.map((x, i) => (
            <>
              <Link
                href={{
                  pathname:
                    Language != undefined
                      ? "/" + Language + "/service"
                      : "/en-AE/service",
                  query: {
                    dataqurey: (x?.title + " " + x?.id)
                      .replaceAll(" ", "-")
                      .toLowerCase(),
                  },
                }}
              >
                <a className="profile">
                  <div className="profile__image">
                    <img src={ImageUrl + x?.image} alt="yacht" />
                  </div>
                  <div className="profile__info">
                    <h4>{x.title}</h4>
                    <div className="na-dnw2enwqw">
                    <p className="profile__info__extra">{x.description}</p>
                    </div>
                    <div className="profile-box">
                      <div>
                        <h3>{intl.formatMessage({ id: "ac35" })}</h3>
                        <h3 className="m-0">
                          {
                            //@ts-ignore
                            Math.min.apply(
                              Math,
                              x.serviceItemServices
                                ?.map((y) =>
                                  y.serviceItemServicePrices?.map(
                                    (c) => c.serviceItemServiceValue
                                  )
                                )
                                .flatMap((j) => [...j])
                            )
                          }
                        </h3>
                      </div>
                      <div>
                        <h3>{intl.formatMessage({ id: "ac37" })}</h3>
                        <h3 className="m-0">
                        {intl.formatMessage({ id: "ac38" })}
                        </h3>
                      </div>
                      <div>
                        <h3>{intl.formatMessage({ id: "ac39" })}</h3>
                        <h3 className="m-0">
                        {x.user?.fullName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          ))}
        </section>
      </main>
    </div>
  );
};
export default App;
