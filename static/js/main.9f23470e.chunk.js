(this["webpackJsonptype-test"]=this["webpackJsonptype-test"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),i=a.n(s),c=(a(10),a(1)),o=(a(11),function(e){var t=e.words;return r.a.createElement("div",{className:"words-holder"},t.map((function(e,t){return r.a.createElement("span",{className:"letter letter-"+e.state+(" "===e.value?" letter-space":""),key:t},e.value)})))}),l=(a(12),["January","February","March","April","May","June","July","dusty","spade","flowers","competition","selfish","fallacious","brainy","hum","special","frequent","bite","taste","religion","unbecoming","festive","illustrious","jaded","private","lunchroom","imagine","beg","zesty","calendar","puny","violet","stretch","cloistered","minister","frame","office","four","switch","grain","try","true","practise","snails","round","quiet","fetch","flowery","wrestle","faded","camera","crowded","quiver","snobbish","introduce","squeak","diligent","feigned","unit","refuse","sidewalk","pass","rub","domineering","bore","six","scarecrow","purring","flagrant","breath","laughable","divide","choke","voice","panicky","year","earsplitting","unknown","division","visit","complain","sassy","bone","heartbreaking","delirious","supply","oval","ordinary","homely","tedious","therapeutic","dry","cat","guess","rule","worry","blush","willing","ultra","vivacious","gigantic","repair","form","cave","road","expect","spotty","act","hurry","bells","saw","crabby","signal","lumpy","cherries","erect","dogs","cheat","blue-eyed","treatment","precious","elbow","abrupt","curtain","hapless","overt","nut","babies","lovely","discovery","goofy","pricey","combative","zoom","argue","hellish","useless","incompetent","design","dare","strap","versed","elegant","glossy","sneeze","territory","save","three","defiant","third","feeling","detect","spare","boundless","exuberant","drum","approve","berserk","geese","subdued","rot","insidious","shave","reason","ice","pen","untidy","tease","omniscient","history","dead","nimble","thumb","smart","badge","macabre","swift","magical","screeching","analyse","kaput","talented","shiny","successful","hobbies","humor","flower","frightening","scare","kindhearted","charming","unequaled","moor","gleaming","sense","substance","funny","knowledgeable","sharp","accidental","wing","grade","sun","ink","tame","shaky","efficient","educated","plane","madly","crush","tough","awful","table","whispering","acoustics","boy","naughty","crooked","smile","nutritious","horn","terrify","pollution","selection","ignorant","disturbed","cumbersome","sparkling","royal","blind","linen","uppity","aware","mighty","bad","bright","used","suit","punish","check","sore","mourn","minor","long","sock","longing","health","squirrel","oceanic","plant","lopsided","wholesale","call","limping","support","tow","itchy","wide","comfortable","lewd","death","mean","school","pets","typical","legs","thaw","wiry","symptomatic","offend","ad-hoc","occur","post","wipe","scared","phobic","disastrous","shop","guard","likeable","massive","uninterested","bashful","pin","battle","clumsy","whisper","committee","capable","difficult","hunt","grouchy","dad","second","rob","like","tranquil","horses","wealth","defective","curly","eager","ahead","spoil","attack","approva"]),u="correct",d="wrong",m="inactive",h=function(e,t){return e.split("").map((function(e,a){var n={value:e,state:null};return a<t.length?(n.state=t[a]===e?u:d,n):(n.state=m,n)}))},p=0,g=0,b=0,f=99999,y=[],v=function(e,t){var a=Math.round(e/t*60),n=0===p?a:Math.round((p+a)/2);return p=n,y.push(a),b=a>b?a:b,f=a<f?a:f,n},w=function(e){return Math.round(e.filter((function(e){return e.state===u})).length/e.length*100)},k=0,E=function(e){var t=e.score,a=e.resetCallback;return r.a.createElement("div",{className:"wpmReset"},r.a.createElement("span",{className:"score"},"Average Speed: ",t.speed||0," wpm"),r.a.createElement("span",{className:"score"},"Accuracy: ",t.accuracy||0,"%"),r.a.createElement("span",{className:"score"},"Highest speed: ",t.hightestSpeed||0," wpm"),r.a.createElement("span",{className:"score"},"Lowest speed: ",t.lowestSpeed||0," wpm"),r.a.createElement("span",{className:"score"},"Rounds: ",t.noOfRounds||0),r.a.createElement("input",{className:"reset-score",type:"submit",onClick:a,value:"reset"}))},N=a(4),S=function(){var e=localStorage.theme||"dark",t=Object(n.useState)("dark"===e),a=Object(c.a)(t,2),s=a[0],i=a[1];Object(n.useEffect)((function(){var t,a;null===(t=document)||void 0===t||null===(a=t.querySelector("HTML"))||void 0===a||a.setAttribute("data-theme",e)}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gitBtn"},r.a.createElement(N.a,{href:"https://github.com/arjunmahishi/type-test","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":!0,"aria-label":"Star arjunmahishi/type-test on GitHub"},"Star")),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:s,onChange:function(){localStorage.setItem("theme",s?"light":"dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",s?"light":"dark"),i(!s)}}),r.a.createElement("span",{className:"slider round"})),r.a.createElement("h1",{className:"appName"},"type-test"))},j=function(){var e=function(e){for(var t="";e--;)t+=l[Math.floor(Math.random()*l.length)]+" ";return t.trim()}(5),t={speed:0,accuracy:0},a=Object(n.useState)(""),s=Object(c.a)(a,2),i=s[0],d=s[1],m=Object(n.useState)(t),y=Object(c.a)(m,2),N=y[0],j=y[1],O=Object(n.useState)(e),M=Object(c.a)(O,2),q=M[0],x=M[1],A=Object(n.useState)(h(e,[])),C=Object(c.a)(A,2),J=C[0],z=C[1],B=Object(n.useState)(!1),H=Object(c.a)(B,2),R=H[0],F=H[1],L=function(t){d(""),x(e),z(h(e,[])),j(function(e,t,a){return{speed:v(a,t),accuracy:w(e),hightestSpeed:b,lowestSpeed:f,noOfRounds:++g}}(t,function(){var e=Date.now()-k;return k=0,console.info("stopped time"),e/1e3}(),5)),F(!1)},T=function(e,t){return t.length>q.length||e[e.length-1].state===u};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("div",{className:"App"},r.a.createElement(E,{score:N,resetCallback:function(){j(t),p=0,g=0,b=0,f=99999}}),r.a.createElement(o,{words:J}),r.a.createElement("input",{value:i,id:"text-input",className:"text-input",onChange:function(e){R||(k=Date.now(),console.info("started time")),F(!0);var t=e.target.value.split("").filter((function(e){return""!==e})),a=h(q,t);T(a,t)?L(a):(d(e.target.value),z(a))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9f23470e.chunk.js.map