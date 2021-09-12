const menu = [
  // {
  //   key: '/home',
  //   title: '首页',
  //   icon: 'home',
  //   auth: ['USER'],
  // },
  {
    title: '個人資訊管理',
    key: '/user',
    icon: 'user',
    auth: ['USER'],
    subs: [
      { title: '帳戶設定', key: '/user/setting', icon: '' },
    ],
  },
  {
    title: '會員管理',
    key: '/users',
    icon: 'users',
  },
]

export default menu
