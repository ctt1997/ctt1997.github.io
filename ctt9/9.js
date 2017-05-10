var map = new BMap.Map("myMap"); 
var point1 = new BMap.Point(120.141, 30.257);//西湖
var point2 = new BMap.Point(120.018, 30.296);//学校
map.centerAndZoom(point1, 15); 
var marker = new BMap.Marker(point1);// 创建中心标注    
map.addOverlay(marker); 
var local = new BMap.LocalSearch(map, {
 pageCapacity: 8,
 renderOptions: {
    map: map,
    panel: "results"
  }
});
local.searchNearby("宾馆",point1); 


 $("body").on("click", "#p1", function() {
        $("#results").fadeIn();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            pageCapacity: 8,
            renderOptions: {
                map: map,
                autoViewport: true,
                panel: "results"
            }
        });
        local.searchNearby("宾馆", point1);
    });



$("body").on("click", "#p2", function() {
        $("#results").fadeIn();
        map.clearOverlays(); 
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "results"
  }
});
transit.search("杭州市海曙路58号", "宾馆西湖"); 
 });    


 $("body").on("click", "#p3", function() {
      map.centerAndZoom(point2, 18);
      $("#results").hide();
        map.clearOverlays();
      var point4 = new BMap.Point(120.0152170000,30.2964050000);// 博文苑8号楼       
      var marker4 = new BMap.Marker(point4);   
      map.addOverlay(marker4);
      marker4.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p4.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point4); // 打开信息窗口
            });
      var point5 = new BMap.Point(120.0157920000,30.2965420000);// 博文苑9号楼       
      var marker5 = new BMap.Marker(point5);   
      map.addOverlay(marker5);
      marker5.addEventListener("click", function(){
      var opts = {
      width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p5.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point5); // 打开信息窗口
            });
      var point6 = new BMap.Point(120.0175440000,30.2968960000);// 恕园24号楼       
      var marker6 = new BMap.Marker(point6);   
      map.addOverlay(marker6);
      marker6.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p6.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point6); // 打开信息窗口
            });
      var point7 = new BMap.Point(120.0177680000,30.2966700000);// 恕园19号楼       
      var marker7 = new BMap.Marker(point7);   
      map.addOverlay(marker7);
      marker7.addEventListener("click", function(){
      var opts = {
      width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p7.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point7); // 打开信息窗口
            });
      var point8 = new BMap.Point(120.0175390000,30.2979800000);//恕园35号楼       
      var marker8 = new BMap.Marker(point8);   
      map.addOverlay(marker8);
      marker8.addEventListener("click", function(){
      var opts = {
      width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p8.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point8); // 打开信息窗口
            });
      var point9 = new BMap.Point(120.0184110000,30.2979570000);// 恕园30号楼       
      var marker9 = new BMap.Marker(point9);   
      map.addOverlay(marker9);
      marker9.addEventListener("click", function(){
      var opts = {
      width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p9.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point9); // 打开信息窗口
            });
      var point10 = new BMap.Point(120.0193490000,30.2978860000);// 恕园29号楼       
      var marker10 = new BMap.Marker(point10);   
      map.addOverlay(marker10);
      marker10.addEventListener("click", function(){
      var opts = {
      width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p10.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point10); // 打开信息窗口
            });
      var point11 = new BMap.Point(120.0198160000,30.2980190000);// 恕园28号楼       
      var marker11 = new BMap.Marker(point11);   
      map.addOverlay(marker11);
      marker11.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p11.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point11); // 打开信息窗口
            });
      var point12 = new BMap.Point(120.0205130000,30.2979370000);// 恕园27号楼       
      var marker12 = new BMap.Marker(point12);   
      map.addOverlay(marker12);
      marker12.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p12.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point12); // 打开信息窗口
            });
      var point13 = new BMap.Point(120.0201400000,30.2977310000);// 恕园20号楼       
      var marker13 = new BMap.Marker(point13);   
      map.addOverlay(marker13);
      marker13.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p13.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point13); // 打开信息窗口
            });
      var point14 = new BMap.Point(120.0206200000,30.2973840000);// 恕园16号楼       
      var marker14 = new BMap.Marker(point14);   
      map.addOverlay(marker14);
      marker14.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p14.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point14); // 打开信息窗口
            });
      var point15 = new BMap.Point(120.0204630000,30.2969510000);// 恕园10号楼       
      var marker15 = new BMap.Marker(point15);   
      map.addOverlay(marker15);
      marker15.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p15.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point15); // 打开信息窗口
            });
      var point16 = new BMap.Point(120.0206290000,30.2967950000);// 恕园9号楼       
      var marker16 = new BMap.Marker(point16);   
      map.addOverlay(marker16);
      marker16.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p16.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point16); // 打开信息窗口
            });
      var point17 = new BMap.Point(120.0197720000,30.2970910000);// 恕园17号楼       
      var marker17 = new BMap.Marker(point17);   
      map.addOverlay(marker17);
      marker17.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p17.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point17); // 打开信息窗口
            });
      var point18 = new BMap.Point(120.0195830000,30.2973990000);// 恕园21号楼       
      var marker18 = new BMap.Marker(point18);   
      map.addOverlay(marker18);
      marker18.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p18.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point18); // 打开信息窗口
            });
      var point19 = new BMap.Point(120.0198660000,30.2968030000);// 恕园12号楼       
      var marker19 = new BMap.Marker(point19);   
      map.addOverlay(marker19);
      marker19.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度    
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p19.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point19); // 打开信息窗口
            });
      var point21 = new BMap.Point(120.0198610000,30.2964090000);// 恕园11号楼       
      var marker21 = new BMap.Marker(point21);   
      map.addOverlay(marker21);
      marker21.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p21.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point21); // 打开信息窗口
            });
      var point22 = new BMap.Point(120.0193670000,30.2966740000);// 恕园14号楼       
      var marker22 = new BMap.Marker(point22);   
      map.addOverlay(marker22);
      marker22.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p22.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point22); // 打开信息窗口
            });
      var point23 = new BMap.Point(120.0191790000,30.2964330000);//一鸣真鲜奶吧        
      var marker23 = new BMap.Marker(point23);   
      map.addOverlay(marker23);
      marker23.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p23.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point23); // 打开信息窗口
            });
      var point24 = new BMap.Point(120.0204500000,30.2957230000);// 恕园2号楼       
      var marker24 = new BMap.Marker(point24);   
      map.addOverlay(marker24);
      marker24.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p24.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point24); // 打开信息窗口
            });
      var point25 = new BMap.Point(120.0190350000,30.2952550000);// 恕园7号楼       
      var marker25 = new BMap.Marker(point25);   
      map.addOverlay(marker25);
      marker25.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p25.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point25); // 打开信息窗口
            });
      var point26 = new BMap.Point(120.0162820000,30.2958640000);// 博文苑6号楼       
      var marker26 = new BMap.Marker(point26);   
      map.addOverlay(marker26);
      marker26.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p26.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point26); // 打开信息窗口
            });
      var point27 = new BMap.Point(120.0165110000,30.2957230000);// 博文苑5号楼       
      var marker27 = new BMap.Marker(point27);   
      map.addOverlay(marker27);
      marker27.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度    
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p27.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point27); // 打开信息窗口
            });
      var point28 = new BMap.Point(120.0161920000,30.2950180000);// 博文苑4号楼       
      var marker28 = new BMap.Marker(point28);   
      map.addOverlay(marker28);
      marker28.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p28.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point28); // 打开信息窗口
            });
      var point29 = new BMap.Point(120.0162820000,30.2947920000);// 博文苑3号楼       
      var marker29 = new BMap.Marker(point29);   
      map.addOverlay(marker29);
      marker29.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p29.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point29); // 打开信息窗口
            });
      var point31 = new BMap.Point(120.0181860000,30.2964210000);// 杭州师范大学外国语学院       
      var marker31 = new BMap.Marker(point31);   
      map.addOverlay(marker31);
      marker31.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p31.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point31); // 打开信息窗口
            });
      var point33 = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker33 = new BMap.Marker(point33);   
      map.addOverlay(marker33);
      marker33.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p33.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point33); // 打开信息窗口
            });
      var point37 = new BMap.Point(120.0153110000,30.2977190000);//弘一大师 丰子恺研究中心       
      var marker37 = new BMap.Marker(point37);   
      map.addOverlay(marker37);
      marker37.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p37.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point37); // 打开信息窗口
            });
      var point39 = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker39 = new BMap.Marker(point39);   
      map.addOverlay(marker39);
      marker39.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度     
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p39.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point39); // 打开信息窗口
            });
      var point41 = new BMap.Point(120.0188460000,30.2943240000);//恕园3号楼       
      var marker41 = new BMap.Marker(point41);   
      map.addOverlay(marker41);
      marker41.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p41.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point41); // 打开信息窗口
            });
      var point42 = new BMap.Point(120.0175030000,30.2939960000);//恕园5号楼   
      var marker42 = new BMap.Marker(point42);   
      map.addOverlay(marker42);
      marker42.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p42.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point42); // 打开信息窗口
            });
      var point43 = new BMap.Point(120.0172340000,30.2937080000);//杭州师范大学2号餐厅      
      var marker43 = new BMap.Marker(point43);   
      map.addOverlay(marker43);
      marker43.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p43.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point43); // 打开信息窗口
            });
      var point46 = new BMap.Point(120.0143370000,30.2951150000);//体育场      
      var marker46 = new BMap.Marker(point46);   
      map.addOverlay(marker46);
      marker46.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p46.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point46); // 打开信息窗口
            });
      var point49 = new BMap.Point(120.0123380000,30.2962610000);//杭州师范大学篮球场       
      var marker49 = new BMap.Marker(point49);   
      map.addOverlay(marker49);
      marker49.addEventListener("click", function(){
      var opts = {
       width: 280, // 信息窗口宽度    
      height: 200, // 信息窗口高度      
      }
    var infoWindow = new BMap.InfoWindow("<img src='img/p49.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point49); // 打开信息窗口
            });
    });