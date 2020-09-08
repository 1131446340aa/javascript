const isType = (obj, type) => {
    if (typeof obj !== 'object') return false;
    // 判断数据类型的经典方法：
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
      case 'Array':
        flag = typeString === '[object Array]';
        break;
      case 'Date':
        flag = typeString === '[object Date]';
        break;
      case 'RegExp':
        flag = typeString === '[object RegExp]';
        break;
      default:
        flag = false;
    }
    return flag;
  };

  const getRegExp = re => {
    
    return (re+"").replace(/\/(.*)\//,"");
  };
  /**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const clone = parent => {
    // 维护两个储存循环引用的数组
    const parents = [];
    const children = [];
   
    const _clone = parent => {
      if (parent === null) return null;
      if (typeof parent !== 'object') return parent;
  
      let child, proto;
  
      if (isType(parent, 'Array')) {
        // 对数组做特殊处理
        child = [];
      } else if (isType(parent, 'RegExp')) {
        // 对正则对象做特殊处理
        child = new RegExp(parent.source, getRegExp(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (isType(parent, 'Date')) {
        // 对Date对象做特殊处理
        child = new Date(parent.getTime());
        return child
      } else {
        // 处理对象原型
        proto = Object.getPrototypeOf(parent);
        // 利用Object.create切断原型链
        child = Object.create(proto);
      }
  
      // 处理循环引用
      const index = parents.indexOf(parent);
     
      if (index != -1) {
       
        // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
        return children[index];
      }
      parents.push(parent);
      children.push(child);
  
      Reflect.ownKeys(parent).forEach(item=>{
        child[item]=   _clone(parent[item])
      })
      
      return child;
    };
    return _clone(parent);
  };
  function person(pname) {
    this.name = pname;
  }
  
  const Messi = new person('Messi');
  
  function say() {
    console.log('hi');
  }
  let xx=Symbol('xx')
  const oldObj = {
    a: say,
    c: new RegExp('ab+c', 'i'),
    d: Messi,
    x:new Date(),
    [xx]:5
  };
  
  oldObj.b = oldObj;
  
  const newObj = clone(oldObj);
  console.log(newObj);
  
//   console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
//   console.log(newObj.b, oldObj.b); 
//   // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
//   console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
//   console.log(newObj.d); 
//   console.log(newObj.b);
  
// [Function: person] [Function: person]