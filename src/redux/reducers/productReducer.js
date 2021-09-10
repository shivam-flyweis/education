import {
  PRODUCT_DATA_FAILS,
  PRODUCT_DATA_REQUEST,
  PRODUCT_DATA_SUCCESS,
} from "../constant/productconstant";

const initialState = {
  productData: [],
  productDetail: {},
  response: {},
  singleData: [],
  loading: true,
  msg: "",
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        singleData: action.result,
        loading: action.payload,
        msg: action.msg,
      };
    case PRODUCT_DATA_FAILS:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ProductReducer;
