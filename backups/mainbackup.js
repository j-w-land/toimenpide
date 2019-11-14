const search = document.getElementById('search'); //rr
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla

// alusta data // lisää posid objekti // alusta data kolmeen eri ryhmään // formatoi ja lisää teksi objekti
const initTPK = async () => { //searchText
    const res = await fetch('../data/tpk.json');
    xtpkoodit = await res.json(); // kaikki data tpkoodit-arrayssa

    tpkooditR = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("XR", 'gi');
        return ryhma.ryhmäTop.match(regex);
    });
    tpkooditRU = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RU");
        return ryhma.ryhmäTop.match(regex);
    });
    tpkooditRR = xtpkoodit.filter(ryhma => {
        const regex = new RegExp("RR");
        return ryhma.ryhmäTop.match(regex);
    });   
    
    //tpKooditActData = tpkoodit;

    // tähän kohtaan pitää lisätä concat-funktiolla että tpKooditActData ja tpKooditAct on vain ne arrayt jotka on valittuna.!!!

    // luo posid arvot tpKooditAct-array:hin
    for (i = 0; i<xtpkoodit.length; i++) {
        xtpkoodit[i].posid = i+1;
    };

/*     for (i = 0; i<tpKooditActData.length; i++) {
        tpKooditActData[i].posid = i+1;
    }; */
    console.log(xtpkoodit);
    tpKooditActData = JSON.parse(JSON.stringify(xtpkoodit));
    initStyleTPK(tpKooditActData);

};

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
defaultClassXR = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px;"';
defaultStyleXR = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyleXR = "text-success";
defaultClassRU = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px; background-color: #001f3f"';
defaultStyleRU = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyleRU = "text-success";
defaultClassRR = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px; background-color: #85144b"';
defaultStyleRR = '"font-size: 93%; font-weight: 500" ';
defaultSpanStyleRR = "text-success";

defaultClassRyhma = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: #111111"';
defaultStyleRyhma = '"font-size: 100%; font-style: italics; font-weight: 500" ';
defaultSpanStyleRyhma = "text-success";

// Alusta html-muotilu line itemeille ja varastoi tpkoodit-array:in.
const initStyleTPK = datatp => {
    let i = 0;
    while(i<tpKooditActData.length) {
        let defaultString = [];
       defaultString[0] = tpKooditActData[i];
        if (defaultString[0].ryhmä == "Ryhmä") { //eka if = Ryhmä
            console.log(defaultString[0].ryhmä);
            defClass = defaultClassRyhma;
            defStyle = defaultStyleRyhma;
            defid = "";
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRyhma}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                //console.log(defaultStringText);
                tpKooditActData[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "XR") { //toka if = XR
            defClass = defaultClassXR;
            defStyle = defaultStyleRR;
            defid = defaultString[0].id;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleXR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RU") { //kolmas if= RU
            defClass = defaultClassRU;
            defStyle = defaultStyleRU;
            defid = defaultString[0].id;
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRU}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText;
        } 

        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RR") { //4. if = RR
            defClass = defaultClassRR;
            defStyle = defaultStyleRR;
            defid = defaultString[0].id;
            //console.log(defClass);
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText;
        } 
        
        else {
            //console.log(defaultString[i].ryhmä);
            defClass = defaultClass;
            defStyle = defaultStyle;
            defid = defaultString[0].id;
            console.log(defClass);
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class="text-success">${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditActData[i].html = defaultStringText
        };
        i = i +1;
    };
    console.log(tpKooditActData);
    tpKooditAct = JSON.parse(JSON.stringify(tpKooditActData));
    //storeTpKooditActData("store", tpKooditActData, ""); DEL!!!!!
tpKooditActInit(tpKooditActData);
};

