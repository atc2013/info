window.onload=function(){document.getElementById("submit").onclick=function(){function w(){l.style.display="";l.style.width=s+x+"px";l.style.height=t+u+"px";l.setAttribute("class","modal");r.style.top=u+parseInt(t/2)-75+"px";r.style.left=parseInt(s/2)-225+"px";r.setAttribute("class","wind");f.style.overflow="hidden";y.onclick=function(){l.style.display="none";f.style.overflow=""}}function m(q,n){for(var a=q.className.split(" "),c=a.length-1;0<=c;c--)if(a[c]==n)return;q.className=""==q.className?n: q.className+(" "+n)}function a(a,n){for(var b=a.className.split(" "),c=b.length-1;0<=c;c--)b[c]==n&&b.splice(c,1);a.className=b.join(" ")}function p(a,b){for(var d=a.className.split(" "),c=d.length-1;0<=c;c--)if(d[c]==b)return!0}var d=document.getElementById("name"),g=document.getElementById("surname"),h=document.getElementById("email"),k=document.getElementById("datepicker"),e=document.getElementById("text"),b=k.value.split("/"),z=b[1],A=b[0],B=b[2],l=document.getElementById("modal"),r=document.getElementById("wind"), y=document.getElementById("buttonOK"),f=document.body,b=document.documentElement,u=window.pageYOffset||b.scrollTop||f.scrollTop,x=window.pageXOffset||b.scrollLeft||f.scrollLeft,t=b.clientHeight||f.clientHeight,s=b.clientWidth||f.clientWidth,v=document.getElementById("contacts").getElementsByTagName("input"),C=/^(?:(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)[0-9]{2})$/,D=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;(function(){a(d,"error");""==d.value&&(m(d,"error"), d.onfocus=function(){a(this,"error")});a(g,"error");""==g.value&&(m(g,"error"),g.onfocus=function(){a(this,"error")});a(h,"error");0!=h.value.toLowerCase().search(D)&&(m(h,"error"),h.onfocus=function(){a(this,"error")});a(e,"error");""==e.value&&(e.onfocus=function(){a(this,"error")},m(e,"error"));a(k,"error");0!=k.value.search(C)&&(m(k,"error"),k.onfocus=function(){a(this,"error")})})();(function(){var a="https://docs.google.com/forms/d/18eRzNyAFSxrOVs1Ryt4oEKMcsJP2h5G2N0NrG8Jzgc8/formResponse?embedded=true/entry.1737499337="+ d.value+"&entry.1172914762="+g.value+"&entry.1694883095="+h.value+"&entry.1159372787_day="+z+"&entry.1159372787_month="+A+"&entry.1159372787_year="+B+"&entry.2129877866="+e.value+"&entry_1737499337="+d.value;if(!(p(d,"error")||p(g,"error")||p(h,"error")||p(k,"error")||p(e,"error"))){var b=new XMLHttpRequest;b.open("GET",a,!0);b.onreadystatechange=function(){4==b.readyState&&w()};b.send(null);for(i=0;i<v.length-1;i++)v[i].value="";e.value=""}})()}};