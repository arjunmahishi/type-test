(this["webpackJsonptype-test"]=this["webpackJsonptype-test"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),i=a.n(s),o=(a(13),a(1)),c=a(2),l=a(3),u=a(4),d=a(7),h=(a(15),{correct:"rgba(119, 219, 119, 0.1)",wrong:"rgba(255, 0, 0, 0.1)",inactive:"#202020"});function m(e){return n.a.createElement("div",{className:"words-holder"},e.words.map((function(e,t){return n.a.createElement("span",{style:{backgroundColor:h[e.state]},className:"word",key:t},e.value)})))}a(16);var p=["January","February","March","April","May","June","July","dusty","spade","flowers","competition","selfish","fallacious","brainy","hum","special","frequent","bite","taste","religion","unbecoming","festive","illustrious","jaded","private","lunchroom","imagine","beg","zesty","calendar","puny","violet","stretch","cloistered","minister","frame","office","four","switch","grain","try","true","practise","snails","round","quiet","fetch","flowery","wrestle","faded","camera","crowded","quiver","snobbish","introduce","squeak","diligent","feigned","unit","refuse","sidewalk","pass","rub","domineering","bore","six","scarecrow","purring","flagrant","breath","laughable","divide","choke","voice","panicky","year","earsplitting","unknown","division","visit","complain","sassy","bone","heartbreaking","delirious","supply","oval","ordinary","homely","tedious","therapeutic","dry","cat","guess","rule","worry","blush","willing","ultra","vivacious","gigantic","repair","form","cave","road","expect","spotty","act","hurry","bells","saw","crabby","signal","lumpy","cherries","erect","dogs","cheat","blue-eyed","treatment","precious","elbow","abrupt","curtain","hapless","overt","nut","babies","lovely","discovery","goofy","pricey","combative","zoom","argue","hellish","useless","incompetent","design","dare","strap","versed","elegant","glossy","sneeze","territory","save","three","defiant","third","feeling","detect","spare","boundless","exuberant","drum","approve","berserk","geese","subdued","rot","insidious","shave","reason","ice","pen","untidy","tease","omniscient","history","dead","nimble","thumb","smart","badge","macabre","swift","magical","screeching","analyse","kaput","talented","shiny","successful","hobbies","humor","flower","frightening","scare","kindhearted","charming","unequaled","moor","gleaming","sense","substance","funny","knowledgeable","sharp","accidental","wing","grade","sun","ink","tame","shaky","efficient","educated","plane","madly","crush","tough","awful","table","whispering","acoustics","boy","naughty","crooked","smile","nutritious","horn","terrify","pollution","selection","ignorant","disturbed","cumbersome","sparkling","royal","blind","linen","uppity","aware","mighty","bad","bright","used","suit","punish","check","sore","mourn","minor","long","sock","longing","health","squirrel","oceanic","plant","lopsided","wholesale","call","limping","support","tow","itchy","wide","comfortable","lewd","death","mean","school","pets","typical","legs","thaw","wiry","symptomatic","offend","ad hoc","occur","post","wipe","scared","phobic","disastrous","shop","guard","likeable","massive","uninterested","bashful","pin","battle","clumsy","whisper","committee","capable","difficult","hunt","grouchy","dad","second","rob","like","tranquil","horses","wealth","defective ","curly","eager","ahead","spoil","attack","approva"],g="correct",f="wrong",b="inactive",y=function(e,t){return e.map((function(e,a){var r={value:e,state:null};return a<t.length?(r.state=t[a]===e?g:f,r):(r.state=b,r)}))},v=0,w=function(e,t){var a=Math.round(e/t*60),r=0===v?a:Math.round((v+a)/2);return v=r,r},k=function(e){return e.filter((function(e){return e.state===g})).length/e.length*100},E=0;function S(e){var t=e.score,a=e.resetCallback;return n.a.createElement("div",{className:"wpmReset"},n.a.createElement("span",{className:"score"},"Speed: ",t.speed," wpm"),n.a.createElement("span",{className:"score"},"Accuracy: ",t.accuracy,"%"),n.a.createElement("input",{className:"reset-score",type:"submit",onClick:a,value:"reset"}))}var N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleInput=function(e){r.timerStarted||(E=Date.now(),console.info("started time")),r.timerStarted=!0;var t=e.target.value.split(" ").filter((function(e){return""!==e})),a=y(r.state.randomWords,t);r.isComplete(a,t)?r.reset(a):r.setState({typedText:e.target.value,wordObjs:a})},r.reset=function(e){var t=r.freshState();t.score=function(e,t){return{speed:w(e.length,t),accuracy:k(e)}}(e,function(){var e=Date.now()-E;return E=0,console.info("stopped time"),e/1e3}()),r.setState(t),r.timerStarted=!1},r.resetScore=function(){r.setState({score:r.freshState().score})},r.isComplete=function(e,t){return t.length>r.state.randomWords.length||e[e.length-1].state===g},r.freshState=function(){var e=function(e){for(var t=[];e--;)t.push(p[Math.floor(Math.random()*p.length)]);return t}(5);return{typedText:"",score:{speed:0,accuracy:0},randomWords:e,wordObjs:y(e,[])}},r.state=r.freshState(),r.timerStarted=!1,r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gitBtn"},n.a.createElement(d.a,{href:"https://github.com/arjunmahishi/type-test","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star arjunmahishi/type-test on GitHub"},"Star")),n.a.createElement("h1",{className:"appName"},"type-test"),n.a.createElement("div",{className:"App"},n.a.createElement(S,{score:this.state.score,resetCallback:this.resetScore}),n.a.createElement(m,{words:this.state.wordObjs}),n.a.createElement("input",{value:this.state.typedText,id:"text-input",className:"text-input",onChange:this.handleInput})))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2ec9ebd9.chunk.js.map