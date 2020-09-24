var gun = {
    'Flatline':10,
    'G7 Scout':10,
    'Hemlock':10,
    'R-301 Carbine':10,
    'HAVOC':10,
    'Alternator':10,
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
    'Wingman':10, 
    'Mastiff':10,
    'Prowler':10,
    'Kraber':1,
    'Peacekeeper':2,
    'R-99':3,
    'Fists':4,
}

function newGame(input) {
    var array = [];
        for(var gun in input) {
            if(input.hasOwnProperty(gun) ) {
                for(var i=0; i<input[gun]; i++ ) {
                    array.push(gun);
                }
            }
        }
        var weaponOne = array[Math.floor(Math.random() * array.length)];
        var weaponTwo = array[Math.floor(Math.random() * array.length)];
        var loadOut = [weaponOne, weaponTwo,];
        console.clear();
        console.log('Your load out is the ' + weaponOne + ' and the ' + weaponTwo);
        document.getElementById("Load Out").innerHTML=loadOut;
}

function start() {   
    newGame(gun)
}

var weaponArray = [
    {
        name: 'Flatline',
        image: 'weapons/flatline.png',
        weight: 10
    },
    {
        name: 'G7 Scout',
        image: 'weapons/g7scout.png',
        weight: 10
    },
    {
        name: 'Hemlock',
        image: 'weapons/hemlock.png'
    },
    {
        name: 'R-301 Carbine',
        image: 'weapons/r301.png',
        weight: 10
    },
    {
        name: "HAVOC",
        image: 'weapons/havoc.png',
        weight: 10
    },
    {
        name: "Alternator",
        image: 'weapons/alternator.png',
        weight: 10
    },
    {
        name: "Prowler",
        image: 'weapons/prowler.png',
        weight: 10
    },
    {
        name: "R-99",
        image: 'weapons/r99',
        weight: 1
    },
    {
        name: "Volt SMG",
        image: 'weapons/volt.png',
        weight: 10
    },
    {
        name: "Devotion",
        image: 'weapons/devotion.png',
        weight: 10
    },
    {
        name: "Spitfire",
        image: 'weapons/spitfire.png',
        weight: 10
    },
    {
        name: "L-Star",
        image: 'weapons/lstar.png',
        weight: 10
    },
    {
        name: "Longbow",
        image: 'weapons/longbow.png',
        weight: 10
    },
    {
        name: "Kraber",
        image: 'weapons/kraber.png',
        weight: 2
    },
    {
        name: "Triple Take",
        image: 'weapons/tripletake.png',
        weight: 10
    },
    {
        name: "Sentinel",
        image: 'weapons/sentinel.png',
        weight: 10
    },
    {
        name: "Charge Rifle",
        image: 'weapons/chargerifle.png',
        weight: 10
    },
    {
        name: "EVA-8",
        image: 'weapons/eva8.png',
        weight: 10
    },
    {
        name: "Mastiff",
        image: 'weapons/mastiff.png',
        weight: 10
    },
    {
        name: "Mozambique",
        image: 'weapons/mozambique.png',
        weight: 10
    },
    {
        name: "Peacekeeper",
        image: 'weapons/peacekeeper.png',
        weight: 3
    },
    {
        name: "RE-45",
        image: 'weapons/re45.png',
        weight: 10
    },
    {
        name: "P2020",
        image: 'weapons/p2020.png',
        weight: 10
    },
    {
        name: "Wingman",
        image: 'weapons/wingman.png',
        weight: 10
    },
]

var primaryLength = weaponArray.length;
//primary
var randomPrimaryNumber = Math.floor(Math.random() * primaryLength) + 0;
var randomPrimary = weaponArray[randomPrimaryNumber];

console.log("The random primary is -------" + randomPrimaryNumber);
console.log("The name is -------" + randomPrimary.name);
console.log("The Image is ------" + randomPrimary.image);

document.getElementById;
document.getElementById;
document.getElementById;

var secondaryLength = weaponArray.length;
//primary
var randomSecondaryNumber = Math.floor(Math.random() * secondaryLength) + 0;
var randomSecondary = weaponArray[randomSecondaryNumber];

console.log("The random secondary is -------" + randomSecondaryNumber);
console.log("The name is -------" + randomSecondary.name);
console.log("The Image is -------" + randomSecondary.image);

//Call to Weapons

if (randomPrimary.name == "Flatline") {
    flatline();
}

if (randomPrimary.name == "G7 Scout") {
    g7scout();
}

if (randomPrimary.name == "Hemlock") {
    hemlock();
}

if (randomPrimary.name == "R-301 Carbine") {
    r301();
}

if (randomPrimary.name == "HAVOC") {
    havoc();
}

if (randomPrimary.name == "Alternator") {
    alternator();
}

if (randomPrimary.name == "Prowler") {
    prowler();
}

if (randomPrimary.name == "Volt SMG") {
    volt(); 
}

if (randomPrimary.name == "Devotion") {
    devotion();
}

if (randomPrimary.name == "Spitfire") {
    spitfire();
}

if (randomPrimary.name == "L-Star") {
    lStar();
}

if (randomPrimary.name == "Longbow") {
    longbow();
}

if (randomPrimary.name == "Triple Take") {
    tripleTake();
}

if (randomPrimary.name == "Sentinel") {
    sentinel();
}

if (randomPrimary.name == "Charged Rifle") {
    chargeRifle();
}

if (randomPrimary.name == "EVA-8") {
    eva8();
}

if (randomPrimary.name == "Mastiff") {
    mastiff();
}

if (randomPrimary.name == "Mozabique") {
    mozambique();
}

if (randomPrimary.name == "RE-45") {
    re45();
}

if (randomPrimary.name == "P2020") {
    p2020();
}

if (randomPrimary.name == "Wingman") {
    wingman();
}

if (randomPrimary.name == "R-99") {
    r99();
}

if (randomPrimary.name = "Kraber") {
    kraber();
}

if (randomPrimary.name == "Peacekeeper") {
    peacekeeper();
}
