var id;
var gain;
$(document).ready(function (e) {
     //affiche le formulaire
     $("#btn_add").on("click", (e) => {
          console.log("clicked")
          $("#add_value").show();
          $("#add_poid").show();
          $("#btn_add_object").show();
          $("#btn_add").hide();
     })
     id = 0
     $("#btn_add_object").click((e) => {
          const value = $('#value').val() || 0
          const poid = $('#poid').val() || 0
          var row = "<th scope='row'>" + (id + 1) + "</th><td>" + value + "</td><td>" + poid + "</td><td><button class='btn btn-outline-danger' onclick='remove(" + id + ")'> <i class='bi bi-x-circle  btn-lg pull-right '></i></button></td>";
          $("#tbody:last-child").append("<tr id='adr" + id + "'> " + row + "</tr>")
          id++;
     })


     /*
          $('#tbody').click(function (e) {
               var el = e.target || event.srcElement;
               var id_row = el.id
               console.log(id_row)
               if (id >= 0) {
                    $("#adr" + (id_row)).remove();
                    id--;
               };
          });*/
})
function remove(rowid) {
     console.log(rowid)
     $('#adr' + rowid).remove();
     id--;
}



var N;

var submit = $('#btn_submit');
submit.click(function (e) {
     var W = parseInt($("#w_total").val());
     var table = $("#tbody");
     N = $("#tbody tr").length;
     var v = [], w = [];

     table.find('tr').each(function (i, el) {
          var $tds = $(this).find('td');
          console.log($tds)

          value = $tds.eq(0).text();
          poid = $tds.eq(1).text();

          v.push(parseInt(value));
          w.push(parseInt(poid));
     });

     console.log('v=' + v);
     console.log('w=' + w);
     console.log("w=" + W);
     console.log("N=" + N);

     var [selectedOject, gain] = Solution(W, N, w, v);

     //display gain 
     var p = $("#gain p")
     p.append(gain);
     p.show();

     console.log('selectedOject=' + selectedOject);

     for (var i = 0; i < N; i++) {
          console.log(selectedOject.indexOf(i))
          if (selectedOject.indexOf(i) == (-1)) {
               $('#adr' + i).css("background-color", "#d9534f");
          } else {
               $('#adr' + i).css("background-color", "#5cb85c");
          }
     }
});
