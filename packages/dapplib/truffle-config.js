require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth pave coast gesture perfect equal ghost'; 
let testAccounts = [
"0x00e2cc33c8f3d20e6ed5bd8ba074615b6067b9f83fa8e43f768a49227de3347e",
"0x36985411f0b320c169f960f57732f65d87274eba3b467d358e65e76fdeb657f0",
"0x76d3331df5853f461a9a2653e9dd2bef48c2530429d10da079aff35f80888948",
"0x5431e39ec2e3c8464fe63aa1262bfbf23d9cfda64ba7053712745c5ce7bab02b",
"0x2995394db79d312fc959490e36b8cd572b61f7c2a73afec332282b88632082ed",
"0xd7d032bac2d1d060ea3db01a3d01ce06676209c56d1bc087c3041ab7b1bfa6f2",
"0x609fdab3b248b923877293f32ebb078c66a98049cee3be516c206a64f8353e87",
"0xc57afd43b11f77e2e31ded682fa439ffbc2a9d4727fa40033316a80d159081f7",
"0x6ab73fd4fc1d92c60cffb4a16f05dfe73d01d4a31680a122a1a5fcb150e44eae",
"0x115d3255f15cb553ae951163e253276437f6e72db0673d47051a0d73471f08be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


