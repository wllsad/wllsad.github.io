$(document).ready(function(){
    
    var url=location.href;
    let id=url.substring(url.indexOf("#")+1);
    
    
    for(let i =0;i<localStorage.length;i++){
                  
       let food=localStorage.key(i);
       try{
            JSON.parse(localStorage.getItem(food))
        }catch(e){
            continue
        }    
       let foodobj=JSON.parse(localStorage.getItem(food));
       if(id==foodobj.foodid){
        var obj=foodobj
        console.log(obj)
        break
       }
       
       
    }
    if(obj.foodname.endsWith("*")){
      var name=obj.foodname.substring(0,obj.foodname.length-1)
    }
    else{
      var name=obj.foodname
    }
    var star=obj.foodstar
    var main=obj.foodmain
    var img=obj.foodimg
    var hotel=obj.foodrestaurant
    $.ajaxSettings.async = false;
    
    
    
    if(obj.foodname.endsWith("*")){
      
      $.get("./template(fixed).tpl",function(result){
      var result=result.replace(':title', name);
      var result=result.replace(':star', star);
      var result=result.replace(':hotel', hotel);
      var result=result.replace(':imgsrc',img);
      var result=result.replace(':introduce',main)
    
      $("body").html(result)
    })
    }
    else{
      $.get("./template.tpl",function(result){
      var result=result.replace(':title', name);
      var result=result.replace(':star', star);
      var result=result.replace(':hotel', hotel);
      var result=result.replace(':imgsrc',img);
      var result=result.replace(':introduce',main)
    
      $("body").html(result)
    })
    
    }
    
    
    
    // window.onload=function(){
    
    
    $("#change").click(function(){
    var newstar=$("#star").val()
    var newhotel=$("#hotel").val()
    var newimg=$("#img").val()
    var newmain=$("#main").val()
      for(let i =0;i<localStorage.length;i++){
                  
       let food=localStorage.key(i);
       try{
            JSON.parse(localStorage.getItem(food))
        }catch(e){
            continue
        }    
       let foodobj=JSON.parse(localStorage.getItem(food));
       if(id==foodobj.foodid){
        foodobj.foodstar=newstar
        foodobj.foodimg=newimg
        foodobj.foodrestaurant=newhotel
        foodobj.foodmain=newmain
        localStorage.removeItem(food)
        localStorage.setItem(food,JSON.stringify(foodobj))
        $(".form").css("visibility","hidden")
        location.reload()
        break
       }
      
      }
    })
    $(".change").click(function(){
      $(".form").css("visibility","visible")
    })

 
    
  
 });

