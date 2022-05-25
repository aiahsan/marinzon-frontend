import React from "react";
import { ImageUrl } from "../../utiles/baseUrl";
import Icons from "../icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartAM,
  deleteCartAM,
  updateCartAM,
} from "../../redux/actionMethodes/Cart";
import { IEProduct } from "../../interfaces/data/objects";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
export default ({
  icon,
  head,
  title,
  price,
  image,
  product,
}: {
  icon: string;
  head: string;
  title: string;
  price?: string;
  image?: string;
  product?: IEProduct;
}) => {
  const Carts = useSelector((x) => x.Cart).map((x) => x.id);
  const dispatch = useDispatch();
  return (
    <div className="nkacmsdoe-krr nkacmsdoe-krr1 w-100">
      <div>
        <div className="d-flex align-items-center">
          <div>
            {price && product ? (
              <div className="njmfsad-n3ed">
                <img
                  src={
                    product?.image ? ImageUrl + product?.image : "/image 10.png"
                  }
                />
              </div>
            ) : (
              <div className="nkcsdamoe-awel">
                <Icons name={icon} />
              </div>
            )}
          </div>

          <div className="mnjkdas-aned3e">
            <div>
              <h5>{head}</h5>
              <p>{title}</p>
            </div>
            <div className="w-100">
              {price != undefined ? (
                <div className="d-flex justify-content-between hjdkf-serjferf nckdsma-serma">
                  <div>
                    <h3>{price}-AED</h3>
                  </div>
                  <div>
                    <button
                      className="njsa-an3edwaue3 btn"
                      onClick={() => {
                        if (product != undefined) {
                          if (Carts.includes(product.id))
                            dispatch(deleteCartAM(product));
                          else dispatch(addCartAM({ ...product, quantity: 1 }));
                        }
                      }}
                    >
                      {Carts.includes(product?.id) ? "Remove from" : "Add To"}{" "}
                      Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div className="w-100  njasknxs-jawems">
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      if (product?.quantity > 1) {
                        dispatch(
                          updateCartAM({
                            ...product,
                            quantity: parseInt(product?.quantity) - 1,
                          })
                        );
                      } else {
                        dispatch(deleteCartAM(product));
                      }
                    }}
                  >
                    <HiOutlineMinusCircle />
                  </button>
                </div>
                <div>
                  <p> {product?.quantity}</p>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(
                        updateCartAM({
                          ...product,
                          quantity: parseInt(product?.quantity) + 1,
                        })
                      );
                    }}
                  >
                    <HiOutlinePlusCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
