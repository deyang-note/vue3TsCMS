// service统一出口
import DYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
const dyRequest = new DYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptors: (config) => {
            const token = "hhh";
            if (token) {
                ;
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        requestInterceptorsCatch: (err) => {
            return err;
        },
        responseInterceptors: (res) => {
            return res;
        },
        responseInterceptorsCatch: (err) => {
            return err;
        }
    }
});
export default dyRequest;
//# sourceMappingURL=index.js.map