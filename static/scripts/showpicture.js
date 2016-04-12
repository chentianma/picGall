/**
 * Created by ivory on 2016/4/7.
 */
window.onload = picGallery();

//点击链接，在本页面加载图片和图片名（title）
function showPic(whichPic){
    source = whichPic.getAttribute('href');
    placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    var text = whichPic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}

//为document中的图片标签绑定onclick事件
function picGallery(){
    var gallery = document.getElementById('imagegallery');
    var pic = gallery.getElementsByTagName('a');
    for (var i=0; i<pic.length; i++) {
        pic[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}