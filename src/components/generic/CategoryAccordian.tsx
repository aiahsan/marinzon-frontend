import React from "react";
import { Accordion } from "react-bootstrap";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { ICategory, IItem } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { useRouter } from "next/router";
const App = ({_filters,_setfilters}:{_filters:any,_setfilters:any}) => {
  const intl = useIntl();
  const services = useSelector((x: IReduxStore) => x.Categories);
  const router=useRouter();
  const Language = useSelector((x) => x.Language);

  React.useEffect(()=>{
    console.log(services,"sssss")
  },[])
  return (
    <div className="exp-tab">
    <h6>Categories</h6>
    <ul>
    {
     services.map((data:IECategory)=><li onClick={()=>{
        router.push( {
            pathname:
              Language != undefined
                ? "/" + Language + "/explore"
                : "/en-AE/explore",
            query: {
              dataqurey: (data?.title + " " + data?.id)
                .replaceAll(" ", "-")
                .toLowerCase(),
            },
          });
    
    
       // _setfilters({
       //    ..._filters,
       //    categoryId:y.id,
       //    serviceId:undefined
       //  });
      }}>{data.title }</li>)
    }
     
    </ul>
    </div>
  );
};
export default App;
