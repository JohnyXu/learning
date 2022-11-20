interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4,
};

// 变量声明由js的动态声明 转为ts的静态作用域
// 静态类型变量具有 类型的方法，比如String类型拥有string类型的方法
// 这个例子中point具有Point的所有属性和方法
