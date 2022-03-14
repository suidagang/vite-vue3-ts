export interface optionBarProps {
  e_type?: string;
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
