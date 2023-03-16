import "./assets/img.jpg";
import "./index.less";
let taoziUncle = () => {
  console.log("测试箭头函数");
};
taoziUncle();
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});
promise.then((res) => {
  console.log(res);
});
