/**
 * Created by ��־�� on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="#f1f2f3"
    context.fillRect(0,0,500,500);
    //����Բ��
    for(var i=0;i<10;i++){
        context.beginPath();//��begin��endȥ����ʱ������ص�����
        context.arc(30*i,30*i,10*i,0,Math.PI*0.5,true);
        context.closePath();
        context.fillStyle="rgba(0,255,0,0.25)";
        context.fill();
        //����ͼ�εı߿�
        context.strokeStyle="green";
        context.stroke();
    }
}