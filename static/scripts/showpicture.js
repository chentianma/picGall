/**
 * Created by ivory on 2016/4/7.
 */
window.onload = picGallery();

//������ӣ��ڱ�ҳ�����ͼƬ��ͼƬ����title��
function showPic(whichPic){
    source = whichPic.getAttribute('href');
    placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    var text = whichPic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}

//Ϊdocument�е�ͼƬ��ǩ��onclick�¼�
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