const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'solid finish catch file quantum kind remove hurry sign cupboard oil arena',
  'https://rinkeby.infura.io/v3/4a5c045df05e456792a87243086f919c'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const acounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data : bytecode, arguments: ['Hi there!']})
    .send({ gas : '1000000' , from : accounts[0]});

    console.log('Contract deployed to',result.options.address);
};
deploy();
