/**
 * 下拉选择页面
 * @type {[type]}
 */
 window.onload = function(){
    var page = document.querySelector("#page");
    var index = 10;
    //层级
    //切换切换
    page.addEventListener("change",function(e){
        //页面元素
        var pageElement = document.querySelector("." + e.target.value)
        pageElement.style.zIndex = ++index;
        console.log(page.value)
        switch(page.value) {
            case 'page-b':
                document.querySelector('.page-a').setAttribute('class',"page-a bg-adaptive effect-out")
                document.querySelector('.page-b').setAttribute('class',"page-b bg-adaptive effect-in")
                
                break;
            case 'page-c':
                document.querySelector('.page-c').setAttribute('class',"page-c bg-adaptive effect-in")
                document.querySelector('.page-b').setAttribute('class',"page-b bg-adaptive effect-out")
                
                
                break;
            default:
                document.querySelector('.page-c').setAttribute('class',"page-c bg-adaptive")
                document.querySelector('.page-b').setAttribute('class',"page-b bg-adaptive")
                document.querySelector('.page-a').setAttribute('class',"page-a bg-adaptive")
                
                break;
        }
    },false)
 }
