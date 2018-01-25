//个人博客登录页的dom操作

$(".login").click(function(){
    $(".login-hidden").show("slow");
    $(".login").css("background","#666");

});
$(".loginSubmit").click(function(SweetAlert){
    var username=$("#username").val(),
    	password=$("#password").val();
	var data={
		username:username,
		password:password
	}
	$.ajax({  
        type: "get",
        url: "json/login.json",
        async: false,  
        success: function(e) {
            if(e.state == 200){
                if(e.data.name == username || e.data.pass == password){
                   window.location.href="./view/home/index.html";
                }
            }  
        }
	})
 });
