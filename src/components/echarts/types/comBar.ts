//数据定义 （组件ReBar）
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
// 基础数据
export const basicOptions: optionBarProps = {
  xdata: ['aa', 'bb', 'cc', 'dd'],
  seriesData: [3, 204, 1079, 1079],
  yName: '',
  barColor: ['#00FFF6'],
  barWidth: '18',
  axisLabelColor: '#fff',
  axisLabelFontSize: '16',
  yNameColor: '#fff',
  yNameFontSize: '16',
  yxisLabelColor: '#fff',
  yxisLabelFontSize: '16'
};
//数据定义 （组件ReBar_1）
export interface optionBarProps_1 {
  e_type?: string; //动态组件的组件名称
  xdata: string[]; //x轴数据
  seriesDataOne: number[]; //y轴数据第一个柱状图
  seriesDataTwo: number[]; //y轴数据第二个柱状图
  yName?: string; //y轴最上面的名称
  yNameColor?: string; //y轴最上面的名称的颜色
  yNameFontSize?: string; //y轴最上面的名称的字体大小
  barWidth?: string; //柱体的宽度
  axisLabelColor?: string; //x轴文字颜色
  axisLabelFontSize?: string; //x轴文字大小
  yxisLabelColor?: string; //y轴文字颜色
  yxisLabelFontSize?: string; // y轴文字大小
  legendData: string[]; //图例数据
  lengendColor?: string; //图例字体颜色
  lengendFontSize?: string; //图例字体大小
  seriesDataOneColor?: string[]; //柱状图一的颜色（渐变需要两种）
  seriesDataTwoColor?: string[]; //柱状图二的颜色（渐变需要两种）
}
//默认数据 （组件ReBar_1）
export const basicOptions_1: optionBarProps_1 = {
  e_type: 'reBar',
  xdata: ['aa', 'bb', 'cc', 'dd'],
  seriesDataOne: [3, 204, 1079, 1079],
  seriesDataTwo: [1, 111, 342, 456],
  yName: '',
  barWidth: '18',
  axisLabelColor: '#fff',
  axisLabelFontSize: '16',
  yNameColor: '#fff',
  yNameFontSize: '16',
  yxisLabelColor: '#fff',
  yxisLabelFontSize: '16',
  legendData: ['2022年', '2021年'],
  lengendColor: '#fff',
  lengendFontSize: '16',
  seriesDataOneColor: ['#fccb05', '#f5804d'],
  seriesDataTwoColor: ['#8bd46e', '#09bcb7']
};
