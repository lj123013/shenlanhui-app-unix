import { router, useStore } from "@/cool";

router.beforeEach((to, _, next) => {
	const { user } = useStore();
	if (to.meta?.isAuth == true) {
		if (!user.isNull()) {
			next();
		} else {
			router.login();
		}
	} else {
		next();
	}
});