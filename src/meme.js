function r(min, max) {
	return ~~(Math.random() * (max - min + 1) + min);
}

let memeAccounts = [
	// Office & MEME PAGES
	'https://www.instagram.com/stevecarrelll/',
	'https://www.instagram.com/dwightsdiary/',
	'https://www.instagram.com/rashidajones/',
	'https://www.instagram.com/creedbratton1/',
	'https://www.instagram.com/theofficeisthebestshowever/',
	'https://www.instagram.com/cumsee_adulthumor_/',
	'https://www.instagram.com/dunder_mifflin.munder_difflin/',
	'https://www.instagram.com/dundermemson/',
	'https://www.instagram.com/dundermifflim/',
	'https://www.instagram.com/ratingthememe/',
	'https://www.instagram.com/theme_of_the_memes/',
	'https://www.instagram.com/dundermifflinfeeds/',
	'https://www.instagram.com/dundermifflinpaperco/',
	'https://www.instagram.com/dundermifflintattoos/',
	'https://www.instagram.com/dundersplifflininc/',
	'https://www.instagram.com/theofficefunkopops/',
	'https://www.instagram.com/dwightschrutee/',
	'https://www.instagram.com/dwightschrutemoments/',
	'https://www.instagram.com/goodgirl_badtimes/',
	'https://www.instagram.com/hoegivesnofucks/',
	'https://www.instagram.com/imajokemaker/',
	'https://www.instagram.com/insta.single/',
	'https://www.instagram.com/JimHalpirt/',
	'https://www.instagram.com/memes_quantum/',
	'https://www.instagram.com/memetheme1/',
	'https://www.instagram.com/michaelsmanymoods/',
	'https://www.instagram.com/stevecarrelll/',
	'https://www.instagram.com/stevecarrelll/',
	'https://www.instagram.com/office.obsession/',
	'https://www.instagram.com/officephotos/',
	'https://www.instagram.com/officethememes/',
	'https://www.instagram.com/stevecarrelll/',
	'https://www.instagram.com/pambeesle/',
	'https://www.instagram.com/queen.catto/',
	'https://www.instagram.com/savage_memes_only/',
	'https://www.instagram.com/stevecarrelll/',
	'https://www.instagram.com/tequilashots/',
	'https://www.instagram.com/textpostgiant/',
	'https://www.instagram.com/the.office.alliance/',
	'https://www.instagram.com/phatmemer/',
	'https://www.instagram.com/theoffice/',
	'https://www.instagram.com/theofficeismycrack/',
	'https://www.instagram.com/theofficememers/',
	'https://www.instagram.com/tumblermemes/',
	'https://www.instagram.com/wholesometroll/',
	'https://www.instagram.com/worstigaccount/',
	'https://www.instagram.com/fuckologyofficial/',
	'https://www.instagram.com/bipolar_girlfriend_/',
	'https://www.instagram.com/glossy_zodiac/',
	'https://www.instagram.com/betchwithnolife/',
	'https://www.instagram.com/basic/',
	// Pages mostly women Visit
	/*
	'https://www.instagram.com/boandtee/',
	'https://www.instagram.com/revolve/',
	'https://www.instagram.com/revolvebeauty/',
	'https://www.instagram.com/maccosmetics/',
	'https://www.instagram.com/ohpolly/',
	'https://www.instagram.com/seduction_la/',
	'https://www.instagram.com/ohmboutique/',
	'https://www.instagram.com/sahirajewelrydesign/',
	'https://www.instagram.com/cottononbody/',
	'https://www.instagram.com/bangn.body/',
	'https://www.instagram.com/lovetrends.shop/',	
	//LIST TARGETING MEN - ONLYFANS
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

let memeTags = [
	'#funny',
	'#lol',
	'#meme',
	'#memes',
	'#pewdiepie',
	'#dankmemes',
	'#offensivememes',
	'#lit',
	'#epic',
	'#jokes',
	'#memelord',
	'#dailymemes',
	'#haha',
	'#minecraft',
	'#edgymeme',
	'#memepage',
	'#humor',
	'#spicymemes',
	'#funnymeme',
	'#lmao',
	'#memesdaily',
	'#funnymemes',
	'#memeoftheday',
	'#memez',
	'#edgymemes',
	'#6ix9ine',
	'#laugh',
	'#stupid',
	'#joking',
	'#relatable',
	'#crazy',
	'#bestmemes',
	'#memegod',
	'#insane',
	'#savagememes',
	'#nochill',
	'#offensive',
	'#rofl',
	'#funnyvideos',
	'#hilariousmemes',
	'#cringe',
	'#lmfao',
	'#dankmemesdaily',
	'#dumb',
	'#bruh',
	'#silly',
	'#cardib',
	'#lmao',
	'#memepages',
	'#memestagram',
	'#memer',
	'#damn',
	'#dankest',
	'#dankmemez',
	'#memesfordays',
	'#goodmemes',
	'#funniestmemes',
	'#memesrlife',
	'#spongebobmemes',
	'#justforfun',
	'#funnypics',
	'#reddit',
	'#jokesfordays',
	'#memesquad',
	'#memestar',
	'#darkmemes',
	'#stolenmemes',
	'#minecraftmemes',
	'#cringememes',
	'#ironicmemes',
	'#redditmemes',
	'#thuglife',
	'#mobilelegendsindo',
	'#funnymemesdaily',
	'#memedaily',
	'#memevideo',
	'#memeaccount',
	'#memetime',
	'#deepfriedmemes',
	'#lolz',
	'#offensivememes',
	'#darkhumor',
	'#dankestmemes',
	'#dankvideos',
	'#laughoutloud',
	'#offensivememe',
	'#viralmemes',
	'#instamemes',
	'#pettypost',
	'#dailymeme',
	'#freshmemes',
	'#hoodmemes',
	'#shitpost',
	'#comedy',
	'#anime',
	'#tiktok',
	'#shitposting',
	'#bhfyp',
	'#fortnite',
	'#love',
	'#fun',
	'#instagram',
	'#dylanteromeme',
	'#instagood',
	'#dank',
	'#edgy',
	'#explorepage',
	'#dankmeme',
	'#ol',
	'#explore',
	'#likeforlikes',
	'#art',
	'#followforfollowback',
	'#photography',
	'#viral',
	'#hilarious',
	'#cute',
	'#photooftheday',
	'#followme',
	'#aesthetic',
	'#music',
	'#india',
	'#desimemes',
	'#mobilelegends',
	'#fashion',
	'#funnyshit',
	'#instadaily',
	'#funnyposts',
	'#cannabis',
	'#gamer',
	'#indianmemes',
	'#gaming',
	'#youtube',
	'#sarcasm',
	'#igmemes',
	'#mlbb',
	'#life',
	'#sarcasticmemes',
	'#smile',
	'#f',
	'#nature',
	'#dogsofinstagram',
	'#grunge',
	'#game',
	'#friends',
	'#beautiful',
	'#happy',
	'#kerala',
	'#dog',
	'#trending',
	'#video',
	'#mobilelegendswtf',
	'#edit',
	'#relatablememes',
	'#skate',
	'#filthyfrank',
	'#shitpostchile',
	'#bakchodi',
	'#videos',
	'#mobilelegendsbangbang',
	'#travel',
	'#420',
	'#hiphop',
	'#funnyclips',
	'#mobilelegendsgame',
	'#funnyvideo',
	'#doglovers',
	'#doggo',
	'#skateboard',
	'#mobilelegendsindonesia',
	'#tumblr',
	'#dogsandpals',
	'#dogoftheday',
	'#aviation',
	'#coronavirus',
	'#joke',
	'#funnyjokes',
	'#comedyvideo',
	'#chennai',
	'#chutiyapa',
	'#chutiyapanti',
	'#indianjokes',
	'#bollywood',
	'#kollywood',
	'#dance',
	'#naturephotography',
	'#sunset',
	'#memesespañol',
	'#mlbbindonesia',
	'#dank',
	'#savage',
	'#edgy',
	'#dankmemes',
	'#savagememes',
	'#edgymemes',
	'#dankmeme',
	'#edgymeme',
	'#dankmemesdaily',
	'#edgymemesforedgyteens',
	'#dankmemez',
	'#dankvideos',
	'#dankbar',
	'#dankestmemes',
	'#dankmemescanmeltsteelbeams',
	'#dankmemescantmeltsteelbeams',
	'#dankbarkeit',
	'#danke',
	'#dankest',
	'#21savage',
	'#tiwasavage',
	'#memes',
	'#mamas',
	'#memesdaily',
	'#funnymemes',
	'#memestagram',
	'#memes',
	'#offensivememes',
	'#dailymemes',
	'#memesespañol',
	'#memesbrasil',
	'#animememes',
	'#spicymemes',
	'#fortnitememes',
	'#mamasboy',
	'#memestar',
	'#btsmemes',
	'#memesquad',
	'#memesgraciosos',
	'#memesrlife',
	'#memesbrasileiros',
	'#tiktokmemes',
	'#bestmemes',
	'#memesbr',
	'#nichememes',
	'#memesenespañol',
	'#memesfordays',
	'#relatablememes',
	'#freefirememes',
	'#pubgmemes',
	'#darkmemes',
	'#wholesomememes',
	'#indianmemes',
	'#kpopmemes',
	'#tamilmemes',
	'#instamemes',
	'#desimemes',
	'#spongebobmemes',
	'#stolenmemes',
	'#memes4days',
	'#memesdank',
	'#memess',
	'#mamasgirl',
	'#deepfriedmemes',
	'#bollywoodmemes',
	'#memesengraçados',
	'#sarcasticmemes',
	'#hindimemes',
	'#funniestmemes',
	'#memeschile',
	'#memes2good',
	'#gamingmemes',
	'#minecraftmemes',
	'#telugumemes',
	'#memesargentina',
	'#memester',
	'#adultmemes',
	'#cringememes',
	'#memesforlife',
	'#gainwithlarrymemes',
	'#hilariousmemes',
	'#memesespa',
	'#cancerousmemes',
	'#memestgram',
	'#goodmemes',
	'#memeslatinos',
	'#igmemes',
	'#cancermemes',
	'#freshmemes',
	'#memeschilenos',
	'#twittermemes',
	'#coronamemes',
	'#memesita',
	'#funnymemesdaily',
	'#ironicmemes',
	'#gymmemes',
	'#ramadankareem',
	'#sillymemes',
	'#immortalmemes',
	'#memeslayer',
	'#memesfunny',
	'#weebmemes',
	'#memesindia',
	'#animemes',
	'#autisticmemes',
	'#nicememes',
	'#kenyanmemes',
	'#hoodmemes',
	'#weedmemes',
	'#wtfmemes',
	'#robloxmemes',
	'#lovememes',
	'#gedanken',
	'#videomemes',
	'#schoolmemes',
	'#dylanteromemes',
	'#vadivelumemes',
	'#catmemes',
	'#comedymemes',
	'#cursedmemes',
	'#narutomemes',
	'#chilememes',
	'#joyfulmamas',
	'#redditmemes',
	'#starwarsmemes',
	'#cutememes',
	'#fortnitebattleroyalememes',
	'#lolmemes',
	'#epicmemes',
	'#trendingmemes',
	'#gujjumemes',
	'#crushmemes',
	'#gaymemes',
	'#viralmemes',
	'#indianmemesdaily',
	'#yeetmemes',
	'#footballmemes',
	'#dogmemes',
	'#nbamemes',
	'#leagueoflegendsmemes',
	'#gamermemes',
	'#newmemes',
	'#originalmemes',
	'#relationshipmemes',
	'#weirdmemes',
	'#codmemes',
	'#trumpmemes',
	'#deadmemes',
	'#marvelmemes',
	'#memes',
	'#funny',
	'#dank',
	'#dark',
	'#savage',
	'#memesdaily',
	'#dankmemes',
	'#funnyvideos',
	'#darkart',
	'#savagememes',
	'#memesespañol',
	'#funnymemes',
	'#darkmemes',
	'#dankmeme',
	'#memesbrasil',
	'#funnymeme',
	'#dankmemesdaily',
	'#darkhumor',
	'#memesbrasileiros',
	'#funnyvideo',
	'#dankmemez',
	'#darkartists',
	'#funnyshit',
	'#dankvideos',
	'#darkaesthetic',
	'#memesbr',
	'#funnyquotes',
	'#glowinthedark',
	'#memesengraçados',
	'#funnycats',
	'#dankmemescanmeltsteelbeams',
	'#darkgrunge',
	'#memesenespañol',
	'#funnydogs',
	'#darksouls',
	'#funnypictures',
	'#dankbar',
	'#darkartist',
	'#memestagram',
	'#funnyposts',
	'#dankestmemes',
	'#darkacademia',
	'#memester',
	'#funnyanimals',
	'#dankmemescantmeltsteelbeams',
	'#darkness',
	'#memeschilenos',
	'#funnycat',
	'#dankbarkeit',
	'#darkskin',
	'#memesfordays',
	'#funnyjokes',
	'#darkfashion',
	'#memeslatinos',
	'#funnyclips',
	'#darkchocolate',
	'#funnyvids',
	'#memesfunny',
	'#darkhair',
	'#funnytweets',
	'#funnypost',
	'#edgymemes',
	'#memeschile',
	'#memesdank',
	'#funnymemesdaily',
	'#danke',
	'#memesforlife',
	'#funnytextpost',
	'#memesargentina',
	'#funnytextposts',
	'#wholesomememes',
	'#offensivememes',
	'#animememes',
	'#memesindia',
	'#spicymemes',
	'#funnydog',
	'#pubgmemes',
	'#funnypics',
	'#fortnitememes',
	'#dankest',
	'#dailymemes',
	'#funnyvines',
	'#btsmemes',
	'#funnymoments',
	'#funnyaf',
	'#memesita',
	'#funnyreels',
	'#memesrlife',
	'#freefirememes',
	'#21savage',
	'#memesgraciosos',
	'#tiwasavage',
	'#bestmemes',
	'#nichememes',
	'#memess',
	'#tiktokmemes',
	'#hindimemes',
	'#darkphotography',
	'#funniestmemes',
	'#kpopmemes',
	'#tamilmemes',
	'#funnypic',
	'#memes4days',
	'#mamas',
	'#mamasboy',
	'#memestar',
	'#memesquad',
	'#darkside',
	'#relatablememes',
	'#indianmemes',
	'#instamemes',
	'#desimemes',
	'#spongebobmemes',
	'#stolenmemes',
	'#instafunny',
	'#pubgfunny',
	'#funnyface',
	'#funnyfaces',
	'#mamasgirl',
	'#deepfriedmemes',
	'#bollywoodmemes',
	'#sarcasticmemes',
	'#toofunny',
	'#memes2good',
	'#funnytumblr',
	'#gamingmemes',
	'#minecraftmemes',
	'#telugumemes',
	'#edgymemesforedgyteens',
	'#adultmemes',
	'#cringememes',
	'#gainwithlarrymemes',
	'#hilariousmemes',
	'#darkknight',
	'#memesespa',
	'#cancerousmemes',
	'#memestgram',
	'#goodmemes',
	'#igmemes',
	'#cancermemes',
	'#ifunny',
	'#freshmemes',
	'#pubgfunnymoments',
	'#twittermemes',
	'#coronamemes',
	'#ironicmemes',
	'#gymmemes',
	'#ramadankareem',
	'#funnyday',
	'#funnystuff',
	'#sillymemes',
	'#immortalmemes',
	'#memeslayer',
	'#weebmemes',
	'#fortnitefunny',
	'#funny',
	'#fun',
	'#night',
	'#lol',
	'#gothic',
	'#meme',
	'#memes',
	'#dank',
	'#goth',
	'#black',
	'#comedy',
	'#lights',
	'#pewdiepie',
	'#dankmemes',
	'#satan',
	'#skull',
	'#offensivememes',
	'#alternative',
	'#light',
	'#anotherdayintheoffice',
	'#armyofficer',
	'#atoffice',
	'#backoffice',
	'#backtotheoffice',
	'#bajuoffice',
	'#boxofficeking',
	'#boxofficekingandqueen',
	'#boxofficemovie',
	'#boxofficequeen',
	'#boxofficesulthan',
	'#containeroffice',
	'#correctionalofficer',
	'#coworkingoffice',
	'#dayattheoffice',
	'#dwightkschrute',
	'#dwightschruteapproved',
	'#dwightschrutebobblehead',
	'#dwightschrutecosplay',
	'#dwightschrutecostume',
	'#dwightschrutee',
	'#dwightschruteedit',
	'#dwightschruteedits',
	'#dwightschrutefanart',
	'#dwightschruteforever',
	'#dwightschruteforpresident',
	'#dwightschrutegymformuscles',
	'#dwightschrutehair',
	'#dwightschruteismyspiritanimal',
	'#dwightschrutememe',
	'#dwightschrutememes',
	'#dwightschrutequotes',
	'#dwightschrutesgymformuscles',
	'#dwightschrutetattoo',
	'#dwightschrutetheoffice',
	'#dwightschrutewouldbeproud',
	'#dwightshrute',
	'#dwightyoakam',
	'#frontoffice',
	'#gardenoffice',
	'#greenoffice',
	'#harddayattheoffice',
	'#headoffice',
	'#homeofficegoals',
	'#homeofficelife',
	'#instaoffice',
	'#ips_officers',
	'#loanofficers',
	'#michael_scott',
	'#michaelgaryscott',
	'#michaelscott2020',
	'#michaelscottartist',
	'#michaelscottbentley',
	'#michaelscottbleer',
	'#michaelscottedit',
	'#michaelscottedits',
	'#michaelscottevents',
	'#michaelscottfanart',
	'#michaelscottfanclub',
	'#michaelscottforever',
	'#michaelscottforpresident',
	'#michaelscottislife',
	'#michaelscottisms',
	'#michaelscottismyhero',
	'#michaelscottismyspiritanimal',
	'#michaelscottleavesdundermifflin',
	'#michaelscottmarch',
	'#michaelscottmccain',
	'#michaelscottmeme',
	'#michaelscottmemes',
	'#michaelscottmoment',
	'#michaelscottmonday',
	'#michaelscottmondays',
	'#michaelscottmoore',
	'#michaelscottnovilla',
	'#michaelscottpapercompany',
	'#michaelscottpapercompanyinc',
	'#michaelscottphotography',
	'#michaelscottquote',
	'#michaelscottquotes',
	'#michaelscottrichardson',
	'#michaelscottrp',
	'#michaelscottslosar',
	'#michaelscottthecat',
	'#michaelscotttheoffice',
	'#michaelscottvk',
	'#michaelscottwisdom',
	'#michaelscottwoodcock',
	'#microsoftoffice',
	'#mofficer',
	'#myofficetoday',
	'#myofficeview',
	'#nursesoffice',
	'#office_time',
	'#officeaccessories',
	'#officeassistant',
	'#officeattireph',
	'#officebag',
	'#officebags',
	'#officeblouse',
	'#officeboy',
	'#officebreak',
	'#officebuddies',
	'#officebuildings',
	'#officecatering',
	'#officechairs',
	'#officechristmasparty',
	'#officeclothes',
	'#officecoffee',
	'#officecolleagues',
	'#officeculture',
	'#officedays',
	'#officedelivery',
	'#officedepot',
	'#officedesigns',
	'#officedesigntrends',
	'#officedoglife',
	'#officedogsofinstagram',
	'#officedressph',
	'#officeenvy',
	'#officeequipment',
	'#officeevent',
	'#officefitout',
	'#officeflow',
	'#officeflowers',
	'#officefood',
	'#officeforrent',
	'#officefriends',
	'#officegifts',
	'#officehour',
	'#officehours',
	'#officehumor',
	'#officeideas',
	'#officeinteriordesign',
	'#officejob',
	'#officelifestyle',
	'#officelighting',
	'#officelooks',
	'#officelove',
	'#officemanagement',
	'#officemanager',
	'#officemood',
	'#officenail',
	'#officeoffice',
	'#officeorganization',
	'#officeoutfits',
	'#officeouting',
	'#officepants',
	'#officeparties',
	'#officepet',
	'#officeplant',
	'#officepranks',
	'#officeproblems',
	'#officepup',
	'#officerdown',
	'#officerenovation',
	'#officeromance',
	'#officescenes',
	'#officesetup',
	'#officeshenanigans',
	'#officeshirt',
	'#officesnacks',
	'#officesnapshots',
	'#officesolutions',
	'#officesonusharma',
	'#officespaces',
	'#officestationery',
	'#officesupply',
	'#officesyndrome',
	'#officetable',
	'#officeteam',
	'#officetower',
	'#officetreats',
	'#officetrip',
	'#officewearph',
	'#officewearsarees',
	'#officewearstyle',
	'#officewindow',
	'#officeworker',
	'#officeworks',
	'#officeyoga',
	'#outdooroffice',
	'#outoftheoffice',
	'#ovaloffice',
	'#pressoffice',
	'#privateoffice',
	'#remoteoffice',
	'#safetyofficer',
	'#savethepostoffice',
	'#schrute',
	'#schrutefarms',
	'#scottmichael',
	'#scottmichaelackerman',
	'#scottmichaelart',
	'#scottmichaelcampbell',
	'#scottmichaelcavagan',
	'#scottmichaelfoster',
	'#scottmichaelmorris',
	'#scottmichaels',
	'#scottmichaelyew',
	'#securityofficer',
	'#sharedoffice',
	'#sheriffsoffice',
	'#smartoffice',
	'#the_office',
	'#the_office_expo',
	'#the_office_freak',
	'#the_office_kst',
	'#the_office_nargilia',
	'#the_office_nargilia_chita',
	'#the_office_sakh',
	'#theofficeart',
	'#theofficeblinddate',
	'#theofficebloopers',
	'#theofficebr',
	'#theofficebrasil',
	'#theofficecabo',
	'#theofficecake',
	'#theofficeclips',
	'#theofficecookies',
	'#theofficedeletedscenes',
	'#theofficeedit',
	'#theofficeedits',
	'#theofficefacts',
	'#theofficefanart',
	'#theofficefans',
	'#theofficeforever',
	'#theofficefreicaneca',
	'#theofficefunkopops',
	'#theofficefunny',
	'#theofficegroup',
	'#theofficeindia',
	'#theofficejokes',
	'#theofficeladies',
	'#theofficeladiespodcast',
	'#theofficeletters',
	'#theofficememe',
	'#theofficememesfunny',
	'#theofficemiami1',
	'#theofficemoments',
	'#theofficemusical',
	'#theofficenbc',
	'#theofficenubra',
	'#theofficenyc',
	'#theofficeofangelascott',
	'#theofficereunion',
	'#theofficerp',
	'#theofficescenes',
	'#theofficetattoo',
	'#theofficetattoos',
	'#theofficetrivia',
	'#theofficetvshow',
	'#theofficeuk',
	'#theofficeusa',
	'#theofficevideos',
	'#theovaloffice',
	'#thepostoffice',
	'#theusoffice',
	'#theviewfrommyoffice',
	'#theworldismyoffice',
	'#zumbahomeoffice',
];

let memeComments = [
	'I underestimated you Michael. Yea, well maybe next time, you better estimate me.  -MichaelScott',
	'Live and let live. Im not familiar with that expression. Its a James Bond.  -MichaelScott',
	'I like this chair, it offers good support and is ErckleNomickly correct.  -MichaelScott',
	'I went to the park tryna feed the pigeons. I guess they all flew west for the winter.  -MichaelScott',
	'They are in for a bitter suprise... I am not to be truffled with.  -MichaelScott',
	'Remember, They are trying to make me an escape goat.  -MichaelScott',
	'You all encouraged it! You were complissit! You are all successories!  -MichaelScott',
	'This is like the Blair ..Witch ..Hunt ..Project.  -MichaelScott',
	'Jim halpert is smudge and arrogant... I think you mean smug.  Theres that arrogance.  -MichaelScott',
	'And it is up to me... to get rid of the curse... that hit meredith with my car.  -MichaelScott',
	'Nailed it!  -andybernard',
	'Dont drop the soap! Dont drop the soap!  -Prisonmike',
	'And you my friend, would be... Da Bell-Of-Da-Ball  -PrisonMike',
	"You know, stuff like.. 'Fleece it out' and 'Going mach five.'  -DarrylPhilbin",
	'Well well well, how the turntables.  -MichaelScott',
	"Webster's Dictionary defines wedding as.. the fusing of two metals with a hot torch.  -MichaelScott",
	'Who is Justice Beaver?  -DwightSchrute',
	'I am faster than 80 percent of all snakes.  -DwightSchrute',
	'Bears...Beats...Battlestar Galactica.  -JimHalpert',
	"Hi, I'm Date Mike. Nice to meet me.  -MichaelScott",
	'Which Bear is Best?  -DwightSchrute',
	"Sometimes I start a sentence, without knowing where it's going. I just hope I find it along the way.  -MichaelScott",
	'Bread is the paper of the food industry. You write your sandwich on it.  -DwightSchrute',
	"Ain't no party like a Scranton party cause a Scranton party don't stop!  -MichaelScott",
	'Bob Vance, Vance Refrigeration.   -BobVance',
	'Break me off a piece of that app-le-sauce.   -AndyBernard',
	"Now, let's say you and I go toe-to-toe on bird law... and see who comes out the victor.  -CharlieKelly",
	'We are at Threat Level Midnight.  -MichaelScott',
	'Cause... Science is a liar, sometimes.   -FatMac',
	'I love my employees even though I hit one of you with my car.  -MichaelScott',
	'When the king of Nigeria emails you directly, asking for help, you help.  -MichaelScott',
	'Rit-dit-dit-doooo!   -AndyBernard',
	'This is ham, soaked in rum... RUM-HAM!   -FrankReynolds',
	"Shadynasty's Jazz Club.   -FrankReynolds",
	'Fight Milk! The first alcoholic dairy based protein drink for bodyguards!   -Charliekelly',
	'Parkor... Hardcore Parkor!  -MichaelScott',
	'Jim and I are great friends. We hang out a ton, mostly at work.  -MichaelScott',
	"White-collar and blue-collar. I don't see it that way... Cause I'm collar blind.  -MichaelScott",
	"I'm an early bird and a night owl. So I'm wise and have worms.  -MichaelScott",
	"I love inside jokes. I'd love to be a part of one someday.  -MichaelScott",
	'I really should have a tweeter account.  -DwightSchrute',
	'Getting hooked on MegaDesk was my fault. All I care about is Getting More MegaDesk.  -DwightSchrute',
	'WHERE ARE THE TURTLES!?!?!  -MichaelScott',
	"There's no such thing as an appropriate joke. That's why it's called a joke.  -MichaelScott",
	"Don't ever, for any reason, do anything to anyone, for any reason, ever, no matter what.  -MichaelScott",
	'The only time I set the bar low is for limbo.  -MichaelScott',
	'I… declare…. bankruptcy!  -MichaelScott',
	"You miss 100% of the shots you don't take.  --Wayne Gretzky  -MichaelScott",
	"Occasionally, I'll hit someone with my car. So sue me.  -MichaelScott",
	'Why waste time say lot word when few word do trick?  -KevinMalone',
	'Its all about my bonus.  -StanleyHudson',
	'42.7 percent of all statistics are made up on the spot.  -MichaelScott',
	"Supposedly, Recyclops's home planet was destroyed by Polluticons.  -JimHalpert",
	'Get back to me ASAP as possible.  -MichaelScott',
	'Need an ark? I Noah guy.  -MichaelScott',
	"I'm not usually the butt of the joke. I'm usually the face of the joke.  -MichaelScott",
	'I am Beyonce, always.  -MichaelScott',
	'And I will travel to New Zealand. And walk the Lord of the Rings trail to Mordor.  -DwightSchrute',
	'CharDee MacDennis 2: Electric Boogaloo.  -FrankReynolds',
	'RUM-HAMMM!  -FrankReynolds',
	"When I discovered YouTube, I didn't work for five days.  -MichaelScott",
	"I love catching people in the act. That's why I always whip open doors.  -DwightSchrute",
	'Always the Padawan, never the Jedi.  -DwightSchrute',
	'Three words: hardworking, alpha male, jackhammer, merciless, insatiable.  -DwightSchrute',
	"I'm not fat... I'm cultivating mass.   -FatMac",
	"You're a master of karate and friendship for everyone.  -Dayman",
	'I say dance, they say, How high?  -MichaelScott',
	'The eyes are the groin of the face.  -DwightSchrute',
	'Hey Goldenface!  -MichaelScarn',
	'Fool me once, strike one. Fool me twice, strike three.  -MichaelScott',
	"This is a dream that I've had since lunch… and I'm not giving it up now.  -MichaelScott",
	'I have a lot of questions. Number one, how dare you? -KellyKapoor',
	"Dwigt... Wait, who's Dwigt?  -DwightSchrute",
	'Would I rather be feared or loved? I want people to be afraid of how much they love me.  -MichaelScott',
	'Identity theft is not a joke, Jim!  -DwightSchrute',
	'Why are you the way that you are?  -MichaelScott',
	"I am fast. I'm somewhere between a snake and a mongoose and a panther.  -DwightSchrute",
	"How is it possible that in five years, I've had two engagements and only one chair?  -CreedThoughts",
	'An office is a place where dreams come true.  -MichaelScott',
	'Through concentration, I can raise and lower my cholesterol at will.  -DwightSchrute',
	'Bears. Beets. Battlestar Galactica.   -JimHalpert',
	"That's what she said.  -MichaelScott",
	"I opened this place after I came back from Vietnam... Ooh, Vietnam. I hear it's lovely.  -MichaelScott",
	'Fight Milk! The first alcoholic dairy based protein drink for bodyguards!  -CharlieKelly',
	'The D.E.N.N.I.S. system.  -DennisReynolds',
	"When Pam gets Michaels old chair, I get Pams old chair. Then I'll have two chairs.  -CreedBratton",
	"Your department's just you, right? Yes, Jim, but I am not easy to manage.  -KellyKapoor",
	'Bipity bopity, gimmie the zopity.  -MichaelScott',
	'Dinkin Flicka.  -DarrylPhilbin',
	'Fluffy-Fingers.  -DarrylPhilbin',
	'The worst thing about prison was the dementors, they were flyin all over the place and were scary.  -PrisonMike',
	'Oh, my resolution was to get more attention.   -KellyKapoor',
	'When someone smiles at me, all I see is a chimpanzee begging for its life.  -DwightSchrute',
	"I'm always thinking one step ahead, like a.. carpenter.. that makes stairs.  -MichaelScott",
	'What was the Dentists name Dwight?  ...Crentist.  -MichaelScott',
	"I talk a lot, so I've learned to tune myself out.   -KellyKapoor",
	'I Know NOTHING!!   -MichaelScott',
	'The Michael Scott Paper Company.  -MichaelScott',
	'With great power comes a great electricity bill.  -MichaelScott',
	'You cheated on me? After I specifically asked you not to!?   -MichaelScott',
	"I'm not superstitious, but I am a little stitious.  -MichaelScott",
	"In the end, the greatest snowball isn't a snowball at all. It's fear. Merry Christmas.  -DwightSchrute",
	"Beef! It's what's for dinner... Who wants some man meat?   -MichaelScott",
	'I overslept. Damn rooster didnt crow.  -DwightSchrute',
	'That is quite the rap sheet Prison Mike. And I never got caught neither. -PrisonMike',
	'Gruel Sandwiches, Gruel Omletes, plus you can eat ya own hair. -PrisonMike',
];

for (let m = 0; m < 30; m++) {
	let memeTag = new Array(memeTags[r(0, memeTags.length)]);
	console.log(memeTag.toString());
}

module.exports = { memeAccounts, memeTags, memeComments };
