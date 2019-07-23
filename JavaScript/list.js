window.setTimeout(function() {
  // put all of your JS code from the lecture here
var todo = ["Hello"];

var input = prompt("What would you like to do?");

while (input !== "quit"){


    if (input === "list"){
        console.log("***************");
        todo.forEach(function(todos, i){
         console.log(i + ": " + todos);
        });
        console.log("***************");

    }

    else if(input === "new"){

    var newTodo = prompt("Enter new to-do");
    todo.push(newTodo);
        }
    else if(input === "delete"){
        var index = prompt("Enter index of item to be deleted");
        todo.splice(index, 1);
        console.log("deleted item")
    }
    input = prompt("What would you like to do?");
}

    console.log("You quit the app");

}, 500);


