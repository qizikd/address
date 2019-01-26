1、路由 post /generate 根据助记词生成私钥及地址

 参数：coinindex 币种索引 *必须的,phrase 助记词,passphrase 密码,index path最后一位的索引值,mnemonictype 生成助记词语种
 
 常用币种索引：比特币 15，以太坊 46,瑞波币 135，狗狗币 39, ETC 45, BCH 6
 
 助记词语种：英语 english,简体中文 chinese_simplified，繁体中文 chinese_traditional,法语 french,意大利 italian,日本 japanese，韩语 korean,西班牙 spanish

2、路由 get /listcoin 列出来所有支持的币种

[
    {
        "index": 0,
        "coin": "AC - Asiacoin"
    },
    {
        "index": 1,
        "coin": "ACC - Adcoin"
    },
    {
        "index": 2,
        "coin": "AUR - Auroracoin"
    },
    {
        "index": 3,
        "coin": "AXE - Axe"
    },
    {
        "index": 4,
        "coin": "ANON - ANON"
    },
    {
        "index": 5,
        "coin": "BCA - Bitcoin Atom"
    },
    {
        "index": 6,
        "coin": "BCH - Bitcoin Cash"
    },
    {
        "index": 7,
        "coin": "BEET - Beetlecoin"
    },
    {
        "index": 8,
        "coin": "BELA - Belacoin"
    },
    {
        "index": 9,
        "coin": "BLK - BlackCoin"
    },
    {
        "index": 10,
        "coin": "BND - Blocknode"
    },
    {
        "index": 11,
        "coin": "tBND - Blocknode Testnet"
    },
    {
        "index": 12,
        "coin": "BRIT - Britcoin"
    },
    {
        "index": 13,
        "coin": "BSD - Bitsend"
    },
    {
        "index": 14,
        "coin": "BTA - Bata"
    },
    {
        "index": 15,
        "coin": "BTC - Bitcoin"
    },
    {
        "index": 16,
        "coin": "BTC - Bitcoin Testnet"
    },
    {
        "index": 17,
        "coin": "BITG - Bitcoin Green"
    },
    {
        "index": 18,
        "coin": "BTCP - Bitcoin Private"
    },
    {
        "index": 19,
        "coin": "BTCZ - Bitcoinz"
    },
    {
        "index": 20,
        "coin": "BTDX - BitCloud"
    },
    {
        "index": 21,
        "coin": "BTG - Bitcoin Gold"
    },
    {
        "index": 22,
        "coin": "BTX - Bitcore"
    },
    {
        "index": 23,
        "coin": "CCN - Cannacoin"
    },
    {
        "index": 24,
        "coin": "CESC - Cryptoescudo"
    },
    {
        "index": 25,
        "coin": "CDN - Canadaecoin"
    },
    {
        "index": 26,
        "coin": "CLAM - Clams"
    },
    {
        "index": 27,
        "coin": "CLO - Callisto"
    },
    {
        "index": 28,
        "coin": "CLUB - Clubcoin"
    },
    {
        "index": 29,
        "coin": "CMP - Compcoin"
    },
    {
        "index": 30,
        "coin": "CRAVE - Crave"
    },
    {
        "index": 31,
        "coin": "CRW - Crown"
    },
    {
        "index": 32,
        "coin": "DASH - Dash"
    },
    {
        "index": 33,
        "coin": "DASH - Dash Testnet"
    },
    {
        "index": 34,
        "coin": "DFC - Defcoin"
    },
    {
        "index": 35,
        "coin": "DGB - Digibyte"
    },
    {
        "index": 36,
        "coin": "DGC - Digitalcoin"
    },
    {
        "index": 37,
        "coin": "DMD - Diamond"
    },
    {
        "index": 38,
        "coin": "DNR - Denarius"
    },
    {
        "index": 39,
        "coin": "DOGE - Dogecoin"
    },
    {
        "index": 40,
        "coin": "ECN - Ecoin"
    },
    {
        "index": 41,
        "coin": "EDRC - Edrcoin"
    },
    {
        "index": 42,
        "coin": "EFL - Egulden"
    },
    {
        "index": 43,
        "coin": "EMC2 - Einsteinium"
    },
    {
        "index": 44,
        "coin": "ERC - Europecoin"
    },
    {
        "index": 45,
        "coin": "ETC - Ethereum Classic"
    },
    {
        "index": 46,
        "coin": "ETH - Ethereum"
    },
    {
        "index": 47,
        "coin": "EXCL - Exclusivecoin"
    },
    {
        "index": 48,
        "coin": "EXCC - ExchangeCoin"
    },
    {
        "index": 49,
        "coin": "EXP - Expanse"
    },
    {
        "index": 50,
        "coin": "FJC - Fujicoin"
    },
    {
        "index": 51,
        "coin": "FLASH - Flashcoin"
    },
    {
        "index": 52,
        "coin": "FRST - Firstcoin"
    },
    {
        "index": 53,
        "coin": "FTC - Feathercoin"
    },
    {
        "index": 54,
        "coin": "GAME - GameCredits"
    },
    {
        "index": 55,
        "coin": "GBX - Gobyte"
    },
    {
        "index": 56,
        "coin": "GCR - GCRCoin"
    },
    {
        "index": 57,
        "coin": "GRC - Gridcoin"
    },
    {
        "index": 58,
        "coin": "HNC - Helleniccoin"
    },
    {
        "index": 59,
        "coin": "HUSH - Hush"
    },
    {
        "index": 60,
        "coin": "INSN - Insane"
    },
    {
        "index": 61,
        "coin": "IOP - Iop"
    },
    {
        "index": 62,
        "coin": "IXC - Ixcoin"
    },
    {
        "index": 63,
        "coin": "JBS - Jumbucks"
    },
    {
        "index": 64,
        "coin": "KMD - Komodo"
    },
    {
        "index": 65,
        "coin": "KOBO - Kobocoin"
    },
    {
        "index": 66,
        "coin": "LBC - Library Credits"
    },
    {
        "index": 67,
        "coin": "LCC - Litecoincash"
    },
    {
        "index": 68,
        "coin": "LDCN - Landcoin"
    },
    {
        "index": 69,
        "coin": "LINX - Linx"
    },
    {
        "index": 70,
        "coin": "LTC - Litecoin"
    },
    {
        "index": 71,
        "coin": "LTZ - LitecoinZ"
    },
    {
        "index": 72,
        "coin": "LYNX - Lynx"
    },
    {
        "index": 73,
        "coin": "MAZA - Maza"
    },
    {
        "index": 74,
        "coin": "MEC - Megacoin"
    },
    {
        "index": 75,
        "coin": "MIX - MIX"
    },
    {
        "index": 76,
        "coin": "MNX - Minexcoin"
    },
    {
        "index": 77,
        "coin": "MONA - Monacoin"
    },
    {
        "index": 78,
        "coin": "MUSIC - Musicoin"
    },
    {
        "index": 79,
        "coin": "NAV - Navcoin"
    },
    {
        "index": 80,
        "coin": "NEBL - Neblio"
    },
    {
        "index": 81,
        "coin": "NEOS - Neoscoin"
    },
    {
        "index": 82,
        "coin": "NLG - Gulden"
    },
    {
        "index": 83,
        "coin": "NMC - Namecoin"
    },
    {
        "index": 84,
        "coin": "NRG - Energi"
    },
    {
        "index": 85,
        "coin": "NRO - Neurocoin"
    },
    {
        "index": 86,
        "coin": "NSR - Nushares"
    },
    {
        "index": 87,
        "coin": "NYC - Newyorkc"
    },
    {
        "index": 88,
        "coin": "NVC - Novacoin"
    },
    {
        "index": 89,
        "coin": "OK - Okcash"
    },
    {
        "index": 90,
        "coin": "OMNI - Omnicore"
    },
    {
        "index": 91,
        "coin": "ONX - Onixcoin"
    },
    {
        "index": 92,
        "coin": "PHR - Phore"
    },
    {
        "index": 93,
        "coin": "PINK - Pinkcoin"
    },
    {
        "index": 94,
        "coin": "PIRL - Pirl"
    },
    {
        "index": 95,
        "coin": "PIVX - PIVX"
    },
    {
        "index": 96,
        "coin": "PIVX - PIVX Testnet"
    },
    {
        "index": 97,
        "coin": "POA - Poa"
    },
    {
        "index": 98,
        "coin": "POSW - POSWcoin"
    },
    {
        "index": 99,
        "coin": "POT - Potcoin"
    },
    {
        "index": 100,
        "coin": "PPC - Peercoin"
    },
    {
        "index": 101,
        "coin": "PRJ - ProjectCoin"
    },
    {
        "index": 102,
        "coin": "PSB - Pesobit"
    },
    {
        "index": 103,
        "coin": "PUT - Putincoin"
    },
    {
        "index": 104,
        "coin": "RVN - Ravencoin"
    },
    {
        "index": 105,
        "coin": "RBY - Rubycoin"
    },
    {
        "index": 106,
        "coin": "RDD - Reddcoin"
    },
    {
        "index": 107,
        "coin": "RVR - RevolutionVR"
    },
    {
        "index": 108,
        "coin": "SAFE - Safecoin"
    },
    {
        "index": 109,
        "coin": "SLS - Salus"
    },
    {
        "index": 110,
        "coin": "SDC - ShadowCash"
    },
    {
        "index": 111,
        "coin": "SDC - ShadowCash Testnet"
    },
    {
        "index": 112,
        "coin": "SLM - Slimcoin"
    },
    {
        "index": 113,
        "coin": "SLM - Slimcoin Testnet"
    },
    {
        "index": 114,
        "coin": "SLR - Solarcoin"
    },
    {
        "index": 115,
        "coin": "SMLY - Smileycoin"
    },
    {
        "index": 116,
        "coin": "STASH - Stash"
    },
    {
        "index": 117,
        "coin": "STASH - Stash Testnet"
    },
    {
        "index": 118,
        "coin": "STRAT - Stratis"
    },
    {
        "index": 119,
        "coin": "TSTRAT - Stratis Testnet"
    },
    {
        "index": 120,
        "coin": "SYS - Syscoin"
    },
    {
        "index": 121,
        "coin": "THC - Hempcoin"
    },
    {
        "index": 122,
        "coin": "TOA - Toa"
    },
    {
        "index": 123,
        "coin": "USC - Ultimatesecurecash"
    },
    {
        "index": 124,
        "coin": "USNBT - NuBits"
    },
    {
        "index": 125,
        "coin": "UNO - Unobtanium"
    },
    {
        "index": 126,
        "coin": "VASH - Vpncoin"
    },
    {
        "index": 127,
        "coin": "VIA - Viacoin"
    },
    {
        "index": 128,
        "coin": "VIA - Viacoin Testnet"
    },
    {
        "index": 129,
        "coin": "VIVO - Vivo"
    },
    {
        "index": 130,
        "coin": "VTC - Vertcoin"
    },
    {
        "index": 131,
        "coin": "WC - Wincoin"
    },
    {
        "index": 132,
        "coin": "XAX - Artax"
    },
    {
        "index": 133,
        "coin": "XBC - Bitcoinplus"
    },
    {
        "index": 134,
        "coin": "XMY - Myriadcoin"
    },
    {
        "index": 135,
        "coin": "XRP - Ripple"
    },
    {
        "index": 136,
        "coin": "XVC - Vcash"
    },
    {
        "index": 137,
        "coin": "XVG - Verge"
    },
    {
        "index": 138,
        "coin": "XUEZ - Xuez"
    },
    {
        "index": 139,
        "coin": "XWC - Whitecoin"
    },
    {
        "index": 140,
        "coin": "XZC - Zcoin"
    },
    {
        "index": 141,
        "coin": "ZCL - Zclassic"
    },
    {
        "index": 142,
        "coin": "ZEC - Zcash"
    },
    {
        "index": 143,
        "coin": "ZEN - Zencash"
    }
]
