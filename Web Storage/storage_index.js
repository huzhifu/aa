/**
 * Created by ��־�� on 2016/1/5.
 */
function saveStorage(id){
    var data=document.getElementById(id).value;
    var time=new Date().getTime();
    localStorage.setItem(time,data);
    alert("���ݱ���ɹ�");
    loadStorage('msg')
}
function loadStorage(id){
 var result='<table border="1">';
    for(var i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);
        var value=localStorage.getItem(key);
        var date=new Date();
        date.setTime(key);
        var datestr=date.toUTCString();
        result+='<tr><td>'+'���ǵ�'+(i+1)+'������</td><td>'+value+'</td><td>'+'ʱ�䣺'+datestr+'</td></tr>';
    }
    result+='</table>';
    var target=document.getElementById(id);
    target.innerHTML=result;
}
function clearStorage(id){
   localStorage.clear();
    loadStorage('msg')
    alert("������ճɹ�����");
}