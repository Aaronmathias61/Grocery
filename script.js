var grocery = [];
var i = 0;
totable();
function add() {
  var element = {};
  var one = document.getElementById("grocery").value;
  var two = document.getElementById("quantity").value;
  console.log(grocery);
  var count = 0;

  for (let l in grocery) {
    if (grocery[l].name === one) {
      grocery[l].quantity = parseInt(grocery[l].quantity) + parseInt(two);
      count++;
      // var x =
      //   document.getElementById("textarea").rows[parseInt(l) + 1].cells[2]; // gives column the length
      // var y = document.getElementById("textarea").rows.length; // gives row the length
      // z = grocery[l].quantity;
      // console.log(z);
      // console.log(x);
      var w = parseInt(l) + 1;
      var td10 = document.getElementById("rem" + w);
      // console.log(td10);
      td10.innerHTML = grocery[l].quantity;
      row.appendChild(td10);
      table.appendChild(row);
      document.body.appendChild(table);
      console.log(td);
    }
  }
  if (count == 0) {
    i++;
    element.sno = parseInt(i);
    element.name = one;
    element.quantity = parseInt(two);
    grocery.push(element);
    var table = document.getElementById("textarea");
    // table.refresh();
    var row = document.createElement("tr");
    row.setAttribute("id", "rowdel" + i);
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td3.setAttribute("id", "rem" + i);
    var td4 = document.createElement("button");
    td4.setAttribute("id", "removebtn" + i);
    td4.addEventListener("click", remove(i));

    td1.innerHTML = i;
    td2.innerHTML = one;
    td3.innerHTML = two;
    td4.innerHTML = "Remove";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    table.appendChild(row);
    document.body.appendChild(table);
  }
}
// Display all the element in the table
function totable() {
  var table = document.getElementById("textarea");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  td1.innerHTML = "S.No";
  td2.innerHTML = "Product Name";
  td3.innerHTML = "Quantity";
  td4.innerHTML = "Delete Button";

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  table.appendChild(row);
  document.body.appendChild(table);
}

function remove(n) {
  console.log(n);
}
