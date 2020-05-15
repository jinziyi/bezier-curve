# bezier-curve
bezire-curve fn

## Use

```
import bezierCurve from 'bezier-curve';
// Or
import { bezierCurve1, bezierCurve2, bezierCurve3 } from 'bezier-curve';

const curryBezierCurve3 = curry(bezierCurve3);

// 可以自己调试产出DIY的缓动函数 https://cubic-bezier.com/ -> curryBezierCurve3(x1, y1, x2, y2)
const easingFns = {
  linear: bezierCurve1,
  ease: curryBezierCurve3(0.25, 0.1, 0.25, 1),
  easeIn: curryBezierCurve3(0.42, 0, 1, 1),
  easeOut: curryBezierCurve3(0, 0, 0.58, 1),
  easeInOut: curryBezierCurve3(0.42, 0, 0.58, 1)
};

```
