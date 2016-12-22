/**
 * Created by super on 16/12/22.
 */
function Drag(eleId){
    this.oDiv=document.getElementById(eleId);
    this.disX=0;
    this.disY=0;

    var _this=this;
    this.oDiv.onmousedown=function(ev){
        var oEvent=ev || event;
        _this.fnDown(oEvent);
        _this.oDiv.setCapture && _this.oDiv.setCapture();
        return false;
    };
}
Drag.prototype.fnDown=function(ev){
    var oEvent=ev || event;
    var _this=this;

    this.disX=oEvent.clientX-this.oDiv.offsetLeft;
    this.disY=oEvent.clientY-this.oDiv.offsetTop;

    document.onmousemove=function(ev){
        var oEvent=ev || event;
        _this.fnMove(oEvent);
    };
    document.onmouseup=function(){
        _this.fnUp();
    };
}
Drag.prototype.fnMove=function(ev){
    var oEvent=ev || event;

    this.oDiv.style.left=oEvent.clientX-this.disX+'px';
    this.oDiv.style.top=oEvent.clientY-this.disY+'px';
}
Drag.prototype.fnUp=function(){
    document.onmousemove=null;
    document.onmouseup=null;
    this.oDiv.releaseCapture && this.oDiv.releaseCapture();
}