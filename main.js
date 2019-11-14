// alusta data // lisää posid objekti // alusta data kolmeen eri ryhmään // formatoi ja lisää teksi objekti
const initTPK = async (initRyhmätStore) => { //searchText
    tpKooditActHtmlFuncXX("searched");
    //console.log(initRyhmätStore);
    let xri = format(-initRyhmätStore[0]);
    let rui = format(-initRyhmätStore[1]);
    let rri = format(-initRyhmätStore[2]);
    let initRyhmät = [xri, rui, rri];
    let countpos = initRyhmät.filter(p => p>0).length;
    let combinedList = [];
    console.log(countpos); 
    console.log(initRyhmät);


    const res = await fetch('../data/tpk.json');
    let xtpkoodit = await res.json(); // kaikki data tpkoodit-arrayssa

    let tpKooditList = [];

    tpKooditList[0] = format(xtpkoodit.filter(ryhma => {
        const regex = new RegExp("XR", 'gi');
        return ryhma.ryhmäTop.match(regex);
    }));
    tpKooditList[1] = format(xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RU");
        return ryhma.ryhmäTop.match(regex);
    }));
    tpKooditList[2] = format(xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RR");
        return ryhma.ryhmäTop.match(regex);
    }));   
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
                tpKooditList2[xii] =  format(tpKooditList[i]);
                xii = xii+1;
            }
        };

    console.log(tpKooditList2);
    //let concatx = {};
    //let combinedList = [];
    if(countpos === 0) {xtpkoodit = []} else {
        combinedList = format(tpKooditList2[0]);        
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

defaultClassRyhma = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%"';
defaultClassRyhmaXR = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: #325D88"';
defaultClassRyhmaRU = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: rgb(72, 112, 15)"';
defaultClassRyhmaRR = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: #F47C3C"';


defaultStyleRyhma = '"font-size: 100%; font-style: italics; font-weight: 500" ';
defaultSpanStyleRyhma = '"text-success"';

        if (defaultString[0].ryhmä == "Ryhmä") { //eka if = Ryhmä
            if (defaultString[0].ryhmäTop == "XR") {defClass = defaultClassRyhmaXR} else if (defaultString[0].ryhmäTop == "RU") {defClass = defaultClassRyhmaRU} else if (defaultString[0].ryhmäTop == "RR") {defClass = defaultClassRyhmaRR}   else {defClass = defaultClassRyhma};

            //defClass = defaultClassRyhma;
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
    console.log(tpKooditAct);
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

    let buttonArray = storeLocal.storeUpDownLoad('initRyhmät');
    let buttonArrayFormat = []; let buttonArraySize = [];
    console.log(buttonArray);
    for(i=0; i<buttonArray.length; i++) {
        if (buttonArray[i] <0) {buttonArrayFormat[i]=''} else {buttonArrayFormat[i]='disabled'};
        if (buttonArray[i] <0) {buttonArraySize[i]='btn-lg'} else {buttonArraySize[i]=''}
    };
    console.log(buttonArray);



    //filterButtons.innerHTML = "";
    filterButtons.innerHTML = `<button id="XRbutton" type="button" class= "btn btn-primary ${buttonArrayFormat[0]} ${buttonArraySize[0]}">R0-R III</button> <button id="RUbutton" type="button" class= "btn btn-success ${buttonArrayFormat[1]} ${buttonArraySize[1]}">RU I-RU II</button> <button id="RRbutton" type="button" class= "btn btn-warning ${buttonArrayFormat[2]} ${buttonArraySize[2]}">RR I-RR III</button>` ;
    console.log("done");
    
};

const hoverAction = (item) => {
    elementHovered = item //listener lähettää event.target tiedot tähän muuttujaan.

    if (elementHovered.id == null) {return}; // ei vielä oikein toimi!!!
    activeitem = elementHovered;
    if (elementHovered.id != 'match-list' && elementHovered.id != 'card-text' && elementHovered.id != 'card-title' && elementHovered.id != 'card-body' && elementHovered.className != 'card-text' && elementHovered.className != 'card-body' && elementHovered.className != 'card-title' && elementHovered.className != 'card-header' && elementHovered.className != 'card-header' && elementHovered.className !=  'card bg-light mb-3 mt-3' && elementHovered.className !=  'text-success') { // kato jos tähän saisi järkevämmän ehdon...
        
        let = selectactiveIndex = tpKooditAct.findIndex(x => x.idLong === activeitem.id);
        console.log(selectactiveIndex);
        hoverExecution(selectactiveIndex);
    } else {
        console.log("loppu")
        return;
    };
    };

const hoverExecution = (activeitem) => {

    console.log(tpKooditAct);
    console.log(tpKooditAct[activeitem]);
    if (tpKooditAct[activeitem].ryhmä == "Ryhmä") {
        console.log("oli ryhmä");
        return;
    } else {

        activeInfo = format([tpKooditAct[activeitem]]); //otetaan aktiivisen itemin tiedot arraysta
        let ryhmakey = format(activeInfo[0].ryhmä.replace(/\s+/g, '')); // poista ryhmän nimestä välilyönti
        console.log(activeInfo);
        if (activeInfo[0].soveltamisohje === "") {
            soveltamisohjeteksti = "Ei lisäohjeita"
        } else {
            soveltamisohjeteksti = activeInfo[0].soveltamisohje
        };
        hoverActiveInfo = activeInfo.map(
            () => `
            <div class="card bg-light mb-3 mt-3" style="max-width: 97%; position:relative; left:3%;">
            <div class="card-header" style="font-weight: 650;">Toimenpideryhmä: ${activeInfo[0].ryhmä} (${tpryhmat[0][ryhmakey]})</div>
            <div class="card-body">
              <h4 class="card-title">${activeInfo[0].nimi}</h4>
              <p class="card-text" style="margin-bottom: 0.4%; font-style: italic; font-weight: bold;")>Soveltamisohje:</p>
              <p class="card-text" style="display:inline-block;margin-left:0.3%;">${soveltamisohjeteksti}</p>
            </div>
          </div>
            `
                );
                console.log(hoverActiveInfo);

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
    console.log("runn");
    
    let tpKooditActHtmlX = [];
    let tpKooditActStore = [];
    console.log(typeof tpKooditActStoreX);
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
    
    //buttonFilterXR.addEventListener('click', () => console.log('xrcl'));
    /* buttonFilterXR.addEventListener('click', () => {
    storeLocal.storeUpDownLoad('initRyhmät', [-1, 0, 0]);
    initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
    });

    buttonFilterRU.addEventListener('click', () => {
    storeLocal.storeUpDownLoad('initRyhmät', [0, -1, 0]);
    initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
    });

    buttonFilterRR.addEventListener('click', () => {
    storeLocal.storeUpDownLoad('initRyhmät', [0, 0, -1]);
    initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
    }); */
};

function setUpButtonListen() {
    
    console.log("buttonlisten");

    filterButtons.addEventListener('click', () => {
        console.log([event.target][0].id);
        if ([event.target][0].id == "XRbutton") {
            console.log("xppress");
            storeLocal.storeUpDownLoad('initRyhmät', [-1, 0, 0]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'))
        } else if ([event.target][0].id == "RUbutton") {
            console.log("rupress")
            storeLocal.storeUpDownLoad('initRyhmät', [0, -1, 0]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
        } else if ([event.target][0].id == "RRbutton") {
            console.log("rrpress")
            storeLocal.storeUpDownLoad('initRyhmät', [0, 0, -1]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
        } else {console.log("error")}
    }
    );

    helpButton.addEventListener('click', () => {
        console.log('helpButton');
        
        if (typeof iconStatus === typeof undefined) {iconStatus = -1} ; //-1 -> info on pois päältä, 1= info on auki
        console.log(iconStatus);
        if (iconStatus === -1) {
            iconStatus = -1*iconStatus; //muuta status tilaan 1 eli päällä
            console.log(iconStatus);
            window.location.hash = 'help';
            //info-ikkunan html:
            let helpPopInfo = ['<div id="helpPopUp" class="card border-info" style="position: absolute; width: 56%; height: 55%; padding: 25px; top: 150px; margin-top: 240px; float: right; right: 22%; border-width: medium; z-index: 2; resize: both; text-size-adjust: auto;"><div class="card-header"; style="resize: both">Hakukoneen käyttäminen</div><div class="card-body"; style="resize: both; text-size-adjust: auto;"><h4 class="card-title" style="text-size-adjust: auto;">Toimenpidelista</h4><ul style="resize: both; text-size-adjust: auto;"><li class=""; style="resize: both"> Selaa listaa alas </li><li class=""; style="resize: both; text-size-adjust: auto;"> Klikkaamalla toimenpidettä aukeaa sen lisätiedot </li></ul><h4 class="card-title"; style="resize: both; text-size-adjust: auto;">Hakutoiminto</h4><ul><li class=""; style="resize: both; text-size-adjust: auto;"> Kirjoita hakukenttään hakusana </li> <li class=""; style="resize: both; text-size-adjust: auto;"> Klikkaamalla toimenpidettä aukeaa sen lisätiedot </li> </div>  </div>'];

        
            /* </ul><h4 class="card-title">Listan suodattaminen </h4><ul>  <li class=""> Klikkamalla hakukentän yläpuolella olevaa valintanappulaa voit suodataa pois kyseisen luokan toimenpiteet </li> <li class="card-text"> klikkaamalla toimenpidettä aukeaa sen lisätiedot </li> </ul> */
            matchList.insertAdjacentHTML('beforebegin', helpPopInfo);
        } else if (iconStatus === 1) {
            iconStatus = -1*iconStatus;
            let removeEl = document.getElementById("helpPopUp");
            removeEl.remove();
            window.location.hash = '';

        } else {console.log("error status ei löytynyt..?")};

    })
};

const format = (obj) => {
    res = JSON.parse(JSON.stringify(obj));
    return res;
};


var storeLocal = {

    init: function() {
        if(storeLocal.storeUpDownLoad('initRyhmät') == "nada" ) {
            console.log("eka arvo");
            storeLocal.storeUpDownLoad('initRyhmät', [-1, -2, -3]);
        }  else {return}
    },

    storeUpDownLoad: function(key, data) {

        if(arguments.length >1) {

            let dataNew = format(this.storeUpDownLoad('initRyhmät'));
            if (dataNew == 'nada') {dataNew = [1, 1, 1]} else{console.log("ei ollut nada")};
            console.log(dataNew);
            for(i=0; i < dataNew.length; i++) {                
            if (data[i] != 0) {
                dataNew[i] = format(dataNew[i]*data[i]);
                console.log(dataNew[i])
            };
            };
            localStorage.setItem(key, JSON.stringify(format(dataNew)));
        } else {
            var storeRetrieve = localStorage.getItem(key);
            console.log((storeRetrieve && JSON.parse(storeRetrieve)));
            return (storeRetrieve && JSON.parse(storeRetrieve)) || 'nada';

        }
    } 

};


const search = document.getElementById('search'); //rr
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla
const filterButtons = document.getElementById('filterButtons');
const buttonFilterXR = document.getElementById('XRbutton');
const buttonFilterRU = document.getElementById('RUbutton');
const helpButton = document.getElementById('helpButton');
//const helpPopUp = document.getElementsByClassName('text-center mb-3 helpPopUp');


storeLocal.init(); // check and set up local storage memory
console.log("hhehe");
initTPK(storeLocal.storeUpDownLoad('initRyhmät')).then(setUpListen()).then(setUpButtonListen());