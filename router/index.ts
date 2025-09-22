import { router, useStore } from "@/cool";

router.beforeEach((to, _, next) => {
	const { user } = useStore();
	if (
		!to.meta.isAuth
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
