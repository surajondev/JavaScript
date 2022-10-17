
   $(document).ready(()=>{
    $("#submit").click( ()=>{
     var x = document.getElementById("owner").value;
     var y = document.getElementById("repo").value;
        let url = `https://api.github.com/search/repositories?q=${x}/${y}`;

        $.ajax({
            url:url,
            type:'get',
            dataType:'json',
            success: function(result){
 
                var license_name = null
                 if (result.items[0].license != null)
                     license_name = result.items[0].license.name
                 else
                     license_name = null

                 document.write(` <div style="line-height: 30px; font-size:20px; font-weight:bold; background-color:aqua;">{<br>` );
                 document.write(` &emsp; name : ${result.items[0].name},<br> &emsp; full_name : ${result.items[0].full_name}, <br>&emsp; private : ${result.items[0].private},<br>&emsp; Owner : {<br> &emsp; login : ${result.items[0].owner.login}<br>`)

              $.ajax({
                 url:"https://api.github.com/users/JatinSadhwani02",
                 type:'get',
                 dataType:'json',
                 success: function(datas){
                     document.write(`&emsp; followerCount : ${datas.followers}, <br> &emsp; followingCount : ${datas.following} <br>&emsp;},<br>`);
                     document.write(`&emsp; license : ${license_name}, <br> &emsp; score : ${result.items[0].score}  <br>} </div>`)

                 }}
             )
     },
error : function(error){
     alert("error");
     
 }
            
         })
     } )
 })