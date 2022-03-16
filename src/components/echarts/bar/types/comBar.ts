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
  e_type: 'ReBar_1',
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
  seriesDataOneColor: ['#c778ff', '#1679e9'],
  seriesDataTwoColor: ['#78f7ff', '#1679e9']
};

//数据定义 （组件ReBar_2）
export interface ListProps {
  name: string;
  type: string;
  stack: string;
  barWidth: string;
  data: number[];
}
export interface optionBarProps_2 {
  e_type?: string; //动态组件的组件名称
  xdata: string[]; //x轴数据
  listData: ListProps[]; //数据结构
  yName?: string; //y轴最上面的名称
  yNameColor?: string; //y轴最上面的名称的颜色
  yNameFontSize?: string; //y轴最上面的名称的字体大小
  barWidth?: string; //柱体的宽度
  axisLabelColor?: string; //x轴文字颜色
  axisLabelFontSize?: string; //x轴文字大小
  yxisLabelColor?: string; //y轴文字颜色
  yxisLabelFontSize?: string; // y轴文字大小
  lengendColor?: string; //图例字体颜色
  lengendFontSize?: string; //图例字体大小
  barColor?: string[]; //柱状图的颜色，从下往上
}
//默认数据 （组件ReBar_2）
export const basicOptions_2: optionBarProps_2 = {
  e_type: 'ReBar_2',
  xdata: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  listData: [
    {
      name: '智能接通量',
      type: 'bar',
      barWidth: '24',
      stack: 'total',
      data: [1, 2, 3, 4, 5, 6, 3, 2, 5, 4, 3, 2]
    },
    {
      name: '人工接通量',
      type: 'bar',
      barWidth: '24',
      stack: 'total',
      data: [1, 1, 3, 5, 5, 2, 3, 2, 5, 2, 3, 1]
    },
    {
      name: '未接通量',
      type: 'bar',
      barWidth: '24',
      stack: 'total',
      data: [4, 2, 3, 4, 3, 6, 3, 2, 7, 4, 3, 1]
    }
  ],
  yName: '',
  barWidth: '18',
  axisLabelColor: '#fff',
  axisLabelFontSize: '16',
  yNameColor: '#fff',
  yNameFontSize: '16',
  yxisLabelColor: '#fff',
  yxisLabelFontSize: '16',
  lengendColor: '#fff',
  lengendFontSize: '16',
  barColor: ['#b475ee', '#00cf7e', '#2a95fc']
};
export interface listData_3 {
  name: string;
  value: number;
}
//数据定义 （组件ReBar_3）
export interface optionBarProps_3 {
  e_type?: string; //动态组件的组件名称
  barWidth?: number; //柱体的宽度
  yxisLabelColorLeft?: string; //y轴文字颜色（左边）
  yxisLabelFontSizeLeft?: string; // y轴文字大小（左边）
  yxisLabelColorRight?: string; //y轴文字颜色（右边）
  yxisLabelFontSizeRight?: string; // y轴文字大小（右边）
  listData: listData_3[];
  barColor?: string; //柱体的颜色
  barBgColor?: string; //柱体底部背景颜色
  yxisLabelRightText?: string; // y轴文字大小（右边）
  yxisLabelRightTextColor?: string; //y轴右边加了文字，前面数字颜色
}
//默认数据 （组件ReBar_3）
export const basicOptions_3: optionBarProps_3 = {
  e_type: 'ReBar_3',
  barWidth: 15,
  yxisLabelColorLeft: '#fff',
  yxisLabelFontSizeLeft: '16',
  yxisLabelColorRight: '#fff',
  yxisLabelFontSizeRight: '16',
  barColor: '#00AAFF',
  barBgColor: 'rgba(1,255,255,0.3)',
  listData: [
    {
      name: '测试一',
      value: 2
    },
    {
      name: '测试二',
      value: 5
    },
    {
      name: '测试三 ',
      value: 9
    }
  ],
  // yxisLabelRightText: '万元啊',
  yxisLabelRightTextColor: '#ff0'
};
