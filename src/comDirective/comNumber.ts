
/**
 * 描述
 * @date 2021-10-11
 * @author sui
 * @import gsap动画库 地址：https://www.tweenmax.com.cn/index.html
 * @des 数字滚动全局指令
 * @param {object} ={num:"数字",circulationTime:数字动画的时间（单位秒）}
 * @使用示例 <span v-numAnimation ="{num:aaa,circulationTime:2}"></span>
 */
import { Directive } from 'vue'
import  TweenLite  from 'gsap';
export const  numAnimation: Directive = {
    mounted(el,binding){
        let circulationTime = binding.value.circulationTime || 1;
        let score = {
            num:0
        };
        function showScore() {
            el.innerHTML = Number(score.num).toFixed(0);
            score.num = binding.value.num;
        };
        TweenLite.to(score,circulationTime,{
            num:binding.value.num,
            onUpdate:showScore
        })
    },
    updated(el,binding){
        let circulationTime = binding.value.circulationTime || 1;
        let score = {
            num:el.innerHTML
        };
        function showScore() {
            el.innerHTML = Number(score.num).toFixed(0);
            score.num = binding.value.num;
        };
        TweenLite.to(score,circulationTime,{
            num:binding.value.num,
            onUpdate:showScore
        })
    }
};
