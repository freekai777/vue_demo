/* eslint-disable */
const menus = [
  {
    index: '1',
    title: '首页',
    permissionCode: 'HOME_PAGE',
    icon: 'el-icon-s-home',
    url: '/'
  },
  {
    index: '2',
    title: '菜单',
    permissionCode: 'EQU_LIST',
    icon: 'el-icon-menu',
    url: '/menu'
  },
  {
    index: '3',
    title: '信息设置',
    permissionCode: 'INFO_SETTING',
    icon: 'el-icon-setting',
    children: [
      {
        index: '3-1',
        title: '设备管理',
        permissionCode: 'SETTING_EQU',
        url: '/setting/equ'
      },
      {
        index: '3-2',
        title: '标签管理',
        permissionCode: 'SETTING_LABEL',
        url: '/setting/label'
      }
    ]
  }
]
export default {
  menus: menus
}
