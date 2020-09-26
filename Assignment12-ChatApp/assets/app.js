firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        name = firebase.auth().currentUser.displayName;
        uid = firebase.auth().currentUser.uid;

        var updates = {};
        updates['/onlineUsers/' + uid + '/name'] = name;
        firebase.database().ref().update(updates);
    }
});


function bottomPage() {
    window.scrollTo(0, document.body.scrollHeight);
}

function sendMsg() {
    var message = document.getElementById("msg").value;

    firebase.database().ref("messages").push().set({
        "sender": name,
        "message": message
    });

    document.getElementById("msg").value = "";
    console.log(document.getElementById("msg").value);

    bottomPage();

    return false;
}

var listMsgs = document.getElementById("listMsgs");

firebase.database().ref("messages").on("child_added", function (item) {

    sender = document.createTextNode(`${item.val().sender}:`);
    msg = document.createTextNode(`${item.val().message}`);

    senderSpan = document.createElement("span");
    messageSpan = document.createElement("span");

    senderSpan.setAttribute("class", "sender");
    messageSpan.setAttribute("class", "message");

    senderSpan.appendChild(sender);
    messageSpan.appendChild(msg);

    var div = document.createElement("div");
    var li = document.createElement("li");

    if (item.val().sender == name) {
        div.setAttribute("class", "messageDIV active");
        li.setAttribute("style", "justify-content: flex-end;");
    } else {
        div.setAttribute("class", "messageDIV others");
        div.appendChild(senderSpan);
    }

    div.appendChild(messageSpan);

    li.setAttribute("id", `msg_${item.key}`);
    li.appendChild(div);

    if (item.val().sender == name && item.val().message != "This message has been deleted") {
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        btn.setAttribute("key_id", item.key);
        btn.setAttribute("onclick", "delMsg(this)");
        li.appendChild(btn);
    }

    if (listMsgs != null) {
        listMsgs.appendChild(li);
    }

    bottomPage();
});


function delMsg(e) {
    var msgId = e.getAttribute("key_id");

    // firebase.database().ref("messages").child(msgId).remove();
    firebase.database().ref("messages").child(msgId).update({
        "message": "This message has been deleted"
    });
}

firebase.database().ref("messages").on("child_changed", function (item) {
    var par = document.getElementById(`msg_${item.key}`).childNodes[0];
    var btn = document.getElementById(`msg_${item.key}`);
    par.childNodes[1].innerHTML = "This message has been deleted";
    btn.removeChild(btn.childNodes[1]);
});


firebase.database().ref("onlineUsers").on("child_added", function (item) {
    var ul = document.getElementById("online");
    var li = document.createElement("li");
    li.setAttribute("id",item.key);
    var user = document.createTextNode(item.val().name);
    if(item.key != uid) {
        li.appendChild(user);
        ul.appendChild(li);
    }
});

firebase.database().ref("onlineUsers").on("child_removed", function (item) {

    li = document.getElementById(item.key);
    li.parentNode.removeChild(li);
});


function fbLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}


function registerWithEmail() {
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;
    let name = document.getElementById("reg-name").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }, function (error) {
            console.log(error)
        });
    }, function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]

        if (errorMessage) {

            document.getElementById("errorMsgReg").innerHTML = errorMessage;

        }
        // [END_EXCLUDE]
    });

}

function loginWithEmail() {

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorMessage) {

            document.getElementById("errorMsg").innerHTML = errorMessage;

        }
    });
}


function signOut() {
    firebase.auth().signOut().then(function () {
        location.href = "login.html"
        firebase.database().ref("onlineUsers").child(uid).remove();
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}


function auth_tab(e, auth_id) {

    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(auth_id).style.display = "block";
    e.currentTarget.className += " active";
}

// if(window.location.href == "")

if (document.getElementById("defaultOpen") != null) {

    document.getElementById("defaultOpen").click();
}
