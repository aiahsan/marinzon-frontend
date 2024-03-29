import React from "react";
import Link from "next/link";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IService } from "../../interfaces/data/objects";
import { ImageUrl } from "../../utiles/baseUrl";

const img = require("../../images/service-2.png");
const App = ({ data, bg,onClick }: { data: IService; bg: String,onClick?:any }) => {
  const intl = useIntl();
  const { language } = router.query;
  const Language = useSelector((x) => x.Language);
  
  return (
    <Link
      href={onClick?{pathname:Language != undefined ? "/"+Language + "/services/"+onClick : "/en-AE/services/"+onClick,query:{
        dataqurey:(data?.title+" "+data?.id).replaceAll(' ', '-').toLowerCase()
    }}:{pathname:Language != undefined ? "/"+Language + "/explore" : "/en-AE/explore",query:{
        dataqurey:(data?.title+" "+data?.id).replaceAll(' ', '-').toLowerCase()
    }}}
    >
      <div className="d-flex service-card" style={{ backgroundColor: bg }}>
        <div>
          <h1>{data?.title}</h1>
          <h5>{data?.description}</h5>
        </div>
        <div className="njnads-sner">
          <img src={ImageUrl + data?.image} />
        </div>
      </div>
    </Link>
  );
};
export default App;
