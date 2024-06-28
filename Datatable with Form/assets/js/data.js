$(document).ready(function(){
   
    $("#datatable").dataTable();
  
  });

  function submitinfo(){

    var tracking_id=document.getElementById("tracking_id").value;
    var product=document.getElementById("product").value;
    var customer=document.getElementById("customer").value;
    var date=document.getElementById("date").value;
    var amount=document.getElementById("amount").value;
    var status=document.getElementById("status").value;
    
    const list=document.querySelector("#list");
    const row=document.createElement("tr");
    
    row.innerHTML=`<td>${tracking_id}</td>
                   <td>${product}</td>
                   <td>${customer}</td>
                   <td>${date}</td>
                   <td>${amount}</td>
                   <td>${status}</td>
                   <td><i onclick="editdata(this)" class="fa-solid fa-pen-to-square ml-3" style="color: rgb(0, 115, 255); font-size: 25px"></i>
                    <i onclick='removedate(this)' class="fa-solid fa-trash  ml-3" style="color: rgb(255, 0, 0);font-size:20px"></i>`;
            
    list.appendChild(row);
     
    document.getElementById("tracking_id").value=" ";
    document.getElementById("product").value="";
    document.getElementById("customer").value="";
    document.getElementById("date").value="";
    document.getElementById("amount").value="";
    document.getElementById("status").value="";
    }
    
    function editdata(button)
    {
        let newrow=button.parentNode.parentNode;
    
        let tracking_idcell=newrow.cells[0];
        let productcell=newrow.cells[1];
        let customercell=newrow.cells[2];
        let datecell=newrow.cells[3];
        let amountcell=newrow.cells[4];
        let statuscell=newrow.cells[5];
    
        let tracking_idcategory=prompt("enter the id",tracking_idcell.innerHTML);
        let productcategory=prompt("enter the product Name",productcell.innerHTML);
        let customercategory=prompt("enter the customer Name",customercell.innerHTML);
        let datecategory=prompt("enter the date",datecell.innerHTML);
        let amountcategory=prompt("enter the number of amount",amountcell.innerHTML);
        let statuscategory=prompt("enter the status",statuscell.innerHTML);
    
    
        tracking_idcell.innerHTML=tracking_idcategory;
        productcell.innerHTML=productcategory;
        customercell.innerHTML=customercategory;
        datecell.innerHTML=datecategory;
        amountcell.innerHTML=amountcategory;
        statuscell.innerHTML=statuscategory;
    }
    
    function removedate(button)
    {
        let removerow=button.parentNode.parentNode;
        removerow.parentNode.removeChild(removerow);
    }
    