/**
 * Created by 胡志甫 on 2016/1/5.
 */
function saveStorage(id){
    var data=document.getElementById(id).value;
    var time=new Date().getTime();
    localStorage.setItem(time,data);
    alert("数据保存成功");
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
        result+='<tr><td>'+'这是第'+(i+1)+'条数据</td><td>'+value+'</td><td>'+'时间：'+datestr+'</td></tr>';
    }
    result+='</table>';
    var target=document.getElementById(id);
    target.innerHTML=result;
}
function clearStorage(id){
   localStorage.clear();
    loadStorage('msg')
    alert("数据清空成功！！");
}