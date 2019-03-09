require('./js/wordlist_english');
require('./js/wordlist_japanese');
require('./js/wordlist_spanish');
require('./js/wordlist_chinese_simplified');
require('./js/wordlist_chinese_traditional');
require('./js/wordlist_french');
require('./js/wordlist_italian');
require('./js/wordlist_korean');

require('./js/jsbip39');
var bitcoinjs = require('./js/bitcoinjs-3.3.2');
require('./js/bitcoinjs-bip38-2.0.2');
require('./js/bitcoinjs-extensions');
var bchaddr = require('./js/bchaddrjs-0.2.1')
var ethUtil = require('./js/ethereumjs-util');

var basex = require('base-x')
var crypto = require('crypto');

var mnemonics = {
    "english": new Mnemonic("english"),
    "chinese_simplified": new Mnemonic("chinese_simplified"),
    "chinese_traditional": new Mnemonic("chinese_traditional"),
    "french": new Mnemonic("french"),
    "italian": new Mnemonic("italian"),
    "japanese": new Mnemonic("japanese"),
    "korean": new Mnemonic("korean"),
    "spanish": new Mnemonic("spanish")
};
var mnemonic = mnemonics["english"];

var bip44purpose = 44;  //固定44
var bip44coin = 0;   //根据币种来变化

var network = bitcoinjs.bitcoin.networks.bitcoin;
var networkindex = 13;

function setHdCoin(i){
    bip44coin = i;
}

