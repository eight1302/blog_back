$(".new").on('click','.fa_img',function(sweetalert){
    document.getElementById("file").click();
    $("#file").change(function(){
        var objUrl = getObjectURL(this.files[0]) ;
        console.log("objUrl = "+objUrl) ;
        if (objUrl){
            $(".new_img").append('<img src="'+objUrl+'" style="width: 100%;height: 200px;margin-top: -27%;display: inline-block;">');
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
})
$(".img").on('click',function(sweetalert){
    document.getElementById("head_img").click();
    $("#head_img").change(function(){
        var objUrl = getObjectURL(this.files[0]) ;
        console.log("objUrl = "+objUrl) ;
        if (objUrl){
            $(".img").append('<img src="'+objUrl+'" style="width: 80px;height: 80px;margin-top: -27%;display: inline-block;border-radius: 100%;">');
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
})
$(".add_new").on('click',function(){
    var html = '<div class="col-md-12 col-sm-12 col-xl-12 one new ">'+
                    '<div class="col-md-4 col-sm-4 col-xl-4 one">'+
                        '<div class="new_img">'+
                            '<span class="fa fa-blind fa_img" style="font-size: 50px;"></span>'+
                            '<input type="file" id="file" style="display: none;">'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-md-7 col-sm-7 col-xl-7 one">'+
                        '<textarea class="text" id="text"></textarea>'+
                    '</div>'+
                    '<div class="col-md-1 col-sm-1 col-xl-1 one">'+
                        '<div class="delete"><span class="fa fa-shopping-basket"></div>'+
                    '</div>'+
                '</div>';
    $(".new_details").append(html);
});
$(".new_details").on('click','.delete',function(){
   $(this).parent().parent().remove();
})

//鼠标移入移出
$(".update").hide(); 
$(".news").mouseover(function (){    
    $(this).find(".update").show();  
 }).mouseout(function (){    
    $(this).find(".update").hide();   
});

//发布新闻
$(".up_new").on('click',function(sweetalert){
    var new_title = $("#new_title").val(),
        new_time = $("#new_time").val(),
        file = $("#file").val(),
        text = $("#text").val();
    if(new_title == '' || new_time == '' || file == '' || text == ''){
        swal("表单不能为空");
        return false;
    }

    var date = {
        "new_title" : new_title,
        "new_time" : new_time,
        "file" : file,
        "text" : text
    }

    $.ajax({  
        type: "post",
        url: "../../json/ok.json",
        async: false,  
        success: function(e) {
            if(e.state == 200){
                swal("新增成功");
            }  
        }
    })
})

//发布新闻
$(".up_book").on('click',function(sweetalert){
    var new_title = $("#new_title").val(),
        new_time = $("#new_time").val(),
        url = $("#url").val();
    if(new_title == '' || new_time == '' || url == ''){
        swal("表单不能为空");
        return false;
    }

    var date = {
        "new_title" : new_title,
        "new_time" : new_time,
        "url" : url
    }

    $.ajax({  
        type: "post",
        url: "../../json/ok.json",
        async: false,  
        success: function(e) {
            if(e.state == 200){
                swal("新增成功");
            }  
        }
    })
})