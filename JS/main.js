// alusta data // lisää posid objekti // alusta data kolmeen eri ryhmään // formatoi ja lisää teksi objekti
let activeInfoStore = "";
const initTPK = async (initRyhmätStore) => { //searchText
    tpKooditActHtmlFuncXX("searched");
    let xri = format(-initRyhmätStore[0]);
    let rui = format(-initRyhmätStore[1]);
    let rri = format(-initRyhmätStore[2]);
    let initRyhmät = [xri, rui, rri];
    let countpos = initRyhmät.filter(p => p>0).length;
    let combinedList = [];


    const res = await fetch('../toimenpide/data/tpk.json');
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

    if(countpos === 0) {xtpkoodit = []} else {
        combinedList = format(tpKooditList2[0]);        
    for(ci = 1; ci < countpos; ci++) {
        //concatx = tpKooditList[ci];
        combinedList = combinedList.concat(tpKooditList2[ci]); 
    }
    
}

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
    while(i<datatp.length) {
        let defaultString = [];
       defaultString[0] = datatp[i];

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
defaultClassXRTop = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-primary" style="height: 100%; padding: 0px;"';
defaultStyleXR = '"font-size: 93%; font-weight: 500" ';
defaultStyleXRTop = '"font-size: 105%; font-weight: 500; margin-bottom: 1%; margin-top: 1%;" ';
defaultSpanStyleXR = "text-primary";

defaultClassRU = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-success" style="height: 100%; padding: 0px;"'; //background-color: #001f3f" <span class="border border-success"></span>
defaultClassRUTop = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-success" style="height: 100%; padding: 0px;"'; //background-color: #001f3f" <span class="border border-success"></span>
defaultStyleRU = '"font-size: 93%; font-weight: 500" ';
defaultStyleRUTop = '"font-size: 105%; font-weight: 500"; margin-bottom: 1%; margin-top: 1%; ';
defaultSpanStyleRU = "text-success";


defaultClassRR = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-warning" style="height: 100%; padding: 0px;"'; //background-color: #85144b"
defaultClassRRTop = '"listaus list-group-item p-1 py-0 mb-1 d-flex border border-warning" style="height: 100%; padding: 0px;"'; //background-color: #85144b"
defaultStyleRR = '"font-size: 93%; font-weight: 500" '; 
defaultStyleRRTop = '"font-size: 105%; font-weight: 500"; margin-bottom: 1%; margin-top: 1%; ';
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
                datatp[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "XR") { //toka if = XR
            //console.log(defaultString[0]);
            let defClass = "" //defaultClassXR;
            let defStyle = ""

            if (defaultString[0].topResult === 1) {
                defStyle = defaultStyleXRTop;
                defClass = defaultClassXRTop;
                //console.log(defStyle)
            } else {
                defStyle = defaultStyleXR;
                defClass = defaultClassXR;
            }
            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleXR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                datatp[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RU") { //kolmas if= RU
            let defClass = "" //defaultClassXR;
            let defStyle = ""

            if (defaultString[0].topResult === 1) {
                defStyle = defaultStyleRUTop;
                defClass = defaultClassRUTop;
                //console.log(defStyle)
            } else {
                defStyle = defaultStyleRU;
                defClass = defaultClassRU;
            }

            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRU}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                datatp[i].html = defaultStringText;
        } 

        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RR") { //4. if = RR
            let defClass = "" //defaultClassXR;
            let defStyle = ""

            if (defaultString[0].topResult === 1) {
                defStyle = defaultStyleRRTop;
                defClass = defaultClassRRTop;
                //console.log(defStyle)
            } else {
                defStyle = defaultStyleRR;
                defClass = defaultClassRR;
            }


            let defid = defaultString[0].idLong;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.idLong}" class=${defClass}> <h4 id="${defaultString.idLong}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                datatp[i].html = defaultStringText;
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
                datatp[i].html = defaultStringText
        };
        // jos topscore attribuutti niin muuta muotoilu



        i = i +1;
    };

    console.log(datatp);

    tpKooditAct = JSON.parse(JSON.stringify(datatp));
    //console.log(tpKooditAct);
tpKooditActInit(datatp);
};

    const tpKooditActInit = () => {
    console.log(tpKooditAct);
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
        console.log(tpKooditAct)
        tpKooditActHtmlFunc();
};

