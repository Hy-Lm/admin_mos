// 菜单 侧边栏
export default [

	{
		name: 'Home',
		title: '首页',
		icon: 'home',
		show: true
	},
	{
		title: '用户管理',
		icon: 'user',
		show: true,
		children: [{
			name: 'user',
			title: '管理员',
			show: true
		}, ]
	},
	
]
