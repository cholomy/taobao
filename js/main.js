/* 添加 title 的效果 */
$(function(){
// 我的淘宝 弹出框
	$("#mytaobao").mouseover(function(){
		$(this).addClass("curr");
		$("#mytaobao_out").show();                   
	});
	$("#mytaobao").mouseout(function(){
		$(this).removeClass("curr");
		$("#mytaobao_out").hide()
	});                                       
// 收藏夹 弹出框
	$("#fav").mouseover(function(){
		$(this).addClass("curr");
		$("#fav_out").show();
	});
	$("#fav").mouseout(function(){
		$(this).removeClass("curr");
		$("#fav_out").hide()
	});
// 卖家中心 弹出框
	$("#seller").mouseover(function(){
		$(this).addClass("curr");
		$("#seller_out_box").show();
	});
	$("#seller").mouseout(function(){
		$(this).removeClass("curr");
		$("#seller_out_box").hide()
	});
// 联系客服 弹出框
	$("#coniction").mouseover(function(){
		$(this).addClass("curr");
		$("#coniction_out").show();
	});
	$("#coniction").mouseout(function(){
		$(this).removeClass("curr");
		$("#coniction_out").hide()
	});

// 搜索框上 的点击更换

   $("#baobei,#shop").click(function(){
   	$(this).addClass("search_current")
   	.siblings().removeClass("search_current");
   	$("#tianmao").removeClass("search_current1");
   	$(".search_box_main_left").removeClass("current2");
   	$(".search_box_main_right button").removeClass("current3");   	
   });

   $("#baobei").trigger("click");
 
   $("#tianmao").click(function(){
   	$(this).addClass("search_current1")
   	.siblings().removeClass("search_current");
   	$(".search_box_main_left").addClass("current2");
   	$(".search_box_main_right button").addClass("current3");
   });

//  搜索栏 3个选项的over效果
  $(".search_box_choice li").mouseover(function(){
   var color = $(this).css("background-color");
   if (color == "transparent") 
   {
   $(this).addClass("search_current0");
   }
  }).mouseout(function(){
   $(this).removeClass("search_current0");  	
  });

//  搜索栏 上传文件
  $(".left_img img").click(function(){
  	$("#buttn_file").click();
  });

// 搜索栏 上传文件的图标 变化
  $(".left_img img").hover(function(){
  	$(this).attr("src","images/search5.png");
  },function(){
  	$(this).attr("src","images/search.png");
  });  

// 左侧list的小图标 变色
  $(".left_list li").hover(function(){
  	$(this).find(".tb-icon").addClass("on");
  },function(){
  	$(this).find(".tb-icon").removeClass("on");
  });  



// 最上边的焦点图 运动效果
 var addTimer = null;
 var index = 0;
 $(".main_show").hover(function(){
 	$(".main_move").show();
 	if(addTimer)
 		 {
 			clearInterval(addTimer);
 		 }	
 		},function(){
 			$(".main_move").hide();
 			addTimer = setInterval(function(){
            index++;
            $(".main_show_long").animate({left:""+(-520*(index-1)+'px')+""},300);  //图片廊前进520px
            $(".ball_show li:eq("+(index-1)+")").addClass("current")               //将对应的的原点增加黄色
            .siblings().removeClass("current");                                    //将其他的原点去除黄色
            if(index == 5){index=0}                                                //每5次为一个周期
 			},4000);                                                               //每4秒执行一次
 }).trigger("mouseleave");                                                

// 最上边的焦点图 指示点
 $(".ball_show li:eq(0)").addClass("current");                           //将第一个原点增加黄色
 
  $(".ball_show li").click(function(){                                   //点击原点
  var num = $(this).attr("alt");                                         //获取原点的alt值
  $(".main_show_long").animate({left:""+(-520*num+'px')+""},300);        //将图片廊跳至对应位置
  $(this).addClass("current")                                            //将点击的原点增加黄色
  .siblings().removeClass("current");                                    //将其他的原点去除黄色
  });

// 最上边的焦点图 两侧的指示箭头
$(".prev_icon").click(function(){
	var lef = $(".main_show_long").position().left;                       //获取图片廊的位置
	var lez = Math.floor(lef);                                            //将图片廊的位置取整
	if (!$(".main_show_long").is(":animated")) {                          //在图片廊没有运动时
	if (lez > -2080) {                                                    //如果图片廊不是在最后一个  
	$(".main_show_long").animate({left:""+((lez-520)+'px')+""},300);      //将图片廊向左平移520px
	var number = -(lez/520)+1;                                            //计算出对应的点的数目
    $(".ball_show li:eq("+number+")").addClass("current")                 //将对应的点增加黄色
    .siblings().removeClass("current");	                                  //其他点去除黄色
    }
    else                                                                  //如果此时图片廊到达最后一个
     {
    $(".main_show_long").animate({left:"0px"},300);                       //将图片廊直接跳到第一个
    $(".ball_show li:eq(0)").addClass("current")                          //将第一个点增加黄色
    .siblings().removeClass("current");                                   //其他点去除黄色
     }
    }
});

$(".next_icon").click(function(){
	var lef = $(".main_show_long").position().left;                        //获取图片廊的位置
	var lez = Math.floor(lef);                                             //将图片廊的位置取整
	if (!$(".main_show_long").is(":animated")) {	                       //在图片廊没有运动时
	if (lez < 0) {                                                         //如果图片廊不是在第一个                                                     
	$(".main_show_long").animate({left:""+((lez+520)+'px')+""},300);       //将图片廊向右平移520px
	var number = -(lez/520)-1;                                             //计算出对应的点的数目
    $(".ball_show li:eq("+number+")").addClass("current")                  //将对应的点增加黄色
    .siblings().removeClass("current");	                                   //其他点去除黄色                          
    }
    else                                                                  //如果此时图片廊到达第一个
    {
    $(".main_show_long").animate({left:"-2080px"},300);                   //将图片廊直接跳到第五个
    $(".ball_show li:eq(4)").addClass("current")                          //将最后一个点增加黄色
    .siblings().removeClass("current");                                   //其他点去除黄色
     }  
    } 
});


// 下边的小焦点图 运动效果
 var addTimer = null;
 var inde = 0;
 $(".main_show_down").hover(function(){
 	$(".main_move2").show();
 	if(addTimer)
 		 {
 			clearInterval(addTimer);
 		 }	
 		},function(){
 			$(".main_move2").hide();
 			addTimer = setInterval(function(){
            inde++;
            $(".biguang i").text(inde+1);   
            $(".main_show_down_long").animate({left:""+(-520*(inde)+'px')+""},300);  //图片廊前进520px
            $(".ball_show2 li:eq("+(inde)+")").addClass("current")                  //将对应的的原点增加黄色
            .siblings().removeClass("current");                                       //将其他的原点去除黄色
            if(inde == 5){inde=-1}                                                     //每5次为一个周期       	
 			},4000);                                                               //每4秒执行一次
 }).trigger("mouseleave");

 // 下边的焦点图 指示点
 $(".ball_show2 li:eq(0)").addClass("current");                                //将第一个原点增加黄色

  $(".ball_show2 li").click(function(){                                       //点击原点
  var num = $(this).attr("alt");                                              //获取原点的alt值
  $(".main_show_down_long").animate({left:""+(-520*num+'px')+""},300);        //将图片廊跳至对应位置
  $(this).addClass("current")                                                 //将点击的原点增加黄色
  .siblings().removeClass("current");                                         //将其他的原点去除黄色
  var topnum = num-(-1);                                                      //改变顶部的页码
  $(".biguang i").text(topnum);  
  });

// 下边的焦点图 两侧的指示箭头
$(".prev_icon2").click(function(){
	var lef = $(".main_show_down_long").position().left;                       //获取图片廊的位置
	var lez = Math.floor(lef);                                                //将图片廊的位置取整
	if (!$(".main_show_down_long").is(":animated")) {                         //在图片廊没有运动时
	if (lez > -2600) {                                                        //如果图片廊不是在最后一个  
	$(".main_show_down_long").animate({left:""+((lez-520)+'px')+""},300);     //将图片廊向左平移520px
	var number = -(lez/520)+1;                                                //计算出对应的点的数目
    $(".ball_show2 li:eq("+number+")").addClass("current")                    //将对应的点增加黄色
    .siblings().removeClass("current");	                                      //其他点去除黄色
    var topNumber2 = -(lez/520)+2;                                            //改变顶部的页码
    $(".biguang i").text(topNumber2); 
    }
    else                                                                     //如果此时图片廊到达最后一个
     {
    $(".main_show_down_long").animate({left:"0px"},300);                    //将图片廊直接跳到第一个
    $(".ball_show2 li:eq(0)").addClass("current")                           //将第一个点增加黄色
    .siblings().removeClass("current");                                     //其他点去除黄色
    $(".biguang i").text(1);                                                //改变顶部的页码为1
     }
    }   
});

$(".next_icon2").click(function(){
	var lef = $(".main_show_down_long").position().left;                     //获取图片廊的位置
	var lez = Math.floor(lef);                                               //将图片廊的位置取整
	if (!$(".main_show_down_long").is(":animated")) {	                     //在图片廊没有运动时
	if (lez < 0) {                                                           //如果图片廊不是在第一个                                                     
	$(".main_show_down_long").animate({left:""+((lez+520)+'px')+""},300);   //将图片廊向右平移520px
	var number = -(lez/520)-1;                                              //计算出对应的点的数目
    $(".ball_show2 li:eq("+number+")").addClass("current")                  //将对应的点增加黄色
    .siblings().removeClass("current");	                                   //其他点去除黄色 
    var topNumber2 = -(lez/520);                                           //改变顶部的页码
    $(".biguang i").text(topNumber2);                         
    }
    else                                                                    //如果此时图片廊到达第一个
    {
    $(".main_show_down_long").animate({left:"-2080px"},300);                //将图片廊直接跳到第五个
    $(".ball_show2 li:eq(5)").addClass("current")                           //将最后一个点增加黄色
    .siblings().removeClass("current");                                     //其他点去除黄色
    $(".biguang i").text(6);                                                //改变顶部的页码为6
     }  
    } 
});

	var left2 = $(".main_show_down_long").position().left;                  
	var lez2 = Math.floor(left2);                                                
	var topNumber = -(lez2/520)+1;
	$(".biguang i").text(topNumber);




// 右侧的公告栏
  $(".notice_title li").mouseover(function(){
  	var li = $(this);
      setTimeout(function(){ 
     li.addClass("current_now")
     .siblings().removeClass("current_now");
     var num = $(".notice_title li").index(li);
     $(".notice_main ul").eq(num).show()
     .siblings().hide();
     },300);

 }).eq(0).trigger("mouseover");

// 右侧的APP栏
  $(".APP-img li").mouseover(function(){
 	$(this).find("div").show();	                                                          
 }); 

  $(".APP-img li").mouseleave(function(){
 	$(this).find("div").hide();	                                                          
 }); 

// 左边焦点图下边的圆形图

  $(".left_bottom_main a").mouseover(function(){
  	var color = $(this).find("span").css("color");
 	$(this).find("img").addClass("border_change").css("border-color",""+(color)+"");	                                                          
 }); 

  $(".left_bottom_main a").mouseleave(function(){
 	$(this).find("img").removeClass("border_change").css("border-color","#ededed");	                                                          
 }); 



});


