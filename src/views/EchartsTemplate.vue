<template>
  <div class="content-box">
    <template v-for="(item, index) in pageConfig.pageArr" :key="index">
      <comHead v-if="item.dom_type === 'comHead'" />
      <comBox
        v-if="item.dom_type === 'comBox'"
        class="com-box left-one-box"
        :width="item.with"
        :height="item.height"
        :title="item.title"
        :style="{
          top: item.top,
          left: item.left,
          right: item.right,
          bottom: item.bottom,
          marginLeft: item.marginLeft
        }"
      >
        <div
          class="echarts-box"
          :style="{ height: computedStyle(item.height as string) }"
        >
          <component
            :is="getTemplate(item.subItem)"
            :option="item.subItem"
          ></component>
        </div>
      </comBox>
    </template>
  </div>
</template>

<script setup lang="ts">
import comHead from '@/components/templates/ComHead.vue';
import comBox from '@/components/templates/FrameBox.vue';
import { getTemplateByType } from '@/components/echarts/componentsList';
import { markRaw, reactive } from 'vue';
const getTemplate = (subItem: any) => {
  let template = markRaw(getTemplateByType(subItem.e_type));
  return template;
};
// 去掉顶部文字的位置空间
const computedStyle = (height: string) => {
  return parseInt(height) - 51 + 'px';
};
let pageConfig = reactive({
  pageArr: [
    {
      dom_type: 'comHead'
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '229px',
      title: '本月办理量（业务域）',
      left: '20px',
      top: '105px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['哈哈1', '嘿嘿1', '嘻嘻1', '呵呵1'],
        seriesData: [22, 33, 55, 88],
        yName: '(眭)'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '203px',
      title: '纳税人变动情况',
      left: '20px',
      top: '365px',
      subItem: {
        e_type: 'ReBar_4'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '220px',
      title: '本月办理业务量（TOP5）',
      left: '20px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar_3'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '229px',
      title: '发票代开业务量趋势',
      right: '20px',
      top: '105px',
      subItem: {
        e_type: 'ReBar_2'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '203px',
      title: '全年业务办理量趋势',
      right: '20px',
      top: '365px',
      subItem: {
        e_type: 'ReBar_1',
        xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
        seriesData: [22, 33, 55, 88],
        yName: '(眭)'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '220px',
      title: '满意度情况',
      right: '20px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
        seriesData: [22, 33, 55, 88],
        yName: '(眭)'
      }
    },
    {
      dom_type: 'comBox',
      with: '650px',
      height: '220px',
      title: '纳税人接待情况',
      left: '50%',
      marginLeft: '-325px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['哈哈2', '嘿嘿2', '嘻嘻2', '呵呵2'],
        seriesData: [999, 674, 432, 288],
        yName: '(刚)'
      }
    }
  ]
});

setTimeout(() => {
  console.log(11111);

  pageConfig.pageArr = [
    {
      dom_type: 'comHead'
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '229px',
      title: '本月办理量（业务域）',
      left: '20px',
      top: '105px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['测试111', '测试111', '测试111', '测试111'],
        seriesData: [1111, 2222, 3333, 1234],
        yName: '(测试)'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '203px',
      title: '纳税人变动情况',
      left: '20px',
      top: '365px',
      subItem: {
        e_type: 'ReBar_4'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '220px',
      title: '本月办理业务量（TOP5）',
      left: '20px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar_3'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '229px',
      title: '发票代开业务量趋势',
      right: '20px',
      top: '105px',
      subItem: {
        e_type: 'ReBar_2'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '203px',
      title: '全年业务办理量趋势',
      right: '20px',
      top: '365px',
      subItem: {
        e_type: 'ReBar_1',
        xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
        seriesData: [22, 33, 55, 88],
        yName: '(眭)'
      }
    },
    {
      dom_type: 'comBox',
      with: '540px',
      height: '220px',
      title: '满意度情况',
      right: '20px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['哈哈', '嘿嘿', '嘻嘻', '呵呵'],
        seriesData: [22, 33, 55, 88],
        yName: '(眭)'
      }
    },
    {
      dom_type: 'comBox',
      with: '650px',
      height: '220px',
      title: '纳税人接待情况',
      left: '50%',
      marginLeft: '-325px',
      bottom: '20px',
      subItem: {
        e_type: 'ReBar',
        xdata: ['哈哈2', '嘿嘿2', '嘻嘻2', '呵呵2'],
        seriesData: [999, 674, 432, 288],
        yName: '(刚)'
      }
    }
  ];
}, 10000);
</script>

<style lang="less" scoped>
.content-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url('@/assets/imgs/bg.png') center no-repeat;
}
.com-box {
  position: absolute;
  cursor: pointer;
}
.echarts-box {
  width: 100%;
  overflow: hidden;
}
</style>
