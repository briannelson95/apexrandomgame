////Code referenced from Blake Riding, UGJA on GitHub. 

document.getElementById("secondary").innerHTML = " ";
function flatlineSecond() {
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

    //console.log(attArr);

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt1").innerHTML = " ";

    if (attArr.includes(0)) {
        optic = true;
        //console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = " ";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: 'attachments/heavy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt2").innerHTML = " ";

    if (attArr.includes(1)) {
        mag = true;
        //console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        //console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = " ";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    if (attArr.includes(2)) {
        stock = true;
        //console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        //console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = " ";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";

}

function g7ScoutSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '2-4 Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 7) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = " ";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    var hopUps = [{
        name: 'Double Tap',
        image: 'attachments/doubletap.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }

}

function hemlockSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '2-4 Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryyAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: 'attachments/heavy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function r301Second() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '2-4 Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function havocSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '2-4 Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Energy Mag Lvl 1',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 2',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 3',
        image: 'attachments/energy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    //hop-ups

    var hopUps = [{
        name: 'Turbocharger',
        image: 'attachments/turbocharger.png'
    },
    {
        name: 'Select Fire',
        image:'attachments/selectfire.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(3)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 2) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

////SMG Weapons

function alternatorSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }


    //Mags

     var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function r99Second() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }


    //Mags

     var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function voltSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

     //Mags

     var mags = [{
        name: 'Extended Energy Mag Lvl 1',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 2',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 3',
        image: 'attachments/energy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

////Light Machine Guns

function devotionSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Energy Mag Lvl 1',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 2',
        image: 'attachments/energy_mag.png'
    },
    {
        name: 'Extended Energy Mag Lvl 3',
        image: 'attachments/energy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Turbocharger',
        image:'attachments/turbocharger.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }

}

function spitfireSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: 'attachments/heavy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function lStarSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 6) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt2").innerHTML = " ";

    //Stocks

    var standardStocks = [{
        name: 'Standard Stock Lvl 1',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 2',
        image: 'attachments/stock.png'
    },
    {
        name: 'Standard Stock Lvl 3',
        image: 'attachments/stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

////Snipers

function longbowSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    },
    {
        name: '6x Sniper',
        image: 'attachments/6xsniper.png'
    },
    {
        name: '4-8 Variable Sniper',
        image: 'attachments/4-8xsniper.png'
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: 'attachments/4-10xsniper.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: 'attachments/sniper_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: 'attachments/sniper_stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Sniper Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Skullpiercer',
        image:'attachments/skullpiercer.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

function tripleTakeSecond() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    },
    {
        name: '6x Sniper',
        image: 'attachments/6xsniper.png'
    },
    {
        name: '4-8 Variable Sniper',
        image: 'attachments/4-8xsniper.png'
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: 'attachments/4-10xsniper.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: 'attachments/sniper_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: 'attachments/sniper_stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function sentinelSecond() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    },
    {
        name: '6x Sniper',
        image: 'attachments/6xsniper.png'
    },
    {
        name: '4-8 Variable Sniper',
        image: 'attachments/4-8xsniper.png'
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: 'attachments/4-10xsniper.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //mags

    var mags = [{
        name: 'Extended Sniper Mag Lvl 1',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 2',
        image: 'attachments/sniper_mag.png'
    },
    {
        name: 'Extended Sniper Mag Lvl 3',
        image: 'attachments/sniper_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: 'attachments/sniper_stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function chargeRifleSecond() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '3x HCOG',
        image: 'attachments/3xhcog.png'
    },
    {
        name: '2-4x Variable AOG',
        image: 'attachments/2-4xaog.png'
    },
    {
        name: '6x Sniper',
        image: 'attachments/6xsniper.png'
    },
    {
        name: '4-8 Variable Sniper',
        image: 'attachments/4-8xsniper.png'
    },
    {
        name: '4-10x Digital Sniper Threat',
        image: 'attachments/4-10xsniper.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 9) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt2").innerHTML = " ";

    //Stocks

    var standardStocks = [{
        name: 'Sniper Stock Lvl 1',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 2',
        image: 'attachments/sniper_stock.png'
    },
    {
        name: 'Sniper Stock Lvl 3',
        image: 'attachments/sniper_stock.png' 
    }
    ];

    var stock = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(1)) {
        stock = true;
        ////console.log("Stocks is true");
    }

    if (stock != false) {
        var ranStock = Math.floor(Math.random() * 3) + 0;

        var stockPick = standardStocks[ranStock];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Stock - " + '</b>' + stockPick.name + '<br>' + '<img style="width:50px;" src="' + stockPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function eva8Second() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: 'attachments/bolt.png'
    }
    ];

    var bolt = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Shot-gun Bolt - " + '</b>' + boltPick.name + '<br>' + '<img style="width:50px;" src="' + boltPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    //hop-ups

    var hopUps = [{
        name: 'Double Tap',
        image:'attachments/doubletap.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

function mastiffSecond() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: 'attachments/bolt.png'
    }
    ];

    var bolt = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Shot-gun Bolt - " + '</b>' + boltPick.name + '<br>' + '<img style="width:50px;" src="' + boltPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt5").innerHTML = " ";
}

function mozambiqueSecond() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //shotgun bolt

    var bolts = [{
        name: 'Shot-Gun Bolt Level 1',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 2',
        image: 'attachments/bolt.png'
    },
    {
        name: 'Shot-Gun Bolt Level 3',
        image: 'attachments/bolt.png'
    }
    ];

    var bolt = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        bolt = true;
        ////console.log("Bolt is true");
    }

    if (bolt != false) {
        var ranBolt = Math.floor(Math.random() * 3) + 0;

        var boltPick = bolts[ranBolt];
        ////console.log(boltPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Shot-gun Bolt - " + '</b>' + boltPick.name + '<br>' + '<img style="width:50px;" src="' + boltPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    //hop-ups

    var hopUps = [{
        name: 'Hammerpoint Rounds',
        image:'attachments/hammerpoints.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

////pistols

function re45Second() {
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

    //Optics

    var optics = [{
        name: '1x HCOG',
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    //Barrel Stabilizer

    var barrelMods = [{
        name: 'Barrel Stabilizer Lvl 1',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 2',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 3',
        image: 'attachments/stabilizer.png'
    },
    {
        name: 'Barrel Stabilizer Lvl 4',
        image: 'attachments/stabilizer.png'
    }
    ];

    var barrelMod = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(2)) {
        barrelMod = true;
        ////console.log("Optics is true");
    }

    if (barrelMod != false) {
        var ranBarrel = Math.floor(Math.random() * 4) + 0;

        var barrelPick = barrelMods[ranBarrel];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Barrel Stabibilizer - " + '</b>' + barrelPick.name + '<br>' + '<img style="width:50px;" src="' + barrelPick.image + '">';
    }

    //hop-ups

    var hopUps = [{
        name: 'Quickdraw Holster',
        image: 'attachments/quickdraw.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(3)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

function p2020Second() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Light Mag Lvl 1',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 2',
        image: 'attachments/light_mag.png'
    },
    {
        name: 'Extended Light Mag Lvl 3',
        image: 'attachments/light_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    //hop-ups

    var hopUps = [{
        name: 'Hammerpoint Rounds',
        image: 'attachments/hammerpoints.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}

function wingmanSecond() {
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
        image: 'attachments/1xhcog.png'
    },
    {
        name: '2x HCOG',
        image: 'attachments/2xhcog.png'
    },
    {
        name: '1x Holo',
        image: 'attachments/1xholo.png'
    },
    {
        name: '1-2x Variable Holo',
        image: 'attachments/1-2xholo.png'
    },
    {
        name: '1x Digital Threat',
        image: 'attachments/1xdigithreat.png'
    }
    ];

    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        optic = true;
        ////console.log("Optics is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * 5) + 0;

        var opticPick = optics[ranOptic];
        ////console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Optics - " + '</b>' + opticPick.name + '<br>' + '<img style="width:80px;" src="' + opticPick.image + '">';
    }

    //Mags

    var mags = [{
        name: 'Extended Heavy Mag Lvl 1',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 2',
        image: 'attachments/heavy_mag.png'
    },
    {
        name: 'Extended Heavy Mag Lvl 3',
        image: 'attachments/heavy_mag.png'
    }
    ];

    var mag = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        mag = true;
        ////console.log("Mags is true");
    }

    if (mag != false) {
        var ranMag = Math.floor(Math.random() * 3) + 0;

        var magPick = mags[ranMag];
        ////console.log(magPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Mag - " + '</b>' + magPick.name + '<br>' + '<img style="width:50px;" src="' + magPick.image + '">';
    }

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt3").innerHTML = " ";

    document.getElementById("secondaryAttH2").innerHTML = " ";
    document.getElementById("secondaryAtt4").innerHTML = " ";

    //hop-ups

    var hopUps = [{
        name: 'Skullpiercer',
        image: 'attachments/skullpiercer.png'
    },
    {
        name: 'Quickdraw Holster',
        image: 'attachments/quickdraw.png'
    }
    ];

    var hopUp = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(2)) {
        hopUp = true;
        ////console.log("HopUp is True");
    }

    if (hopUp != false) {
        var ranHopUp = Math.floor(Math.random() * 1) + 0;

        var hopUpPick = hopUps[ranHopUp];
        ////console.log(hopUpPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Hop-Up - " + '</b>' + hopUpPick.name + '<br>' + '<img style="width:50px;" src="' + hopUpPick.image + '">';
    }
}