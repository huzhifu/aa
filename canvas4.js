/**
 * Created by ��־�� on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle='#00f';
    context.fillRect(0,0,400,300);
    //����վת����ͼƬ��ʽ
   window.location=canvas.toDataURL('img/jpg');
}