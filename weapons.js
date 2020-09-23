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

////SMG Weapons

function alternator() {
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
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
        var ranOptic = Math.floor(Math.random() * 5) + 0;

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

function prowler() {
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
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
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Select Fire',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}

function volt() {
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
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
        var ranOptic = Math.floor(Math.random() * 5) + 0;

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

////Light Machine Guns

function devotion() {
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

    //mags

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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
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

    //hop-ups

    var hopUps = [{
        name: 'Turbocharger',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }

}

function spitfire() {
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

    //mags

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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
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

function lStar() {
    var numAttachments = [0, 1];
    var totalCount = 2;
    var ran = Math.floor(Math.random() * 2) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }
}

////Snipers

function longbow() {
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

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
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
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + barrelPick.name + '<b>' + '<img style="width:250px;" src="' + barrelPick.image + '">';
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
        image: ''
    },
    {
        name: '6x Sniper',
        image:''
    },
    {
        name: '4-8 Variable Sniper',
        image: ''
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Skullpiercer',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}

function tripleTake() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
        image: ''
    },
    {
        name: '6x Sniper',
        image:''
    },
    {
        name: '4-8 Variable Sniper',
        image: ''
    },
    {
        name: '4-10x Digital Sniper Threat',
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
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }
}

function sentinel() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: ''
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: ''
    }
    ];

    var mag = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
        image: ''
    },
    {
        name: '6x Sniper',
        image:''
    },
    {
        name: '4-8 Variable Sniper',
        image: ''
    },
    {
        name: '4-10x Digital Sniper Threat',
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
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }
}

function chargeRifle() {
    var numAttachments = [0, 1];
    var totalCount = 2;
    var ran = Math.floor(Math.random() * 2) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: ''
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: '' 
    }
    ];

    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + stockPick.name + '<b>' + '<img style="width:250px;" src="' + stockPick.image + '">';
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '3x HCOG',
        image: ''
    },
    {
        name: '2-4x Variable AOG',
        image: ''
    },
    {
        name: '6x Sniper',
        image:''
    },
    {
        name: '4-8 Variable Sniper',
        image: ''
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }
}

function eva8() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: ''
    }
    ];

    var bolt = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<br>' + "Shot-gun Bolt - " + '</br' + boltPick.name + '<br' + '<img style=width250px;" src"' + boltPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Double Tap',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}

function mastiff() {
    var numAttachments = [0, 1];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: ''
    }
    ];

    var bolt = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<br>' + "Shot-gun Bolt - " + '</br' + boltPick.name + '<br' + '<img style=width250px;" src"' + boltPick.image + '">';
    }
}

function mozambique() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: ''
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: ''
    }
    ];

    var bolt = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<br>' + "Shot-gun Bolt - " + '</br' + boltPick.name + '<br' + '<img style=width250px;" src"' + boltPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Hammerpoint Rounds',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}

////pistols

function re45() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
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
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
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
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>' + "Mag - " + '</b>' + barrelPick.name + '<b>' + '<img style="width:250px;" src="' + barrelPick.image + '">';
    }
}

function p2020() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
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
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Hammerpoint Rounds',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}

function wingman() {
    var numAttachments = [0, 1, 2];
    var totalCount = 3;
    var ran = Math.floor(Math.random() * 3) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
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
        name: '1x Holo',
        image: ''
    },
    {
        name: '1-2x Variable Holo',
        image: ''
    },
    {
        name: '1x Digital Threat',
        image: ''
    }
    ];

    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>' + "Mag - " + '</b>' + opticPick.name + '<b>' + '<img style="width:250px;" src="' + opticPick.image + '">';
    }

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
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<b>' + '<img style="width:250px;" src="' + magPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Skullpiercer',
        image:''
    }
    ];

    var hopUp = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<br' + "Hop-Up - " + '</br>' + hopUpPick.name + '<br>' + '<img style=width250px;" src"' + hopUpPick.image + '">';
    }
}
