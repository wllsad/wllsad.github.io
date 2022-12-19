$(document).ready(function(){
        console.log(location.href)
        console.log(location.pathname)


        $("#gologin").click(function(){
            $(".leftbox").css("transform","translateX(-100%)")
            $(".rightbox").css("transform","translateX(0)")
        })
        $("#goregister").click(function(){
            $(".leftbox").css("transform","translateX(0)")
            $(".rightbox").css("transform","translateX(100%)")
        })



        function setcookie(name,value,days){
            
            if(name==""){
                $(".user").text("账号不能为空")
                return
            }
            if(name!=""){
                $(".user").text("")
            }
            if(value==""){
                $(".password").text("密码不能为空")
                return
            }
            if(value!=""){
                $(".password").text("")
            }
            for(let i=0;i<document.cookie.split(";").length;i++){
                if(document.cookie.split(";")[i].trim().startsWith($(".leftbox input[type=text]").val())){
                    alert("该账号已经注册")
                    return
                }
            }
            
            let d=new Date();
            d.setTime(d.getTime()+days*24*60*60*1000)
            document.cookie=name+'='+value+';'+'expires='+d.toUTCString()
            alert("注册成功")
        }


        function getcookie(name){
            let cookiearr=document.cookie.split(";")
            for(let i=0;i<cookiearr.length;i++){
                if(cookiearr[i].trim().startsWith(name+"=")){
                    return cookiearr[i].trim().substring(name.length+1)
                }
            }
        }


       function check(name,value){
        if(name==""){
                $(".user").text("账号不能为空")
                return
            }
            if(name!=""){
                $(".user").text("")
            }
            if(value==""){
                $(".password").text("密码不能为空")
                return
            }
            if(value!=""){
                $(".password").text("")
            }
        let cookiearr=document.cookie.split(";");
        for(let i=0;i<cookiearr.length;i++){   
                if(getcookie(name)==value){
                    alert("登录成功")
                    window.location.assign("../home/home.html")
                    
                    return
                }
                else{
                    alert("登陆失败,请检查你的账号和密码")
                    return
                }
            }
       }
       $("#register").click(function(){
        setcookie($(".leftbox input[type=text").val(),$(".leftbox input[type=password]").val(),7)
        
       })

       $("#login").click(function(){
       check($(".rightbox input[type=text").val(),$(".rightbox input[type=password]").val())
       })
 
    
  
 });
        