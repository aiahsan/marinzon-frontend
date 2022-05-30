import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IAddress } from '../../interfaces/data/objects';
import { addAddressAM, updateAddressAM } from '../../redux/actionMethodes/Address';
import { messageAction } from '../../redux/actionMethodes/message';
import { DisplayingErrorMessagesAddressSchema } from '../../utiles/ErrorSchema';
import Textbox from '../textbox';
export default ({setshowform,data,setData}:{setshowform:any,data:IAddress | undefined,setData:any})=>{
    const dispatch=useDispatch();
    const PostData=(values:IAddress)=>{
        if(data)
        {
            dispatch(updateAddressAM({
                ...values,
            }))
            dispatch(messageAction({
                type:1,
                message:"Address updated successfully"
            }))
            setData(undefined);
        }
        else
        {
            dispatch(addAddressAM({
                ...values,
                //@ts-ignore
                 id:parseInt(Date.now())
            }))
            dispatch(messageAction({
                type:1,
                message:"Address added successfully"
            }))
        }
        setshowform(false);
    }
    return  <Formik
    initialValues={{
      name: data?.name||"",
      address: data?.address || "",
      id: data?.id || 0,
    }}
    validationSchema={DisplayingErrorMessagesAddressSchema}
    onSubmit={async (values, { setSubmitting }) => {
      await PostData(values);
    }}
    enableReinitialize={true}

  >
    {({ errors, touched, getFieldProps, handleSubmit }) => {
      return (
        <div className="kj-jaikmsjdkwe-we">
           
          <Form className="pt-4">
            <div className="d-flex flex-column pb-3 w-100">
              <Textbox
                label="Name"
                getFieldProps={getFieldProps}
                feildName="name"
                touched={touched.name}
                error={errors.name}
                placeholder="Input name"
                type="input"
              />
            </div>
            <div className="d-flex flex-column pb-3">
              <Textbox
                label="Address"
                getFieldProps={getFieldProps}
                feildName="address"
                touched={touched.address}
                error={errors.address}
                placeholder="Input Address"
                type="textarea"
              />
            </div>
          
            <input
              type="submit"

              value={data?"Update Address":"Add New Address"}
              className="njsa-an3edwaue3 btn my-3 w-100"
            />
          </Form>
        </div>
      );
    }}
  </Formik>
}