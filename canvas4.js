/**
 * Created by 胡志甫 on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle='#00f';
    context.fillRect(0,0,400,300);
    //把网站转化成图片格式
   window.location=canvas.toDataURL('img/jpg');
}