export default defineAppConfig({
  pages: [
    "pages/index/index",

    "pages/login/login",
    "pages/user/user",
    // "pages/index/index",
    "pages/option/option",
    // option页子页
    "pages/apply/apply",
    "pages/interview/interview",
    "pages/scan/scan",
    "pages/ticket/ticket",
    // user页面子页
    "pages/myqr/myqr",
    "pages/applicationSubmit/applicationSubmit",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    // fonts: {
    //   'PingFang': 'url(./assets/PingFang Regular.otf)',
    // },
  },

  tabBar: {
    position: "bottom",
    color: "#999999",
    selectedColor: "#4990E2",
    backgroundColor: "white",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/icons/index.png",
        selectedIconPath: "assets/icons/selectIndex.png",
      },
      {
        pagePath: "pages/option/option",
        text: "工具",
        iconPath: "assets/icons/tool.png",
        selectedIconPath: "assets/icons/selectTool.png",
      },
      {
        pagePath: "pages/user/user",
        text: "我的",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/selectUser.png",
      },
    ],
  },
});
