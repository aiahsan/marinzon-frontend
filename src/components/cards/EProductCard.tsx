import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { ImageUrl } from "../../utiles/baseUrl";
import { IEProduct } from "../../interfaces/data/objects";
import HomeSCard from '../cards/homeSCard';
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
  const items = useSelector((x: IReduxStore) => x.EProducts);

  return (
    <div>
      <main>
        <section className="results-section results--grid">
          {items.map((x:IEProduct, i) => (
            <>
              <Link
                href={{
                  pathname:
                    Language != undefined
                      ? "/" + Language + "/product"
                      : "/en-AE/product",
                  query: {
                    dataqurey: (x?.title + " " + x?.id)
                      .replaceAll(" ", "-")
                      .toLowerCase(),
                  },
                }}
              >
               <HomeSCard  icon="b1"
              head={x.title}
              title={x.description}
              price={x.price.toString()}
              product={x}
              />
              </Link>
            </>
          ))}
        </section>
      </main>
    </div>
  );
};
export default App;
