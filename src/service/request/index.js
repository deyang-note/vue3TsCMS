import axios from "axios";
import { ElLoading } from "element-plus";
const DEFAULT_LOADING = true;
class DYRequest {
    instance;
    interceptors;
    showLoading;
    loading;
    constructor(config) {
        // 创建 axios 实例
        this.instance = axios.create(config);
        // 保存基本信息
        this.showLoading = config.showLoading ?? DEFAULT_LOADING;
        this.interceptors = config.interceptors;
        // 使用拦截器
        // 从 config 中取出的拦截器是对应实例的拦截器
        this.instance.interceptors.request.use(this.interceptors?.requestInterceptors, this.interceptors?.requestInterceptorsCatch);
        this.instance.interceptors.response.use(this.interceptors?.responseInterceptors, this.interceptors?.responseInterceptorsCatch);
        // 添加所有实例都有的拦截器
        this.instance.interceptors.request.use((config) => {
            if (this.showLoading) {
                this.loading = ElLoading.service({
                    lock: true,
                    text: "请在请求数据...",
                    background: "rgba(0, 0, 0, 0.5)"
                });
            }
            return config;
        }, (err) => {
            return err;
        });
        this.instance.interceptors.response.use((res) => {
            // 将 loading 移除
            this.loading?.close();
            const data = res.data;
            if (data.returnCode === "-1001") {
                console.log("请求失败~，错误信息");
            }
            else
                return res.data;
        }, (err) => {
            // 例子：判断不同的 HttpErrorCode显示不同的错误信息
            if (err.response.status === 404) {
                console.log("404的错误～");
            }
            return err;
        });
    }
    request(config) {
        return new Promise((resolve, reject) => {
            // 1.单个请求对数据的处理
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config);
            }
            // 2.将 showLoading 设置为 true，这样不会影响下一个请求
            if (config.showLoading === false) {
                this.showLoading = config.showLoading;
            }
            this.instance
                .request(config)
                .then((res) => {
                // 1.单个请求对数据的处理
                if (config.interceptors?.responseInterceptors) {
                    res = config.interceptors.responseInterceptors(res);
                }
                console.log(res);
                // 2.将 showLoading 设置为 true，这样不会影响下一个请求
                this.showLoading = DEFAULT_LOADING;
                // 3.将结果 resolve出去
                resolve(res);
            })
                .catch((err) => {
                this.showLoading = DEFAULT_LOADING;
                reject(err);
                return err;
            });
        });
    }
    get(config) {
        return this.request({ ...config, method: "GET" });
    }
    post(config) {
        return this.request({ ...config, method: "POST" });
    }
    delete(config) {
        return this.request({ ...config, method: "DELETE" });
    }
    patch(config) {
        return this.request({ ...config, method: "PATCH" });
    }
}
export default DYRequest;
//# sourceMappingURL=index.js.map