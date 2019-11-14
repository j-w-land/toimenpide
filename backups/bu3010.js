const search = document.getElementById('search'); //rr
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla
const buttonFilterXR = document.getElementById('XRbutton');
const buttonFilterRU = document.getElementById('RUbutton');
const buttonFilterRR = document.getElementById('RRbutton');
//initRyhmät = ["K", "K", "K"]
// alusta data // lisää posid objekti // alusta data kolmeen eri ryhmään // formatoi ja lisää teksi objekti
const initTPK = async (xr, ru, rr) => { //searchText
    let xri = -xr; 
    let rui = -ru;
    let rri = -rr;
    initRyhmät = [xri, rui, rri];
    let countpos = initRyhmät.filter(p => p>0).length;
    let combinedList = [];
    console.log(countpos); 
    console.log(initRyhmät);


    const res = await fetch('../data/tpk.json');
    let xtpkoodit = await res.json(); // kaikki data tpkoodit-arrayssa

    let tpKooditList = [];

    tpKooditList[0] = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("XR", 'gi');
        return ryhma.ryhmäTop.match(regex);
    });
    tpKooditList[1] = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RU");
        return ryhma.ryhmäTop.match(regex);
    });
    tpKooditList[2] = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RR");
        return ryhma.ryhmäTop.match(regex);
    });   
    //tpKooditList = tpKooditList[0].concat(tpKooditList[1], tpKooditList[2]);
    console.log(tpKooditList);
    concatArray(initRyhmät);

    //let listHovered = hoverPart1.concat(hoverPart2, hoverActiveInfo, hoverPart3)
    
    //tpKooditActData = tpkoodit;
    function concatArray(initRyhmät) {
        let tpKooditList2 = [];
        let xii = 0;
        for(i = 0; i<initRyhmät.length; i++) {
            if(initRyhmät[i] < 0) {console.log("nope")} else {
                tpKooditList2[xii] =  tpKooditList[i];
                xii = xii+1;
            }
        };

    console.log(tpKooditList2);
    //let concatx = {};
    //let combinedList = [];
    if(countpos === 0) {xtpkoodit = []} else {
        combinedList = tpKooditList2[0];        
        console.log(tpKooditList2[0]);
        console.log(countpos);
    for(ci = 1; ci < countpos; ci++) {
        //concatx = tpKooditList[ci];
        //console.log(concatx);
        console.log(combinedList);
        console.log(tpKooditList2[ci]);
        combinedList = combinedList.concat(tpKooditList2[ci]); 
        console.log(combinedList);
    }
    
}
console.log(combinedList);

};
    // luo posid arvot tpKooditAct-array:hin
    for (i = 0; i<combinedList.length; i++) {
        combinedList[i].posid = i+1;
    };
    combinedList[combinedList.length] = {
        "idLong": "spaceholder", "id": "", "ryhmä": "", "ryhmä2": "", "ryhmäTop": "", "nimi": "", "nimi2": "", "soveltamisohje": ""};
    tpKooditActData = JSON.parse(JSON.stringify(combinedList));
    initStyleTPK(tpKooditActData);

};

// Alusta html-muotilu line itemeille ja varastoi tpkoodit-array:in.
const initStyleTPK = datatp => {
    let i = 0;
    while(i<tpKooditActData.length) {
        let defaultString = [];
       defaultString[0] = tpKooditActData[i];

/* ColorRyhmäTausta = "#111111"; 
//ColorRyhmäTeksti = ;
ColorXRTausta = ;
ColorXRTeksti = ;
ColorRUTausta = ;
ColorRUTeksti = ;
ColorRRTausta = ;
ColorRRTeksti = ; */

// Näytä oletussivu eli listaus kaikista toimenpidekoodeista
defaultClass = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px;"';
defaultStyle = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyle = "text-success";
defaultClassXR = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-primary" style="height: 100%; padding: 0px;"';
defaultStyleXR = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyleXR = "text-primary";
defaultClassRU = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-success" style="height: 100%; padding: 0px;"'; //background-color: #001f3f" <span class="border border-success"></span>
defaultStyleRU = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyleRU = "text-success";
defaultClassRR = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-warning" style="height: 100%; padding: 0px;"'; //background-color: #85144b"
defaultStyleRR = '"font-size: 93%; font-weight: 500" '; 
defaultSpanStyleRR = "text-warning";

defaultClassRyhma = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: #111111"';
defaultStyleRyhma = '"font-size: 100%; font-style: italics; font-weight: 500" ';
defaultSpanStyleRyhma = "text-success";

        if (defaultString[0].ryhmä == "Ryhmä") { //eka if = Ryhmä
            let defClass = defaultClassRyhma;
            let defStyle = defaultStyleRyhma;
            let defid = "";
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRyhma}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "XR") { //toka if = XR
            let defClass = defaultClassXR;
            let defStyle = defaultStyleRR;
            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleXR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RU") { //kolmas if= RU
            let defClass = defaultClassRU;
            let defStyle = defaultStyleRU;
            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRU}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText;
        } 

        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RR") { //4. if = RR
            let defClass = defaultClassRR;
            let defStyle = defaultStyleRR;
            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText;
        } 
        
        else {
            let defClass = defaultClass;
            let defStyle = defaultStyle;
            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class="text-success">${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText
        };
        i = i +1;
    };
    tpKooditAct = JSON.parse(JSON.stringify(tpKooditActData));
