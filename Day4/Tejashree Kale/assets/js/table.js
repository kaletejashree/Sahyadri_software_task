$(document).ready(function(){

    $("#datatable").DataTable();
})


function submitinfo(){

var Firstname=document.getElementById("Firstname").value;
var Lastname=document.getElementById("Lastname").value;
var Email=document.getElementById("Email").value;
var Address=document.getElementById("Address").value;
var persons=document.getElementById("persons").value;

const list=document.querySelector("#list");
const row=document.createElement("tr");

row.innerHTML=`<td>${Firstname}</td>
               <td>${Lastname}</td>
               <td>${Email}</td>
               <td>${Address}</td>
               <td>${persons}</td>
               <td><button class='btn btn-primary' onclick='editdata(this)'>Edit</button>
               <button class='btn btn-danger' onclick='removedate(this)'>delete</button></td>`;
        
list.appendChild(row);
 
document.getElementById("Firstname").value=" ";
document.getElementById("Lastname").value="";
document.getElementById("Email").value="";
document.getElementById("Address").value="";
document.getElementById("persons").value="";

}

function editdata(button)
{
    let newrow=button.parentNode.parentNode;

    let namecell=newrow.cells[0];
    let lastcell=newrow.cells[1];
    let emailcell=newrow.cells[2];
    let addresscell=newrow.cells[3];
    let personcell=newrow.cells[4];

    let namecategory=prompt("enter the Firstname name",namecell.innerHTML);
    let lastcategory=prompt("enter the Last Name",lastcell.innerHTML);
    let emailcategory=prompt("enter the Email",emailcell.innerHTML);
    let addcategory=prompt("enter the Address",addresscell.innerHTML);
    let personcategory=prompt("enter the number of persons",addresscell.innerHTML);


    namecell.innerHTML=namecategory;
    desccell.innerHTML=lastcategory;
    activecell.innerHTML=emailcategory;
    addresscell.innerHTML=addcategory;
    personcell.innerHTML=personcategory;
}

function removedate(button)
{
    let removerow=button.parentNode.parentNode;
    removerow.parentNode.removeChild(removerow);
}






var modalId = document.getElementById('modalId');

modalId.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      let button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});