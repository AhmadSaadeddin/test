  let testDiv = document.getElementById("testDiv");

window.onload = function () {
    let para = document.createElement("p");
    var info = "nodeName: ";
    info+= para.nodeName;
    info+= " \n nodeType: ";
    info+= para.nodeType;
    alert(info);

let txt = document.createTextNode("text node");
testDiv.appendChild(para);
para.appendChild(txt);
}
