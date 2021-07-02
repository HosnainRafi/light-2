function light(position) {
    var pic;
 
 if (position == 0) {
     pic = "images/pic_bulboff.jpg";
 }
 else{
     pic = "images/pic_bulbon.jpg";
 }
 document.getElementById("light-image").src = pic;
}