//to retrieve data from local storage
function lists() {
    var list = new Array();
    var list_str = localStorage.getItem("list");
    if (list_str !== null) {
      list = JSON.parse(list_str);
    }
  return list;
}
  
//to add item to list
function add() {
    var task = document.getElementById("task").value;
  
    var list = lists();
    list.push(task);
    localStorage.setItem("list", JSON.stringify(list));
  
    show();
    clearDefault();
  return false;    //use this to avoids any futher action with click event
}
  
//to remove tasks from the list
function remove() {
    var id = this.getAttribute("id");    //to refers to the current DOM element
    var list = lists();
    list.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(list));
  
    show();
  return false;
}
  
//to clear the task value from input box
function clearDefault() {
  document.getElementById("task").value = "";
}
  
//to show data in the list
function show() {
  var list = lists();
  
    var html = "<ol>";
    for (var i = 0; i < list.length; i++) {
      html +=
        "<li>" +
        list[i] +
        '<button class="remove" id="' + i + '">Delete</button> </li>';
    }
    html += "</ol>";
    console.log(html);
    document.getElementById("list").innerHTML = html;
  
    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
    }
}
  
document.getElementById("add").addEventListener("click", add);
show();
