

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla
activeItemPosition = 0;
initComplete = "";

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
    initStyleTPK(xtpkoodit);

};
//
/* const firstStyle = () => {
    initStyleTPK(tpKooditActData);
}; */

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



/* activeTpk2 = [activeTpk2];
const hoverPart2 = activeTpk2.map(
activeTpk2 => `
<div id="${activeTpk2.id}"; class=${hoverClass2}>
<h4 id="${activeTpk2.id}"; class="listaus mt-1 mb-1" style="font-size: 130%; font-weight: 630"><span class="text-success" >${activeTpk2.id} </span>${activeTpk2.nimi}</h4>
</div>
`
    ); */


defaultClassRyhma = '"alert alert-dismissible alert-secondary p-1 py-0 mb-3 mt-4 d-flex" style="height: 100%; padding: 0px; font-size: 97%; background-color: #111111"';
defaultStyleRyhma = '"font-size: 100%; font-style: italics; font-weight: 500" ';
defaultSpanStyleRyhma = "text-success";

// Alusta html-muotilu line itemeille ja varastoi tpkoodit-array:in.
const initStyleTPK = datatp => {
    let tpKooditActData = [];
    let ix = 0;
    while(ix<datatp.length) {
        tpKooditActData[ix] = datatp[ix];
        ix = ix+1;
    };
    console.log(xtpkoodit);
    console.log(tpKooditActData);
    //console.log(tpkoodit)
    //defaultStringText1 = [];
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
    storeTpKooditActData("store", tpKooditActData, "");
tpKooditActInit(tpKooditActData);
};

const storeTpKooditActData = (store, tpKooditActData, call) => {

    if(store === "store") { 
        console.log("true");
        tpKooditActDataX = [];
        tpKooditActDataX = tpKooditActData;
    } 
    else if (call === "call") {
        console.log(tpKooditActDataX);
        return tpKooditActDataX;
    };

};

    const tpKooditActInit = (tpdata) => {
        console.log(tpdata);
    
    tpKooditAct = [];
    let ixx = 0;
    while(ixx<tpdata.length) {
        tpKooditAct[ixx] = tpdata[ixx];
        ixx = ixx+1;
    };
    console.log(tpKooditAct);
    
    //tpKooditAct = tpKooditActData;
    let i2 = 0;
    tpKooditActHtml = [];
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = tpKooditAct[i2].html;
    i2 = i2+1
    };
    //html = tpKooditActHtml;
    //matchList.innerHTML = html; // vaiha tämä defaulthtml funktioksi!!!
    outputDefaultHtml(tpKooditActHtml);
    //console.log(tpKooditActData);
    console.log(tpKooditAct);
    initComplete ="yes";

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

        activeInfo = [tpKooditAct[activeitem]]; //otetaan aktiivisen itemin tiedot arraysta activeTpk2
        console.log(activeInfo);
        ryhmakey = activeInfo[0].ryhmä.replace(/\s+/g, ''); // poista ryhmän nimestä välilyönti
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

    hoverItemClass = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%;  padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"';
    hoverItemStyle = '"font-size: 210%; font-weight: 500" ';

        hoverActiveItem = activeInfo.map(
            () => 
            `
            <div id="${activeInfo[0].id}" class=${hoverItemClass}> <h4 id="${activeInfo[0].id}" class="listaus" style=${hoverItemStyle}><span class=${defaultSpanStyle}>${activeInfo[0].id} </span>${activeInfo[0].nimi}</h4>
            </div>
        `
            );

                console.log(hoverActiveInfo);
    };
    console.log(activeitem);
    //activeItemPositionReserveFunc(activeitem);
    hoverExecution2(activeitem);
};

