let Vue

class Router {
	constructor(opts) {
		this.mode = opts.mode || 'hash'
		this.routes = opts.routes
		this.mapRoute = this.maproute(this.routes)
		this.current = new HistoryRouter()
		this.init()
	}
	init() {
		if (this.mode === 'hash') {
			location.hash ? "" : location.hash = "#/"
			window.addEventListener('load', () => {
				this.current.currentRouter = location.hash.slice(1)
			})
			window.addEventListener('hashchange', () => {
				this.current.currentRouter = location.hash.slice(1)
			})
			
		}
		
		else {
			location.pathname ? "" : location.pathname = "/"
			window.addEventListener('load', () => {
				this.current.currentRouter = location.pathname
			})
			window.addEventListener('hashchange', () => {
				this.current.currentRouter = location.pathname
			})
		}
	}
	maproute(routes) {
		let obj = {}
		routes.forEach(router => {
			obj[router['path']] = router['component']
		})
		return obj
	}
}

Router.install = function (_vue) {
	Vue = _vue
	Vue.mixin({
		beforeCreate() {
			if (this.$options && this.$options.router) {
				this._root = this
				this._router = this.$options.router
				Vue.util.defineReactive(this, 'route', this._router.current)
			} else {
				this._root = this.$parent._root
			}
			Object.defineProperty(this, "$router", {
				get() {
					return this._root._router
				}
			})
			Object.defineProperty(this, "$route", {
				get() {
					return this._root._router.current
				}
			})
		}
	})
	Vue.component('router-view', {
		render(h) {
			let router = this._self._root._router.mapRoute
			let current = this._self._root._router.current.currentRouter
			return h(router[current])
		}
	})
	Vue.component('router-link', {
		props: {
			to: String,
			tag: String
		},
		methods: {
			handleClick() {
				event && event.defaultPrevented && event.preventDefault()
				let path = this.to || this._self._root._router.current.currentRouter
				this._self._root._router.current.currentRouter = path
				if (this._self._root._router.mode === 'hash') {
					window.history.pushState({}, "", "#/" + path.slice(1))
				}
				else {
					window.history.pushState({}, "", path.slice(1))
				}
			}
		},
		render(h) {
			let tag = this.tag || 'a'
			let path = this.to || this._self._root._router.current.currentRouter
			console.log(this._self._root._router.current.currentRouter);

			return h(tag, {
				attr: {
					href: this._self._root._router.mode === 'hash' ? "#" + path : path
				},
				on: {
					click: this.handleClick
				}
			}, this.$slots.default)
		}
	})
}

class HistoryRouter {
	constructor() {
		this.currentRouter = null
	}
}
export default Router