$(document).ready(function (e) {
     //affiche le formulaire
     $("#btn_add").on("click", (e) => {
          console.log("clicked")
          $("#add_value").show();
          $("#add_poid").show();
          $("#btn_add_object").show();
          $("#btn_add").hide();
     })

     var id = 0;
     $("#btn_add_object").click((e) => {
          const value = $('#value').val() || 0
          const poid = $('#poid').val() || 0
          var row = "<th scope='row'  id='adr" + id + "'>" + id + " </th><td>" + value + "</td><td>" + poid + "</td>";
          $("#tbody").append("<tr>" + row + "</tr>")
          id++;
     })


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

          var selectedOject = Solution(W, N, w, v);

          console.log('selectedOject=' + selectedOject);

          for (var i = 0; i < N; i++) {
               console.log(selectedOject.indexOf(i))
               if (selectedOject.indexOf(i) == (-1)) {
                    $('#adr' + i).parent().css("background-color", "#d9534f");
               } else {
                    $('#adr' + i).parent().css("background-color", "#5cb85c");
               }
          }
     });

})