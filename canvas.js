/**
 * Created by ºúÖ¾¸¦ on 2016/1/3.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="green";
    context.strokeStyle="#fff";
    context.lineWidth=5;
    context.fillRect(0,0,400,300);
    context.strokeRect(50,50,180,120);
}