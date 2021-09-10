import axios from "axios";
import {
  PRODUCT_DATA_FAILS,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from "../constant/productconstant";

// Fetch alll product
const loadProduct = (id) => {
  console.log(id);
  return function (dispatch) {
      dispatch({
        type: PRODUCT_DATA_REQUEST,
      });

    let OPTION = {
      url: `http://localhost:5000/student/course/find/${id}`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    console.log(OPTION);

    axios(OPTION)
      .then((res) => {
        dispatch(loadProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_DATA_FAILS,
          payload: false,
          error: error,
          msg: "product not found",
        });
      });
  };
};
export const loadProductPre = (data)=>{
    return{
        type:PRODUCT_DATA_SUCCESS,
        result:data,
        payload:false,
        msg:'Success'
    }
}

export {
    loadProduct
}