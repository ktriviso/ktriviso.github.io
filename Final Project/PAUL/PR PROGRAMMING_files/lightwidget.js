window.lightwidget||(window.lightwidget=function(){"use strict";var a=[],b=0,c=!1,e=!1,f=function(a){return e=a},h=function(a,b){a.contentWindow&&a.contentWindow.postMessage("sizing:"+b,window.location.protocol+"//lightwidget.com")},j=function(b){if(b.origin==window.location.protocol+"//lightwidget.com"||b.origin==window.location.protocol+"//instansive.com"){var c=b.data.split(":");try{"sizing"==c[0]&&void 0!=a[parseInt(c[2])]&&(a[parseInt(c[2])].style.height=c[1]+"px")}catch(a){}}},k=function(a){e&&console.log(a);var b=a.origin.replace(/^https?\:\/\//i,"");if("lightwidget.com"==b||"instansive.com"==b){var c=a.data.split(":");e&&console.log(c);try{if("sizing_iid"==c[0]){var d=c[2],f=d.replace("instansive_","").replace("lightwidget_");void 0!==document.querySelectorAll('iframe[src*="lightwidget.com/widgets/'+f+'"]')[0]?(e&&console.log("iframesrc"),document.querySelectorAll('iframe[src*="lightwidget.com/widgets/'+f+'"]')[0].style.height=c[1]+"px"):void 0!=document.getElementById(d)?document.getElementById(d).style.height=c[1]+"px":(d=d.replace("instansive","lightwidget"),void 0!=document.getElementById(d)&&(document.getElementById(d).style.height=c[1]+"px"))}}catch(a){e&&console.log(a)}}},l=function(){window.addEventListener?(window.addEventListener("message",j,!1),window.addEventListener("message",k,!1)):(window.attachEvent("onmessage",j),window.attachEvent("onmessage",k))};return l(),{refresh:function(){if(c)for(var d=0;d<b;d++)h(a[d],d)},reload:function(){l()},debug:function(a){return f(a)}}}()),window.lightwidget.refresh();