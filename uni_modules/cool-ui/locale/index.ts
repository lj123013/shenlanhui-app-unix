import { appendLocale } from "@/locale";

import zhcn from "./zh-cn.json";
import en from "./en.json";
import zhtw from "./zh-tw.json";
import ko from "./ko.json";
import fr from "./fr.json";
import es from "./es.json";
import ja from "./ja.json";

setTimeout(() => {
	appendLocale("zh-cn", zhcn);
	appendLocale("en", en);
	appendLocale("zh-tw", zhtw);
	appendLocale("ko", ko);
	appendLocale("fr", fr);
	appendLocale("es", es);
	appendLocale("ja", ja);
}, 0);