var networks = [
    {
        name: "AC - Asiacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.asiacoin;
            setHdCoin(51);
        },
    },
    {
        name: "ACC - Adcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.adcoin;
            setHdCoin(161);
        },
    },
    {
        name: "AUR - Auroracoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.auroracoin;
            setHdCoin(85);
        },
    },
    {
        name: "AXE - Axe",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.axe;
            setHdCoin(4242);
        },
    },
    {
        name: "ANON - ANON",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.anon;
            setHdCoin(220);
        },
    },
    {
        name: "BCA - Bitcoin Atom",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.atom;
            setHdCoin(185);
        },
    },
    {
        name: "BCH - Bitcoin Cash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(145);
        },
    },
    {
        name: "BEET - Beetlecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.beetlecoin;
            setHdCoin(800);
        },
    },
    {
        name: "BELA - Belacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.belacoin;
            setHdCoin(73);
        },
    },
    {
        name: "BLK - BlackCoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.blackcoin;
            setHdCoin(10);
        },
    },
    {
        name: "BND - Blocknode",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.blocknode;
            setHdCoin(2941);
        },
    },
    {
        name: "tBND - Blocknode Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.blocknode_testnet;
            setHdCoin(1);
        },
    },
    {
        name: "BRIT - Britcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.britcoin;
            setHdCoin(70);
        },
    },
    {
        name: "BSD - Bitsend",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitsend;
            setHdCoin(91);
        },
    },
    {
        name: "BTA - Bata",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bata;
            setHdCoin(89);
        },
    },
    {
        name: "BTC - Bitcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(0);
        },
    },
    {
        name: "BTC - Bitcoin Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.testnet;
            setHdCoin(1);
        },
    },
    {
        name: "BITG - Bitcoin Green",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoingreen;
            setHdCoin(222);
        },
    },
    {
        name: "BTCP - Bitcoin Private",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoinprivate;
            setHdCoin(183);
        },
    },
    {
        name: "BTCZ - Bitcoinz",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoinz;
            setHdCoin(177);
        },
    },
    {
        name: "BTDX - BitCloud",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcloud;
            setHdCoin(218);
        },
    },
    {
        name: "BTG - Bitcoin Gold",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bgold;
            setHdCoin(156);
        },
    },
    {
        name: "BTX - Bitcore",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcore;
            setHdCoin(160);
        },
    },
    {
        name: "CCN - Cannacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.cannacoin;
            setHdCoin(19);
        },
    },
    {
        name: "CESC - Cryptoescudo",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.cannacoin;
            setHdCoin(111);
        },
    },
    {
        name: "CDN - Canadaecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.canadaecoin;
            setHdCoin(34);
        },
    },
    {
        name: "CLAM - Clams",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.clam;
            setHdCoin(23);
        },
    },
    {
        name: "CLO - Callisto",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(820);
        },
    },
    {
        name: "CLUB - Clubcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.clubcoin;
            setHdCoin(79);
        },
    },
    {
        name: "CMP - Compcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.compcoin;
            setHdCoin(71);
        },
    },
    {
        name: "CRAVE - Crave",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.crave;
            setHdCoin(186);
        },
    },
    {
        name: "CRW - Crown",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.crown;
            setHdCoin(72);
        },
    },
    {
        name: "DASH - Dash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.dash;
            setHdCoin(5);
        },
    },
    {
        name: "DASH - Dash Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.dashtn;
            setHdCoin(1);
        },
    },
    {
        name: "DFC - Defcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.defcoin;
            setHdCoin(1337);
        },
    },
    {
        name: "DGB - Digibyte",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.digibyte;
            setHdCoin(20);
        },
    },
    {
        name: "DGC - Digitalcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.digitalcoin;
            setHdCoin(18);
        },
    },
    {
        name: "DMD - Diamond",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.diamond;
            setHdCoin(152);
        },
    },
    {
        name: "DNR - Denarius",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.denarius;
            setHdCoin(116);
        },
    },
    {
        name: "DOGE - Dogecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.dogecoin;
            setHdCoin(3);
        },
    },
    {
        name: "ECN - Ecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.ecoin;
            setHdCoin(115);
        },
    },
    {
        name: "EDRC - Edrcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.edrcoin;
            setHdCoin(56);
        },
    },
    {
        name: "EFL - Egulden",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.egulden;
            setHdCoin(78);
        },
    },
    {
        name: "EMC2 - Einsteinium",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.einsteinium;
            setHdCoin(41);
        },
    },
    {
        name: "ERC - Europecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.europecoin;
            setHdCoin(151);
        },
    },
    {
        name: "ETC - Ethereum Classic",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(61);
        },
    },
    {
        name: "ETH - Ethereum",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(60);
        },
    },
    {
        name: "EXCL - Exclusivecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.exclusivecoin;
            setHdCoin(190);
        },
    },
    {
        name: "EXCC - ExchangeCoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.exchangecoin;
            setHdCoin(0);
        },
    },
    {
        name: "EXP - Expanse",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(40);
        },
    },
    {
        name: "FJC - Fujicoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.fujicoin;
            setHdCoin(75);
        },
    },
    {
        name: "FLASH - Flashcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.flashcoin;
            setHdCoin(120);
        },
    },
    {
        name: "FRST - Firstcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.firstcoin;
            setHdCoin(167);
        },
    },
    {
        name: "FTC - Feathercoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.feathercoin;
            setHdCoin(8);
        },
    },
    {
        name: "GAME - GameCredits",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.game;
            setHdCoin(101);
        },
    },
    {
        name: "GBX - Gobyte",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.gobyte;
            setHdCoin(176);
        },
    },
    {
        name: "GCR - GCRCoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.gcr;
            setHdCoin(79);
        },
    },
    {
        name: "GRC - Gridcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.gridcoin;
            setHdCoin(84);
        },
    },
    {
        name: "HNC - Helleniccoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.helleniccoin;
            setHdCoin(168);
        },
    },
    {
        name: "HUSH - Hush",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.hush;
            setHdCoin(197);
        },
    },
    {
        name: "INSN - Insane",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.insane;
            setHdCoin(68);
        },
    },
    {
        name: "IOP - Iop",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.iop;
            setHdCoin(66);
        },
    },
    {
        name: "IXC - Ixcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.ixcoin;
            setHdCoin(86);
        },
    },
    {
        name: "JBS - Jumbucks",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.jumbucks;
            setHdCoin(26);
        },
    },
    {
        name: "KMD - Komodo",
        bip49available: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.komodo;
            setHdCoin(141);
        },
    },
    {
        name: "KOBO - Kobocoin",
        bip49available: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.kobocoin;
            setHdCoin(196);
        },
    },
    {
        name: "LBC - Library Credits",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.lbry;
            setHdCoin(140);
        },
    },
    {
        name: "LCC - Litecoincash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.litecoincash;
            setHdCoin(192);
        },
    },
    {
        name: "LDCN - Landcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.landcoin;
            setHdCoin(63);
        },
    },
    {
        name: "LINX - Linx",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.linx;
            setHdCoin(114);
        },
    },
    {
        name: "LTC - Litecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.litecoin;
            setHdCoin(2);
        },
    },
    {
        name: "LTZ - LitecoinZ",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.litecoinz;
            setHdCoin(221);
        },
    },
    {
        name: "LYNX - Lynx",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.lynx;
            setHdCoin(191);
        },
    },
    {
        name: "MAZA - Maza",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.maza;
            setHdCoin(13);
        },
    },
    {
        name: "MEC - Megacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.megacoin;
            setHdCoin(217);
        },
    },
    {
        name: "MIX - MIX",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(76);
        },
    },
    {
        name: "MNX - Minexcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.minexcoin;
            setHdCoin(182);
        },
    },
    {
        name: "MONA - Monacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.monacoin,
                setHdCoin(22);
        },
    },
    {
        name: "MUSIC - Musicoin",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(184);
        },
    },
    {
        name: "NAV - Navcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.navcoin;
            setHdCoin(130);
        },
    },
    {
        name: "NEBL - Neblio",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.neblio;
            setHdCoin(146);
        },
    },
    {
        name: "NEOS - Neoscoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.neoscoin;
            setHdCoin(25);
        },
    },
    {
        name: "NLG - Gulden",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.gulden;
            setHdCoin(87);
        },
    },
    {
        name: "NMC - Namecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.namecoin;
            setHdCoin(7);
        },
    },
    {
        name: "NRG - Energi",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.energi;
            setHdCoin(204);
        },
    },
    {
        name: "NRO - Neurocoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.neurocoin;
            setHdCoin(110);
        },
    },
    {
        name: "NSR - Nushares",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.nushares;
            setHdCoin(11);
        },
    },
    {
        name: "NYC - Newyorkc",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.newyorkc;
            setHdCoin(179);
        },
    },
    {
        name: "NVC - Novacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.novacoin;
            setHdCoin(50);
        },
    },
    {
        name: "OK - Okcash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.okcash;
            setHdCoin(69);
        },
    },
    {
        name: "OMNI - Omnicore",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.omnicore;
            setHdCoin(200);
        },
    },
    {
        name: "ONX - Onixcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.onixcoin;
            setHdCoin(174);
        },
    },
    {
        name: "PHR - Phore",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.phore;
            setHdCoin(444);
        },
    },
    {
        name: "PINK - Pinkcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.pinkcoin;
            setHdCoin(117);
        },
    },
    {
        name: "PIRL - Pirl",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(164);
        },
    },
    {
        name: "PIVX - PIVX",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.pivx;
            setHdCoin(119);
        },
    },
    {
        name: "PIVX - PIVX Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.pivxtestnet;
            setHdCoin(1);
        },
    },
    {
        name: "POA - Poa",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(178);
        },
    },
    {
        name: "POSW - POSWcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.poswcoin;
            setHdCoin(47);
        },
    },
    {
        name: "POT - Potcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.potcoin;
            setHdCoin(81);
        },
    },
    {
        name: "PPC - Peercoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.peercoin;
            setHdCoin(6);
        },
    },
    {
        name: "PRJ - ProjectCoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.projectcoin;
            setHdCoin(533);
        },
    },
    {
        name: "PSB - Pesobit",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.pesobit;
            setHdCoin(62);
        },
    },
    {
        name: "PUT - Putincoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.putincoin;
            setHdCoin(122);
        },
    },
    {
        name: "RVN - Ravencoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.ravencoin;
            setHdCoin(175);
        },
    },
    {
        name: "RBY - Rubycoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.rubycoin;
            setHdCoin(16);
        },
    },
    {
        name: "RDD - Reddcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.reddcoin;
            setHdCoin(4);
        },
    },
    {
        name: "RVR - RevolutionVR",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.revolutionvr;
            setHdCoin(129);
        },
    },
    {
        name: "SAFE - Safecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.safecoin;
            setHdCoin(19165);
        },
    },
    {
        name: "SLS - Salus",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.salus;
            setHdCoin(63);
        },
    },
    {
        name: "SDC - ShadowCash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.shadow;
            setHdCoin(35);
        },
    },
    {
        name: "SDC - ShadowCash Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.shadowtn;
            setHdCoin(1);
        },
    },
    {
        name: "SLM - Slimcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.slimcoin;
            setHdCoin(63);
        },
    },
    {
        name: "SLM - Slimcoin Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.slimcointn;
            setHdCoin(111);
        },
    },
    {
        name: "SLR - Solarcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.solarcoin;
            setHdCoin(58);
        },
    },
    {
        name: "SMLY - Smileycoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.smileycoin;
            setHdCoin(59);
        },
    },
    {
        name: "STASH - Stash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.stash;
            setHdCoin(0xC0C0);
        },
    },
    {
        name: "STASH - Stash Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.stashtn;
            setHdCoin(0xCAFE);
        },
    },
    {
        name: "STRAT - Stratis",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.stratis;
            setHdCoin(105);
        },
    },
    {
        name: "TSTRAT - Stratis Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.stratistest;
            setHdCoin(105);
        },
    },
    {
        name: "SYS - Syscoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.syscoin;
            setHdCoin(57);
        },
    },
    {
        name: "THC - Hempcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.hempcoin;
            setHdCoin(113);
        },
    },
    {
        name: "TOA - Toa",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.toa;
            setHdCoin(159);
        },
    },
    {
        name: "USC - Ultimatesecurecash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.ultimatesecurecash;
            setHdCoin(112);
        },
    },
    {
        name: "USNBT - NuBits",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.nubits;
            setHdCoin(12);
        },
    },
    {
        name: "UNO - Unobtanium",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.unobtanium;
            setHdCoin(92);
        },
    },
    {
        name: "VASH - Vpncoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.vpncoin;
            setHdCoin(33);
        },
    },
    {
        name: "VIA - Viacoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.viacoin;
            setHdCoin(14);
        },
    },
    {
        name: "VIA - Viacoin Testnet",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.viacointestnet;
            setHdCoin(1);
        },
    },
    {
        name: "VIVO - Vivo",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.vivo;
            setHdCoin(166);
        },
    },
    {
        name: "VTC - Vertcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.vertcoin;
            setHdCoin(28);
        },
    },
    {
        name: "WC - Wincoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.wincoin;
            setHdCoin(181);
        },
    },
    {
        name: "XAX - Artax",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.artax;
            setHdCoin(219);
        },
    },
    {
        name: "XBC - Bitcoinplus",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoinplus;
            setHdCoin(65);
        },
    },
    {
        name: "XMY - Myriadcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.myriadcoin;
            setHdCoin(90);
        },
    },
    {
        name: "XRP - Ripple",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.bitcoin;
            setHdCoin(144);
        },
    },
    {
        name: "XVC - Vcash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.vcash;
            setHdCoin(127);
        },
    },
    {
        name: "XVG - Verge",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.verge;
            setHdCoin(77);
        },
    },
    {
        name: "XUEZ - Xuez",
        segwitAvailable: false,
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.xuez;
            setHdCoin(225);
        },
    },
    {
        name: "XWC - Whitecoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.whitecoin;
            setHdCoin(155);
        },
    },
    {
        name: "XZC - Zcoin",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.zcoin;
            setHdCoin(136);
        },
    },
    {
        name: "ZCL - Zclassic",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.zclassic;
            setHdCoin(147);
        },
    },
    {
        name: "ZEC - Zcash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.zcash;
            setHdCoin(133);
        },
    },
    {
        name: "ZEN - Zencash",
        onSelect: function() {
            network = bitcoinjs.bitcoin.networks.zencash;
            setHdCoin(121);
        },
    },
]

