function showPic(whichPic) {
  if (!document.getElementById("placeholder")) return true ;
  let source = whichPic.getAttribute("href");
  let placeHolder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") return true;
  let text = whichPic.getAttribute("title");
  if (!document.getElementById("description")) return false ;
  placeHolder.setAttribute("src", source);
  let description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
      description.firstChild.nodeValue = text;
    }
  return false;
}
/*  console.log(description.childNodes[0].nodeValue);
function countBodyChildren() {
  let bodyElt = document.getElementsByTagName("body")[0];
console.log(bodyElt.childNodes.length);
}
let bodyElet = document.getElementsByTagName("body")[0];
console.log(bodyElet.nodeType);
window.onload = countBodyChildren;*/
function prepareGallery() {
  let gallery = document.getElementById("imageGallery");
  let links = gallery.getElementsByTagName("a");
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imageGallery")) return false;
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this);
    }
    links[i].onkeypress = links[i].onclick;
  }

}

window.onload = prepareGallery;