/* const storeTpKooditActData = (store, tpKooditActData, call) => {

    if(store === "store") { 
        console.log("true");
        tpKooditActDataX = [];
        tpKooditActDataX = tpKooditActData;
    } 
    else if (call === "call") {
        console.log(tpKooditActDataX);
        return tpKooditActDataX;
    };

}; */

    const tpKooditActInit = () => {
    
/*     tpKooditAct = [];
    let ixx = 0;
    while(ixx<tpdata.length) {
        tpKooditAct[ixx] = tpdata[ixx];
        ixx = ixx+1;
    }; */ //DEL!!!!
    console.log(tpKooditAct);
    
    //tpKooditAct = tpKooditActData;
    let i2 = 0;
    tpKooditActHtml = [];
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = format(tpKooditAct[i2].html);
    i2 = i2+1
    };
    //html = tpKooditActHtml;
    //matchList.innerHTML = html; // vaiha tämä defaulthtml funktioksi!!!
    outputDefaultHtml(tpKooditActHtml);
    //console.log(tpKooditActData);

};

const outputHtml = matches => {
        matchesHtml= [];
        let i = 0;
        while(i <matches.length) {
            //console.log(matches[i].ryhmä = "Ryhmä");
            if (matches[i].ryhmä == "Ryhmä") {
                console.log("ryhmis")}
            else {
            let = index = tpKooditActData.findIndex(x => x.posid === matches[i].posid);
            console.log(index);
            matchesHtml[i] = tpKooditActHtml[index];
            };
            i = i+1;
        };
        tpKooditAct = matches;
        html = matchesHtml.join('');
        matchList.innerHTML = html;
        //console.log(html)
};

// Search tpk.json and filter it
const etsiTPK = searchText => {
    // Get matches to the current text input
    console.log(tpKooditActData);
    matches = tpKooditActData.filter(hakuteksti => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return hakuteksti.nimi.match(regex) || hakuteksti.soveltamisohje.match(regex) || hakuteksti.id.match(regex);
    });
    //console.log(matches)


    // If search box does not include any text run Default listing, otherwise run results (matches or nomatches)
    if (searchText.length === 0) {
        matches = []; 
        //tpKooditAct = tpKooditActData;
        console.log(tpKooditActData);
        outputDefaultHtml(tpKooditActHtml);
    } else {
        if(matches.length === 0) {
            nomatchesHtml()
        } else {
            outputHtml(matches);
        };
    };
};

/* 
        <div id="${tpkoodit.id}" class=${defaultClass}> <h4 id="${tpkoodit.id}" class="listaus" class="ryhmä:${tpkoodit.ryhmä}" class="list-group-item d-flex justify-content-between align-items-center" style="font-size: 93%; font-weight: 500" ><span class="text-success">${tpkoodit.id} </span>${tpkoodit.nimi}</h4>
        </div>
 */
const outputDefaultHtml = tpKooditActHtml => {

    html = tpKooditActHtml.join('');
    matchList.innerHTML = html;
};

const hoverAction = (item) => {
    elementHovered = item //listener lähettää event.target tiedot tähän muuttujaan.

    //activeItemPositionReserve = elementHovered;
    //console.log(activeItemPositionReserve);
    
    //activeItemPositionReserve = tpKooditActData[tpKooditActData.findIndex(x => x.id === elementHovered.id)]; ///!!!!!!!!!!!!!!Del
    //console.log(activeItemPositionReserve);


    //console.log(elementHovered);
    if (elementHovered.id == null) {return}; // ei vielä oikein toimi!!!
    activeitem = elementHovered;
    console.log(activeitem); 
    //console.log(activeitem.id);
    //console.log(elementHovered.className);

    if (elementHovered.id != 'match-list' && elementHovered.id != 'card-text' && elementHovered.id != 'card-title' && elementHovered.id != 'card-body' && elementHovered.className != 'card-text' && elementHovered.className != 'card-body' && elementHovered.className != 'card-title' && elementHovered.className != 'card-header') { // kato jos tähän saisi järkevämmän ehdon...
        
        let = selectactiveIndex = tpKooditAct.findIndex(x => x.id === activeitem.id);

        console.log(selectactiveIndex);
    
        //console.log(tpKooditAct[selectactiveIndex]);
        //console.log(selectactiveIndex);

        hoverExecution(selectactiveIndex);
    } else {
        console.log("loppu")
        return;
    };
    };