activeItemPositionReserveFunc = (type, activeitem) => {
    console.log(type, activeitem);
    if (type == "store") {
        console.log(activeitem);
        console.log(activeitem.id);
        //console.log(tpKooditActData.findIndex(x => x.id === activeitem));
        let data = storeTpKooditActData("", "", "call");
        console.log(data);
        activeItemPositionReserveX = data[data.findIndex(x => x.id === activeitem.id)];
        console.log(activeItemPositionReserveX);

    //let = activeItemPositionReserveX = value;
    console.log(activeItemPositionReserveX);
    console.log(activeItemPositionReserveX);
    }
    else if (type == "call") {
        //console.log(activeitem);
        return activeItemPositionReserveX;

    };

};

    // nyt on luotu activeInfo -> luodaan array johon tulee activeInfo muutuja..
    //activeItemPosition



    const hoverExecution2 = (activeitem) => {

    if (activeItemPosition === 0 ) {

        console.log("aktiivi positio on nolla");
        console.log(activeitem);
        console.log(tpKooditAct.length);
        console.log(tpKooditAct);
        //activeItemPositionReserve = tpKooditAct[activeItemPosition+1] // tallenna talteen akiiti itemin origniaali muotoilu. 
        i = tpKooditAct.length; 
        tpKooditAct[i] = [];
        while (i > activeitem) {
            tpKooditAct[i] = tpKooditAct[i-1];
            i = i - 1;
        };
        console.log(tpKooditAct);
        //console.log(tpKooditActData);
        console.log(xtpkoodit);
        tpKooditAct[activeitem+1] = []; 
        console.log(tpKooditAct[activeitem+1]);
        tpKooditAct[activeitem].html = hoverActiveItem[0]; 
        console.log(tpKooditAct[activeitem].html);
        tpKooditAct[activeitem+1].html = hoverActiveInfo[0]; //fix!!!!!!
        console.log(activeitem);
        console.log(tpKooditAct[activeitem]);
        console.log(tpKooditAct);
        console.log(hoverActiveInfo);
        //tpKooditAct[i] = tpKooditAct[i]
        activeItemPosition = activeitem; // tallenna muuttujaan monesko item on tämän hetken aktiivinen item

        //console.log(activeItemPositionReserve);
        console.log(tpKooditAct);
        //console.log(tpKooditActData[activeitem-1]);
                
        activeItemPositionReserveFunc("store", tpKooditAct[activeitem]);
        //console.log(activeItemPositionReserve);
        console.log(tpKooditAct);
    }

        else {
        let olditem = activeItemPositionReserveFunc("call", activeitem);
        console.log("aktiivipositio oli");
        console.log(tpKooditAct);
        if(activeitem === activeItemPosition) {console.log("sama positio")}
        else if(activeitem > activeItemPosition) {
            console.log(olditem);
            console.log("uusi positio suurempi");
            console.log(activeItemPosition);
            console.log(activeitem);
            console.log(tpKooditAct[activeItemPosition]);
            //tpKooditAct[activeItemPosition-1] = activeItemPositionReserve("call", activeitem);
            
            
            tpKooditAct[activeItemPosition] = olditem // laita vanhaan aktiiviin orignaali muotoilu.

            console.log(tpKooditAct);
            //tpKooditAct[selectactiveIndex-1] = tpKooditAct[selectactiveIndex];
            for (i = activeItemPosition+1; i < activeitem+1; i++) {
                tpKooditAct[i] = tpKooditAct[i+1]
            };
            console.log(tpKooditAct);
            activeItemPosition = activeitem;

            //activeItemPositionReserve = tpKooditActData[tpKooditActData.findIndex(x => x.id === elementHovered.id)];
            console.log(activeitem);
            console.log(hoverActiveItem[0]);
            console.log(hoverActiveInfo[0]);
            //tpKooditAct[activeitem] = [];
            //tpKooditAct[activeitem].html = hoverActiveItem[0];
            tpKooditAct[activeitem] = [];
            console.log(tpKooditAct);
            tpKooditAct[activeitem-1].html = hoverActiveItem;
            tpKooditAct[activeitem].html = hoverActiveInfo[0];
            console.log(tpKooditAct[activeitem]);
            console.log(tpKooditAct);
            
            
        } else {
            console.log("uusi positio on pienempi")

        };
    };

    console.log(selectactiveIndex);
    console.log(hoverActiveInfo);    
    //tpKooditAct[selectactiveIndex] = activeInfo;
    console.log(tpKooditAct[selectactiveIndex+1]);
    console.log(tpKooditAct);
    //console.log(tpKooditActData);
    //activeItemPosition = 
    tpKooditActHtml = [];
    let i2 = 0;
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = tpKooditAct[i2].html;
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
    console.log(tpryhmat)
    };
    etsiTpryhmat();


function setUpListen() {
    matchList.addEventListener("click", () => hoverAction(event.target));
    search.addEventListener('input', () => etsiTPK(search.value)); 
};

/* async function initTPK() {
}; */

initTPK().then(setUpListen());
initTPK("");


