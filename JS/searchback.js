let Ciii = 0;
let CiiiR = 0;
let searchRound = 1
let matches = [];
let matchesX = [];
let tpKooditActDataS = [];
tpKooditActDataS[1] = [];
tpKooditActDataS[1][0] = [];
tpKooditActDataS[2] = [];
tpKooditActDataS[2][0] = [];
searchStringStore= "";
let tpKooditActDataSF = [];

//otetaan data filtterointia varten. laitetaan koko datasetti ineksiin 0. Loopissa kun filteroidaan laitetaan seuraaviin indekseihin filterointien tulokset. Indeksin sisällä tapahtuu haarojen filterointi

const etsiTPK  = (method, searchText) => {
    console.log(method)
    if (method == "paste") {
        Ciii = 0;
        CiiiR = 0;
        searchRound = 1
        matches = [];
        matchesX = [];
        tpKooditActDataS = [];
        tpKooditActDataS[1] = [];
        tpKooditActDataS[1][0] = [];
        tpKooditActDataS[2] = [];
        tpKooditActDataS[2][0] = [];
        searchStringStore= "";
        console.log("paste event")
        console.log(searchText)
        return;
    }

    tpKooditActDataS[0] = format(tpKooditActData);
    console.log(tpKooditActDataS[0])
    // poista datasta R0-ryhmät kun niitä ei tarvita hakua varten.
    tpKooditActDataS[0] = tpKooditActDataS[0].filter(hakuteksti => {
        return !hakuteksti.ryhmä.match("Ryhmä")
    });
    tpKooditActHtmlFuncXX("searched");
    let searchString = searchText
    // tähän voisi laittaa fielä if-lauseen pastea varten eli jos searchText sisätlää usean eri sanan välilyönneillä niin sitten 1) tyhjennä muisti 2) forEachilla aja jokainen sana läpi sen jälkeen. 

    if (searchString[searchString.length-1] == " ") {searchStringSpace = 1} else {searchStringSpace = 0}
    searchString = searchText.replace(/\s+/g,' ').trim();
    searchString = searchString.split(' ')//new RegExp(`${searchText}`, 'gi');
    
    if (searchString.length - searchStringStore.length >1) {
        // aja loppufunktio yksi alkio kerrallaan
        console.log("pastettiin useampi sana")
        let searchStringP = format(searchString)
        searchStringPass = []
        for (i=0; i<searchString.length; i++) {
            searchStringPass = searchStringPass.push(searchStringP[i]) 
            etsiTPK2(searchStringPass)
        }
        
    } else {
        etsiTPK2(searchString)
    }



function etsiTPK2 (searchString)  {


   // jos hausta vähenee sana niin dellataan sana:
    if (searchString.length < searchStringStore.length && searchStringSpace === 1 && searchString.length != 0) { 
      for(i = 0; i<tpKooditActDataS[1][0].length; i++ ) {
      //console.log(tpKooditActDataS[1][0][i].searchind[tpKooditActDataS[1][0][i].searchind.length-1] === //searchRound);
      if (tpKooditActDataS[1][0][i].searchind[tpKooditActDataS[1][0][i].searchind.length-1] === searchRound) {
        tpKooditActDataS[1][0][i].searchind.pop();
      }
    }
    for(i = 0; i<tpKooditActDataS[2][0].length; i++ ) {
      if (tpKooditActDataS[2][0][i].searchind[tpKooditActDataS[2][0][i].searchind.length-1] === searchRound) {
        tpKooditActDataS[2][0][i].searchind.pop();
      }
    }
    searchRound = searchString.length;
    searchStringStore = searchString;
    } else {

    // hakutermien määrä pysyy samana, ainoastaan viimeisin termi muuttuu kirjaimella:
    if (searchString.length === searchStringStore.length && searchString.length != 0) {
        for(i = 0; i<tpKooditActDataS[1][0].length; i++ ) {
        if (tpKooditActDataS[1][0][i].searchind[tpKooditActDataS[1][0][i].searchind.length-1] === searchRound) {
          tpKooditActDataS[1][0][i].searchind.pop();
        }
      }
      for(i = 0; i<tpKooditActDataS[2][0].length; i++ ) {
        if (tpKooditActDataS[2][0][i].searchind[tpKooditActDataS[2][0][i].searchind.length-1] === searchRound) {
          tpKooditActDataS[2][0][i].searchind.pop();
        }
      }
      searchStringStore = format(searchString);
      searchRound = searchString.length;
    }
    

        else if (searchString[searchString.length-1] == "" && searchText.length !=0) {
            console.log("ei pitäisi tulla enää")
            return} //jos välilyonti niin keskeytä // turha nyt kun trimmaa aina vikan tyhjän pois..
      
    else {
        searchStringStore = format(searchString);
        searchRound = searchString.length;
    } 
    let combsMatch = [];    

    if (searchString.length === 1) {
        combsMatch = k_combinations(searchString, 1); // tarviiko mennä comb funktion kautta vai antaako vaan suoraan arvon..
    } else {
        combsMatch = k_combinations(searchString, 2);
    }
    
    //console.log(k_combinations([1, 2], 2))
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

        let CiiL = 0;
        let CiiiN1 = 1;
    if (combsMatch[0].length === 1) {
        matchesX = format(tpKooditActDataS[0].filter(hakutekstiX => { // ekalla roundilla ottaa päädatan. jatkossa haaran omasta paikasta. Sijoittaa haaran omaan indeksiin matchesX-arrayssa
            const regex = new RegExp(`${combsMatch[CiiL][0]}`, 'gi');
            return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex)
        }));
        tpKooditActDataS[CiiiN1][0] = format(matchesX);

       for(i=0; i<tpKooditActDataS[CiiiN1][0].length; i++) {
        tpKooditActDataS[CiiiN1][0][i].searchind = [format(searchRound)]
        };
           
} else {

    if (searchString.length === 2) {

        matchesX = tpKooditActDataS[0].filter(hakutekstiX => { // ekalla roundilla ottaa päädatan. jatkossa haaran omasta paikasta. Sijoittaa haaran omaan indeksiin matchesX-arrayssa
            const regex = new RegExp(`${combsMatch[0][1]}`, 'gi');
            //console.log(tpKooditActDataS[CiiiN1]);
            //const regex = "";
            //console.log(regex);
            return hakutekstiX.nimi.match(regex) || hakutekstiX.soveltamisohje.match(regex) || hakutekstiX.idLong.match(regex)
        });
        tpKooditActDataS[2][0] = format(matchesX);
    
         //lisää matchesX arrayhin monennellako hakukerralla tulos löydettiin
         //console.log(tpKooditActDataS);
         for(i=0; i<tpKooditActDataS[2][0].length; i++) {
            tpKooditActDataS[2][0][i].searchind = [format(searchRound)] // miksi piti laittaa +1...
            };
            //console.log(tpKooditActDataS);
    
        // etsi tpKooditActDataS-arraysta matchesX:ään tallennetut osumat ja filteroi pois dataS-arraysta
       /*  let CiVi = matchesX.length-1;
        let CiV = tpKooditActDataS.length-1;
        while(CiV >0 ) {
            if (matchesX.findIndex(xxl => xxl.posid === tpKooditActDataS[CiV].posid) != -1 ) {
                tpKooditActDataS.splice(CiV, 1);
                CiV = CiV -1;
            } else {
            CiV = CiV - 1;
            CiVi = CiVi - 1;
            };
        }; */
    
    };

    //let nind = searchString.length*2 -3; // kahden ekan haaran pituudet
    let CiiL2 = 0; 
let CiiiN = 1;
while (CiiiN < 3 && CiiiN < combsMatch.length + 1) { // ota haarat 1 ja 2.
    let nind = 2;
    let nindpos = searchString.length - 2; 
            matchesX = format(tpKooditActDataS[CiiiN][0].filter(hakutekstiX => { // ekalla roundilla ottaa päädatan. jatkossa haaran omasta paikasta. Sijoittaa haaran omaan indeksiin matchesX-arrayssa
                const regex2 = new RegExp(`${combsMatch[nindpos][1]}`, 'gi');
                return hakutekstiX.nimi.match(regex2) || hakutekstiX.soveltamisohje.match(regex2) || hakutekstiX.idLong.match(regex2)
            }));
                //lisää matchesX arrayhin monennellako hakukerralla tulos löydettiin
                //console.log(searchRound)
                for(i=0; i<matchesX.length; i++) {
                    let ind = tpKooditActDataS[CiiiN][0].findIndex(x => x.posid === matchesX[i].posid)

                    if (tpKooditActDataS[CiiiN][0][ind].searchind[tpKooditActDataS[CiiiN][0][ind].searchind.length-1] != searchRound) {
                    tpKooditActDataS[CiiiN][0][ind].searchind.push(format(searchRound))
                    }
                }
    
        //tpKooditActDataS[CiiiN] = format(matchesX);
        
        CiiL2 = CiiL2 + 1
        nind = nind + 1;
    
    CiiiN = CiiiN +1;
    nindpos = 2*nindpos;
}
        matchesX = [];
       
    };
    Ciii = Ciii+1
    }
    // If search box does not include any text run Default listing, otherwise run results (matches or nomatches)
    if (searchText.length === 0) {
        //matches = []; 
        tpKooditActDataS = [];
        tpKooditActDataS[1] = [];
        tpKooditActDataS[1][0] = [];
        tpKooditActDataS[2] = [];
        tpKooditActDataS[2][0] = [];
        tpKooditAct = format(tpKooditActData);
        tpKooditActInit(tpKooditActData);
    } else {
        if(tpKooditActDataS[1][0].length === 0) {
            nomatchesHtml()
        } else {
            //outputHtml(tpKooditActDataS);
            //console.log(tpKooditActDataS[1][0])
            // formatoi lopullinen output lista:
/*             console.log(tpKooditActDataS)
            console.log(tpKooditActDataS[1][0][0]);
            console.log("store:",searchStringStore)
            console.log("searchRound:", searchRound) */
            console.log(tpKooditActDataS)
            // poista 2-haarasta ne itemit jotka löytyvät jo 1-haarasta:
            for (i=0; i < tpKooditActDataS[1][0].length; i++ ) {
                //console.log(tpKooditActDataS[1][0][i].posid)
                let item = tpKooditActDataS[2][0].findIndex(x => x.posid === tpKooditActDataS[1][0][i].posid)
                //console.log(item)
                if (item !== -1) {
                    console.log("splice")
                    tpKooditActDataS[2][0].splice(item, 1)
                }
            }     
            //console.log(tpKooditActDataS)       
            // formatoi lopullinen output lista:
            let pri = 1
            tpKooditActDataSF = [];

            let lukujoukkoD = [];
            lukujoukkoD[0] = [];
            lukujoukkoD[1] = [];

            for(i = 1; i<searchRound+1; i++) {
                lukujoukkoD[0].push(i)
                lukujoukkoD[1].push(i)
            };
            lukujoukkoD[1].shift();
            while(pri < 3  && pri < searchRound+1) {

                    for (iii = searchRound; iii>0; iii--) {
                        let lukujoukko =  k_combinations(lukujoukkoD[pri-1], iii + 1 - pri)


                    tpKooditActDataSF = tpKooditActDataSF.concat(tpKooditActDataS[pri][0].filter(indeksisumma  => String(indeksisumma.searchind) === String(lukujoukko[0])))

                    // ota muistiin kuinka monta hakutulosta on parhaimmassa matchissa
                    if(pri <2 && iii === searchRound) {
                        topResultsCount = tpKooditActDataSF.length
                        }
                    }

                pri = pri + 1;
            }
            console.log(tpKooditActDataSF);
            if(searchRound >1) {
                if (tpKooditActDataSF.length > 0 && topResultsCount < 6) {
                    console.log("alle 6 top resulttia")
                    /* let ind = tpKooditActDataSF.filter(indeksisumma  => String(indeksisumma.searchind) === String(tpKooditActDataSF[0].searchind)
                    ) */

                    for(i = 0; i < tpKooditActDataSF.length; i++ ){
                        if (String(tpKooditActDataSF[i].searchind) === String(tpKooditActDataSF[0].searchind)) {
                            tpKooditActDataSF[i].topResult = 1




                        } else {
                            tpKooditActDataSF[i].topResult = 0;
                            //ei tartte tehdä muotoilulle mitään


                        }



                    }
                    tpKooditActDataSF.push(
                        {
                            "idLong": "spaceholder", "id": "", "ryhmä": "", "ryhmä2": "", "ryhmäTop": "", "nimi": "", "nimi2": "", "soveltamisohje": ""}
                    )
                    initStyleTPK(tpKooditActDataSF)

                } else {
                    console.log("yli 6 top resulttia")
                    //outputHtml(tpKooditActDataSF);
                    tpKooditActDataSF.push(
                        {
                            "idLong": "spaceholder", "id": "", "ryhmä": "", "ryhmä2": "", "ryhmäTop": "", "nimi": "", "nimi2": "", "soveltamisohje": ""}
                    )
                    initStyleTPK(tpKooditActDataSF);
            }

            } else {
                outputHtml(tpKooditActDataSF);
            }
            console.log(tpKooditActDataSF);
            
            //outputHtml(tpKooditActDataS[1][0]);
            //outputHtml(tpKooditActDataSF);
            
        };
    };
//}
console.log(tpKooditActDataSF)

}
}