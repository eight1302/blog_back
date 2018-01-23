
//获取页面的高度
var height = window.innerHeight;
$(".cover").css("height",height);
height_main = this.height-40;
$(".main").css("height",height_main);

//加载公共文件
$("header").load("../include/header.html");
$("footer").load("../include/footer.html");
$(".preson_info").load("./person.html");
$(".express_add").load("./express.html");

 //启用滚动条
 $(document.body).css({"overflow-x":"auto","overflow-y":"auto"});

//添加修改个人信息
$(".cover").hide();
$(".add_person").on('click',function(){
	$(".cover").show();
	$(document.body).css({"overflow-x":"hidden","overflow-y":"hidden"});
	$(".preson_info").show();
	$(".cencal").on('click',function(){
		$(".cover").hide();
		$(".preson_info").hide();
		$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
	});
	$(".header_img").on('click',function(sweetalert){
        document.getElementById("uodate_img").click();
        $("#uodate_img").change(function(){
            var objUrl = getObjectURL(this.files[0]) ;
            console.log("objUrl = "+objUrl) ;
            if (objUrl){
                $(".img_header").attr("src", objUrl);
            }
            //建立一個可存取到該file的url
            function getObjectURL(file) {
                var url = null ;
                if (window.createObjectURL!=undefined){ // basic
                    url = window.createObjectURL(file) ;
                }
                else if (window.URL!=undefined){
                    // mozilla(firefox)
                    url = window.URL.createObjectURL(file) ;
                } 
                else if (window.webkitURL!=undefined) {
                    // webkit or chrome
                    url = window.webkitURL.createObjectURL(file) ;
                }
                return url ;
            }
        });
        $(".put").on('click',function(sweetalert){
        	var uodate_img = $("#uodate_img").val(),
        		graduate_School = $("#graduate_School").val(),
	        	professional = $("#professional").val(),
	        	date = $("#date").val(),
	        	working = $("#working").val(),
	        	company = $("#company").val(),
	        	job = $("#job").val();
		    //判断是否为空
		    if(uodate_img == '' || graduate_School == '' || professional == '' || date == '' || working == '' || company == '' || job == ''){
		        swal("数据不能为空!");
		        return false;
		    }

		    var data = {
		    	"uodate_img" : uodate_img,
		    	"graduate_School" : graduate_School,
		    	"professional" : professional,
		    	"date" : date,
		    	"working" : working,
		    	"company" : company,
		    	"job" : job
		    }

			$.ajax({  
		        type: "post",
		        url: "../../json/ok.json",
		        async: false,  
		        success: function(e) {
		            if(e.state == 200){
			            swal({title: "新增成功"},function(){
							$(".cover").hide();
							$(".preson_info").hide();
							$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
						});
		            }  
		        }
			})
		});
    });
});

//新增项目经验
$(".add_express").on('click',function(){
	$(".cover").show();
	$(document.body).css({"overflow-x":"hidden","overflow-y":"hidden"});
	$(".express_add").show();
	$(".cencal").on('click',function(){
		$(".cover").hide();
		$(".express_add").hide();
		$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
	});
	$(".add").on('click',function(sweetalert){
        var project_name = $("#project_name").val(),
        		working_up = $("#working_up").val(),
	        	working_end = $("#working_end").val(),
	        	description = $("#description").val(),
	        	path = $("#working").val(),
	        	project_description = $("#project_description").val();
		//判断是否为空
	    if(project_name == '' || working_up == '' || working_end == '' || description == '' || path == '' || project_description == ''){
	        swal("数据不能为空!");
	        return false;
	    }

	    var data = {
	    	"project_name" : project_name,
	    	"working_up" : working_up,
	    	"working_end" : working_end,
	    	"description" : description,
	    	"path" : path,
	    	"project_description" : project_description
	    }
		$.ajax({  
		    type: "post",
		    url: "../../json/ok.json",
		    async: false,  
		    success: function(e) {
			    if(e.state == 200){
	   	            swal({title: "新增成功"},function(){
	   	           		$(".cover").hide();
						$(".express_add").hide();
						$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
					});
			    }  
			}
		})
	});
});

//修改项目经验
$(".express_info").on('click','.update_express',function(){
	$(".cover").show();
	$(document.body).css({"overflow-x":"hidden","overflow-y":"hidden"});
	$(".express_add").show();
	$(".cencal").on('click',function(){
		$(".cover").hide();
		$(".express_add").hide();
		$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
	});
	var name = $(this).parent().parent().find(".name_product").html(),
		time1 = $(this).parent().parent().find(".time1").html(),
		time2 = $(this).parent().parent().find(".time2").html(),
		details = $(this).parent().parent().find(".details").html(),
		load = $(this).parent().parent().find(".load").html(),
		url = $(this).parent().parent().find(".url").html();
	$("#project_name").val(name);
	$("#working_up").val(time1);
	$("#working_end").val(time2);
	$("#description").val(load);
	$("#path").val(url);
	$("#project_description").val(details);



	$(".add").on('click',function(sweetalert){
        var project_name = $("#project_name").val(),
        	working_up = $("#working_up").val(),
	       	working_end = $("#working_end").val(),
	       	description = $("#description").val(),
	       	path = $("#path").val(),
	       	project_description = $("#project_description").val();
		//判断是否为空
	    if(project_name == '' || working_up == '' || working_end == '' || description == '' || path == '' || project_description == ''){
	        swal("数据不能为空!");
	        return false;
	    }

	    var data = {
	    	"project_name" : project_name,
	    	"working_up" : working_up,
	    	"working_end" : working_end,
	    	"description" : description,
	    	"path" : path,
	    	"project_description" : project_description
	    }
		$.ajax({  
		    type: "post",
		    url: "../../json/ok.json",
		    async: false,  
		    success: function(e) {
			    if(e.state == 200){
	   	            swal({title: "新增成功"},function(){
	   	           		$(".cover").hide();
						$(".express_add").hide();
						$(document.body).css({"overflow-x":"auto","overflow-y":"auto"});
					});
			    }  
			}
		})
	});
});