import axios from "axios"
// axios实例对象
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res)
})
// Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve("1234")
// }).then((res) => {
//   console.log(res.length)
// })
// axios的配置选项
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
axios
  .get("/get", {
    params: {
      name: "chendeyang",
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })
axios
  .post("/post", {
    data: {
      name: "hello world",
      age: 22
    }
  })
  .then((res) => {
    console.log(res)
  })
//# sourceMappingURL=axios_demo.js.map
