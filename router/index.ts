import { router, useStore } from "@/cool";
//需要判断token是否登录的将不需要token的加入到下面数组中
const ignoreToken = [
	"/pages/index/home",
	'/pages/homePage/slhNum',
	"/pages/index/shenlanai",
	"/pages/index/radar",
	"/pages/index/information",
	"/pages/index/socialcircle",
	"/pages/index/my",
	"/pages/user/login"
];

router.beforeEach((to, next) => {
	const { user } = useStore();
	if (
		ignoreToken.includes(to.path) ||
		to.path.startsWith("/pages/demo") ||
		to.path.startsWith("/pages/template")
	) {
		next();
	} else {
		next();
		return
		if (!user.isNull()) {
			next();
		} else {
		console.log("未登录");
		
			router.login();
		}
	}
});