tpKooditActInit(tpKooditActData);
};
    const tpKooditActInit = () => {
    
    let i2 = 0;
    tpKooditActHtml = [];
    while (i2<tpKooditAct.length) { //vikaan obketiin ei tule html-dataa koska se on vain placeholder.
    tpKooditActHtml[i2] = format(tpKooditAct[i2].html);
    i2 = i2+1
    };
    outputDefaultHtml(tpKooditActHtml);

};

const outputHtml = matches => {
        matchesHtml= [];
        let i = 0;
        while(i <matches.length) {
            if (matches[i].ryhmä == "Ryhmä") {
                console.log("ryhmis")}
            else {
            let index = tpKooditActData.findIndex(x => x.idLong === matches[i].idLong);
            
            matchesHtml[i] = format(tpKooditActData[index]); //Html
            
            };
            i = i+1;
        };
        tpKooditAct = format(matchesHtml);
        tpKooditAct[matchesHtml.length] = {};
        tpKooditAct[matchesHtml.length].html = ["e"];
        console.log(tpKooditAct);
        tpKooditActHtmlFunc();
};

// Search tpk.json and filter it
const etsiTPK = searchText => {
    tpKooditActHtmlFuncXX("searched");
    // Get matches to the current text input
    matches = tpKooditActData.filter(hakuteksti => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return hakuteksti.nimi.match(regex) || hakuteksti.soveltamisohje.match(regex) || hakuteksti.idLong.match(regex)
    });

    matches = matches.filter(hakuteksti => {
        return !hakuteksti.ryhmä.match("Ryhmä")
    });

    // If search box does not include any text run Default listing, otherwise run results (matches or nomatches)
    if (searchText.length === 0) {
        matches = []; 
        //tpKooditAct = tpKooditActData;
        tpKooditAct = format(tpKooditActData);
        tpKooditActInit(tpKooditActData);
    } else {
        if(matches.length === 0) {
            nomatchesHtml()
        } else {
            outputHtml(matches);
        };
    };
};

const outputDefaultHtml = tpKooditActHtml => {

    //html = tpKooditActHtml.pop()
    tpKooditActHtml.pop(); // poista htmlarraysta viimeinen objekti koska se on vain placeholderina.
    html = tpKooditActHtml.join('');
    matchList.innerHTML = html;
};

const hoverAction = (item) => {
    elementHovered = item //listener lähettää event.target tiedot tähän muuttujaan.

    if (elementHovered.id == null) {return}; // ei vielä oikein toimi!!!
    activeitem = elementHovered;
    if (elementHovered.id != 'match-list' && elementHovered.id != 'card-text' && elementHovered.id != 'card-title' && elementHovered.id != 'card-body' && elementHovered.className != 'card-text' && elementHovered.className != 'card-body' && elementHovered.className != 'card-title' && elementHovered.className != 'card-header' && elementHovered.className != 'card-header' && elementHovered.className !=  'card bg-light mb-3 mt-3' && elementHovered.className !=  'text-success') { // kato jos tähän saisi järkevämmän ehdon...
        
        let = selectactiveIndex = tpKooditAct.findIndex(x => x.idLong === activeitem.id);
        hoverExecution(selectactiveIndex);
    } else {
        console.log("loppu")
        return;
    };
    };

