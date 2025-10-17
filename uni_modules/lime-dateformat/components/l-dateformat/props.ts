export default {
	date: {
		type: String,
		default: ''
	},
	locale: {
		type: String,
		default: 'zh' //| 'en'
	},
	format: {
		type: String,
		default: 'yyyy/MM/dd hh:mm:ss'
	},
	threshold: {
		type: Array,
		default: () => [0, 0]
	},
	refreshRate: {
		type: Number,
		default: 0
	}
}