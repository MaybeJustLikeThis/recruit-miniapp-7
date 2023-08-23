export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/option/option",
    "pages/user/user",
    "pages/apply/apply",
    "pages/interview/interview",
    "pages/scan/scan",
    "pages/ticket/ticket",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    position: "bottom",
    color: "#0000",
    selectedColor: "#1111",
    backgroundColor: "white",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/option/option",
        text: "工具",
      },
      {
        pagePath: "pages/user/user",
        text: "我的",
      },
    ],
  },
});
