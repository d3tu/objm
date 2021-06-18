module.exports = {
	set: (o, k, v) => {
		try {
			k = String(k).split('/');
			let b = o;
			while (k.length > 1) {
				let a = k.shift();
				b = b[a] = b[a] || {};
			}
			b[k] = v;
			return o;
		} catch (e) {
			return undefined;
		}
	},
	get: (o, k) => {
		try {
			return String(k)
				.split('/')
				.reduce((a, b) => (a || {})[b], o);
		} catch (e) {
			return undefined;
		}
	},
	delete: (o, k) => {
		try {
			k = String(k).split('/');
			let b = o;
			while (k.length > 1) {
				let a = k.shift();
				b = b[a] = b[a] || {};
			}
			delete b[k];
			return o;
		} catch (e) {
			return undefined;
		}
	}
};