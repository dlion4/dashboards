(()=>{(function(){"use strict";let o=$(".report-donut-chart-7");o.length&&o.each(function(){let r=$(this)[0].getContext("2d"),a=[35,65],t=new Chart(r,{type:"doughnut",data:{labels:["31 - 50 Years old",">= 50 Years old"],datasets:[{data:a,backgroundColor:[getColor("primary",.5),getColor("slate.300")],hoverBackgroundColor:[getColor("primary",.5),getColor("slate.300")],borderWidth:1,borderColor:[getColor("primary",.5),getColor("slate.400",.4)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},cutout:"78%"}});helper.watchCssVariables("html",["color-primary"],e=>{t.data.datasets[0].borderColor[0]=getColor("primary",.5),t.data.datasets[0].hoverBackgroundColor[0]=getColor("primary",.5),t.data.datasets[0].backgroundColor[0]=getColor("primary",.5),t.update()})})})();})();