const hoverExecution = (activeitem) => {

    console.log(activeitem);
    if (tpKooditAct[activeitem].ryhmä == "Ryhmä") {
        console.log("oli ryhmä");
        return;
    } else {

        activeInfo = format([tpKooditAct[activeitem]]); //otetaan aktiivisen itemin tiedot arraysta activeTpk2
        console.log(activeInfo);
        ryhmakey = format(activeInfo[0].ryhmä.replace(/\s+/g, '')); // poista ryhmän nimestä välilyönti
        console.log(activeInfo[0].ryhmä);
        console.log(ryhmakey);
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
                console.log(hoverActiveInfo);

    hoverItemClass = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%;  padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"';
    hoverItemStyle = '"font-size: 210%; font-weight: 500" ';

        hoverActiveItem = activeInfo.map(
            () => 
            `
            <div id="${activeInfo[0].id}" class=${hoverItemClass}> <h4 id="${activeInfo[0].id}" class="listaus" style=${hoverItemStyle}><span class=${defaultSpanStyle}>${activeInfo[0].id} </span>${activeInfo[0].nimi}</h4>
            </div>
        `
            );

                console.log(hoverActiveItem);
    };
    console.log(activeitem);
    //activeItemPositionReserveFunc(activeitem);
    hoverExecution2(activeitem);
};


