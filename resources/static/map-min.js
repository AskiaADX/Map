﻿!function(){function t(t,e,i){"function"==typeof t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&(t["e"+e+i]=i,t[e+i]=function(){t["e"+e+i].call(t,window.event)},t.attachEvent("on"+e,t[e+i]))}function e(t,e,i,o){document.querySelector("."+this.data("name")).checked||"area"!==this.data("strID")||t.forEach(function(t){return function(a){t===a.data("name")&&"path"===a.data("strID")?(a.attr({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,cursor:"pointer"}),ie8===!1&&"yes"===o&&a.animate({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,transform:"s1.03 1.03"},200)):t===a.data("name")&&"txt"===a.data("strID")&&a.attr({fill:i.fill,stroke:i.stroke,"stroke-width":i["stroke-width"],opacity:i.opacity,cursor:"pointer"})}}(this.data("name")))}function i(t,e,i,o){document.querySelector("."+this.data("name")).checked||"area"!==this.data("strID")||t.forEach(function(t){return function(a){t===a.data("name")&&"path"===a.data("strID")?(ie8===!1&&"yes"===o&&a.animate({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,transform:"s1.0 1.0"},200),a.attr({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,cursor:"pointer"})):t===a.data("name")&&"txt"===a.data("strID")&&a.attr({fill:i.fill,stroke:i.stroke,"stroke-width":i["stroke-width"],opacity:i.opacity,cursor:"pointer"})}}(this.data("name")))}function o(t,e,i,o,a,s){"area"===this.data("strID")&&(document.querySelector("."+this.data("name")).checked=!0,t.forEach(function(t){return function(r){t!==r.data("name")&&"path"===r.data("strID")?r.attr({fill:o.fill,stroke:o.stroke,"stroke-width":o["stroke-width"],opacity:o.opacity,cursor:"pointer"}):t!==r.data("name")&&"txt"===r.data("strID")?r.attr({fill:a.fill,stroke:a.stroke,"stroke-width":a["stroke-width"],opacity:a.opacity,cursor:"pointer"}):t===r.data("name")&&"path"===r.data("strID")?(r.attr({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,cursor:"pointer"}),ie8===!1&&"yes"===s&&r.animate({fill:e.fill,stroke:e.stroke,"stroke-width":e["stroke-width"],opacity:e.opacity,transform:"s1.0 1.0"},200)):t===r.data("name")&&"txt"===r.data("strID")&&r.attr({fill:i.fill,stroke:i.stroke,"stroke-width":i["stroke-width"],opacity:i.opacity,cursor:"pointer"})}}(this.data("name"))))}function a(a){this.options=a,this.instanceId=a.instanceId||1,this.mapId=a.mapId||1,this.width=a.width||300,this.height=a.height||300,this.fontSize=a.fontSize||16,this.animatePath=a.animatePath||"yes",this.fill=a.fill||"#F7F7F7",this.strokeColor=a.strokeColor||"#A1A7AD",this.strokeWidth=a.strokeWidth||1,this.opacity=a.opacity||0,this.fillHover=a.fillHover||"#FFFFFF",this.strokeColorHover=a.strokeColorHover||"#A1A7AD",this.strokeWidthHover=a.strokeWidthHover||1,this.opacityHover=a.opacityHover||0,this.fillSelected=a.fillSelected||"#E8F1FF",this.strokeColorSelected=a.strokeColorSelected||"#A1A7AD",this.strokeWidthSelected=a.strokeWidthSelected||1,this.opacitySelected=a.opacitySelected||0,this.fillText=a.fillText||"#444444",this.opacityText=a.opacityText||0,this.fillTextHover=a.fillTextHover||"#444444",this.opacityTextHover=a.opacityTextHover||0,this.fillTextSelected=a.fillTextSelected||"#007BC6",this.opacityTextSelected=a.opacityTextSelected||0,this.adjustXtextObj=a.adjustXtextObj||[],this.adjustYtextObj=a.adjustYtextObj||[],this.mapCaptions=a.mapCaptions||[],this.mapNames=a.mapNames||[],this.mapPaths=a.mapPaths||[];for(var s=this.animatePath,r={fill:this.fill,stroke:this.strokeColor,"stroke-width":this.strokeWidth,opacity:0,cursor:"pointer"},h={"stroke-linecap":"round","stroke-linejoin":"round",fill:this.fill,stroke:this.strokeColor,"stroke-width":this.strokeWidth,opacity:this.opacity,cursor:"pointer"},n={"stroke-linecap":"round","stroke-linejoin":"round",fill:this.fillHover,stroke:this.strokeColorHover,"stroke-width":this.strokeWidthHover,opacity:this.opacityHover},d={"stroke-linecap":"round","stroke-linejoin":"round",fill:this.fillSelected,stroke:this.strokeColorSelected,"stroke-width":this.strokeWidthSelected,opacity:this.opacitySelected},c={"font-size":this.fontSize,fill:this.fillText,stroke:"none","stroke-width":0,opacity:this.opacityText,"font-weight":"normal",cursor:"pointer"},p={"font-size":this.fontSize,fill:this.fillTextHover,stroke:"none","stroke-width":0,opacity:this.opacityTextHover,"font-weight":"normal"},k={"font-size":this.fontSize,fill:this.fillTextSelected,stroke:"none","stroke-width":0,opacity:this.opacityTextSelected,"font-weight":"normal"},f=Raphael("adc_"+this.instanceId+"_container"),m=f.set(),u=0;l=this.mapPaths.length,u<l;u++){var y=f.path(this.mapPaths[u]).attr(document.querySelector("."+this.mapNames[u]).checked?d:h).data("name",this.mapNames[u]).data("strID","path");m.push(y)}for(var u=0;l=this.mapCaptions.length,u<l;u++){var w=m[u].getBBox(),v=y.paper.text(w.x+w.width/2+(void 0===this.adjustXtextObj[u]?0:this.adjustXtextObj[u]),w.y+w.height/2+(void 0===this.adjustYtextObj[u]?0:this.adjustYtextObj[u]),this.mapCaptions[u]).attr(document.querySelector("."+this.mapNames[u]).checked?k:c).data("name",this.mapNames[u]).data("strID","txt");m.push(v)}for(var u=0;l=this.mapPaths.length,u<l;u++){var x=f.path(this.mapPaths[u]).attr(r).data("name",this.mapNames[u]).data("strID","area");m.push(x)}m.hover(function(){e.call(this,m,n,p,s)},function(){i.call(this,m,h,c,s)}),m.click(function(){o.call(this,m,d,k,h,c,s)}),f.setViewBox(0,0,this.width,this.height,!1),this.resizePaper(f,this.width,this.height),t(document.getElementsByTagName("BODY")[0],"resize",this.resizePaper(f,this.width,this.height))}a.prototype.resizePaper=function(t,e,i){var o=this,a=parseFloat(e/i),s=0,r=0;window.innerWidth?(s=window.innerWidth<e||ie8?window.innerWidth:e,r=s/a):document.documentElement&&document.documentElement.clientWidth&&(s=document.documentElement.clientWidth<e||ie8?document.documentElement.clientWidth:e,r=s/a),0==ie8?(t.setSize(e,i),document.querySelector("#adc_"+o.instanceId+"_wrapper img").style.height=r):document.querySelector("#adc_"+o.instanceId+"_container div").style.overflow="visible"},window.Map=a}();