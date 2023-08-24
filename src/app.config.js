export default defineAppConfig({
  pages: [
    "pages/user/user",
    "pages/login/login",
    "pages/index/index",
    "pages/option/option",
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
    color: "#999999",
    selectedColor: "#4990E2",
    backgroundColor: "white",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "icons/index.png",
        selectedIconPath: "icons/selectIndex.png",
      },
      {
        pagePath: "pages/option/option",
        text: "工具",
        iconPath: "icons/tool.png",
        selectedIconPath: "icons/selectTool.png",
      },
      {
        pagePath: "pages/user/user",
        text: "我的",
        iconPath: "icons/user.png",
        selectedIconPath: "icons/selectUser.png",
      },
    ],
  },
});
