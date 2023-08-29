export default defineAppConfig({
  pages: [
    "pages/login/login",
    "pages/option/option",
    "pages/index/index",

    // 报名成功与否页面
    "pages/apply/apply",
    "pages/success/success",
    "pages/fail/fail",
    "pages/scan/scan",
    "pages/ticket/ticket",

    // 面试预约与查询页面
    "pages/interview/interview",
    "pages/interviewOrder/interviewOrder",
    "pages/itvOrderSuccess/itvOrderSuccess",
    "pages/interviewQuery/interviewQuery",
    
    // user页面子页
    "pages/user/user",
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
