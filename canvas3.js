/**
 * Created by ��־�� on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="#0f0";
    context.fillRect(0,0,800,300);
    context.fillStyle="#000";
    //����Ļ��������Ű��������Ÿ���
    context.font="bold 40px '����','΢���ź�'";
    //��׼������
    context.textBaseline="top";
    //ˮƽ���뷽ʽ
    context.textAlign="center";
    //���һ��������Ϊ�˷�ֹ���ݹ������������������ݶ��ڻ�����ѹ�����֣���֤ȫ���ڻ�������ʾ
    context.fillText("����ѧԺ",55,55,800);
    context.strokeStyle="#f00";
    context.strokeText("����ѧԺ",95,95);
}