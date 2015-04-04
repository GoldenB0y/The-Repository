function stopDefAction(evt) {
    evt.preventDefault();
    addOutgoing(document.getElementById("MessageText").value);
    postToAPI();
}
function createJson(message)
{
    return JSON.stringify({"message": message});
}
function postToAPI()
{
    var data = createJson(document.getElementById("MessageText").value);
    var request = new XMLHttpRequest();
    request.open('POST', '/api/PostTest', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(data);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            addIncoming("Request Received status = " + request.status + " for message " + request.responseText);
        }
    }
}
function addOutgoing(text)
{
    var newDiv = document.createElement("div");
    newDiv.className = "outgoing";
    newDiv.innerText = 'Posting to server with message "' + text + '"';
    document.getElementById("traffic").appendChild(newDiv);
}
function addIncoming(text)
{
    var newDiv = document.createElement("div");
    newDiv.className = "incoming";
    newDiv.innerText = text;
    document.getElementById("traffic").appendChild(newDiv);
}

var el = document.getElementById('PostButton');
if (el) {
    el.addEventListener('click', stopDefAction, false);
}
