var item = {
    'Flatline':10,
    'G7 Scout':10,
    'Hemlock':10,
    'R-301 Carbine':10,
    'HAVOC':10,
    'Alternator':10,
    'R-99':1,
    'Volt SMG':10,
    'Devotion':10,
    'Spitfire':10,
    'L-Star':10,
    'Longbow':10,
    'Triple Take':10,
    'Charge Rifle':10,
    'Sentinal':10,
    'EVA 8':10,
    'Mozabique':10,
    'RE-45':10,
    'P2020':10,
    'Peacekeeper':1,
    'Wingman':10, 
    'Mastiff':10,
    'Prowler':10,
    'Kraber':1,
}

function newGame(input) {
    var array = [];
        for(var item in input) {
            if(input.hasOwnProperty(item) ) {
                for(var i=0; i<input[item]; i++ ) {
                    array.push(item);
                }
            }
        }
        return array[Math.floor(Math.random() * array.length)];
}

console.log(newGame(item));
console.log(newGame(item));
