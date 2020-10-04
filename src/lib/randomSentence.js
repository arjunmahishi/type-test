const words = ["January", "February", "March", "April", "May", "June", "July","dusty","spade","flowers","competition","selfish","fallacious","brainy","hum","special","frequent","bite","taste","religion","unbecoming","festive","illustrious","jaded","private","lunchroom","imagine","beg","zesty","calendar","puny","violet","stretch","cloistered","minister","frame","office","four","switch","grain","try","true","practise","snails","round","quiet","fetch","flowery","wrestle","faded","camera","crowded","quiver","snobbish","introduce","squeak","diligent","feigned","unit","refuse","sidewalk","pass","rub","domineering","bore","six","scarecrow","purring","flagrant","breath","laughable","divide","choke","voice","panicky","year","earsplitting","unknown","division","visit","complain","sassy","bone","heartbreaking","delirious","supply","oval","ordinary","homely","tedious","therapeutic","dry","cat","guess","rule","worry","blush","willing","ultra","vivacious","gigantic","repair","form","cave","road","expect","spotty","act","hurry","bells","saw","crabby","signal","lumpy","cherries","erect","dogs","cheat","blue-eyed","treatment","precious","elbow","abrupt","curtain","hapless","overt","nut","babies","lovely","discovery","goofy","pricey","combative","zoom","argue","hellish","useless","incompetent","design","dare","strap","versed","elegant","glossy","sneeze","territory","save","three","defiant","third","feeling","detect","spare","boundless","exuberant","drum","approve","berserk","geese","subdued","rot","insidious","shave","reason","ice","pen","untidy","tease","omniscient","history","dead","nimble","thumb","smart","badge","macabre","swift","magical","screeching","analyse","kaput","talented","shiny","successful","hobbies","humor","flower","frightening","scare","kindhearted","charming","unequaled","moor","gleaming","sense","substance","funny","knowledgeable","sharp","accidental","wing","grade","sun","ink","tame","shaky","efficient","educated","plane","madly","crush","tough","awful","table","whispering","acoustics","boy","naughty","crooked","smile","nutritious","horn","terrify","pollution","selection","ignorant","disturbed","cumbersome","sparkling","royal","blind","linen","uppity","aware","mighty","bad","bright","used","suit","punish","check","sore","mourn","minor","long","sock","longing","health","squirrel","oceanic","plant","lopsided","wholesale","call","limping","support","tow","itchy","wide","comfortable","lewd","death","mean","school","pets","typical","legs","thaw","wiry","symptomatic","offend","ad hoc","occur","post","wipe","scared","phobic","disastrous","shop","guard","likeable","massive","uninterested","bashful","pin","battle","clumsy","whisper","committee","capable","difficult","hunt","grouchy","dad","second","rob","like","tranquil","horses","wealth","defective ","curly","eager","ahead","spoil","attack","approva"];
const random = Math.floor(Math.random() * words.length);
let sentence = ""
//Returns a string with random words 
const GetRandomString = (length) => {
    for (let i = 0; i < length; i++) {
        Shuffle(words)
        if(i === 0) {
            sentence = words[random]
        }else{
        sentence = sentence + " " + words[random]
        }
    }
    return sentence
}
//Shuffles the array to get a random word in the loop after every call  
const Shuffle= (array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export  {GetRandomString};

