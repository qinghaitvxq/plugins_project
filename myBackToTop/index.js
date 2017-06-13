/**
 * Created by caipf on 2017/6/12.
 */
// class BackToTop{
//     constructor(options){
//         let defaultOptions={
//             element:''
//         }
//         this.options=Object.assign({},defaultOptions,options);
//         this.checkOptions().bindEvent();
//     }
//     checkOptions(){
//         if(!this.options.element){
//             let div=document.createElement("div");
//             div.setAttribute("class","backToTop");
//             div.setAttribute("id","backToTop");
//             document.querySelector("body").appendChild(div);
//             this.options.element=div;
//         }
//         return this;
//     }
//     bindEvent(){
//        this.options.element.addEventListener('click',(e)=>{
//            alert('hello world');
//        });
//        return this;
//     }
// }

(function ($) {
    class BackToTop{
        constructor(options){
            let defaultOptions={
                element:''
            }
            this.options=Object.assign({},defaultOptions,options);
            this.checkOptions().bindEvent();
        }
        checkOptions(){
            if(!this.options.element){
                let div=document.createElement("div");
                div.setAttribute("class","backToTop");
                div.setAttribute("id","backToTop");
                document.querySelector("body").appendChild(div);
                this.options.element=div;
            }
            return this;
        }
        bindEvent(){
            this.options.element.addEventListener('click',(e)=>{
                alert('hello world');
            });
            return this;
        }
    }
    $.fn.goBackToTop=function () {
        var options={};
        options.element=this.get(0);
        new BackToTop(options);
    }
})(jQuery);

// 1.获取页面可视区的高度
// clientHeight=document.documentElement.clientHeight;
// 2.获取滚动条距离顶部的高度
// osTop=document.documentElement.scrollTop||document.body.scrollTop;
// /*这样写是因为浏览器的兼容问题
//  其中
//  IE识别document.documentElement.scrollTop
//  谷歌识别document.body.scrollTop*/
// 3.定时器的设定
// setInterval中传入function: osTop不断的加上一个ispeed值最后判断osTop
// 其中 var ispeed = Math.floor(-osTop / 6);//可以实现由快到慢回到顶部
// 如果osTop==0了的话说明已经回到顶部就要使用clearInterval来清除定时器
// 参考 http://www.imooc.com/article/4903