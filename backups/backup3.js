const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const outerWindow = document.getElementById('container'); // työn alla

// alusta data // lisää posid objekti // alusta data kolmeen eri ryhmään // formatoi ja lisää teksi objekti
const initTPK = async searchText => {
    const res = await fetch('../data/tpk.json');
    tpkoodit = await res.json(); // kaikki data tpkoodit-arrayssa

    tpkooditR = tpkoodit.filter(ryhma => {
        const regex = new RegExp("XR", 'gi');
        return ryhma.ryhmäTop.match(regex);
    });
    tpkooditRU = tpkoodit.filter(ryhma => {
        const regex = new RegExp("RU");
        return ryhma.ryhmäTop.match(regex);
    });
    tpkooditRR = tpkoodit.filter(ryhma => {
        const regex = new RegExp("RR");
        return ryhma.ryhmäTop.match(regex);
    });   
    
    tpKooditAct = tpkoodit;

    // tähän kohtaan pitää lisätä concat-funktiolla että tpKooditAct on vain ne arrayt jotka on valittuna.!!!

    // luo posid arvot tpKooditAct-array:hin
    for (i = 0; i<tpKooditAct.length; i++) {
        tpKooditAct[i].posid = i+1;
    };

    initStyleTPK(tpKooditAct);

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
const initStyleTPK = tpKooditAct => {
    //console.log(tpkoodit)
    //defaultStringText1 = [];
    let i = 0;
    while(i<tpKooditAct.length) {
        defaultString = [];
       defaultString[0] = tpKooditAct[i];
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
                console.log(defaultStringText);
                tpKooditAct[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "XR") { //toka if = XR
            defClass = defaultClassXR;
            defStyle = defaultStyleRR;
            defid = defaultString[0].id;
            console.log(defClass);
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleXR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditAct[i].html = defaultStringText
        } 
        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RU") { //kolmas if= RU
            defClass = defaultClassRU;
            defStyle = defaultStyleRU;
            defid = defaultString[0].id;
            console.log(defClass);
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRU}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditAct[i].html = defaultStringText
        } 

        else if (defaultString[0].ryhmä != "Ryhmä" && defaultString[0].ryhmäTop == "RR") { //4. if = RR
            defClass = defaultClassRR;
            defStyle = defaultStyleRR;
            defid = defaultString[0].id;
            console.log(defClass);
            let defaultStringText = defaultString.map(
                defaultString => 
                `
                <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class=${defaultSpanStyleRR}>${defid} </span>${defaultString.nimi}</h4>
                </div>
            `
                );
                tpKooditAct[i].html = defaultStringText
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
                tpKooditAct[i].html = defaultStringText
        };
        i = i +1;
        /* defaultString = [defaultString[0]]
        console.log(defaultString);
        //console.log(defaultStringText);
        defaultStringText = defaultString.map(
            defaultString => 
            `
            <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class="text-success">${defid} </span>${defaultString.nimi}</h4>
            </div>
        `
            ); */
        
        //console.log(defaultStringText);
        //console.log(defaultStringText1);
        //defaultStringText1 = defaultStringText1.concat(defaultStringText);
        //console.log(defaultStringText.join(''));
        //html = defaultStringText1.join('')
        //console.log(defaultString);
    };

    let i2 = 0;
    tpKooditActHtml = [];
    while (i2<tpKooditAct.length) {
    tpKooditActHtml[i2] = tpKooditAct[i2].html;
    i2 = i2+1
    };
    html = tpKooditActHtml.join('');
    matchList.innerHTML = html; // vaiha tämä defaulthtml funktioksi!!!

/* 
    html = tpkoodit.map(
        tpkoodit => 
        `
        <div id="${tpkoodit.id}" class=${defaultClass}> <h4 id="${tpkoodit.id}" class="listaus" class="${defaultClass}" class="list-group-item d-flex justify-content-between align-items-center" style=${defaultStyle}><span class="text-success">${tpkoodit.id} </span>${tpkoodit.nimi}</h4>
        </div>
    `
        )
    .join('');     */
    //matchList.innerHTML = html;
    //console.log(tpKooditAct);

};

