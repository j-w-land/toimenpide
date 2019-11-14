

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


//search 07/11

// Search tpk.json and filter it
const etsiTPK = searchText => {
    tpKooditActHtmlFuncXX("searched");
    // Get matches to the current text input
    let searchString = searchText;
    searchString = searchString.split(' ')//new RegExp(`${searchText}`, 'gi');
    if (searchString[searchString.length-1] == "") {return};
    console.log("serch string ok");
    let Cii = 0;
    let Ciii = searchString.length-1;
    let searchRound = 0
    let matches = [];
    let matchesX = [];
    let tpKooditActDataS = format(tpKooditActData); //otetaan data filtterointia varten
    console.log(Ciii);
    while(Ciii > -1) {
        console.log(Ciii);
        
       /*  for(Ciii; Ciii < searchString.length; Ciii++) {
            hakutekstiX = format(searchString[Ciii]);
            matchesX = tpKooditActData.filter(hakutekstiX => {
                const regex = new RegExp(`${searchText}`, 'gi');
                return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex)
            })
        }; */

    // yksittäiset
    console.log(Ciii+1);
    let combsMatch = k_combinations(searchString, Ciii+1);
    console.log(combsMatch.length);
    console.log(combsMatch);
    

    function k_combinations(set, k) {
        var i, j, combs, head, tailcombs;
        
        // There is no way to take e.g. sets of 5 elements from
        // a set of 4.
        if (k > set.length || k <= 0) {
            return [];
        }
        
        // K-sized set has only one K-sized subset.
        if (k == set.length) {
            return [set];
        }
        
        // There is N 1-sized subsets in a N-sized set.
        if (k == 1) {
            combs = [];
            for (i = 0; i < set.length; i++) {
                combs.push([set[i]]);
            }
            return combs;
        }
        
        // Assert {1 < k < set.length}
        
        // Algorithm description:
        // To get k-combinations of a set, we want to join each element
        // with all (k-1)-combinations of the other elements. The set of
        // these k-sized sets would be the desired result. However, as we
        // represent sets with lists, we need to take duplicates into
        // account. To avoid producing duplicates and also unnecessary
        // computing, we use the following approach: each element i
        // divides the list into three: the preceding elements, the
        // current element i, and the subsequent elements. For the first
        // element, the list of preceding elements is empty. For element i,
        // we compute the (k-1)-computations of the subsequent elements,
        // join each with the element i, and store the joined to the set of
        // computed k-combinations. We do not need to take the preceding
        // elements into account, because they have already been the i:th
        // element so they are already computed and stored. When the length
        // of the subsequent list drops below (k-1), we cannot find any
        // (k-1)-combs, hence the upper limit for the iteration:
        combs = [];
        for (i = 0; i < set.length - k + 1; i++) {
            // head is a list that includes only our current element.
            head = set.slice(i, i + 1);
            // We take smaller combinations from the subsequent elements
            tailcombs = k_combinations(set.slice(i + 1), k - 1);
            // For each (k-1)-combination we join it with the current
            // and store it to the set of k-combinations.
            for (j = 0; j < tailcombs.length; j++) {
                combs.push(head.concat(tailcombs[j]));
            }
        }
        return combs;
    };


    var regstate = [];
    regstate[0] =[];
    regstate[0][0] = "";
    let regexy = [];
    regexy[0] =[];
    regexy[0][0] = "";

    console.log(regstate);
    //let inm = 0; 
    let inm = 0;
    let ipos = 0;
    /* for(inm = 0; inm < combsMatch.length; inm++) {
        console.log("318");
        console.log(regstate);
        console.log(combsMatch);
        ipos = 0; 
        regexy[inm] = [];
        regstate[inm] = [];
        while (ipos < combsMatch[inm].length) {
            regexy[inm][ipos] = "'"+format((combsMatch[inm][ipos]))+"'";    
            console.log(regexy);
        //regexy[inm][ipos] = format(new RegExp(combsMatch[inm][ipos], 'gi'));
        console.log(regexy);
            //regstate[inm][ipos] 


        regstate[inm][ipos] = `hakutekstiX.nimi.match(${regexy[inm][ipos]}) || hakutekstiX.soveltamisohje.match(${regexy[inm][ipos]}) || hakutekstiX.idLong.match(${regexy[inm][ipos]})`; 
        console.log(regstate);
        ipos = ipos +1;
        }

        /* regstate[inm][ipos] = `hakutekstiX.nimi.match(${regexy[inm][ipos]}) || hakutekstiX.soveltamisohje.match(${regexy[inm][ipos]}) || hakutekstiX.idLong.match(${regexy[inm][ipos]})`; */



        /* matchesX = tpKooditActDataS.filter(hakutekstiX => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex) */
        
   // };  */
    console.log("338")
    //console.log(regstate);
    let returnState = ""
    // suoritetaan haku
    let iret = 0;

/* // dell
    regstate[inm][ipos] = `hakutekstiX.nimi.match(${regexy[inm][ipos]}) || hakutekstiX.soveltamisohje.match(${regexy[inm][ipos]}) || hakutekstiX.idLong.match(${regexy[inm][ipos]})`;  //dell */

   /*  var codes = [{"code_id": "1","code_name": "code 1"}, {"code_id": "2","code_name": "code889"}];



var filteredCodes = getFilteredCodes(codes, "code_id", 2); */

//console.log(filteredCodes);

/* if (iiret === combsMatch[0].length-1 && iret ===  combsMatch.length-1) 
{returnState = returnState  + format(regstate[iret][iiret]) } else {
returnState = returnState + format(regstate[iret][iiret])  +" && ";} */

/* function getFilteredCodes(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  } */

/* const filterCodes1 = (array, key)  => {
    e="";
    for(i = 0; i< key.length; i++ ) {
        for(ii = 0; ii < key[0].length; ii++) {
            if (ii === key[0].length-1 && i === key.length-1) {
           e= e + `hakutekstiX.nimi.match(${key[i][ii]}) || hakutekstiX.soveltamisohje.match(${key[i][ii]}) || hakutekstiX.idLong.match(${key[i][ii]})`} else {
            e = e + `hakutekstiX.nimi.match(${key[i][ii]}) || hakutekstiX.soveltamisohje.match(${key[i][ii]}) || hakutekstiX.idLong.match(${key[i][ii]}) + " && "`
           }
        }}
    return array.filter(hakutekstiX => {
        return e
    }
        //console.log(e);
    
    

    )

} */

/* function getFilteredCodes(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  } */



/* const filterCodes1 = (array, key)  => {

    for(i = 0; i< key.length; i++ ) {
        for(ii = 0; ii < key[0].length; ii++) {
            if (ii === key[0].length-1 && i === key.length-1) {
           e= e + `hakutekstiX.nimi.match(${key[i][ii]}) || hakutekstiX.soveltamisohje.match(${key[i][ii]}) || hakutekstiX.idLong.match(${key[i][ii]})`} else {
            e = e + `hakutekstiX.nimi.match(${key[i][ii]}) || hakutekstiX.soveltamisohje.match(${key[i][ii]}) || hakutekstiX.idLong.match(${key[i][ii]}) + " && "`
           }
        }}

} */

/* const filterCodes2 = (array, key, name)  => {
    console.log(array);
    console.log(key);
for(i = 0; i< key.length; i++ ) {
    let e = "";
    let reSt = "";
    for(ii = 0; ii < key[0].length; ii++) {
        if (ii === key[0].length-1 && i === key.length-1) {
       e= e + `${name}[${i}].nimi == '${key[i][ii]}' || ${name}[${i}].soveltamisohje == '${key[i][ii]}' || array[i] == hakutekstiX.idLong.match(${key[i][ii]})`} else {
        e = e + `array[i] == hakutekstiX.nimi.match(${key[i][ii]}) || array[i] == hakutekstiX.soveltamisohje.match(${key[i][ii]}) || array[i] == hakutekstiX.idLong.match(${key[i][ii]}) + " && "`
       }
       console.log(`${name}[${i}].nimi`)
    }
    console.log(e);
    let rr = eval(`${name}[${i}].nimi`);
    console.log(rr);
    for (i=0; i<array.length; i++) {
    let resux = array.filter( teksti => {return teksti.nimi.match(tpKooditActDataS[0].nimi)
    })
    console.log(resux);
}
}
}

    console.log(tpKooditActDataS);
    matchesCodes = filterCodes2(tpKooditActData, combsMatch, "tpKooditActData");
    console.log(matchesCodes); */


    /* while(iret < combsMatch.length) {
        let iiret = 0;
        console.log(combsMatch);

        for (iiret = 0; iiret < combsMatch[0].length; iiret++ ) {
            matchesXXd[iret][iiret] = tpKooditActDataS.filter(hakutekstiX => {
                //let regexd = new RegExp(`${searchText}`, 'gi')

            if (iiret === combsMatch[0].length-1 && iret ===  combsMatch.length-1) 
            {returnState = returnState  + format(regstate[iret][iiret]) } else {
            returnState = returnState + format(regstate[iret][iiret])  +" && ";}

                return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex)
            })




            console.log(regstate[iret][iiret]);
            if (iiret === combsMatch[0].length-1 && iret ===  combsMatch.length-1) 
            {returnState = returnState  + format(regstate[iret][iiret]) } else {
            returnState = returnState + format(regstate[iret][iiret])  +" && ";}

    //matchesXXi = tpKooditActDataS.filter(filterCodes, returnState);
    function filterCodes(arr, query) {
        return arr.filter(hakutekstiXi => {
            return hakutekstiXi.nimi.match(query);
            //console.log(a)
        })
      }
      console.log(returnState);
      matchesXXi = filterCodes(tpKooditActDataS, returnState);
      console.log(filterCodes(tpKooditActDataS, returnState));



    /* matchesXX = tpKooditActDataS.filter(hakutekstiX => {
        //const regex = new RegExp(`${searchText}`, 'gi');

        return returnState;
        //console.log(`${returnState}`);
        //return returnState;
    }); 
    console.log(returnState);
    //console.log(matchesXX);
    };
    iret = iret +1; 
};
console.log(matchesXXi); */





    // toimiva haku - poista kun yllä toimii
    matchesX = tpKooditActDataS.filter(hakutekstiX => {
        const regex = new RegExp(`${searchText}`, 'gi');
        const regex2 = "";
        //const regex = "";
        //console.log(regex);
        return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex) && hakutekstiX.nimi.match(regex2) || hakutekstiX.soveltamisohje.match(regex2) || hakutekstiX.idLong.match(regex2) 
    });
    // poistetaan
    console.log(matchesX);
    
    //lisää matchesX arrayhin monennellako hakukerralla tulos löydettiin
    for(i=0; i<matchesX.length; i++) {
        matchesX[i].searchind = searchRound
    };

    // etsi tpKooditActDataS-arraysta matchesX:ään tallennetut osumat ja filteroi pois dataS-arraysta
    let CiVi = matchesX.length-1;
    let CiV = tpKooditActDataS.length-1;
    while(CiV >0 ) {
        if (matchesX.findIndex(xxl => xxl.posid === tpKooditActDataS[CiV].posid) != -1 ) {
            tpKooditActDataS.splice(CiV, 1);
            CiV = CiV -1;
        } else {
        CiV = CiV - 1;
        CiVi = CiVi - 1;
        };
    };

    console.log(tpKooditActDataS);
    searchRound = searchRound +1;
    matches = matches.concat(matchesX);
    matchesX = [];
    matches = matches.filter(hakuteksti => {
        return !hakuteksti.ryhmä.match("Ryhmä")
    });

    for(Cii = 0; Cii < searchString.length; Cii++ ) {
        Cii = Cii+ Cii
    };
    Ciii = Ciii-1
    };



   /*      // tämä pitää sitten poistaa alkaa:
        matches = tpKooditActData.filter(hakuteksti => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return hakuteksti.nimi.match(regex) || hakuteksti.soveltamisohje.match(regex) || hakuteksti.idLong.match(regex)
        }) // lopuu
 */

    
/* 
    // tämä kanssa poista kun yllä toimii
    matches = tpKooditActData.filter(hakuteksti => {
        const regex = new RegExp(`${searchText}`, 'gi');
        return hakuteksti.nimi.match(regex) || hakuteksti.soveltamisohje.match(regex) || hakuteksti.idLong.match(regex)
    });     
    //poista

    matches = matches.filter(hakuteksti => {
        return !hakuteksti.ryhmä.match("Ryhmä")
    });
    console.log(matches); */

    // If search box does not include any text run Default listing, otherwise run results (matches or nomatches)
    if (searchText.length === 0) {
        matches = []; 
        tpKooditAct = format(tpKooditActData);
        tpKooditActInit(tpKooditActData);
    } else {
        if(matches.length === 0) {
            nomatchesHtml()
        } else {
            console.log(matches);
            outputHtml(matches);
        };
    };
}

//search 07/11 loppuu