//;

const outputDefaultHtml = tpKooditActHtml => {

    //html = tpKooditActHtml.pop()
    console.lo
    tpKooditActHtml.pop(); // poista htmlarraysta viimeinen objekti koska se on vain placeholderina.
    html = tpKooditActHtml.join('');
    matchList.innerHTML = html;

    let buttonArray = storeLocal.storeUpDownLoad('initRyhmät');
    let buttonArrayFormat = []; let buttonArraySize = [];
    for(i=0; i<buttonArray.length; i++) {
        if (buttonArray[i] <0) {buttonArrayFormat[i]=''} else {buttonArrayFormat[i]='disabled'};
        if (buttonArray[i] <0) {buttonArraySize[i]='btn-lg'} else {buttonArraySize[i]=''}
    };



    //filterButtons.innerHTML = "";
    filterButtons.innerHTML = `<button id="XRbutton" type="button" class= "btn btn-primary ${buttonArrayFormat[0]} ${buttonArraySize[0]}">R0-R III</button> <button id="RUbutton" type="button" class= "btn btn-success ${buttonArrayFormat[1]} ${buttonArraySize[1]}">RU I-RU II</button> <button id="RRbutton" type="button" class= "btn btn-warning ${buttonArrayFormat[2]} ${buttonArraySize[2]}">RR I-RR III</button> <i id="filterInfoButton" class="fas fa-info-circle fa-w-16 fa-2x" style="margin-left: 1%; margin-bottom: -0.5%"></i>` ;

    console.log(tpKooditActHtml);

    
};

const hoverAction = (item) => {
    elementHovered = item //listener lähettää event.target tiedot tähän muuttujaan.

    if (elementHovered.id == null) {return}; // ei vielä oikein toimi!!!
    activeitem = elementHovered;
    console.log(elementHovered);
    if (elementHovered.id != 'match-list' && elementHovered.id != 'card-text' && elementHovered.id != 'card-title' && elementHovered.id != 'card-body' && elementHovered.className != 'card-text' && elementHovered.className != 'card-body' && elementHovered.className != 'card-title' && elementHovered.className != 'card-header' && elementHovered.className != 'card-header' && elementHovered.className !=  'card bg-light mb-3 mt-3' && elementHovered.className !=  'text-success') { // kato jos tähän saisi järkevämmän ehdon...
        
        let selectactiveIndex = tpKooditAct.findIndex(x => x.idLong === activeitem.id);
        console.log(selectactiveIndex)
        hoverExecution(selectactiveIndex);
    } else {
        console.log("stop")
        return;
    };
    };

