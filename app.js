function changecolor(){
let hex_number = ['0','1','2','3','4','5','6','7','8','9','A',"B", "C", "D", "E", "F"];
let hex_code ='';
 for(let i=0; i<6;i++ ){
    let randam_index=Math.floor(Math.random()* hex_number.length);
    hex_code += hex_number[randam_index];
 }
 document.getElementById("Hex-code").innerHTML=hex_code;
// document.body.style.backgroundColor='#'+hex_code;
 document.body.style.backgroundColor = '#' + hex_code;

}