const activePositionFunc = (method, stat, value, actPosition) => {
    if (method == "store") {
        status = stat;
        array = value;
        position = actPosition;


    } else if(method == "callstat" ){
        if(typeof(position) == "undefined") {return undefined} else {
        return status} }

    else if(method == "callvalue" ){
            if(typeof(array) == "undefined") {return undefined} else {
            return array} }
    else if(method == "callpos" ){ 
            if(typeof(array) == "undefined") {return undefined} else {
            return position}
            }
    else {console.log("error")}
};

    const hoverExecution2 = (activeitem) => {
        //try {let activeItemPosition = ifError((activePositionFunc("callvalue")).posid)}
        //throw 

        //catch() {let activeItemPosition = ifError((activePositionFunc("callvalue")).posid)};
        let activeItemArray = ((activePositionFunc("callvalue")));
        console.log(activeItemArray);
        console.log(activeitem);
       let activeItemPosition = ((activePositionFunc("callpos")));
        console.log(activeItemPosition);
        let activeItemPositionStat = (activePositionFunc("callstat"));

        console.log(activeItemPosition);
        console.log(activeItemPositionStat);
        console.log(activeitem);
        if (activeItemPosition == undefined) {
            console.log("undef");
        }    else {console.log("ok oli")};

    if (activeItemPosition == undefined || activeItemPosition === 0) {
        console.log(activeItemPosition);
        console.log("aktiivi positio on nolla");
        i = tpKooditAct.length; 
        tpKooditAct[i] = [];
        while (i > activeitem) {
            tpKooditAct[i] = format(tpKooditAct[i-1]);
            i = i - 1;
        };
        tpKooditAct[activeitem].html = format(hoverActiveItem[0]); 
        tpKooditAct[activeitem+1].html = format(hoverActiveInfo[0]); //fix!!!!!!
        //activeItemPosition = format(activeitem); // tallenna muuttujaan monesko item on tämän hetken aktiivinen item
        activePositionFunc("store", 0, tpKooditActData[activeitem], activeitem);
        console.log(activeItemPosition);
        
        //activeItemPositionReserve = format(tpKooditActData[activeitem]);
        //activeItemPositionReserveFunc("store", tpKooditAct[activeitem]);
        //console.log(activeItemPositionReserve);
        console.log(tpKooditAct);
    }

        else { //1ja2
        console.log("aktiivipositio oli");
        console.log(tpKooditAct);
        console.log(activeitem);
        console.log(activeItemPosition);
        if(activeitem === activeItemPosition) {console.log("sama positio")}
        else if(activeitem > activeItemPosition) { 
            console.log(activeItemPositionStat);
            console.log(activeItemPosition);

            if(activeItemPositionStat == 0 || activeItemPositionStat == 1) { //#1
            console.log(activeItemPosition);
            tpKooditAct[activeItemPosition-1] = tpKooditActData[activeItemPosition-1];
            console.log(activeitem);
            for (i = activeItemPosition; i < activeitem; i++) {
                tpKooditAct[i] = format(tpKooditActData[i])
            };

            tpKooditAct[activeitem-1].html = format(hoverActiveItem[0]);
            console.log(tpKooditAct[activeitem-1]);
            tpKooditAct[activeitem].html = format(hoverActiveInfo[0]);
            console.log(tpKooditAct[activeitem]);  
            activePositionFunc('store', 1, tpKooditAct[activeitem], activeitem);
        } else { //#2
            console.log(activeItemPosition);
            tpKooditAct[activeItemPosition-1] = format(tpKooditActData[activeItemPosition-1]);
        
            for (i = activeItemPosition; i < activeitem; i++) {
                tpKooditAct[i] = format(tpKooditActData[i])
            };

            activePositionFunc('store', 2, tpKooditAct[activeitem], activeitem);

            tpKooditAct[activeitem-1].html = format(hoverActiveItem[0]);
            console.log(tpKooditAct[activeitem-1]);
            tpKooditAct[activeitem].html = format(hoverActiveInfo[0]);
            console.log(tpKooditAct[activeitem]); 
        }      

        } else if(activeitem <activeItemPosition) {
            console.log("uusi positio on pienempi")
            let stat = activePositionFunc("call", "");
            let oldPos = activePositionFunc("call", "");
        if (activeItemPositionStat==0 || activeItemPositionStat == 3) { //#3

            //let oldPosNum =  oldPos.posid-1;
            tpKooditAct[activeItemPosition-1] = format(tpKooditActData[activeItemPosition-1]);
            console.log(tpKooditAct);
            console.log(activeItemPosition);
            for (i = activeItemPosition+1; i > activeitem+1; i--) {
                tpKooditAct[i] = format(tpKooditActData[i-1])
            };

            activePositionFunc('store', 3, tpKooditAct[activeitem], activeitem);

            tpKooditAct[activeitem].html = format(hoverActiveItem[0]);
            console.log(tpKooditAct[activeitem-1]);
            tpKooditAct[activeitem+1].html = format(hoverActiveInfo[0]);
            console.log(tpKooditAct[activeitem]);    

        } else { //#4
            //let oldPosNum =  oldPos.posid-1;
            tpKooditAct[activeItemPosition-1] = tpKooditActData[activeItemPosition-1];
            console.log(tpKooditAct);
            console.log(activeItemPosition);
            for (i = activeItemPosition+1; i > activeitem+1; i--) {
                tpKooditAct[i] = format(tpKooditActData[i-1])
            };

            activePositionFunc('store', 4, tpKooditAct[activeitem], activeitem);

            tpKooditAct[activeitem].html = format(hoverActiveItem[0]);
            console.log(tpKooditAct[activeitem-1]);
            tpKooditAct[activeitem+1].html = format(hoverActiveInfo[0]);
            console.log(tpKooditAct[activeitem]);  

        }
    }
    };

    console.log(selectactiveIndex);
    console.log(hoverActiveInfo);    
    //tpKooditAct[selectactiveIndex] = activeInfo;
    console.log(tpKooditAct[selectactiveIndex+1]);
    console.log(tpKooditAct);
    tpKooditActHtml = [];
    let i2 = 0;
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = format(tpKooditAct[i2].html);
    i2 = i2+1
    };
    console.log(tpKooditActHtml);
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
    console.log(tpryhmat)
    };
    etsiTpryhmat();


function setUpListen() {
    matchList.addEventListener("click", () => hoverAction(event.target));
    search.addEventListener('input', () => etsiTPK(search.value)); 
};

const format = (obj) => {
    res = JSON.parse(JSON.stringify(obj));
    return res;
};

initTPK().then(setUpListen());
initTPK("");