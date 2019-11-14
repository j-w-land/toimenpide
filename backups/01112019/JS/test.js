

const search = document.getElementById('search'); //rr
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

initTPK();