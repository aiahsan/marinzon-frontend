import Explore from './[id]'
export default ()=>{
    return <Explore/>
}

export async function getServerSideProps(context:any) {
    const { language,orderNumber } = context.query;

    console.log(language,"pcc")   
    console.log(orderNumber,"pcc")   
    if(orderNumber)
    {
            console.log("..")
    }
    else
    {
        context.res.setHeader("location", "/"+language || "en-AE");
        context.res.statusCode = 302;
        context.res.end();
    }
    return {
      props: {}, // will be passed to the page component as props
    }
  }