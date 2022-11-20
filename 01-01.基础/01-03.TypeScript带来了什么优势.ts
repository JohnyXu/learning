interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });

/*
  1.有更好的错误提示
  2.更好的编辑器提示
  3.类型声明可读性更好
 */
