<template>
  <div class="content-box">
    <comHead title="金凤区办税大厅" />
    <comBox width="438px" height="416px" class="left-one"><LeftOne /></comBox>
    <comBox
      width="438px"
      height="534px"
      title-font-size="18px"
      title-margin-top="18px"
      title="大厅人员公示"
      class="left-two"
    >
      <LeftTwo />
    </comBox>
    <comBox width="711px" height="416px" class="mid-one"></comBox>
    <comBox width="472px" height="534px" class="mid-two">
      <MidTwo />
    </comBox>
    <comBox width="715px" height="416px" class="right-one">
      <RightOne />
    </comBox>
    <comBox width="954px" height="341px" class="right-two"></comBox>
    <comBox
      width="614px"
      height="179px"
      title="排队情况"
      class="right-three-l"
    ></comBox>
    <comBox
      width="325px"
      height="179px"
      title="值班领导"
      class="right-three-r"
    ></comBox>
  </div>
</template>

<script setup lang="ts">
import comHead from '@/components/templates/ComHead.vue';
import comBox from '@/components/templates/FrameBox.vue';
import LeftOne from '@/components/jfmk/LeftOne.vue';
import LeftTwo from '@/components/jfmk/LeftTwo.vue';
import MidTwo from '@/components/jfmk/MidTwo.vue';
import RightOne from '@/components/jfmk/RightOne.vue';
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
.left-one {
  position: absolute;
  top: 102px;
  left: 14px;
}
.left-two {
  position: absolute;
  bottom: 14px;
  left: 14px;
}
.mid-one {
  position: absolute;
  top: 102px;
  left: 466px;
}
.mid-two {
  position: absolute;
  bottom: 14px;
  left: 466px;
}
.right-one {
  position: absolute;
  top: 102px;
  right: 14px;
}
.right-two {
  position: absolute;
  top: 532px;
  right: 14px;
}
.right-three-l {
  position: absolute;
  right: 354px;
  bottom: 14px;
}
.right-three-r {
  position: absolute;
  right: 14px;
  bottom: 14px;
}
</style>