// Search tpk.json and filter it
const etsiTPK = searchText => {    
    // Get matches to the current text input
    let matches = tpKooditAct.filter(hakuteksti => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return hakuteksti.nimi.match(regex) || hakuteksti.soveltamisohje.match(regex) || hakuteksti.id.match(regex);
    });
    //console.log(matches)


    // If search box does not include any text run Default listing, otherwise run results (matches or nomatches)
    if (searchText.length === 0) {
        matches = []; 
        matchList.innerHTML = '';
        outputDefaultHtml(tpKooditActHtml);
    } else {
        if(matches.length === 0) {
            nomatchesHtml()
        } else {
            outputHtml(matches);
        }

    };
    
};


/* 
        <div id="${tpkoodit.id}" class=${defaultClass}> <h4 id="${tpkoodit.id}" class="listaus" class="ryhmä:${tpkoodit.ryhmä}" class="list-group-item d-flex justify-content-between align-items-center" style="font-size: 93%; font-weight: 500" ><span class="text-success">${tpkoodit.id} </span>${tpkoodit.nimi}</h4>
        </div>
 */
const outputDefaultHtml = tpkoodit => {
    //console.log(tpkoodit)
    defaultStringText1 = [];
    let i = 0;
    while(i<tpkoodit.length) {
        defaultString = [];
       defaultString[0] = tpkoodit[i];
        if (defaultString[0].ryhmä == "Ryhmä") {
            console.log(defaultString[0].ryhmä);
            defClass = defaultClassRyhma;
            defStyle = defaultStyleRyhma;
            defid = "";
        } else {
            //console.log(defaultString[i].ryhmä);
            defClass = defaultClass;
            defStyle = defaultStyle;
            defid = defaultString[0].id;
            console.log(defClass);
        };
        defaultString = [defaultString[0]]
        console.log(defaultString);
        //console.log(defaultStringText);
        defaultStringText = defaultString.map(
            defaultString => 
            `
            <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class="text-success">${defid} </span>${defaultString.nimi}</h4>
            </div>
        `
            );
            i = i +1;
        console.log(defaultStringText);
        console.log(defaultStringText1);
        defaultStringText1 = defaultStringText1.concat(defaultStringText);
        console.log(defaultStringText.join(''));
        html = defaultStringText1.join('')
        //console.log(defaultString);
    };
/* 
    html = tpkoodit.map(
        tpkoodit => 
        `
        <div id="${tpkoodit.id}" class=${defaultClass}> <h4 id="${tpkoodit.id}" class="listaus" class="${defaultClass}" class="list-group-item d-flex justify-content-between align-items-center" style=${defaultStyle}><span class="text-success">${tpkoodit.id} </span>${tpkoodit.nimi}</h4>
        </div>
    `
        )
    .join('');     */
    matchList.innerHTML = htmltest;
    console.log(tpKooditAct);

};