const hoverExecution = (activeitem) => {
    console.log(activeitem)

    if (tpKooditAct[activeitem].ryhmä == "Ryhmä") {
        return;
    } else {
        console.log(activeInfoStore)

        activeInfo = format([tpKooditAct[activeitem]]); //otetaan aktiivisen itemin tiedot arraysta
        //jos käyttäjä klikkaa aktiivista itemia niin se sulkeutuu:
        if (activeInfo[0].posid === activeInfoStore) { //jos klikattu item on sama kuin mikä on edellinen aktiivi item niin ajaa html päivityksen niin että aktiivi poistuu.
            console.log("318")
            tpKooditActHtmlFunc()
            activeInfoStore = ""; // tallentaa muistiin että nyt ei ole aktiivia ollenkaan
            return;
        } else { // jos uusi klikkaus ei ollut akiivi niin tallentaa uuden aktiivin storeen.
        activeInfoStore = activeInfo[0].posid
        console.log(activeInfoStore);
    }

        let ryhmakey = format(activeInfo[0].ryhmä.replace(/\s+/g, '')); // poista ryhmän nimestä välilyönti
        console.log(ryhmakey)
        
        if (activeInfo[0].soveltamisohje === "") {
            soveltamisohjeteksti = "Ei lisäohjeita"
        } else {
            soveltamisohjeteksti = activeInfo[0].soveltamisohje
        };
        hoverActiveInfo = activeInfo.map(
            () => `
            <div class="card bg-light mb-3 mt-3" style="max-width: 97%; position:relative; left:3%;">
            <div class="card-header" style="font-weight: 410;">Toimenpideryhmä: ${activeInfo[0].ryhmä} (${tpryhmat[0][ryhmakey]})</div>
            <div class="card-body">
            <!--<h4 class="card-title">${activeInfo[0].nimi}</h4>-->
              <p class="card-text" style="margin-bottom: 0.4%; font-style: italic; font-weight: bold;")>Soveltamisohje:</p>
              <p class="card-text" style="display:inline-block;margin-left:0.3%;">${soveltamisohjeteksti}</p>
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
    console.log(activeitem, hoverActiveItem, hoverActiveInfo)
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
    console.log("334")
};

const tpKooditActHtmlFuncXX = (method, activeitempos, hoverActiveItem, hoverActiveInfo) => {
    console.log(method, activeitempos, hoverActiveItem, hoverActiveInfo)
    if (method =="searched") {
        tpKooditActStoreX = undefined;
        return
    };
    
    let tpKooditActHtmlX = [];
    let tpKooditActStore = [];
    if (typeof tpKooditActStoreX === typeof undefined) 
        {tpKooditActStore = format(tpKooditAct)
        console.log(tpKooditActStore);
    } else {
        tpKooditActStore = format(tpKooditActStoreX)
    };

    let i2 = 0;
    while (i2<activeitempos+1) {
    tpKooditActHtmlX[i2] = format(tpKooditActStore[i2].html);
    i2 = i2+1
    };
    console.log(hoverActiveItem)

    tpKooditActHtmlX[activeitempos] = format(hoverActiveItem);
    tpKooditActHtmlX[activeitempos+1] = format(hoverActiveInfo);

    console.log(tpKooditActHtmlX[activeitempos])
    console.log(tpKooditActHtmlX[activeitempos+1])

    let i3 = activeitempos+2
    console.log(tpKooditActHtmlX)
    console.log(i3);
    console.log(tpKooditAct.length+1)
    console.log(tpKooditActStore)
    while(i3<tpKooditAct.length+1) {
        tpKooditActHtmlX[i3] = format(tpKooditActStore[i3-1].html);
        i3 = i3+1;
    };
    console.log(tpKooditActHtmlX[i3])

    console.log(tpKooditActStore)
    tpKooditActStoreX = format(tpKooditActStore);
    console.log(tpKooditActStoreX)
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
    res = await fetch('../toimenpide/data/tpryhmat.json');
    tpryhmat = await res.json();
    };
    etsiTpryhmat();


function setUpListen() {
    matchList.addEventListener("click", () => hoverAction(event.target));
    search.addEventListener('paste', () => etsiTPK("paste", ""));
    search.addEventListener('input', () => etsiTPK("input", search.value)); 
    
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

    filterButtons.addEventListener('click', () => {
        search.value = "";
        
        if ([event.target][0].id == "XRbutton") {
            storeLocal.storeUpDownLoad('initRyhmät', [-1, 0, 0]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'))
        } else if ([event.target][0].id == "RUbutton") {
            storeLocal.storeUpDownLoad('initRyhmät', [0, -1, 0]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
        } else if ([event.target][0].id == "RRbutton") {
            storeLocal.storeUpDownLoad('initRyhmät', [0, 0, -1]);
            initTPK(storeLocal.storeUpDownLoad('initRyhmät'));
        } else if ([event.target][0].id == "filterInfoButton" || [event.target][0].parentElement.id == "filterInfoButton") {
            
            if (typeof iconStatusI === typeof undefined) {iconStatusI = -1} ; //-1 -> info on pois päältä, 1= info on auki
            if (iconStatusI === -1) {
                iconStatusI = -1*iconStatusI; //muuta status tilaan 1 eli päällä
                //info-ikkunan html:
                let filterInfo = ['<div id="filterInfoPop"><div id="filterInfoXR" class="alert   alert-primary" style="position: relative; width: 24%; height: 8%; padding: 1%; margin-top: 0.5%; float: left; left: 12%; border-width: medium; resize: both; font-size:1vw"><p style="margin-bottom: 2.0%; font-style: italic;"> Toimenpideluokat R0-R III:</p><a href="#" class="alert-link"> </a> Terveyskeskusten kaikkiin lääkäreihin sovellettavat toimenpiteet yleisohjeet huomioon ottaen</div><div id="filterInfoRU" class="alert   alert-success" style="position: relative; width: 24%; height: 8%; padding: 1%; margin-top: 0.5%; float: left; left: 12%; border-width: medium; resize: both; font-size:1vw"> <p style="margin-bottom: 2.0%; font-style: italic;"> Toimenpideluokat RU I - RU II:</p> <a href="#" class="alert-link"></a> Muihin terveyskeskusten lääkäreihin kuin röntgenerikoislääkäreihin sovellettavat radiologiset toimenpiteet </div> <div id="filterInfoRR" class="alert   alert-warning" style="position: relative; width: 24%; height: 8%; padding: 1%; margin-top: 0.5%; float: left; left: 12%; border-width: medium; resize: both; font-size:1vw"><p style="margin-bottom: 2.0%; font-style: italic;"> Toimenpideluokat RR I - RR III:</p><a href="#" class="alert-link"></a> Terveyskeskusten röntgenerikoislääkäreihin sovellettavat radiologiset toimenpiteet </div></div>']
    
            
                filterButtonsParent.insertAdjacentHTML('beforeend', filterInfo);
            } else if (iconStatusI === 1) {
                iconStatusI = -1*iconStatusI;
                let removeEl = document.getElementById("filterInfoPop");
                removeEl.remove();
    
            } else {console.log("error status ei löytynyt..?")};
        

        } else {console.log("error")}
    }
    );

    helpButton.addEventListener('click', () => {
        
        if (typeof iconStatus === typeof undefined) {iconStatus = -1} ; //-1 -> info on pois päältä, 1= info on auki
        if (iconStatus === -1) {
            iconStatus = -1*iconStatus; //muuta status tilaan 1 eli päällä
            window.location.hash = 'help';
            //info-ikkunan html:
            let helpPopInfo = ['<div id="helpPopUp" class="card border-info" style="position: absolute; width: 56%; height: 55%; padding: 25px; top: -30px; margin-top: 240px; float: right; right: 22%; border-width: medium; z-index: 2; resize: both; font-size:1vw""><div class="card-header"; style="resize: both">Hakukoneen käyttäminen</div><div class="card-body"; style="resize: both; text-size-adjust: auto;"><h4 class="card-title" style="text-size-adjust: auto;">Toimenpidelista</h4><ul style="resize: both; text-size-adjust: auto;"><li class=""; style="resize: both"> Selaa listaa alas </li><li class=""; style="resize: both; text-size-adjust: auto;"> Klikkaamalla toimenpidettä aukeaa sen lisätiedot </li></ul><h4 class="card-title"; style="resize: both; text-size-adjust: auto;">Hakutoiminto</h4><ul><li class=""; style="resize: both; text-size-adjust: auto;"> Kirjoita hakukenttään hakusana </li> <li class=""; style="resize: both; text-size-adjust: auto;"> Klikkaamalla toimenpidettä aukeaa sen lisätiedot </li> </div>  </div>'];

        
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
            storeLocal.storeUpDownLoad('initRyhmät', [-1, -2, -3]);
        }  else {return}
    },

    storeUpDownLoad: function(key, data) {

        if(arguments.length >1) {

            let dataNew = format(this.storeUpDownLoad('initRyhmät'));
            if (dataNew == 'nada') {dataNew = [1, 1, 1]} else{console.log("ei ollut nada")};
            for(i=0; i < dataNew.length; i++) {                
            if (data[i] != 0) {
                dataNew[i] = format(dataNew[i]*data[i]);
            };
            };
            localStorage.setItem(key, JSON.stringify(format(dataNew)));
        } else {
            var storeRetrieve = localStorage.getItem(key);
            return (storeRetrieve && JSON.parse(storeRetrieve)) || 'nada';

        }
    } 

};


const search = document.getElementById('search'); //rr
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla
const filterButtons = document.getElementById('filterButtons');
//const buttonFilterXR = document.getElementById('XRbutton');
//const buttonFilterRU = document.getElementById('RUbutton');
const helpButton = document.getElementById('helpButton');
const filterButtonsParent = document.getElementById('filterButtonsParent');
//const helpPopUp = document.getElementsByClassName('text-center mb-3 helpPopUp');


storeLocal.init(); // check and set up local storage memory
initTPK(storeLocal.storeUpDownLoad('initRyhmät')).then(setUpListen()).then(setUpButtonListen());