var item_list = document.getElementById("item-list");
var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++) {
    var btn1 = document.createElement("button");
    var txt1 = document.createTextNode("Edit");
    var btn2 = document.createElement("button");
    var txt2 = document.createTextNode("Delete");
    btn1.className = "edit";
    btn2.className = "delete";
    btn1.appendChild(txt1);
    btn2.appendChild(txt2);
    btn1.setAttribute("onclick", "edit(this)");
    nodeList[i].appendChild(btn1);
    nodeList[i].appendChild(btn2);
}


var deletebtn = document.getElementsByClassName("delete");
var i;
for (i = 0; i < deletebtn.length; i++) {
    deletebtn[i].onclick = function () {
        var div = this.parentNode;
        console.log(div);
        div.remove();
    }
}


var listBtn = document.getElementsByTagName("li");
var i;
for (i = 0; i < listBtn.length; i++) {
    if (listBtn[i].classList.contains("checked")) {
        listBtn[i].childNodes[1].style.display = "none";
    }
    else {
        listBtn[i].childNodes[1].style.display = "block";
    }
}



var listing = document.querySelector('ul');
listing.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        console.log(e.target.classList);

        if (e.target.classList.contains("checked")) {
            e.target.childNodes[1].style.display = "none";
        }
        else {
            e.target.childNodes[1].style.display = "block";
        }
    }
}, false);



function addItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("item").value;
    var textInput = document.createTextNode(inputValue);
    li.appendChild(textInput);
    if (inputValue === '') {
        alert("Input is empty");
        document.getElementById("item").focus();
    } else {
        document.getElementById("item-list").appendChild(li);
    }
    document.getElementById("item").value = "";

    var btn1 = document.createElement("button");
    var txt1 = document.createTextNode("Edit");
    var btn2 = document.createElement("button");
    var txt2 = document.createTextNode("Delete");
    btn1.className = "edit";
    btn2.className = "delete";
    btn1.appendChild(txt1);
    btn2.appendChild(txt2);
    btn1.setAttribute("onclick", "edit(this)");
    li.appendChild(btn1);
    li.appendChild(btn2);

    for (i = 0; i < deletebtn.length; i++) {
        deletebtn[i].onclick = function () {
            var div = this.parentNode;
            console.log(div);
            div.remove();
        }
    }

}
























function edit(a) {
    var val = a.parentNode.childNodes[0];
    var newValue = document.createElement("input");
    newValue.setAttribute("type", "text");
    newValue.setAttribute("value", val.nodeValue);
    newValue.setAttribute("class", "inputEdit");
    newValue.setAttribute("id", "inputEdit");
    a.parentNode.replaceChild(newValue, val);
    document.getElementById("inputEdit").focus();


    var oldbtn = a.parentNode.childNodes[1];
    var updateBtn = document.createElement("button");
    var updateText = document.createTextNode("Update");
    updateBtn.setAttribute("onclick", "update(this)");
    updateBtn.className = "update";
    updateBtn.appendChild(updateText);
    a.parentNode.replaceChild(updateBtn, oldbtn);
}

function update(a) {
    var val = a.parentNode.childNodes[0];
    var newText = document.createTextNode(val.value);
    a.parentNode.replaceChild(newText, val);

    var oldbtn = a.parentNode.childNodes[1];
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "edit(this)");
    editBtn.className = "edit";
    editBtn.appendChild(editText);
    a.parentNode.replaceChild(editBtn, oldbtn);
}

function delAll() {

    var x = confirm("Are you sure you want to delete all the items?");
    if (x) {
        item_list.innerHTML = "";
        return true;
    }
    else {
        return false;
    }
}