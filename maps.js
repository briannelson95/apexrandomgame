////Maps

////Kings Canyon

var kingsArray = [
    {
        name: 'Artillary',
        image: 'maps/artillary.png',
        weight: 10
    },
    {
        name: 'Slum Lakes',
        image: 'maps/slum-lakes.png',
        weight: 10
    },
    {
        name: 'Containment',
        image: 'maps/containment.png',
        weight: 10
    },
    {
        name: 'The Pit',
        image: 'maps/the-pit.png',
        weight: 10
    },
    {
        name: 'Runoff',
        image: 'maps/runoff.png',
        weight: 10
    },
    {
        name: 'Bunker',
        image: 'maps/bunker.png',
        weight: 10
    },
    {
        name: 'Airbase',
        image: 'maps/airbase.png',
        weight: 10
    },
    {
        name: 'Gauntlet',
        image: 'maps/gauntlet.png',
        weight: 10
    },
    {
        name: 'Salvage',
        image: 'maps/salvage.png',
        weight: 10
    },
    {
        name: 'Market',
        image: 'maps/market.png',
        weight: 10
    },
    {
        name: 'Water Treatment',
        image: 'maps/water-treatment.png',
        weight: 10
    },
    {
        name: 'The Cage',
        image: 'maps/the-cage.png',
        weight: 10
    },
    {
        name: 'Capacitor',
        image: 'maps/capacitor.png',
        weight: 10
    },
    {
        name: 'The Rig',
        image: 'maps/the-rig.png',
        weight: 10
    },
    {
        name: 'Labs',
        image: 'maps/labs.png',
        weight: 10
    },
    {
        name: 'Swamps',
        image: 'maps/swamps.png',
        weight: 10
    },
    {
        name: 'Hydrodam',
        image: 'maps/hydrodam.png',
        weight: 10
    },
    {
        name: 'Repulsor',
        image: 'maps/repulsor.png',
        weight: 10
    }
]

function kingsCanyon() {

    document.getElementById("map").innerHTML = "";

    var kingsLength = kingsArray.length;

    var randomKingNum = Math.floor(Math.random() * kingsLength) + 0;
    var randomKing = kingsArray[randomKingNum];

    //console.log('The POI is ' + randomKing.name);

    document.getElementById("map").innerHTML = /*'<b>' + randomKing.name + '</b>' + '<br>' + */'<img style width="75%;" src="' + randomKing.image + '">';
}

var worldsArray = [
    {
        name: 'Harvester',
        image: 'maps/harvester.png',
        weight: 10
    },
    {
        name: 'Harvester 2',
        image: 'maps/harvester2.png',
        weight: 10
    },
    {
        name: 'Harvester 3',
        image: 'maps/harvester3.png',
        weight: 10
    },
    {
        name: 'Skyhook',
        image: 'maps/skyhook.png',
        weight: 10
    },
    {
        name: 'Survey Camp',
        image: 'maps/survey-camp.png',
        weight: 10
    },
    {
        name: 'Refinery',
        image: 'maps/refinery.png',
        weight: 10
    },
    {
        name: 'The Epicenter',
        image: 'maps/the-epicenter.png',
        weight: 10
    },
    {
        name: 'Fragment West',
        image: 'maps/fragment-west.png',
        weight: 10
    },
    {
        name: 'Fragment East',
        image: 'maps/fragment-east.png',
        weight: 10
    },
    {
        name: 'The Train Yard',
        image: 'maps/train-yard.png',
        weight: 10
    },
    {
        name: 'Lava Fissure',
        image: 'maps/lava-fissure.png',
        weight: 10
    },
    {
        name: 'The Geyser',
        image: 'maps/geyser.png',
        weight: 10
    },
    {
        name: 'Overlook',
        image: 'maps/overlook.png',
        weight: 10
    },
    {
        name: 'Sorting Factory',
        image: 'maps/sorting-factory.png',
        weight: 10
    },
    {
        name: 'Lava City',
        image: 'maps/lava-city.png',
        weight: 10
    },
    {
        name: 'Swamps',
        image: 'maps/swamps.png',
        weight: 10
    },
    {
        name: 'The Dome',
        image: 'maps/the-dome.png',
        weight: 10
    },
    {
        name: 'The Tree',
        image: 'maps/the-tree.png',
        weight: 10
    },
    {
        name: 'Thermal Station',
        image: 'maps/thermal-station.png',
        weight: 10
    },
    {
        name: 'Mirage Voyage',
        image: 'maps/mirage-voyage.png',
        weight: 10
    }
]

function worldsEdge() {

    document.getElementById("map").innerHTML = "";

    var worldLength = worldsArray.length;

    var randomWorldNum = Math.floor(Math.random() * worldLength) + 0;
    var randomWorld = worldsArray[randomWorldNum];

    document.getElementById("map").innerHTML = /*'<b>' + randomWorld.name + '</b>' + '<br>' + */'<img style width="75%;" src="' + randomWorld.image + '">';
}

var olympusArray = [
    {
        name: 'Docks',
        image: 'maps/olympus/docks.png',
        weight: 10
    },
    {
        name: 'Carrier',
        image: 'maps/olympus/carrier.png',
        weight: 10
    },
    {
        name: 'Rift',
        image: 'maps/olympus/rift.png',
        weight: 10
    },
    {
        name: 'Power Grid',
        image: 'maps/olympus/power-grid.png',
        weight: 10
    },
    {
        name: 'Turbine',
        image: 'maps/olympus/turbine.png',
        weight: 10
    },
    {
        name: 'Oasis',
        image: 'maps/olympus/oasis.png',
        weight: 10
    },
    {
        name: 'Estates',
        image: 'maps/olympus/estates.png',
        weight: 10
    },
    {
        name: 'Hammond Labs',
        image: 'maps/olympus/hammond-labs.png',
        weight: 10
    },
    {
        name: 'Energy Depot',
        image: 'maps/olympus/energy-depot.png',
        weight: 10
    },
    {
        name: 'Gardens',
        image: 'maps/olympus/gardens.png',
        weight: 10
    },
    {
        name: 'Grow Towers',
        image: 'maps/olympus/grow-towers.png',
        weight: 10
    },
    {
        name: 'Solar Array',
        image: 'maps/olympus/solar-array.png',
        weight: 10
    },
    {
        name: 'Orbital Cannon',
        image: 'maps/olympus/orbital-cannon.png',
        weight: 10
    },
    {
        name: 'Bonsai Plaza',
        image: 'maps/olympus/bonsai-plaza.png',
        weight: 10
    },
    {
        name: 'Hydroponics',
        image: 'maps/olympus/hydroponics.png',
        weight: 10
    },
    {
        name: 'Elysium',
        image: 'maps/olympus/elysium.png',
        weight: 10
    },
]

function olympus() {
    document.getElementById("map").innerHTML = "";

    var olympusLength = olympusArray.length;

    var randomOlympusNum = Math.floor(Math.random() * olympusLength) + 0;
    var randomOlympus = olympusArray[randomOlympusNum];

    document.getElementById("map").innerHTML = /*'<b>' + randomOlympus.name + '</b>' + '<br>' + */'<img style width="75%" src="' + randomOlympus.image + '">';
}