const outputHtml2 = (hoverPart1, hoverPart2, hoverPart3, hoverActiveInfo) => {
    //console.log(tpkoodit)
    inputItem = [];
    const inputs = [hoverPart1, hoverPart2, hoverPart3];
    var x;
    numero = 0;
    kokeile = [];
    for (x in inputs) {
        numero = numero +1
    inputItem = inputs[x];

    defaultStringText1 = [];
    let i = 0;
    while(i<inputItem.length) {
        defaultString = [];
       defaultString[0] = inputItem[i];
        if (defaultString[0].ryhmä == "Ryhmä") {
            console.log(defaultString[0].ryhmä);
            defClass = defaultClassRyhma;
            defStyle = defaultStyleRyhma;
            defid = "";
        } else {
            //console.log(defaultString[i].ryhmä);
            defClass = defaultClass;
            defStyle = defaultStyle;
            defid = defaultString[0].id;
            console.log(defClass);
        };
        defaultString = [defaultString[0]]
        console.log(defaultString);
        //console.log(defaultStringText);
        defaultStringText = defaultString.map(
            defaultString => 
            `
            <div id="${defaultString.id}" class=${defClass}> <h4 id="${defaultString.id}" class="listaus" style=${defStyle}><span class="text-success">${defid} </span>${defaultString.nimi}</h4>
            </div>
        `
            );
            i = i +1;
        console.log(defaultStringText);
        console.log(defaultStringText1);
        defaultStringText1 = defaultStringText1.concat(defaultStringText);
        console.log(defaultStringText.join(''));
        //html = defaultStringText1.join('')
        //console.log(defaultString);
    };
    console.log(x.toString());
    //xxx = "inputItem";
    console.log("inputItem".concat(numero));
    console.log(defaultStringText1);
    //"inputItem".concat(numero) = [];
    kokeile[numero] =  defaultStringText1;
    console.log("inputItem".concat(numero));
};
kokeile[4] = kokeile[3];
kokeile[3] = hoverActiveInfo;


/* 
    html = tpkoodit.map(
        tpkoodit => 
        `
        <div id="${tpkoodit.id}" class=${defaultClass}> <h4 id="${tpkoodit.id}" class="listaus" class="${defaultClass}" class="list-group-item d-flex justify-content-between align-items-center" style=${defaultStyle}><span class="text-success">${tpkoodit.id} </span>${tpkoodit.nimi}</h4>
        </div>
    `
        )
    .join('');     */
        console.log(kokeile);
        html = kokeile.join('');
    matchList.innerHTML = html;
    console.log(tpKooditAct);

};

const hoverAction = (item) => {
    const elementHovered = item //listener lähettää event.target tiedot tähän muuttujaan.
    //console.log(elementHovered);
    const activeitem = document.getElementById(elementHovered.id);
    //console.log(activeitem); 
    //console.log(activeitem.id);
    //console.log(elementHovered.className);

    if (elementHovered.id != 'match-list' && elementHovered.id != 'card-text' && elementHovered.id != 'card-title' && elementHovered.id != 'card-body' && elementHovered.className != 'card-text' && elementHovered.className != 'card-body' && elementHovered.className != 'card-title' && elementHovered.className != 'card-header') { // kato jos tähän saisi järkevämmän ehdon...
        
        let = selectactiveIndex = tpKooditAct.findIndex(x => x.id === activeitem.id);
        //console.log(selectactiveIndex);
    
        //console.log(tpKooditAct[selectactiveIndex]);
        //console.log(selectactiveIndex);
        hoverExecution(selectactiveIndex);
    } else {
        console.log("loppu")
        return;
    };
    };

