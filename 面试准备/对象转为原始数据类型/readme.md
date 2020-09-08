对象转为原始数据类型

先判断是否是原始数据类型,如果是,则不转化
如果不是,调用symbol.toPrimitive方法
调用valueof方法
调用tostring方法