const hoverExecution = (activeitem) => {

    if (tpKooditAct[activeitem].ryhmä == "Ryhmä") {
        console.log("oli ryhmä");
        return;
    } else {

        activeInfo = format([tpKooditAct[activeitem]]); //otetaan aktiivisen itemin tiedot arraysta
        ryhmakey = format(activeInfo[0].ryhmä.replace(/\s+/g, '')); // poista ryhmän nimestä välilyönti
        if (activeInfo[0].soveltamisohje === "") {
            soveltamisohjeteksti = "Ei lisäohjeita"
        } else {
            soveltamisohjeteksti = activeInfo[0].soveltamisohje
        };
        hoverActiveInfo = activeInfo.map(
            () => `
            <div class="card bg-light mb-3 mt-3" style="max-width: 97%; position:relative; left:3%;">
            <div class="card-header">Toimenpideryhmä: ${activeInfo[0].ryhmä} (${tpryhmat[0][ryhmakey]})</div>
            <div class="card-body">
              <h4 class="card-title">${activeInfo[0].nimi}</h4>
              <p class="card-text">Soveltamisohje:</p>
              <p class="card-text">${soveltamisohjeteksti}</p>
            </div>
          </div>
            `
                );

/*     hoverItemClassXR = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%;  padding: 0px; font-size: 97%; max-width: 99.7%; position:relative; left:0.3%;"';
    hoverItemClassRU = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%;  padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"';
    hoverItemClassRR = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%; padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"'; */

    //hoverItemClass = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%;  padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"';
    hoverItemStyle = '"font-size: 140%; font-weight: 500" ';

    if (activeInfo[0].ryhmäTop =="XR") {
        hoverItemClass = defaultClassXR;
        hoverItemSpanStyle = defaultSpanStyleXR

    } else if (activeInfo[0].ryhmäTop =="RU") {
        hoverItemClass = defaultClassRU;
        hoverItemSpanStyle = defaultSpanStyleRU;
     } else if (activeInfo[0].ryhmäTop =="RR") {
        hoverItemClass = defaultClassRR;
        hoverItemSpanStyle = defaultSpanStyleRR;
    };

        hoverActiveItem = activeInfo.map(
            () => 
            `
            <div id="${activeInfo[0].idLong}" class=${hoverItemClass}> <h4 id="${activeInfo[0].idLong}" class="listaus" style=${hoverItemStyle}><span class=${hoverItemSpanStyle}>${activeInfo[0].idLong} </span>${activeInfo[0].nimi}</h4>
            </div>
        `
            );
    };
    tpKooditActHtmlFuncXX("run", activeitem, hoverActiveItem, hoverActiveInfo);
};


const activePositionFunc = (method, stat, value, actPosition) => {
    if (method == "store") {
        status = stat;
        array = value;
        position = actPosition;

    } else if(method == "callstat" ){
        if(typeof(position) == "undefined") {return undefined} else {
        return status} }

    else if(method == "callarray" ){
            if(typeof(array) == "undefined") {return undefined} else {
            return array} }
    else if(method == "callpos" ){ 
            if(typeof(array) == "undefined") {return undefined} else {
            return position}
            }
    else {console.log("error")}
};

const tpKooditActHtmlFuncXX = (method, activeitempos, hoverActiveItem, hoverActiveInfo) => {
    if (method =="searched") {
        tpKooditActStoreX = undefined;
        return
    };
    
    let tpKooditActHtmlX = [];
    let tpKooditActStore = [];
    if (typeof tpKooditActStoreX === typeof undefined) 
        {tpKooditActStore = format(tpKooditAct)
    } else {
        tpKooditActStore = format(tpKooditActStoreX)
    };

    let i2 = 0;
    while (i2<activeitempos+1) {
    tpKooditActHtmlX[i2] = format(tpKooditActStore[i2].html);
    i2 = i2+1
    };

    tpKooditActHtmlX[activeitempos] = format(hoverActiveItem);
    tpKooditActHtmlX[activeitempos+1] = format(hoverActiveInfo);

    let i3 = activeitempos+2
    while(i3<tpKooditAct.length+1) {
        tpKooditActHtmlX[i3] = format(tpKooditActStore[i3-1].html);
        i3 = i3+1;
    };

    tpKooditActStoreX = format(tpKooditActStore);
    outputDefaultHtml(tpKooditActHtmlX);


};

    const tpKooditActHtmlFunc = () => {
    tpKooditActHtml = [];
    let i2 = 0;
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = format(tpKooditAct[i2].html);
    i2 = i2+1
    };
    outputDefaultHtml(tpKooditActHtml);
};

// Show results in HTML
outputClass = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px; font-size: 97%"';

const nomatchesHtml = () => {
    let nomatchtext = `
    <div class="list-group-item p-1 py-0 mb-1" style="height: 25px; padding: 0px; font-size: 97%; font-weight: 500">
    <h4 style="font-size: 140%; font-weight: 500">Ei hakutuloksia. Kiitos yrityksestä. Tsemppiä ensi kertaan!</h4>
    </div>
  ` 
    const html = [nomatchtext].join('');    

    matchList.innerHTML = html;
};

const etsiTpryhmat = async () => {
    res = await fetch('../data/tpryhmat.json');
    tpryhmat = await res.json();
    };
    etsiTpryhmat();


function setUpListen() {
    matchList.addEventListener("click", () => hoverAction(event.target));
    search.addEventListener('input', () => etsiTPK(search.value)); 
    buttonFilterXR.addEventListener('click', () => console.log("XR"));
    buttonFilterRU.addEventListener('click', () => console.log("RU"));
    buttonFilterRR.addEventListener('click', () => console.log("RR"));
};

const format = (obj) => {
    res = JSON.parse(JSON.stringify(obj));
    return res;
};



initTPK(-1, -2, -3).then(setUpListen());
//initTPK("");