function download(file){
    var link = document.getElementById("downlink");
    link.setAttribute("download",file);
    link.click()

};


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
});


// $(document).ready(function(){
//     $('#sql').click(function(){
//         if($('.sqlinfo').is('')){
//             $('.sqlinfo').show();
//         }else{
//             $('.sqlinfo').hide();
//         }
//     });
// });

// $(document).ready(function(){
//     $('#sql').click(function(){
//         var label = $('#sql').text().trim();
//         if (label == ''){
//             $('.#sql').text("Show");
//             $('.sqlinfo').hide();
//             $('sqltext').show();
//         }
//         else {
//             $('#sql').text("Hide");
//             $('.sqlinfo').show();
//             $('sqltext').hide();
//         }
// });

// function a(){
//     var mysql = document.getElementById('a');
//     var displaySetting = mysql.style.display;
//     var Buttonsql = document.getElementById('Buttonsql');
//     if (displaySetting=='none'){
//         mysql.style.display='block';
//         Buttonsql.innerHTML="Hello im here";
//     }else{
//         mysql.style.display='block';
//         Buttonsql.innerHTML="Hooo";
//     }
// }
// function main(){
//     a();
// }

// function showHideDiv(ele) {
//     var srcElement = document.getElementById(ele);
//     if (srcElement != null) {
//         if (srcElement.style.display == "block") {
//             srcElement.style.display = 'none';
//         }
//         else {
//             srcElement.style.display = 'block';
//         }
//         return false;
//     }
// }

// });

//     let sql = document.getElementById(id);
//     let SQL = document.getElementById("sql");

//     if(sql.style.display == "block"){
//         sql.style.display="none";
//         SQL.innerHTML = 
//         'd <i class="fa-solid fa-circle-info"></i>';
//     }else{
//         sql.style.display="block" ;
//         SQL.innerHTML=  ' y <i class="fa-solid fa-circle-check"></i>';
//     }
// }