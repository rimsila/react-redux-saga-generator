import axios from "axios";
import { getAccessToken } from "@/utils/auth_token";
import { catchError } from "./error";
import { ROUTE_API } from "./route-util";

type MethodType = "get" | "delete" | "post" | "put" | "patch";

const httpMethod = async (
  method?: MethodType,
  url?: string,
  params?: any,
  data?: any,
  newBaseURL?: string,
) => {
  // * --- get token from user ----
  if (Object.keys(getAccessToken()).length > 0) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAccessToken()}`;
  } else {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer 0b4c0fa225e4e432de7e51fe13691e86e27ac12a360ca251bf714eeb00942325`; //* default token for test
  }

  //* header form method delete
  axios.defaults.headers.delete["Content-Type"] = "application/json";

  // if has newBaseURL
  if (newBaseURL) {
    axios.defaults.baseURL = newBaseURL;
  } else {
    axios.defaults.baseURL = ROUTE_API.root;
  }

  //* Request !body it will have default param
  if (!params) {
    axios.defaults.params = {
      CLIENT_API: "CUSTOM",
      REGISTER_ID: "190e35f7e007f252956",
      FCM_ID: "",
      CLIENT_OS: "CUSTOM",
      LAT: 11.5620233,
      LNG: 104.9126117,
      CLIENT_VER: "1.0.20190527",
      CLIENT_BUNDLE: "com.bongtk.bloc",
      data: { lng: 0, lat: 0, page: 1, ...data },
    };
  }

  //render http base on param method
  const renderMethod = () => {
    switch (method) {
      case "get":
        return axios.get(url, params);
      case "post":
        return axios.post(url, params);
      case "delete":
        return axios.delete(url, params);
      case "put":
        return axios.put(url, params);
      case "patch":
        return axios.patch(url, params);
      default:
        axios.get(url, params);
        break;
    }
  };

  try {
    const res = await renderMethod();
    console.log("******REQUEST*******", res);
    //set success or error to catchError
    if (method !== "get") {
      catchError(undefined, res);
    }
    return res;
  } catch (catchAxiosError) {
    catchError(catchAxiosError);
    return catchAxiosError;
  }
};

export { httpMethod };
