$('#textlo').val(0); 
$('#texthi').val(0); 
$('#moms').text(0); 

var momspercent = 0.25;
function moms(percent){
 momspercent = percent;
 
}

$('#textlo').on("input", function() {

  function makeSwe(num) {
    num = num.split('');
    var commaIs = false;

    for (var i = num.length-1 ;i>=0;i--){
      if(num[i]==="."){
        num.splice(i,1,",");
          for (var j = 1; j<=parseInt((i-1)/3);j++){
            num.splice(i-(j*3),0," ");
          }
        commaIs = true;
     }
    }
    if (commaIs===false && num.length>=4){
      for (var j = parseInt((num.length-1)/3); j>=1;j--){
        num.splice((num.length)-(j*3),0," ");
      }
    }
    num = num.join('');
    return num;
  }

  input= this.value.split('');
  if(input[0]==="0"){
      input.splice(0,1);
    }
  for (var i = input.length-1 ;i>=0;i--){
    var charCode = input[i].charCodeAt();
    if ( charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      if (charCode == 44){
        input.splice(i,1,".");


      }else{
      input.splice(i,1);
      }
    }
  }
  if(input[0]===undefined){
    input[0] = 0;
  }
  input = input.join("");
  var converted = (input/(1+momspercent)).toFixed(2);
  converted = makeSwe(converted);
  var orig = input;
  orig = makeSwe(orig);
  var moms = (input-input/(1+momspercent)).toFixed(2);
  // var moms = (input*0.2).toFixed(2);

  moms = makeSwe(moms);

  $('#textlo').val(orig);
  $('#texthi').val(converted);
    $('#moms').text(moms);
});













$('#texthi').on("input", function() {
  input= this.value.split('');
    if(input[0]==="0"){
      input.splice(0,1);
    }
  for (var i = input.length-1 ;i>=0;i--){
    var charCode = input[i].charCodeAt();
    if ( charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      if (charCode == 44){
        input.splice(i,1,".");
      }else{
      input.splice(i,1);
      }
    }
  }
  if(input[0]===undefined){input[0]= 0}

  input = input.join("" );
  $('#texthi').val(input);
  $('#textlo').val((input*1.25).toFixed(2));
    $('#moms').text(((input*0.25).toFixed(2)));
});

$("#textlo,#texthi")/*.mousedown(function(e){
  this.select();

})*/.mouseup( function(e){
  this.select();
          // e.stopPropagation(); 
          // console.log("hej");

});

/*var typeof valuetemp;
var selecttemp;
$(document).ready(function() {
      $("#textlo,#texthi").on('mousedown', function(e) { //textlo,#texthi kommer att tömmas på information vid mousedown
          // console.log($(this).attr('id'));
          // $(selecttemp).blur();
          
          if (selecttemp != '#'+$(this).attr('id') && selecttemp){ //så man kan byta låda och återställa gamla lådan. kör koden från document först sedan kör resten. knöggligt men funkar.
          console.log("olika");

          $(selecttemp).val(valuetemp);
          valuetemp = $(this).val(); 
          selecttemp = '#'+$(this).attr('id'); 
          $(this).val(null);
          e.stopPropagation(); 

          }
          if(selecttemp){ //så att man kan trycka igen på lådan och få fram värdet om man trycker på samma låda , kommer att "pausa" den här funktionen och slussa vidare till "'document' mousedown". Annars sätts värdet till null om och om igen
          console.log("again");
          e.preventDefault(); //avaktivera dubbelklick  
          // this.selectionStart = this.selectionEnd = -1; //avaktivera rutan

          }
          else{
          // console.log("dacode");

          e.stopPropagation(); // gör så att elementen inte innefattas av 'document' 
          valuetemp = $(this).val(); //sparar värdet
          selecttemp = '#'+$(this).attr('id'); //sparar vilket av lådorna som sparar info 
          $(this).val(null); //sätter lådan till null dvs. tom        
        }
      }).on('keydown', function(){
          if(selecttemp){
          selecttemp=null; //gör så att tömningen kan göras efter man tryckt in nya värden. så att man slipper dubbelklicka. 
          } 
        }).keydown(function (e) {
          // Tillåt: backspace, delete, tab, escape, enter .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1) {
                   return;
          }
          // se till att det är en siffra och stoppa 
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });;
      $(document).on('mousedown', function (e) {
          // console.log("doc");
          // $("#texthi").focus();

        if (selecttemp) { //om selecttemp har info on vilket id som skall fixas så...
          $(selecttemp).val(valuetemp); //sätts ursprungliga vädret
          selecttemp=null; //och selecttemp töms så att den här funktionen inte triggas mer
        }
      });

  });*/
