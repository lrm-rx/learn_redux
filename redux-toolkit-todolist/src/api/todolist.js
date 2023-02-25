import instance from "./request";

// 获取todolist列表
export default function getListData() {
  return instance({
    url: "/todos",
    method: "GET",
    params: {},
  });
}
