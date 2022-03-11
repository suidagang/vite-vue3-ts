import * as echarts from 'echarts/core';

//\node_modules\echarts\lib\export
import { PieChart, BarChart, LineChart } from 'echarts/charts';
import { SVGRenderer } from 'echarts/renderers';

//\node_modules\echarts\lib\export
import {
  GridComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
} from 'echarts/components';

const { use, registerTheme } = echarts;

use([
  PieChart,
  BarChart,
  LineChart,
  SVGRenderer,
  GridComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
]);

// 自定义主题(可以修改theme.json添加一些默认的样式)
// 配置的格式可以参考这个下载下来的格式：https://echarts.apache.org/zh/theme-builder.html
import theme from './theme.json';
registerTheme('ovilia-green', theme);

export default echarts;
