import { router, useStore } from "@/cool";

const ignoreToken = [
	"/pages/index/home",
	"/pages/index/my",
	"/pages/index/template",
	"/pages/user/login",
	"/pages/user/doc"
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
		if (!user.isNull()) {
			next();
		} else {
			router.login();
		}
	}
});
