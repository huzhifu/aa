/**
 * Created by ºúÖ¾¸¦ on 2016/1/4.
 */
function saveStorage(id){
    var target=document.getElementById(id);
    var str=target.value;
    localStorage.setItem("mess",str);
}
function loadStorage(id){
    var target=document.getElementById(id);
    var msg=localStorage.getItem("mess")
    target.innerHTML=msg;
}