const hoverExecution = (activeitem) => {
    i = -1;
    activeTpk1 = [];
    while (i < activeitem){
        activeTpk1[i] = tpKooditAct[i];
        i = i +1;
    };
    activeTpk2 = tpKooditAct[activeitem];
    i = activeitem+1;
    pos = 0;
    activeTpk3 = [];
    while (i < tpKooditAct.length) {
        activeTpk3[pos] = tpKooditAct[i];
        i = i +1;
        pos = pos +1;
    };
    console.log(activeTpk1);
    console.log(activeTpk2);
    console.log(activeTpk3);
    
   /*  hoverClass1 = '"listaus list-group-item p-1 py-0 mb-1" style="height: 100%; padding: 0px; font-size: 97%; font-weight: 500"';

    const hoverPart1 = activeTpk1.map(
    activeTpk1 => `
    <div id="${activeTpk1.id}"; class=${hoverClass1}>
    <h4 id="${activeTpk1.id}"; class="listaus" style="font-size: 93%; font-weight: 500"><span class="text-success">${activeTpk1.id} </span>${activeTpk1.nimi}</h4>
    </div>
`
    );
    hoverClass2 = '"listaus list-group-item border border-dark p-1 py-0 mb-1 mt-2" style="height: 100%; padding: 0px; font-size: 97%; max-width: 100%; position:relative; left:0.3%;"'; */

/*     activeTpk2 = [activeTpk2];
    console.log(activeTpk2);
    const hoverPart2 = activeTpk2.map(
    activeTpk2 => `
    <div id="${activeTpk2.id}"; class=${hoverClass2}>
    <h4 id="${activeTpk2.id}"; class="listaus mt-1 mb-1" style="font-size: 130%; font-weight: 630"><span class="text-success" >${activeTpk2.id} </span>${activeTpk2.nimi}</h4>
    </div>
    `
        ); */

    //Luo laatikko, jossa on soveltamisohjeet. Laatikko tulee htmlään tp2 ja tp3 väliin.
    activeTpk2 = [activeTpk2];
    activeInfo = activeTpk2; //otetaan aktiivisen itemin tiedot arraysta activeTpk2
    ryhmakey = activeTpk2[0].ryhmä.replace(/\s+/g, ''); // poista ryhmän nimestä välilyönti
    if(ryhmakey == "Ryhmä") {return};
    if (activeTpk2[0].soveltamisohje === "") {
        soveltamisohjeteksti = "Ei lisäohjeita"
    } else {
        soveltamisohjeteksti = activeTpk2[0].soveltamisohje
    };
    const hoverActiveInfo = activeInfo.map(
        activeInfo => `
        <div class="card bg-light mb-3 mt-3" style="max-width: 97%; position:relative; left:3%;">
        <div class="card-header">Toimenpideryhmä: ${activeTpk2[0].ryhmä} (${tpryhmat[0][ryhmakey]})</div>
        <div class="card-body">
          <h4 class="card-title">${activeTpk2[0].nimi}</h4>
          <p class="card-text">Soveltamisohje:</p>
          <p class="card-text">${soveltamisohjeteksti}</p>
        </div>
      </div>
        `
            );
            console.log(hoverActiveInfo);
    /* hoverClass3 = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px; font-size: 97%"';

    const hoverPart3 = activeTpk3.map(
    activeTpk3 => `
    <div id="${activeTpk3.id}"; class=${hoverClass3}>
    <h4 id="${activeTpk3.id}"; class="listaus" style="font-size: 93%; font-weight: 500"><span class="text-success">${activeTpk3.id} </span>${activeTpk3.nimi}</h4>
    </div>
        `
    ); */
    
/*     let listHovered = hoverPart1.concat(hoverPart2, hoverActiveInfo, hoverPart3).join(''); 
    console.log(listHovered);

matchList.innerHTML = listHovered; */
outputHtml2(activeTpk1, activeTpk2, activeTpk3, hoverActiveInfo[0]);


};



    // -> Lisää tämä outputDefaultHtml osioon. Tulee ajaa tpk json jokaiselle ryhmälle erikseen ja väliil aina Ryhmän otsiko
    // // Search tpkoodit jotka ovar R 0 ryhmässä 
    // etsiTPKryh = async haeryhma => {
    //     const res = await fetch('../data/tpk.json');
    //     const tpkoodit = await res.json(); 
    
    // // Get matches to the current text input
    // let = haeryhma = "R 0";
    // let ryhmatches = tpkoodit.filter(haeryhma => {
    //     const regex = new RegExp(haeryhma);
    //     return haeryhma.ryhmä.match(regex);
    // },
    // console.log(ryhmatches)
    // )};



//

// Show results in HTML
outputClass = '"listaus list-group-item p-1 py-0 mb-1 d-flex" style="height: 100%; padding: 0px; font-size: 97%"';
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(
            match => `
            <div id="${match.id}"; class=${outputClass}>
            <h4 id="${match.id}"; class="listaus" class="list-group-item d-flex justify-content-between align-items-center" style="font-size: 117%; font-weight: 590" ><span class="text-success" >${match.id} </span>${match.nimi}</h4>
            </div>
        `
            )
        .join('');
tpKooditAct = matches;

        matchList.innerHTML = html;
        //console.log(html)
    } 
};

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

window.onload = initTPK("");
//window.onload = etsiTPK("");
search.addEventListener('input', () => etsiTPK(search.value));
matchList.addEventListener("pointerover", () => hoverAction(event.target));
//outerWindow.addEventListener("click", () => console.log("klikki"));
//outerWindow.addEventListener("click", () => etsiTPK(search.value));