//For Saving screenshots
const timeStamp = new Date().toLocaleString().replace(/\//g, '-').replace(/:/g, '.').replace(', ', '_').replace(' ', '_');

//random number function
function r(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
}

//pretends this is a phone not a desktop
const device = {
    name: 'iPhone 12 Pro Max',
    userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/605.1.15',
    viewport: {
        width: 426,
        height: 926,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
    }
}

const badAccounts = [

    'https://www.instagram.com/hb.iv',
    'https://www.instagram.com/lj_brink_',
]

const targetAccounts = [




    ////////////POPULAR BOCA & DELRAY LOCAL PLACES

    'https://www.instagram.com/downtowndelray/',
    'https://www.instagram.com/visit_delray_beach/',
    'https://www.instagram.com/visitbocaraton/',
    'https://www.instagram.com/bocaratonfl/',
    'https://www.instagram.com/citybocaraton/',
    'https://www.instagram.com/bocapolice/',
    'https://www.instagram.com/delraybeachopen/',
    'https://www.instagram.com/bluefineart/',
    'https://www.instagram.com/sandbardelraybeach/',
    'https://www.instagram.com/new_vegan76/',
    'https://www.instagram.com/restorationlane/',
    'https://www.instagram.com/delraymag/',
    'https://www.instagram.com/renovatewiththeroots/',
    'https://www.instagram.com/mmwooddesigns/',
    'https://www.instagram.com/sassafraswpb/',
    'https://www.instagram.com/realtordotcom/',
    'https://www.instagram.com/sloans_southflorida/',
    'https://www.instagram.com/bocalifemag/',
    'https://www.instagram.com/oldschoolsquaredelray/',
    'https://www.instagram.com/serenitynowstaging/',
    'https://www.instagram.com/cerverare',
    'https://www.instagram.com/livingproof.photography/',
    'https://www.instagram.com/megangribblehome',
    'https://www.instagram.com/jillszedergables/',
    'https://www.instagram.com/flippingahouse/',
    'https://www.instagram.com/landscapeartinc/',
    'https://www.instagram.com/rncbuilders/',
    'https://www.instagram.com/roccostacos/',
    'https://www.instagram.com/delraybeachmarket/',
    'https://www.instagram.com/bodegataqueria/',
    'https://www.instagram.com/thegrovedelrayfl/',
    'https://www.instagram.com/cut432steakhouse/',
    'https://www.instagram.com/theheartofdelraygallery/',
    'https://www.instagram.com/bluefineart/',
    'https://www.instagram.com/artsgaragedelraybeach/',
    'https://www.instagram.com/cornellartmuseum/',
    'https://www.instagram.com/dadadelray/',
    'https://www.instagram.com/elcaminofla/',
    'https://www.instagram.com/lesorellerestaurant/',
    'https://www.instagram.com/deck84_delray/',
    'https://www.instagram.com/parktavernfl/',
    'https://www.instagram.com/brule.bistro/',
    'https://www.instagram.com/habitatforhumanity/',
    'https://www.instagram.com/bocaratonobserver/',
    'https://www.instagram.com/delraybeachgolfclub/',
    'https://www.instagram.com/puttnaround/',
    'https://www.instagram.com/sandowaydiscovery/',
    'https://www.instagram.com/sundy_house/',

    ///////Valcatch List 

    //////////////////////Builders/Designer/Architects:
    'https://www.instagram.com/verandaestatehomes',
    'https://www.instagram.com/pikeproperties',
    'https://www.instagram.com/architectanddesign',
    'https://www.instagram.com/momentdesign_architecture',
    'https://www.instagram.com/mansionspageforyou',
    'https://www.instagram.com/lush.homes',
    'https://www.instagram.com/luxryious',
    'https://www.instagram.com/successowner',
    'https://www.instagram.com/pool.logic',
    'https://www.instagram.com/vivirdesign',
    'https://www.instagram.com/bedrosianstile',
    'https://www.instagram.com/designlovesdetail/',
    /*/added by hb*/
    'https://www.instagram.com/stofferphotographyinteriors/',
    'https://www.instagram.com/sohohouse/',
    'https://www.instagram.com/momentdesign_architecture/',
    'https://www.instagram.com/nicoledavisinteriors/',
    'https://www.instagram.com/gubiofficial/',
    'https://www.instagram.com/amyastley/',
    'https://www.instagram.com/sarahshermansamuel/',
    'https://www.instagram.com/all.sorts.of/',
    'https://www.instagram.com/franparente/',
    'https://www.instagram.com/smpliving/',
    'https://www.instagram.com/rejuvenation/',


    ////////////////////////Bloggers/influencers
    'https://www.instagram.com/malloryervin',
    'https://www.instagram.com/champagneandchanel',
    'https://www.instagram.com/brittanyaldean',
    'https://www.instagram.com/letmetakeyourselfie',
    'https://www.instagram.com/itsmadebybeck',
    'https://www.instagram.com/raelynnofficial',

    ////////////////////////Brands/Builder Source:
    'https://www.instagram.com/fergusonshowrooms',
    'https://www.instagram.com/subzeroandwolf',
    'https://www.instagram.com/kbis_official',
    'https://www.instagram.com/homebuilders ',
    'https://www.instagram.com/buildingsciencefightclub',
    'https://www.instagram.com/awesomeframers',
    'https://www.instagram.com/carpentry_bymar',
    'https://www.instagram.com/finehomebuilding',
    'https://www.instagram.com/mmlighting',

    //////////////////////////LOCALS
    'https://www.instagram.com/Visitflorida',
    'https://www.instagram.com/Ftlauderdalesun',
    'https://www.instagram.com/Visit_delray_beach',
    'https://www.instagram.com/Visitbocaraton',
    'https://www.instagram.com/Visitlauderdale',
    'https://www.instagram.com/Downtowndelray',
    'https://www.instagram.com/Palmbeachmoms',
    'https://www.instagram.com/Palmbeachesfl',
    'https://www.instagram.com/Palmbeachcountyfl',
    'https://www.instagram.com/Westpalmbeachflorida',
    'https://www.instagram.com/Visitpalmbeach',
    'https://www.instagram.com/Thebreakers',
    'https://www.instagram.com/Eaupalmbeach',

    /*  PAGES WOMEN GO TO
    'https://www.instagram.com/boandtee/',
    'https://www.instagram.com/revolve/',
    'https://www.instagram.com/revolvebeauty/',
    'https://www.instagram.com/maccosmetics/',
    'https://www.instagram.com/ohpolly/',
    'https://www.instagram.com/ohpollyswim/',
    'https://www.instagram.com/pallascouture/',
    'https://www.instagram.com/pallascollective/',
    'https://www.instagram.com/studio.albus/',
    'https://www.instagram.com/seduction_la/',
    'https://www.instagram.com/fuckologyofficial/',
    'https://www.instagram.com/betchwithnolife/',
    'https://www.instagram.com/basic/',
    'https://www.instagram.com/bipolar_girlfriend_/',
    'https://www.instagram.com/ohmboutique/',
    'https://www.instagram.com/yourbreakupbestie/',
    'https://www.instagram.com/sahirajewelrydesign/',
    'https://www.instagram.com/okb_int/',
    'https://www.instagram.com/cottononbody/',
    'https://www.instagram.com/lv_perfection_medspa/',
    'https://www.instagram.com/berrybeachyswimwear/',
    'https://www.instagram.com/callherdaddy/',
    'https://www.instagram.com/bangn.body/',
    'https://www.instagram.com/lovetrends.shop/',
    'https://www.instagram.com/glossy_zodiac/',
    'https://www.instagram.com/bossbabe.inc/',
    */


    /*LIST TARGETING MEN - ONLYFANS
    'https://www.instagram.com/mandi_lynn_bbw/',
    'https://www.instagram.com/therealnatashatosini/',
    'https://www.instagram.com/jaidexoxo_/',
    'https://www.instagram.com/ivykiaraofficial/',
    'https://www.instagram.com/tatted.mama44/',
    'https://www.instagram.com/officialmakaylaalt/',
    'https://www.instagram.com/amberleighhh/',
    'https://www.instagram.com/devin.meow/',
    'https://www.instagram.com/jessicakes33/',
    'https://www.instagram.com/jessicacakes2/',
    'https://www.instagram.com/jessicafitcake/',
    'https://www.instagram.com/millenawhite/',
    'https://www.instagram.com/_lucky_ladybird/',
    'https://www.instagram.com/millena_white/',
    'https://www.instagram.com/missjessarhodes/',
    'https://www.instagram.com/fierysireniv/',
    'https://www.instagram.com/egoistqaa/',
    'https://www.instagram.com/liubov_kalish/',
    'https://www.instagram.com/lsdiamonds69/',
    */

];





module.exports = { device, timeStamp, r, targetAccounts, badAccounts };