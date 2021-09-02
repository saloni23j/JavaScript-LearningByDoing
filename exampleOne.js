const game = {
    'suspects' : [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}
var gameLoop = function(){
    for(let i = 0; i < game.suspects.length; i++){
        for(let key in game.suspects[i]){
            if(game.suspects[i][key] === "Rusty"){
                console.log("found")
            }
            else{
                console.log("didn't found")
            }
        }
    }
}
gameLoop();
function foo(){
    for(let i = 0; i < game.suspects.length ; i++){
        console.log(game.suspects[i]);
    }
} 
foo();
