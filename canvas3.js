/**
 * Created by 胡志甫 on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="#0f0";
    context.fillRect(0,0,800,300);
    context.fillStyle="#000";
    //字体的话，单引号包括，逗号隔开
    context.font="bold 40px '宋体','微软雅黑'";
    //基准线类型
    context.textBaseline="top";
    //水平对齐方式
    context.textAlign="center";
    //最后一个参数是为了防止内容过多溢出画布，如果内容多于画布则压缩文字，保证全部在画布上显示
    context.fillText("麦子学院",55,55,800);
    context.strokeStyle="#f00";
    context.strokeText("麦子学院",95,95);
}