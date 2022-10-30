require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain quality hunt opinion tail ticket'; 
let testAccounts = [
"0xb6d990e560a07960d42bf2a52e029059f23c9a103ddb8900ea6a6799f0b35550",
"0x34a2cf81a64ae7a8488b2fd9a7e2a5b17ba62dce6c0c260569838eae65212bf7",
"0x00e6d0c55858d2a9ac41c54ae59932173dbce04f199d71722c8892fd7ef1f5a2",
"0x8608697e73204a134ce3d4c994916acd185aed5f33a1c78d8e90f28ab99128d0",
"0x5f50e871cea4a977941b62859a254cfdf2c5c68393023a9a749bae24832ea520",
"0xd538e508eeb48f6a7409e7f5a64af5e1ae3ef440878a9b083feb472958274021",
"0xe4587f15f2461aa7aa0ee1aa9d91fa063d893b033dbfbaaccd238b41181fb899",
"0xf7714199f56f32fa154b493ce5ae50a32bea9a86d9bb88d3911083fb25eb9f13",
"0x57e9e7bc3386df1a5109e8ea006e3ce0dc6ee48938542979280e6e2d540137d9",
"0x4702616b5175cd667c707d7bfe3914e362a2f7396cce167d41244f60deaaf459"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

