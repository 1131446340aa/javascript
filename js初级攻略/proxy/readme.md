## 所有拦截后,拦截对象都不会生效

## apply方法不能拦截对象的方法,只能拦截函数.第二个参数为this,不调用call会是undefined,而不会是window.第三个参数是参数,以数组的形式表达