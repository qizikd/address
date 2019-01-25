var randomBytes = require('randombytes')
var BigInteger = require('bigi')
var ecurve = require('ecurve')
var crypto = require('crypto')
var cs = require('coinstring')
var secp256k1 = ecurve.getCurveByName('secp256k1')
var randombytes = randomBytes(32).toString('hex')
//var privateKey = new Buffer(randombytes, 'hex')


var hex = '8F72F6B29E6E225A36B68DFE333C7CE5E55D83249D3D2CD6332671FA445C4DD3';
var privArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
    return parseInt(h, 16)
}));
var privateKey = Buffer.from(privArray,'hex');

console.log("私钥:" + privateKey.toString('hex'))
var ecparams = ecurve.getCurveByName('secp256k1')
var curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey))
var x = curvePt.affineX.toBuffer(32)
var y = curvePt.affineY.toBuffer(32)

var publicKey = Buffer.concat([new Buffer([0x04]), x, y])
console.log("标准地址:" + publicKey.toString('hex'))


//compressed
publicKey = curvePt.getEncoded(true) //true forces compressed public key
console.log("compressed:" + publicKey.toString('hex'))


var sha = crypto.createHash('sha256').update(publicKey).digest()
var pubkeyHash = crypto.createHash('rmd160').update(sha).digest()

// pubkeyHash of compressed public key
console.log("pubkeyHash:" + pubkeyHash.toString('hex'))


// address of compressed public key
console.log("压缩地址：" + cs.encode(pubkeyHash, 0x0)) //<-- 0x0 is for public addresses
//这里还缺失校验和Base58编码

console.log(cs.encode(privateKey, 0x80)) //<--- 0x80 is for private addresses


console.log(cs.encode(Buffer.concat([privateKey, new Buffer([0])]), 0x80)) // <-- compressed private address