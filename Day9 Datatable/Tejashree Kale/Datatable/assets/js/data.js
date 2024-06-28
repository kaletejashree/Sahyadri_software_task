
$(document).ready(function(){

$("#datatable").dataTable();

});
function removedate(button)
{
    let removerow=button.parentNode.parentNode;
    removerow.parentNode.removeChild(removerow);
}
