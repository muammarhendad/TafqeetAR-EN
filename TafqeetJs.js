function tafqeet(number_){
  var value = "";
  var value0 = "";
  var value1 = "";

  number = parseInt (number_);
  if(number==0) value=" صفر ";
  if(number>0&&number<=19)
  {
    switch(number){
      case 1: value0="واحد"; break;
      case 2: value0="اثنان"; break;
      case 3: value0="ثلاثة"; break;
      case 4: value0="اربعة"; break;
      case 5: value0="خمسة"; break;
      case 6: value0="ستة"; break;
      case 7: value0="سبعة"; break;
      case 8: value0="ثمانية"; break;
      case 9: value0="تسعة"; break;
      case 10: value0="عشرة"; break;
      case 11: value0="احدى عشر"; break;
      case 12: value0="اثنا عشر"; break;
      case 13: value0="ثلاثة عشر"; break;
      case 14: value0="اربعة عشر"; break;
      case 15: value0="خمسة عشر"; break;
      case 16: value0="ستة عشر"; break;
      case 17: value0="سبعة عشر"; break;
      case 18: value0="ثمانية عشر"; break;
      case 19: value0=" تسعة عشر"; break;
 
    }
    value=value0;
  }
  else if(number>19&&number<=99){
      var x=number/10;
      var y=number%10;
      x=parseInt(x);
      switch(x){
      case 2: value1="عشرون"; break;
      case 3: value1="ثلاثون"; break;
      case 4: value1="اربعون"; break;
      case 5: value1="خمسون"; break;
      case 6: value1="ستون"; break;
      case 7: value1="سبعون"; break;
      case 8: value1="ثمانون"; break;
      case 9: value1="تسعون"; break;

      }
      if(y!=0)value=tafqeet(y)+" و " + value1;
      else value=value1;
    
        
      
  }
  else if(number>99&&number<=999){
    var x=number/100;
    var y=number%100;
    x=parseInt(x);
    switch(x){
    case 1: value1="مائة"; break;
    case 2: value1="مائتان"; break;
    case 3: value1="ثلاثمائة"; break;
    case 4: value1="اربعمائة"; break;
    case 5: value1="خمسمائة"; break;
    case 6: value1="ستمائة"; break;
    case 7: value1="سبعمائة"; break;
    case 8: value1="ثمانمائة"; break;
    case 9: value1="تسمائة"; break;

    }
    if(y!=0)value= value1+" و "+tafqeet(y);
    else value=value1;
}

else if(number>999&&number<=999999){
  var x=number/1000;
  var y=number%1000;
  x=parseInt(x);
  switch(x){
  case 1: value1="الف"; break;
  case 2: value1="الفان"; break;

  default:value1=tafqeet(x)+ " الف";break;


  }
  if(y!=0)value= value1+" و "+tafqeet(y);
  else value=value1;
}

else if(number>999999&&number<=999999999){
  var x=number/1000000;
  var y=number%1000000;
  x=parseInt(x);
  switch(x){
  case 1: value1="مليون"; break;

  default:value1=tafqeet(x)+ " مليون";break;


  }
  if(y!=0)value= value1+" و "+tafqeet(y);
  else value=value1;
}
else if(number>999999999&&number<=999999999999){
  var x=number/1000000000;
  var y=number%1000000000;
  x=parseInt(x);
  switch(x){
  case 1: value1="مليار"; break;

  default:value1=tafqeet(x)+ " مليار";break;


  }
  if(y!=0)value= value1+" و "+tafqeet(y);
  else value=value1;
}
else if (number>999999999999){
  value="الرقم كبير جدا"
}

  return value;
}// end function 

//===============================================================
  // only number function 
  function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode==46)return true; // dot ASCII CODE
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } 
    return true;
}
function toWords(s) {
  var th = ['','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
 var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
 var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  s = s.toString();
  s = s.replace(/[\, ]/g,'');
  if (s != parseFloat(s)) return 'not a number';
  var x = s.indexOf('.');
  if (x == -1)
      x = s.length;
  if (x > 15)
      return 'too big';
  var n = s.split(''); 
  var str = '';
  var sk = 0;
  for (var i=0;   i < x;  i++) {
      if ((x-i)%3==2) { 
          if (n[i] == '1') {
              str += tn[Number(n[i+1])] + ' ';
              i++;
              sk=1;
          } else if (n[i]!=0) {
              str += tw[n[i]-2] + ' ';
              sk=1;
          }
      } else if (n[i]!=0) { // 0235
          str += dg[n[i]] +' ';
          if ((x-i)%3==0) str += 'hundred ';
          sk=1;
      }
      if ((x-i)%3==1) {
          if (sk)
              str += th[(x-i-1)/3] + ' ';
          sk=0;
      }
  }
  
  if (x != s.length) {
      var y = s.length;
      str += 'point ';
      for (var i=x+1; i<y; i++)
          str += dg[n[i]] +' ';
  }
  return str.replace(/\s+/g,' ');
}

function add_link(val){
  if(val=="rtl"){
    location.reload();
return false;
    //document.getElementById("en_ltr").remove();
    //document.getElementById("en_ltr").remove();
   // var headID = document.getElementsByTagName('head')[0];
    //var link = document.createElement('link');
  //  link.rel = "stylesheet";
   // link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.rtl.min.css";
   // link.integrity="sha384-WJUUqfoMmnfkBLne5uxXj+na/c7sesSJ32gI7GfCk4zO4GthUKhSEGyvQ839BC51";
  //  link.crossorigin="anonymous";
   // link.id="ar_rtl";

   // document.head.appendChild(link);

  }
  if(val="ltr"){
    document.getElementById("ar_rtl").remove();
   // document.getElementById("en_ltr").remove();
    var headID = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id="en_ltr";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    link.integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD";
  

    headID.appendChild(link);

  }
}


