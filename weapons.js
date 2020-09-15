////Code referenced from Blake Riding, UGJA on GitHub. 

document.getElementById("primary").innerHTML = "";
function flatline() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    ////console.log(attArr);

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 2',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: ''
    },
    {
        name: '2x HCOG',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '2-4x Variable Holo',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

}

function g7Scout() {
    var numAttachments = [0, 1, 2, 3, 4];
    var totalCount = 5;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    //Mags

    var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 2',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: ''
    },
    {
        name: '2x HCOG',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '2-4x Variable Holo',
        image: ''
    },
    {
        name: '2-4 Variable HCOG',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: ''
    }
    ];

    var barrelMod = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Mag - " + '</b>' + barrelPick.name + '<b>' + '<img style="width:250px;" src="' + barrelPick.image + '">';
    }

    var hopUps = [{
        name: 'Double Tap',
        image: ''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt 5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2".innerHTML = "");
        document.getElementById("primaryAtt5").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }

}

function hemlock() {
    var numAttachments = [0, 1, 2, 3];
    var totalCount = 4;
    var ran = Math.floor(Math.random() * 4) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    ////console.log(attArr);

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 2',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: ''
    },
    {
        name: '2x HCOG',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '2-4x Variable Holo',
        image: ''
    },
    {
        name: '2-4 Variable AOG',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: ''
    }
    ];

    var barrelMod = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Mag - " + '</b>' + barrelPick.name + '<b>' + '<img style="width:250px;" src="' + barrelPick.image + '">';
    }
}

function r301() {
    var numAttachments = [0, 1, 2, 3];
    var totalCount = 4;
    var ran = Math.floor(Math.random() * 4) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    ////console.log(attArr);

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 2',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: ''
    },
    {
        name: '2x HCOG',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '2-4x Variable Holo',
        image: ''
    },
    {
        name: '2-4 Variable AOG',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: ''
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: ''
    }
    ];

    var barrelMod = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Mag - " + '</b>' + barrelPick.name + '<b>' + '<img style="width:250px;" src="' + barrelPick.image + '">';
    }
}

function havoc() {
    var numAttachments = [0, 1, 2, 3];
    var totalCount = 4;
    var ran = Math.floor(Math.random() * 4) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    ////console.log(attArr);

    //Mags

    var mags = [{
        name: 'Extended Energy Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Energy Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Energy Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 2',
        image: ''
    },
    {
        name: 'Standard Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: ''
    },
    {
        name: '2x HCOG',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '2-4x Variable Holo',
        image: ''
    },
    {
        name: '2-4 Variable AOG',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Turbocharger',
        image: ''
    },
    {
        name: 'Select Fire',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt 5").innerHTML = "";

    if (attArr.includes(3)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2".innerHTML = "");
        document.getElementById("primaryAtt5").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}
