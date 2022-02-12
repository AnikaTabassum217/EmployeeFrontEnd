$(document).ready(function(){
	alert("hi");
  //$("#getEmployeebtn").click(function(){
    //alert("yes load");

    $.get("http://localhost:9090/api/findAllEmployee", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);

      console.log(data);

var tableBodyHtml = "";
    $.each(data, function( index, value ) {
    tableBodyHtml += "<tr>";
      tableBodyHtml += "<td>"+(index+1)+"</td>";
      tableBodyHtml += "<td>"+value.name+"</td>";
      tableBodyHtml += "<td>"+value.age+"</td>";
      tableBodyHtml += "<td>"+value.address+"</td>";
      tableBodyHtml += "<td>"+value.phoneNumber+"</td>";
      tableBodyHtml += "<td>"+value.department+"</td>";
      tableBodyHtml += "<td>"+value.dateCreate+"</td>";
      tableBodyHtml += "<td>"+value.dateUpdate+"</td>";
      tableBodyHtml += "<td>"+value.cityId+"</td>";
    tableBodyHtml += "</tr>";
  });

  //console.log(tableBodyHtml);

  $("#dataBody").html(tableBodyHtml);

    });
  });
//});
//======================
  // var tableBodyHtml = "";
  //   $.each(data, function( index, value ) {
  //   tableBodyHtml += "<tr style='color:pink'>";
  //     tableBodyHtml += "<td>"+(index+1)+"</td>";
  //     tableBodyHtml += "<td>"+value.name+"</td>";
  //     tableBodyHtml += "<td>"+value.age+"</td>";
  //     tableBodyHtml += "<td>"+value.address+"</td>";
  //   tableBodyHtml += "</tr>";
  // });

  // //console.log(tableBodyHtml);

  // $("#dataBody").html(tableBodyHtml);