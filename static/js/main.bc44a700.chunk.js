(this["webpackJsonptype-test"]=this["webpackJsonptype-test"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),o=a.n(s),i=(a(13),a(1)),c=a(2),l=a(3),u=a(4);a(14);function d(e){return n.a.createElement("div",{className:"words-holder"},e.words.map((function(e,t){return n.a.createElement("span",{className:"word word-"+e.state,key:t},e.value)})))}a(15);var h=["January","February","March","April","May","June","July","dusty","spade","flowers","competition","selfish","fallacious","brainy","hum","special","frequent","bite","taste","religion","unbecoming","festive","illustrious","jaded","private","lunchroom","imagine","beg","zesty","calendar","puny","violet","stretch","cloistered","minister","frame","office","four","switch","grain","try","true","practise","snails","round","quiet","fetch","flowery","wrestle","faded","camera","crowded","quiver","snobbish","introduce","squeak","diligent","feigned","unit","refuse","sidewalk","pass","rub","domineering","bore","six","scarecrow","purring","flagrant","breath","laughable","divide","choke","voice","panicky","year","earsplitting","unknown","division","visit","complain","sassy","bone","heartbreaking","delirious","supply","oval","ordinary","homely","tedious","therapeutic","dry","cat","guess","rule","worry","blush","willing","ultra","vivacious","gigantic","repair","form","cave","road","expect","spotty","act","hurry","bells","saw","crabby","signal","lumpy","cherries","erect","dogs","cheat","blue-eyed","treatment","precious","elbow","abrupt","curtain","hapless","overt","nut","babies","lovely","discovery","goofy","pricey","combative","zoom","argue","hellish","useless","incompetent","design","dare","strap","versed","elegant","glossy","sneeze","territory","save","three","defiant","third","feeling","detect","spare","boundless","exuberant","drum","approve","berserk","geese","subdued","rot","insidious","shave","reason","ice","pen","untidy","tease","omniscient","history","dead","nimble","thumb","smart","badge","macabre","swift","magical","screeching","analyse","kaput","talented","shiny","successful","hobbies","humor","flower","frightening","scare","kindhearted","charming","unequaled","moor","gleaming","sense","substance","funny","knowledgeable","sharp","accidental","wing","grade","sun","ink","tame","shaky","efficient","educated","plane","madly","crush","tough","awful","table","whispering","acoustics","boy","naughty","crooked","smile","nutritious","horn","terrify","pollution","selection","ignorant","disturbed","cumbersome","sparkling","royal","blind","linen","uppity","aware","mighty","bad","bright","used","suit","punish","check","sore","mourn","minor","long","sock","longing","health","squirrel","oceanic","plant","lopsided","wholesale","call","limping","support","tow","itchy","wide","comfortable","lewd","death","mean","school","pets","typical","legs","thaw","wiry","symptomatic","offend","ad-hoc","occur","post","wipe","scared","phobic","disastrous","shop","guard","likeable","massive","uninterested","bashful","pin","battle","clumsy","whisper","committee","capable","difficult","hunt","grouchy","dad","second","rob","like","tranquil","horses","wealth","defective","curly","eager","ahead","spoil","attack","approva"],m="correct",p="wrong",g="inactive",f=function(e,t){return e.map((function(e,a){var r={value:e,state:null};return a<t.length?(r.state=t[a]===e?m:p,r):(r.state=g,r)}))},b=0,y=0,v=0,w=99999,k=function(e,t){var a=Math.round(e/t*60),r=0===b?a:Math.round((b+a)/2);return b=r,v=a>v?a:v,w=a<w?a:w,r},E=function(e){return e.filter((function(e){return e.state===m})).length/e.length*100},S=0;function N(e){var t=e.score,a=e.resetCallback;return n.a.createElement("div",{className:"wpmReset"},n.a.createElement("span",{className:"score"},"Average Speed: ",t.speed||0," wpm"),n.a.createElement("span",{className:"score"},"Accuracy: ",t.accuracy||0,"%"),n.a.createElement("span",{className:"score"},"Highest speed: ",t.hightestSpeed||0," wpm"),n.a.createElement("span",{className:"score"},"Lowest speed: ",t.lowestSpeed||0," wpm"),n.a.createElement("span",{className:"score"},"Rounds: ",t.noOfRounds||0),n.a.createElement("input",{className:"reset-score",type:"submit",onClick:a,value:"reset"}))}var j=a(7),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).toggleThemeChange=function(){r.state.checked?(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),r.setState({checked:!1})):(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),r.setState({checked:!0}))},r.state={checked:!0,theme:localStorage.getItem("theme")||"dark"},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",this.state.theme)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gitBtn"},n.a.createElement(j.a,{href:"https://github.com/arjunmahishi/type-test","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star arjunmahishi/type-test on GitHub"},"Star")),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.toggleThemeChange}),n.a.createElement("span",{className:"slider round"})),n.a.createElement("h1",{className:"appName"},"type-test"))}}]),a}(n.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleInput=function(e){r.timerStarted||(S=Date.now(),console.info("started time")),r.timerStarted=!0;var t=e.target.value.split(" ").filter((function(e){return""!==e})),a=f(r.state.randomWords,t);r.isComplete(a,t)?r.initNextRound(a):r.setState({typedText:e.target.value,wordObjs:a})},r.initNextRound=function(e){var t=r.freshState();t.score=function(e,t){return{speed:k(e.length,t),accuracy:E(e),hightestSpeed:v,lowestSpeed:w,noOfRounds:++y}}(e,function(){var e=Date.now()-S;return S=0,console.info("stopped time"),e/1e3}()),r.setState(t),r.timerStarted=!1},r.handleResetScore=function(){r.setState({score:r.freshState().score}),b=0,y=0,v=0,w=99999},r.isComplete=function(e,t){return t.length>r.state.randomWords.length||e[e.length-1].state===m},r.freshState=function(){var e=function(e){for(var t=[];e--;)t.push(h[Math.floor(Math.random()*h.length)]);return t}(5);return{typedText:"",score:{speed:0,accuracy:0},randomWords:e,wordObjs:f(e,[])}},r.state=r.freshState(),r.timerStarted=!1,r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,null),n.a.createElement("div",{className:"App"},n.a.createElement(N,{score:this.state.score,resetCallback:this.handleResetScore}),n.a.createElement(d,{words:this.state.wordObjs}),n.a.createElement("input",{value:this.state.typedText,id:"text-input",className:"text-input",onChange:this.handleInput})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bc44a700.chunk.js.map