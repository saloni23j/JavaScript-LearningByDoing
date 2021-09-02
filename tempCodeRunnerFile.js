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
function foo(){
    for(let i = 0; i < game.lenght ; i++){
        console.log(game[i]);
    }
} 
foo();