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
       <Accordion defaultActiveKey={services.map((x:ICategory)=>x.id?.toString())} alwaysOpen>
       {
         services.map(x=>{
           return  <Accordion.Item eventKey={x.id?.toString()}>
           <Accordion.Header>
          {x.title}
           </Accordion.Header>
           <Accordion.Body>
             <ul>
               {
                 x?.items.map((data:IItem)=><li onClick={()=>{
                    router.push( {
                      pathname:
                        Language != undefined
                          ? "/" + Language + "/service"
                          : "/en-AE/service",
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
           </Accordion.Body>
         </Accordion.Item>
         })
       }
      </Accordion> 
    </div>
  );
};
export default App;
