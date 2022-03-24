# 柱状图参数配置

```vue demo src="../components/echarts/barDemo/bar.vue"
```

## **`默认数据和数据结构`**

```JavaScript
//!数据定义 （组件ReBar）
export interface optionBarProps {
  e_type?: string; //动态组件的组件名称
  xdata: string[]; //x轴数据
  seriesData: number[]; //y轴数据
  yName?: string; //y轴最上面的名称
  yNameColor?: string; //y轴最上面的名称的颜色
  yNameFontSize?: string; //y轴最上面的名称的字体大小
  barColor?: string[]; //柱体的颜色
  barWidth?: string; //柱体的宽度
  axisLabelColor?: string; //x轴文字颜色
  axisLabelFontSize?: string; //x轴文字大小
  yxisLabelColor?: string; //y轴文字颜色
  yxisLabelFontSize?: string; // y轴文字大小
}
// 基础数据（组件ReBar）
export const basicOptions: optionBarProps = {
  e_type: 'ReBar',
  xdata: ['aa', 'bb', 'cc', 'dd'],
  seriesData: [3, 204, 1079, 1079],
  yName: '',
  barColor: ['#19f1ff'],
  barWidth: '18',
  axisLabelColor: '#fff',
  axisLabelFontSize: '16',
  yNameColor: '#fff',
  yNameFontSize: '16',
  yxisLabelColor: '#fff',
  yxisLabelFontSize: '16'
};
```
