var myString2 = "I love el zero web sclhool";
var result;
var result2;
var position;
for(cpt = 1; myString2.length; cpt++ ){
    if(myString2.search(/l/) != -1){
        position = myString2.search(/l/);
        result = myString2.slice(position+1);
        myString2 = result;
    }
        if (myString2 == '') {
            
               break;
        }      
}
console.log(cpt);