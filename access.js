const demo_id = document.getElementById("demo"); // One way through which js manipulates HTML is through getElementById
// console.log(demo_id);
demo_id.style.border = "1px solid purple";

const demo_class = document.getElementsByClassName("demo"); // we can also manipulate HTML through classes
// console.log(demo_class);
// Access more than one element by the same name we use index/position of the elements

  demo_class[0].style.border = '1px solid purple';
  demo_class[1].style.border = '1px solid green';
 
// Access many elements using the forloop
// giving an element different commands you will use an if state
for (i = 0; i < demo_class.length; i++) {
  demo_class[i].style.border = "1px solid green";
}

const demo_tag = document.getElementsByTagName("article");
for (a = 0; a < demo_tag.length; a++) 
{
  demo_tag[a].style.border = "1px solid blue";
}

const demo_query = document.querySelector("#demo_query");
demo_query.style.border = "1px solid black";

const demo_query_all = document.querySelectorAll(".demo_query_all");
for (i = 0; i < demo_query_all.length; i++) {
  demo_query_all[i].style.border = "1px solid orange";
}