function convertRippleAdrr(address) {
    return basex('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode(
        basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(address)
    )
}

function convertRipplePriv(priv)   {
    return basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(priv).toString("hex").slice(2,66)
}

function generateRandomPhrase() {
    // get the amount of entropy to use
    var numWords = parseInt(12);
    var strength = numWords / 3 * 32;
    var buffer = new Uint8Array(strength / 8);
    // create secure entropy
    const data = crypto.randomFillSync(buffer);
    // show the words
    var words = mnemonic.toMnemonic(data);
    return words;
}

function calcBip32RootKeyFromMnemonic(phrase, passphrase) {
    var seed = mnemonic.toSeed(phrase, passphrase);
    var bip32RootKey = bitcoinjs.bitcoin.HDNode.fromSeedHex(seed, network);
    var rootKey = bip32RootKey.toBase58();
    //console.log("seed:",seed);
    //console.log("rootKey:",rootKey);
    return bip32RootKey;
}

function getDerivationPath(purpose, coin, account, change) {
    var path = "m/";
    path += purpose + "'/";
    path += coin + "'/";
    path += account + "'/";
    path += change;
    bip44path = path;
    //console.log("Using derivation path from BIP44 tab: " + bip44path);
    return bip44path;
}

function findDerivationPathErrors(path,bip32RootKey) {
    // TODO is not perfect but is better than nothing
    // Inspired by
    // https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#test-vectors
    // and
    // https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
    var maxDepth = 255; // TODO verify this!!
    var maxIndexValue = Math.pow(2, 31); // TODO verify this!!
    if (path[0] != "m") {
        return "First character must be 'm'";
    }
    if (path.length > 1) {
        if (path[1] != "/") {
            return "Separator must be '/'";
        }
        var indexes = path.split("/");
        if (indexes.length > maxDepth) {
            return "Derivation depth is " + indexes.length + ", must be less than " + maxDepth;
        }
        for (var depth = 1; depth<indexes.length; depth++) {
            var index = indexes[depth];
            var invalidChars = index.replace(/^[0-9]+'?$/g, "")
            if (invalidChars.length > 0) {
                return "Invalid characters " + invalidChars + " found at depth " + depth;
            }
            var indexValue = parseInt(index.replace("'", ""));
            if (isNaN(depth)) {
                return "Invalid number at depth " + depth;
            }
            if (indexValue > maxIndexValue) {
                return "Value of " + indexValue + " at depth " + depth + " must be less than " + maxIndexValue;
            }
        }
    }
    // Check root key exists or else derivation path is useless!
    if (!bip32RootKey) {
        return "No root key";
    }
    // Check no hardened derivation path when using xpub keys
    var isXpubkey = bip32RootKey.isNeutered();
    if (isXpubkey) {
        return "Hardened derivation path is invalid with xpub key";
    }
    return false;
}

function calcBip32ExtendedKey(path,bip32RootKey) {
    // Check there's a root key to derive from
    if (!bip32RootKey) {
        return bip32RootKey;
    }
    var extendedKey = bip32RootKey;
    // Derive the key from the path
    var pathBits = path.split("/");
    for (var i=0; i<pathBits.length; i++) {
        var bit = pathBits[i];
        var index = parseInt(bit);
        if (isNaN(index)) {
            continue;
        }
        var hardened = bit[bit.length-1] == "'";
        var isPriv = !(extendedKey.isNeutered());
        var invalidDerivationPath = hardened && !isPriv;
        if (invalidDerivationPath) {
            extendedKey = null;
        }
        else if (hardened) {
            extendedKey = extendedKey.deriveHardened(index);
        }
        else {
            extendedKey = extendedKey.derive(index);
        }
    }
    return extendedKey
}

function displayBip44Info(bip44path,bip32RootKey) {
    // Calculate the account extended keys
    var accountExtendedKey = calcBip32ExtendedKey(bip44path,bip32RootKey);
    var accountXprv = accountExtendedKey.toBase58();
    var accountXpub = accountExtendedKey.neutered().toBase58();
    // Display the extended keys
    console.log("BIP32 Extended Private Key:",accountXprv)
    console.log("BIP32 Extended Public Key:",accountXpub)
}

function calculateValues(bip32ExtendedKey,bip44path,bip44index) {

    var useBip38 = false;
    var bip38password = "";

    // derive HDkey for this row of the table
    var key = bip32ExtendedKey.derive(bip44index);
    // bip38 requires uncompressed keys
    // see https://github.com/iancoleman/bip39/issues/140#issuecomment-352164035
    var keyPair = key.keyPair;
    var useUncompressed = useBip38;
    if (useUncompressed) {
        keyPair = new bitcoinjs.bitcoin.ECPair(keyPair.d, null, { network: network, compressed: false });
    }
    // get address
    var address = keyPair.getAddress().toString();
    // get privkey
    var hasPrivkey = !key.isNeutered();
    var privkey = "NA";
    if (hasPrivkey) {
        privkey = keyPair.toWIF();
        // BIP38 encode private key if required
        if (useBip38) {
            privkey = bitcoinjsBip38.encrypt(keyPair.d.toBuffer(), false, bip38password, function(p) {
                console.log("Progressed " + p.percent.toFixed(1) + "% for index " + index);
            });
        }
    }
    // get pubkey
    var pubkey = keyPair.getPublicKeyBuffer().toString('hex');
    var indexText = bip44path + "/" + bip44index;

    // Ethereum values are different
    if ((networks[networkindex].name == "ETH - Ethereum")
        || (networks[networkindex].name == "ETC - Ethereum Classic")
        || (networks[networkindex].name == "PIRL - Pirl")
        || (networks[networkindex].name == "MIX - MIX")
        || (networks[networkindex].name == "MUSIC - Musicoin")
        || (networks[networkindex].name == "POA - Poa")
        || (networks[networkindex].name == "EXP - Expanse")
        || (networks[networkindex].name == "CLO - Callisto")) {
        var privKeyBuffer = keyPair.d.toBuffer(32);
        privkey = privKeyBuffer.toString('hex');
        var addressBuffer = ethUtil.privateToAddress(privKeyBuffer);
        var hexAddress = addressBuffer.toString('hex');
        var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
        address = ethUtil.addHexPrefix(checksumAddress);
        privkey = ethUtil.addHexPrefix(privkey);
        pubkey = ethUtil.addHexPrefix(pubkey);
    }
    // Ripple values are different
    if (networks[networkindex].name == "XRP - Ripple") {
        privkey = convertRipplePriv(privkey);
        address = convertRippleAdrr(address);
    }
    // Bitcoin Cash address format may vary
    if (networks[networkindex].name == "BCH - Bitcoin Cash") {
        var bchAddrType = "cashaddr";
        if (bchAddrType == "cashaddr") {
            address = bchaddr.toCashAddress(address);
        }
        else if (bchAddrType == "bitpay") {
            address = bchaddr.toBitpayAddress(address);
        }
    }
    //console.log(indexText, address, pubkey, privkey);
    var json = {};
    json.coin = networks[networkindex].name;
    json.path = indexText;
    json.address = address;
    json.pubkey = pubkey;
    json.privkey = privkey;
    return json;
    //addAddressToList(indexText, address, pubkey, privkey);
}

//币种索引，助记词，密码，索引
function generateAddr(coinindex, phrase, passphrase, account, change, index){
    networkindex = coinindex;
    var n = networks[networkindex];
    n.onSelect();
    //var word = "tag gloom security lobster jump favorite decrease sheriff celery maid skate gloom ostrich kick street";
    var bip32RootKey = calcBip32RootKeyFromMnemonic(phrase,passphrase);
    var bip44account = account;
    var bip44change = change;
    var bip44index = index;

    var bip44path = getDerivationPath(bip44purpose,bip44coin,bip44account,bip44change);
    var errorText = findDerivationPathErrors(bip44path,bip32RootKey);
    if (errorText) {
        console.log(errorText);
        return;
    }
    bip32ExtendedKey = calcBip32ExtendedKey(bip44path,bip32RootKey);
    return calculateValues(bip32ExtendedKey,bip44path,bip44index);
}

var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.post('/generate',multipartMiddleware, function (req, res, next) {
    try
    {
        var datajson = req.body;
        console.log((new Date()).toLocaleString(),"生成地址:",JSON.stringify(datajson));
        //比特币 15，以太坊 46,瑞波币 135，狗狗币 39, ETC 45, BCH 6
        var coinindex = 15;
        if((datajson.coinindex != undefined) & (!isNaN(parseInt(datajson.coinindex)))){
            coinindex = parseInt(datajson.coinindex);
        }
        //获取助记词语种，默认英语
        if (datajson.mnemonictype != undefined){
            const mnemonictype = datajson.mnemonictype;
            mnemonic = mnemonics[mnemonictype];
        }
        if (mnemonic == undefined){
            mnemonic = mnemonics["english"];
        }
        var phrase = datajson.phrase;
        if (phrase == undefined){
            phrase = generateRandomPhrase();
        }
        const passphrase = datajson.passphrase;
		var account = 0;
        if((datajson.account != undefined) & (!isNaN(parseInt(datajson.account)))){
            account = parseInt(datajson.account);
        }	
		var change = 0;
        if((datajson.change != undefined) & (!isNaN(parseInt(datajson.change)))){
            change = parseInt(datajson.change);
        }	
        var index = 0;
        if((datajson.index != undefined) & (!isNaN(parseInt(datajson.index)))){
            index = parseInt(datajson.index);
        }
		
        console.log(coinindex, phrase, passphrase, account, change, index);
        var addrinfo = generateAddr(coinindex, phrase, passphrase, account, change, index);
        //返回助记词
        addrinfo.phrase = phrase;

        var json = {};
        json.errcode = 0;
        json.data = addrinfo;
        console.log((new Date()).toLocaleString(),"返回值:",JSON.stringify(json));
        res.end(JSON.stringify(json))

    }catch(err){
        console.log("generate error:",err);
        var json = {};
        json.errcode = -1;
        json.msg = err.toString();
        console.log((new Date()).toLocaleString(),"返回值:",JSON.stringify(json));
        res.end(JSON.stringify(json));
    }
});

router.get('/listcoin',jsonParser, function (req, res, next) {
    var json = [];
    for (var i=0; i<networks.length; i++) {
        var item = {};
        item.index = i;
        item.coin = networks[i].name;
        json[i] = item;
    }
    res.end(JSON.stringify(json));
});


module.exports = router;
