(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// t├ñss├ñ tiedostossa tarkistetaan hakusanan oikeinkirjoitus kieliasu ja etsit├ñ├ñn tuloksia oikealla kirjoitusasulla
var Fuse = require('fuse.js');

const fuseData = (action, data) =>{
    if (action == 'store') {
        var fuseList = data;
    } else if(action == 'call') {
        return fuseList;
    } else {
        console.log('fuseData() toimintoa ei tunnistettu')
    }

}

console.log("alko1")
window.fuseSearch = (thresHoldValue, data, searchText) => {
    console.log("alko")
    console.log(data)
    console.log(searchText)
    var options = {
        shouldSort: false,
        tokenize: true,
        includeScore: false,
        includeMatches: false,
        threshold: thresHoldValue,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 4,
        keys: [
        "id",
        "nimi",
        "soveltamisohje"
        ]
    };
    /* var list = tpKooditActDataMuisti('call') */
   /*  var list = lista2; */
    var fuse = new Fuse(data, options); // "list" is the item array
    var result = fuse.search(searchText);
    console.log(result);
    return result;
}

const format = (obj) => {
    res = JSON.parse(JSON.stringify(obj));
    return res;
};

var lista2 = [
    {
      "idLong": "ryhm├ñR0 - R0",
      "id": "R0",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "ryhm├ñR0",
      "ryhm├ñTop": "XR",
      "nimi": "R 0 - Terveyskeskusten kaikkiin l├ñ├ñk├ñreihin sovellettavat em. yleisohjeet huomioon ottaen",
      "nimi2": "R 0",
      "soveltamisohje": "na"
    },
    {
      "idLong": "R0 - 001",
      "id": "001",
      "ryhm├ñ": "R 0",
      "ryhm├ñ2": "R0",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin potilaalle puhelimitse tai s├ñhk├Âisesti antama hoito-ohje, jonka l├ñ├ñk├ñri kirjaa sairauskertomusj├ñrjestelm├ñ├ñn",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ korvataan yleens├ñ vastaanottok├ñynti. Toimenpidepalkkiota ei makseta, jos potilas tulee v├ñlitt├Âm├ñsti soiton j├ñlkeen hoitoon. Toimenpidett├ñ ei korvata, mik├ñli ohje annetaan toisen henkil├Ân v├ñlityksell├ñ, paitsi niiss├ñ tilanteissa, joissa potilas ei esim. ik├ñns├ñ, ymm├ñrryksens├ñ, kieliongelmiensa tai vammaisuutensa perusteella pysty itse hoitamaan asiaansa. T├ñll├ñ toimenpiteell├ñ ei tarkoiteta terveydenhuollon henkil├Âst├Ân keskin├ñist├ñ konsultointia."
    },
    {
      "idLong": "R0 - 002",
      "id": "002",
      "ryhm├ñ": "R 0",
      "ryhm├ñ2": "R0",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin muulle terveydenhuollon ammattihenkil├Âlle suorittama konsultointi, johon liittyy potilaan hoitoa koskeva sairauskertomusj├ñrjestelm├ñ├ñn kirjattava hoito-ohje.",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ korvataan yleens├ñ vastaanottok├ñynti. Toimenpidepalkkiota ei makseta, jos potilas tulee konsultoinnin seurauksena v├ñlitt├Âm├ñsti l├ñ├ñk├ñrin hoitoon. Sairauskertomuksesta tulee l├Âyty├ñ saatu konsultaatiovastaus sek├ñ merkint├ñ konsultaation antavasta l├ñ├ñk├ñrist├ñ, jolle korvaus suoritetaan. Toimenpiteen k├ñytt├Â perustuu terveydenhuollon ammattihenkil├Âst├Ân teht├ñv├ñ- ja ty├Ânjakomuutoksiin. Ne voivat liitty├ñ lakimuutoksiin, organisaatiouudistuksiin tai palvelutarpeiden ja henkil├Âst├Ân osaamisen parempaan hy├Âdynt├ñmiseen palvelu- ja henkil├Âst├Âstrategioiden toteuttamiseksi."
    },
    {
      "idLong": "ryhm├ñRI - RI",
      "id": "RI",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "ryhm├ñRI",
      "ryhm├ñTop": "XR",
      "nimi": "R I - Terveyskeskusten kaikkiin l├ñ├ñk├ñreihin sovellettavat em. yleisohjeet huomioon ottaen",
      "nimi2": "R I",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 101",
      "id": "101",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin suorittama n├ñ├Ântutkimus silm├ñnpohjatutkimuksineen",
      "nimi2": "",
      "soveltamisohje": "Tutkimuksella tarkoitetaan l├ñ├ñk├ñrin suorittamaa n├ñ├Ântutkimusta silm├ñnpohjatutkimuksineen. Tutkimus on korvattava toimenpide vain silloin, kun se tehd├ñ├ñn potilaan valittaessa n├ñk├Âvikaan tai silm├ñsairauteen liittyvi├ñ oireita tai se muuten tehd├ñ├ñn samalla perusteellisuudella esim. diabeetikoille vuositarkastuksen yhteydess├ñ. T├ñt├ñ toimenpidett├ñ k├ñytet├ñ├ñn my├Âs annettaessa dokumentoitu lausunto silm├ñnpohjakuvista."
    },
    {
      "idLong": "RI - 103",
      "id": "103",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin suorittama perusteellinen neurologinen tutkimus",
      "nimi2": "",
      "soveltamisohje": "Tutkimuksella tarkoitetaan yleisl├ñ├ñk├ñritasoista perusteellista neurologista tutkimusta. Tutkimus on korvattava toimenpide vain silloin, kun se tehd├ñ├ñn potilaan valittaessa neurologisia oireita tai on syyt├ñ ep├ñill├ñ, ett├ñ potilaan oireiden takana voi olla neurologista selvittely├ñ vaativa syy taikka tutkimus tehd├ñ├ñn vastaavalla perusteellisuudella muusta syyst├ñ. Toimenpide ei ole korvattava esim. silloin kun tutkimus tehd├ñ├ñn orientoivana neurologisena tutkimuksena ajokorttitutkimuksen yhteydess├ñ."
    },
    {
      "idLong": "RI - 105",
      "id": "105",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Kardiorespiratorinen kokonaisarvio laboratoriotutkimuksineen",
      "nimi2": "",
      "soveltamisohje": "Tutkimuksella tarkoitetaan esim. vuosittain tapahtuvaa, tavanomaista vastaanottok├ñynti├ñ perusteellisempaa syd├ñn- tai keuhkosairauspotilaan tai verenpainepotilaan tutkimusta. Tutkimus on korvattava toimenpide vain silloin, kun sen yhteydess├ñ tulkitaan EKG-, thorax-rtg, hengitysfunktiotutkimuksia ja/tai laboratoriotutkimuksia. Lis├ñksi tutkimus on korvattava toimenpide silloin, kun joudutaan tekem├ñ├ñn akuutissa vaiheessa perusteellinen syd├ñn- ja keuhkosairauspotilaan kliininen tutkimus ja voidaan ottaa ja tulkita edell├ñ mainittuja lis├ñtutkimuksia."
    },
    {
      "idLong": "RI - 106",
      "id": "106",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Pinnalliset leikkaukset, haavojen revisio ja suturaatio",
      "nimi2": "",
      "soveltamisohje": "Arvio haavojen suturoimisessa toimenpide R I 106:n ja R II 206:n v├ñlill├ñ tehd├ñ├ñn tapauskohtaisesti ottaen huomioon ajank├ñytt├Â ja toimenpiteen vaativuus. Mik├ñli pinnalliset leikkaukset kohdistuvat selv├ñsti eri asioihin ja niiden hoitamiseen kuluu huomattavasti aikaa ja potilas esim. joudutaan valmistelemaan kahdesti toimenpiteeseen, voidaan peri├ñ kaksi t├ñm├ñn ryhm├ñn mukaista palkkiota.\n\nT├ñt├ñ toimenpidett├ñ k├ñytet├ñ├ñn my├Âs esim. s├ñ├ñrihaavapotilaan haavan revisiossa."
    },
    {
      "idLong": "RI - 107",
      "id": "107",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Incisiot, joissa puudutus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 108",
      "id": "108",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Rikan poisto silm├ñst├ñ puudutuksessa",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 109",
      "id": "109",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Korvak├ñyt├ñv├ñn huuhtelu ja/tai imu",
      "nimi2": "",
      "soveltamisohje": "T├ñt├ñ toimenpidett├ñ k├ñytet├ñ├ñn my├Âs vaikean externin otiitin imussa, huuhtelussa ja tamponaatiohoidossa."
    },
    {
      "idLong": "RI - 110",
      "id": "110",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "T├ñrykalvopisto",
      "nimi2": "",
      "soveltamisohje": "Parasenteesi on yksi toimenpide, vaikka se teht├ñisiin molempiin korviin."
    },
    {
      "idLong": "RI - 111",
      "id": "111",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Poskiontelopunktio/huuhtelu",
      "nimi2": "",
      "soveltamisohje": "Poskiontelopunktio on yksi toimenpide, vaikka se teht├ñisiin molemmin puolin. Toimenpide on maksullinen my├Âs silloin, kun on kyseess├ñ antrostomia-potilas, jolle tehd├ñ├ñn huuhtelu lavaatiok├ñrjell├ñ."
    },
    {
      "idLong": "RI - 113",
      "id": "113",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Kynsiin ja kynsivalleihin kohdistuvat leikkaukset, jotka tehd├ñ├ñn puudutuksessa",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 114",
      "id": "114",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Injektiohoidot muualle kuin lihaksiin tai ihon alle",
      "nimi2": "",
      "soveltamisohje": "Esimerkiksi erilaiset niveliin kohdistuvat l├ñ├ñkeinjektiot. Mik├ñli reumapotilaalle laitetaan l├ñ├ñkett├ñ useampiin pikkuniveliin samanaikaisesti, on kyseess├ñ vain yksi toimenpide. My├Âs injektiot, jotka kohdistetaan pehmytkudoksiin tarkoituksena esimerkiksi tulehdusprosessin rauhoittaminen j├ñnnekiinnitysalueella, ovat korvattavia toimenpiteit├ñ."
    },
    {
      "idLong": "RI - 116",
      "id": "116",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Kipsaus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 117",
      "id": "117",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Psykiatrisen tilan suunnitellut terapiak├ñynnit (esim. perheterapia)",
      "nimi2": "",
      "soveltamisohje": "Psykiatrisen tilan suunnitelluilla terapiak├ñynneill├ñ tarkoitetaan k├ñyntej├ñ, jotka on etuk├ñteen sovittu potilaan kanssa koskemaan tietty├ñ tavoitteellista hoitoa tai hoidon suunnittelua."
    },
    {
      "idLong": "RI - 118",
      "id": "118",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin suorittama konsultointi, johon liittyy potilaan tutkiminen",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan niit├ñ tilanteita, joissa esimerkiksi nuorempi tai kokemattomampi l├ñ├ñk├ñri kysyy kokeneemman kollegan mielipidett├ñ potilaan hoidosta ja t├ñm├ñ konsultaation antava l├ñ├ñk├ñri suorittaa itse potilaan tutkimuksen. Sairauskertomuksesta tulee l├Âyty├ñ saatu konsultaatiovastaus sek├ñ merkinn├ñt konsultaation antavasta l├ñ├ñk├ñrist├ñ, jolle korvaus suoritetaan."
    },
    {
      "idLong": "RI - 119",
      "id": "119",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñkekapselin asettaminen ihon alle",
      "nimi2": "",
      "soveltamisohje": "Kyseeseen tulevat l├ñhinn├ñ ehk├ñisykapselit ja antabuskapselit. T├ñt├ñ toimenpidett├ñ k├ñytet├ñ├ñn my├Âs poistettaessa esim. ehk├ñisykapseleita."
    },
    {
      "idLong": "RI - 120",
      "id": "120",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Suonensis├ñisen nestehoidon aloittaminen",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan p├ñ├ñt├Âst├ñ suonensis├ñisen nestehoidon aloittamisesta siihen liittyvine mahdollisine l├ñ├ñkehoitoineen."
    },
    {
      "idLong": "RI - 121",
      "id": "121",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Koagulaatiohoidot (nen├ñn limakalvot, kohdunsuu, pinnalliset iho┬¡muutokset)",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 123",
      "id": "123",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Gynekologinen tutkimus ja siihen liittyv├ñ irtosolun├ñytteen otto",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteeseen kuuluvalla irtosolun├ñytteen otolla tarkoitetaan l├ñhinn├ñ PAPA-tutkimuksia. Joukkotutkimuksena otettuja irtosolun├ñytteit├ñ ja ├ñitiysneuvoloissa rutiininomaisesti otettuja irtosolun├ñytteit├ñ ei kuitenkaan korvata toimenpitein├ñ. Korvattava toimenpide solun├ñytteenotto on my├Âs silloin, kun l├ñ├ñk├ñri tekee sen GC-n├ñytteen saamiseksi tapauksissa, joissa h├ñn itse suorittaa my├Âs n├ñytteen mikroskopoinnin."
    },
    {
      "idLong": "RI - 124",
      "id": "124",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Akupunktiohoidot",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 126",
      "id": "126",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Silm├ñnpaineen mittaus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 127",
      "id": "127",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "├ä├ñnihuulten tutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 128",
      "id": "128",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Luxoituneen nivelen reponointi",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 129",
      "id": "129",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Kierukan asettaminen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 130",
      "id": "130",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Tamponaatiohoidot (nen├ñ├ñn tai korvaan)",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 131",
      "id": "131",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Polyypin poisto",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 132",
      "id": "132",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Vierasesineen poisto kehon luonnollisista aukoista ja onteloista",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 133",
      "id": "133",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Otomikroskopia korvamikroskooppia k├ñytt├ñen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 134",
      "id": "134",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Ohutneulabiopsia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 136",
      "id": "136",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Rakkopunktio",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 137",
      "id": "137",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Nivelpunktio",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 139",
      "id": "139",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Karsastuksen perusteellinen tutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 141",
      "id": "141",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Per├ñpukamiin kohdistuva ei-leikkauksellinen toimenpide (ligaatio, kryokoagulaatio, trombosoivat injektiohoidot)",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RI - 143",
      "id": "143",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Fyysisen, psyykkisen ja sosiaalisen toimintakyvyn selvittely, arviointi ja hoidon suunnittelu sek├ñ hoitosuunnitelman laadinta",
      "nimi2": "",
      "soveltamisohje": "Toimenpide edellytt├ñ├ñ yleens├ñ potilaan omakohtaista tutkimista. Toimenpide tulee kysymykseen esimerkiksi monisairaan potilaan l├ñ├ñke- ja muun hoidon kokonaisuutta arvioitaessa ja/tai suunniteltaessa, vanhuspotilaan hoitopaikkaa/jatkohoitopaikkaa selvitelt├ñess├ñ ja/tai suunniteltaessa ja potilaslaissa tarkoitettua hoitosuunnitelmaa laadittaessa. Toimenpiteest├ñ syntyy tarvittavat merkinn├ñt sairauskertomukseen ja/tai syntyy erillinen todistus/lausunto."
    },
    {
      "idLong": "RI - 145",
      "id": "145",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "El├ñv├ñn henkil├Ân kliininen (oikeusl├ñ├ñkeopillinen) tutkimus",
      "nimi2": "",
      "soveltamisohje": "Tutkimus tulee kyseeseen esimerkiksi ulkoisten pahoinpitelyvammojen tutkimuksena."
    },
    {
      "idLong": "RI - 146",
      "id": "146",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Ensik├ñynti ├ñitiysneuvolassa",
      "nimi2": "",
      "soveltamisohje": "K├ñyntiin liittyy aina asiakkaan terveydentilan arvio ja raskauden keston m├ñ├ñritys. Lis├ñksi yleens├ñ k├ñyntiin liittyy yleinen raskauden riskien kartoitus, seulontavalistus, tupakka-alkoholi-valistus, ohjeet ravinnosta, liikunnasta jne."
    },
    {
      "idLong": "RI - 147",
      "id": "147",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Lapsille suoritettava viimeinen neuvolatarkastus ennen kouluunmenoa",
      "nimi2": "",
      "soveltamisohje": "Tarkastus tehd├ñ├ñn 4 vuoden i├ñss├ñ ja siihen kuuluu psyykkisen ja fyysisen kehitystason arviointi sek├ñ sosiaalisten taitojen arviointi ja mahdollisesti tarvittavien tukitoimenpiteiden suunnittelu. Lapsen ja vanhempien suhdetta ja lasten itsen├ñistymist├ñ tuetaan ja opastetaan ja ohjataan hoitoon kasvatusongelmissa."
    },
    {
      "idLong": "RI - 148",
      "id": "148",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Koulu- ja opiskelijaterveydenhuoltoon kuuluva tarkastus, jonka yhteydess├ñ tehd├ñ├ñn lausunto",
      "nimi2": "",
      "soveltamisohje": "Tarkastus tehd├ñ├ñn koulun loppuvaiheessa ja sen yhteydess├ñ voidaan tehd├ñ perusteltuja kannanottoja tai lausuntoja oppilaan soveltuvuudesta suunnittelemiinsa ammatteihin tai tehd├ñ├ñn ns. nuorison terveystodistus."
    },
    {
      "idLong": "RI - 149",
      "id": "149",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Hormonikorvaushoidon aloittaminen joko naiselle tai miehelle",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan k├ñynti├ñ, jonka yhteydess├ñ tehd├ñ├ñn kliininen tutkimus ja selvitet├ñ├ñn mahdollisen hoidon edut ja haitat sek├ñ suunnitellaan hoidon toteutus ja sovitaan jatkoseurannasta."
    },
    {
      "idLong": "RI - 150",
      "id": "150",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Verenkierron tutkiminen Doppler-U├ä -laitteen avulla.",
      "nimi2": "",
      "soveltamisohje": "Toimenpidett├ñ k├ñytet├ñ├ñn tutkittaessa esimerkiksi diabeetikon valtimoverenkiertoa tai s├ñ├ñrihaavojen etiologiaa."
    },
    {
      "idLong": "RI - 151",
      "id": "151",
      "ryhm├ñ": "R I",
      "ryhm├ñ2": "RI",
      "ryhm├ñTop": "XR",
      "nimi": "Muistisairausl├ñ├ñkityksen aloittaminen muistisairaalle potilaalle",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan k├ñynti├ñ, jonka yhteydess├ñ l├ñ├ñkkeill├ñ hoidettavaa muistisairautta (Alzheimerin tauti, Parkinsonin tautiin liittyv├ñ dementia) sairastavalle potilaalle tehd├ñ├ñn kliininen tutkimus ja selvitet├ñ├ñn l├ñ├ñkehoidon indikaatioiden olemassaolo, mahdollisen hoidon edut ja haitat, sek├ñ suunnitellaan hoidon toteutus ja sovitaan jatkoseurannasta.\n\nToimenpide on korvattava neurologian ja geriatrian alan erikoisl├ñ├ñk├ñrille l├ñ├ñkehoidon aloittamista koskevan p├ñ├ñt├Âksenteon osalta. Toimenpidett├ñ ei kuitenkaan k├ñytet├ñ, jos samassa yhteydess├ñ tehd├ñ├ñn lausunto l├ñ├ñkehoidon korvattavuudesta (R II 225).\n\nLis├ñksi toimenpide on korvattava my├Âs muille terveyskeskuksessa ty├Âskenteleville l├ñ├ñk├ñreille l├ñ├ñkehoidon muutosta koskevan arvion ja p├ñ├ñt├Âksen yhteydess├ñ (hoidon tehostaminen tai vaihtaminen, yhdistelm├ñhoidon aloittaminen, tarpeettoman l├ñ├ñkehoidon lopettaminen)."
    },
    {
      "idLong": "Ryhm├ñRII - RII",
      "id": "RII",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRII",
      "ryhm├ñTop": "XR",
      "nimi": "R II - Terveyskeskusten kaikkiin l├ñ├ñk├ñreihin sovellettavat em. yleisohjeet huomioon ottaen",
      "nimi2": "R II",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 201",
      "id": "201",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Fyysisen, psyykkisen ja sosiaalisen toimintakyvyn selvittely, arviointi ja hoidonsuunnittelu.",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan toimintakyvyn ja hoidontarpeen laajaa selvittely├ñ ja t├ñh├ñn liittyv├ñ├ñ hoitosuunnitelman tekemist├ñ. Toimenpidett├ñ k├ñytet├ñ├ñn vastaavissa tilanteissa kuin R I 143 silloin, kun toimenpide vastaa ajank├ñyt├Âlt├ñ├ñn ja vaativuudeltaan palkkioryhm├ñn R II toimenpidett├ñ. Toimenpidett├ñ voidaan k├ñytt├ñ├ñ esimerkiksi harkittaessa M I lausunnon (tarkkailul├ñhete M I) antamista tai arvioitaessa mahdollista lasten huostaanottoa."
    },
    {
      "idLong": "RII - 202",
      "id": "202",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Kokonaisvaltainen kuntoutusarviointi",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan laajaa toimintakyvyn arviointia, johon yleens├ñ liittyy kuntoutussuunnitelman tekeminen k├ñytt├ñen esimerkiksi muuta kuntoutushenkil├Âkuntaa apuna. Veteraanikuntoutusta varten tarvittavat tutkimukset ja lausunnot katsotaan t├ñm├ñn ryhm├ñn mukaisiksi, mik├ñli ne tehd├ñ├ñn viranomaisen asiasta antamien ohjeiden perusteella ja veteraanikuntoutuksen valinnan kriteerit ovat ensisijaisesti l├ñ├ñketieteelliset. Mik├ñli n├ñin ei ole, k├ñytet├ñ├ñn toimenpidett├ñ R I 143."
    },
    {
      "idLong": "RII - 203",
      "id": "203",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Ty├Âkyvyn arviointi",
      "nimi2": "",
      "soveltamisohje": "Ty├Âkyvyn arvioinnilla tarkoitetaan laajaa, perusteellista ty├Âkyvyn arviointia riippumatta siit├ñ, mik├ñ on lopputulos. Toimenpide ei tule kyseeseen m├ñ├ñr├ñtt├ñess├ñ lyhytaikaista sairauslomaa esimerkiksi SVA-lomakkeella. Rutiininomainen ty├Âh├Ântulotarkastus ei my├Âsk├ñ├ñn ole t├ñss├ñ tarkoitettu toimenpide. Toimenpiteeksi ei lueta esimerkiksi asevelvollisten palvelukelpoisuuden selvitt├ñmiseksi tehtyj├ñ tarkastuksia tai tavanomaisen T-lausunnon tekemist├ñ. E-lausunnolla ilmaistu ty├Âkyvyn arvio on t├ñss├ñ tarkoitettu toimenpide vain, mik├ñli ty├Âkyky├ñ joudutaan laajemmin tutkimaan ja perustelemaan."
    },
    {
      "idLong": "RII - 204",
      "id": "204",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Leikkauskelpoisuuden arviointi",
      "nimi2": "",
      "soveltamisohje": "Toimenpide tulee kysymykseen esimerkiksi tilanteissa, joissa terveyskeskusl├ñ├ñk├ñrilt├ñ etuk├ñteen pyydet├ñ├ñn arviota leikkauskelpoisuudesta silm├ñleikkauksia varten."
    },
    {
      "idLong": "RII - 206",
      "id": "206",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Suurten haavojen hoito",
      "nimi2": "",
      "soveltamisohje": "Toimenpide tarkoittaa tilanteita, joissa on kyseess├ñ haavojen hoito, joihin liittyy esimerkiksi vaikeita ja ty├Âl├ñit├ñ reviisioita sek├ñ syvempien kudosten kerroksittaista suturointia tai haavojen hoito vie huomattavasti aikaa."
    },
    {
      "idLong": "RII - 207",
      "id": "207",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Syv├ñt koepalat ja ihonalaiset operaatiot",
      "nimi2": "",
      "soveltamisohje": "Toimenpidett├ñ voidaan k├ñytt├ñ├ñ esimerkiksi poistettaessa ihonalaisia kasvaimia tai teht├ñess├ñ esimerkiksi imu- tai koekaavintoja, jos niit├ñ ei tehd├ñ selv├ñsti leikkaussaliolosuhteissa, jolloin k├ñytet├ñ├ñn toimenpidett├ñ R III 301."
    },
    {
      "idLong": "RII - 208",
      "id": "208",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Rasitus-EKG",
      "nimi2": "",
      "soveltamisohje": "Rasitusergometria luetaan t├ñss├ñ tarkoitetuksi toimenpiteeksi tilanteissa, joissa l├ñ├ñk├ñri itse valvoo ja tulkitsee tutkimuksen."
    },
    {
      "idLong": "RII - 210",
      "id": "210",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Allergiatestaus",
      "nimi2": "",
      "soveltamisohje": "L├ñ├ñk├ñrin suorittama allergiatestauksen arviointi jatkohoito┬¡suosituksin."
    },
    {
      "idLong": "RII - 211",
      "id": "211",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Luuydinpunktio",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 212",
      "id": "212",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Kehon ontelon tyhjennys (keuhkot, vatsa)",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 216",
      "id": "216",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Resuskitaatiohoito",
      "nimi2": "",
      "soveltamisohje": "Toimenpide on korvattava kaikille elvytykseen osallistuville l├ñ├ñk├ñreille, kunhan asiapapereista, v├ñhint├ñ├ñn elvytyskertomuksesta, l├Âytyy merkint├ñ l├ñ├ñk├ñrin osallistumisesta elvytykseen. T├ñt├ñ toimenpidett├ñ k├ñytet├ñ├ñn my├Âs s├ñhk├Âisen rytminsiirron yhteydess├ñ."
    },
    {
      "idLong": "RII - 217",
      "id": "217",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Ihonsiirto",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 219",
      "id": "219",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Tympanostomiaputken asennus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 222",
      "id": "222",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Perkutaanisen rakkokatetrin asettaminen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 223",
      "id": "223",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Parafimoosin reponointi",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 224",
      "id": "224",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Kuolinsyyn selvitt├ñminen",
      "nimi2": "",
      "soveltamisohje": "Toimenpide ei tarkoita pelk├ñst├ñ├ñn kuolintodistuksen allekirjoittamista, vaan ohjeitten ja m├ñ├ñr├ñysten mukaista kuolinsyyn selvittely├ñ. Toimenpiteen korvaus ei tule kysymykseen esimerkiksi sy├Âp├ñpotilaiden terminaalivaiheessa, jolloin kuolinsyy on etuk├ñteen tiedossa ja kuolema on odotettavissa."
    },
    {
      "idLong": "RII - 225",
      "id": "225",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Arvio jatkuvan l├ñ├ñkityksen tarpeesta lausuntoineen",
      "nimi2": "",
      "soveltamisohje": "Toimenpide tulee kyseeseen teht├ñess├ñ arviota ja kirjoitettaessa lausuntoa kokonaan tai osittain korvattavien l├ñ├ñkkeiden osalta."
    },
    {
      "idLong": "RII - 226",
      "id": "226",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Huume-/humalatilatutkimus",
      "nimi2": "",
      "soveltamisohje": "Huume-/humalatilatutkimuksella tarkoitetaan kliinist├ñ tutkimusta joko humalatilan tai huumeiden vaikutuksen selvitt├ñmiseksi. Mik├ñli kliinist├ñ tutkimusta ei tehd├ñ, vaan otetaan ainoastaan verin├ñyte, k├ñytet├ñ├ñn toimenpidett├ñ R I 120. Mik├ñli tehd├ñ├ñn sek├ñ kliininen humalatilatutkimus ett├ñ otetaan verin├ñyte, korvataan vain t├ñm├ñn ryhm├ñn mukaisena toimenpiteen├ñ."
    },
    {
      "idLong": "RII - 227",
      "id": "227",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Endoskopiatutkimukset",
      "nimi2": "",
      "soveltamisohje": "Endoskopiatutkimuksella tarkoitetaan esimerkiksi gastroskopiaa, rektoskopiaa, rektosigmoideoskopiaa ja kolonoskopiaa. Pelkk├ñ proktoskopia on korvattava vain, mik├ñli tutkimus on vaativuudeltaan ja ajank├ñyt├Âlt├ñ├ñn R II:n tasoa vastaava."
    },
    {
      "idLong": "RII - 228",
      "id": "228",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Takatamponaatio nen├ñverenvuodon hoitona",
      "nimi2": "",
      "soveltamisohje": "Takatamponaatio tulee korvattavaksi riippumatta siit├ñ, onko teknisen├ñ suorituksena harsosyker├Âill├ñ tai pallokatetreilla tapahtuva toimenpide."
    },
    {
      "idLong": "RII - 230",
      "id": "230",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Kyynelteiden sondeeraus",
      "nimi2": "",
      "soveltamisohje": "Korvattavat toimenpiteet"
    },
    {
      "idLong": "RII - 231",
      "id": "231",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Murtumareponointi + kipsaus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RII - 233",
      "id": "233",
      "ryhm├ñ": "R II",
      "ryhm├ñ2": "RII",
      "ryhm├ñTop": "XR",
      "nimi": "Keskuslaskimokanylointi",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "Ryhm├ñRIII - RIII",
      "id": "RIII",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRIII",
      "ryhm├ñTop": "XR",
      "nimi": "R III - Terveyskeskusten kaikkiin l├ñ├ñk├ñreihin sovellettavat em. yleisohjeet huomioon ottaen",
      "nimi2": "R III",
      "soveltamisohje": ""
    },
    {
      "idLong": "RIII - 301",
      "id": "301",
      "ryhm├ñ": "R III",
      "ryhm├ñ2": "RIII",
      "ryhm├ñTop": "XR",
      "nimi": "Leikkaussaliolosuhteissa teht├ñv├ñt leikkaukset ja vastaavat toimenpiteet, jotka vaativat joko sentraalista johtopuudutusta, rektaalista, intramusku┬¡laari- tai intraven├Â├Âsianestesiaa tai lyhytt├ñ inhalaatioanestesiaa tai laajaa infiltraatiopuudutusta.",
      "nimi2": "",
      "soveltamisohje": "Leikkaussaliolosuhteissa teht├ñv├ñt leikkaukset ja vastaavat toimenpiteet, jotka vaativat joko sentraalista johtopuudutusta, rektaalista, intramusku┬¡laari- tai intraven├Â├Âsianestesiaa tai lyhytt├ñ inhalaatioanestesiaa tai laajaa infiltraatiopuudutusta.\n\n*) Tutkimusten lis├ñksi maksetaan terveyskeskuksen l├ñ├ñk├ñrille palkkiot ultra├ñ├ñnitutkimuksesta."
    },
    {
      "idLong": "RIII - 303",
      "id": "303",
      "ryhm├ñ": "R III",
      "ryhm├ñ2": "RIII",
      "ryhm├ñTop": "XR",
      "nimi": "Saattohoidon kotik├ñynti",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan vaikeasti sairaan terminaalivaiheen hoitoon liittyv├ñ├ñ l├ñ├ñk├ñrin kotik├ñynti├ñ. T├ñm├ñn toimenpiteen lis├ñksi ei makseta liitteess├ñ 1 m├ñ├ñr├ñttyj├ñ k├ñyntipalkkioita."
    },
    {
      "idLong": "RIII - 304",
      "id": "304",
      "ryhm├ñ": "R III",
      "ryhm├ñ2": "RIII",
      "ryhm├ñTop": "XR",
      "nimi": "L├ñ├ñk├ñrin l├ñsn├ñoloa vaativa sairaankuljetus",
      "nimi2": "",
      "soveltamisohje": "Toimenpiteell├ñ tarkoitetaan niit├ñ tilanteita, joissa l├ñ├ñk├ñri joutuu potilaan tilan vakavuuden takia saattamaan t├ñm├ñn seuraavaan hoitopaikkaan."
    },
    {
      "idLong": "RIII - 305",
      "id": "305",
      "ryhm├ñ": "R III",
      "ryhm├ñ2": "RIII",
      "ryhm├ñTop": "XR",
      "nimi": "Infarktin liuotushoito",
      "nimi2": "",
      "soveltamisohje": "Toimenpide tarkoittaa terveyskeskuksessa diagnosoitua syd├ñninfarktia, sen liuotushoidon aloittamista ja toteuttamista."
    },
    {
      "idLong": "Ryhm├ñRUI - RUI",
      "id": "RUI",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRUI",
      "ryhm├ñTop": "RU",
      "nimi": "RU I - Muihin terveyskeskusten l├ñ├ñk├ñreihin kuin r├Ântgenerikoisl├ñ├ñk├ñreihin\nsovellettavat radiologiset toimenpiteet",
      "nimi2": "RU I",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 101",
      "id": "101",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "Yl├ñvatsan yleistutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 102",
      "id": "102",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "Alavatsan yleistutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 103",
      "id": "103",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "J├ñ├ñnn├Âsvirtsan tutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 104",
      "id": "104",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "Ehk├ñisykierukan paikantaminen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 105",
      "id": "105",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "Varhaisraskauden toteaminen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUI - 106",
      "id": "106",
      "ryhm├ñ": "RU I",
      "ryhm├ñ2": "RUI",
      "ryhm├ñTop": "RU",
      "nimi": "Yksitt├ñinen mittakontrolli",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "Ryhm├ñRUII - RUII",
      "id": "RUII",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRUII",
      "ryhm├ñTop": "RU",
      "nimi": "RU II - Muihin terveyskeskusten l├ñ├ñk├ñreihin kuin r├Ântgenerikoisl├ñ├ñk├ñreihin\nsovellettavat radiologiset toimenpiteet",
      "nimi2": "RU II",
      "soveltamisohje": ""
    },
    {
      "idLong": "RUII - 201",
      "id": "201",
      "ryhm├ñ": "RU II",
      "ryhm├ñ2": "RUII",
      "ryhm├ñTop": "RU",
      "nimi": "Syd├ñmen ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": "Toimenpide edellytt├ñ├ñ erikoisl├ñ├ñk├ñrin perehtyneisyytt├ñ syd├ñmen\n ultra├ñ├ñnitutkimuksiin"
    },
    {
      "idLong": "Ryhm├ñRRI - RRI",
      "id": "RRI",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRRI",
      "ryhm├ñTop": "RR",
      "nimi": "RR I - Terveyskeskusten r├Ântgenerikoisl├ñ├ñk├ñreihin sovellettavat radiologiset\ntoimenpiteet",
      "nimi2": "RR I",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 101",
      "id": "101",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Skolioositutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 102",
      "id": "102",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Nivelen rasitustutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 103",
      "id": "103",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Hypofarynx",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 104",
      "id": "104",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Ruokatorven kaksoiskontrastitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 105",
      "id": "105",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Mahalaukun kaksoiskontrastitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 106",
      "id": "106",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Ohutsuolipasaasi",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 107",
      "id": "107",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Urografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 108",
      "id": "108",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Akuutti urografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 109",
      "id": "109",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Miktiokystografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 110",
      "id": "110",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Yl├ñvatsan ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 111",
      "id": "111",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Alavatsan ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 112",
      "id": "112",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Kaulan alueen ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 113",
      "id": "113",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Nivelten ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 114",
      "id": "114",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Lihasten ja j├ñnteiden ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 115",
      "id": "115",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Pehmytosaresistenssin ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 116",
      "id": "116",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Virtsaelinten ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 117",
      "id": "117",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Kivesten ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 118",
      "id": "118",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Prostatan ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 119",
      "id": "119",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Munuaisten ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 120",
      "id": "120",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Kilpirauhasen ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRI - 121",
      "id": "121",
      "ryhm├ñ": "RR I",
      "ryhm├ñ2": "RRI",
      "ryhm├ñTop": "RR",
      "nimi": "Sylkirauhasen ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "Ryhm├ñRRII - RRII",
      "id": "RRII",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRRII",
      "ryhm├ñTop": "RR",
      "nimi": "RR II - Terveyskeskusten r├Ântgenerikoisl├ñ├ñk├ñreihin sovellettavat radiologiset\ntoimenpiteet",
      "nimi2": "RR II",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 201",
      "id": "201",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Usean nivelen rasitustutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 202",
      "id": "202",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Fistelitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 203",
      "id": "203",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Mammografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 204",
      "id": "204",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Mahalaukun kaksoiskontrasti, vaativa",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 206",
      "id": "206",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Ultra├ñ├ñniohjattu ONB pinnalliseen elimeen",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 207",
      "id": "207",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Rintarauhasten ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 208",
      "id": "208",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Raajalaskimoiden ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 209",
      "id": "209",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Syd├ñmen ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRII - 210",
      "id": "210",
      "ryhm├ñ": "RR II",
      "ryhm├ñ2": "RRII",
      "ryhm├ñTop": "RR",
      "nimi": "Alaraajan venografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "Ryhm├ñRRIII - RRIII",
      "id": "RRIII",
      "ryhm├ñ": "Ryhm├ñ",
      "ryhm├ñ2": "Ryhm├ñRRIII",
      "ryhm├ñTop": "RR",
      "nimi": "RR III - Terveyskeskusten r├Ântgenerikoisl├ñ├ñk├ñreihin sovellettavat radiologiset\ntoimenpiteet",
      "nimi2": "RR III",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRIII - 301",
      "id": "301",
      "ryhm├ñ": "RR III",
      "ryhm├ñ2": "RRIII",
      "ryhm├ñTop": "RR",
      "nimi": "Artrografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRIII - 302",
      "id": "302",
      "ryhm├ñ": "RR III",
      "ryhm├ñ2": "RRIII",
      "ryhm├ñTop": "RR",
      "nimi": "Paksunsuolen kaksoiskontrastitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRIII - 303",
      "id": "303",
      "ryhm├ñ": "RR III",
      "ryhm├ñ2": "RRIII",
      "ryhm├ñTop": "RR",
      "nimi": "Lumbaalinen varjoainemyelografia",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRIII - 304",
      "id": "304",
      "ryhm├ñ": "RR III",
      "ryhm├ñ2": "RRIII",
      "ryhm├ñTop": "RR",
      "nimi": "Vaativa abdomenin ultra├ñ├ñnitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "RRIII - 305",
      "id": "305",
      "ryhm├ñ": "RR III",
      "ryhm├ñ2": "RRIII",
      "ryhm├ñTop": "RR",
      "nimi": "Ohutsuolen kaksoiskontrastitutkimus",
      "nimi2": "",
      "soveltamisohje": ""
    },
    {
      "idLong": "spaceholder",
      "id": "",
      "ryhm├ñ": "",
      "ryhm├ñ2": "",
      "ryhm├ñTop": "",
      "nimi": "",
      "nimi2": "",
      "soveltamisohje": ""
    }
  
   ]

},{"fuse.js":2}],2:[function(require,module,exports){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});
},{}]},{},[1]);
