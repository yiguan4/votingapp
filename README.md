1. install ganache-cli:
  npm install ganache-cli -g

2. Run ganache on terminal
ganache-cli

3. copy the address of first account to /ui/js/clist.js line17

```js
  contractInstance = VotingContract.at('first account address');
```
4. change id number and phone number to receive one time password /ui/js/app.js ,
```js 
  var id_no_phone_no = {
  	"700000000000": "your phone number", 
  	"300000000000": "7276xxxxxx",
	"<replace your id no here>": "<your phone number>",
  }
```
5. node index.js 

6. username: "admin" , password:"password"


To test in terminal:
1. Install ethereumjs-testrpc web3: 
npm install ethereumjs-testrpc web3
2. Create voting smart contract
npm install solc

3. 
-> Web3 = require('web3')
-> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
-> web3.eth.accounts
-> code = fs.readFileSync('Voting.sol').toString()
-> solc = require('solc')
-> compiledCode = solc.compile(code)

-> abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
-> VotingContract = web3.eth.contract(abiDefinition)
-> byteCode = compiledCode.contracts[':Voting'].bytecode
-> deployedContract = VotingContract.new(['snow','Alice','Monster','Frozen'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
-> deployedContract.address
-> contractInstance = VotingContract.at(deployedContract.address)

-> contractInstance.totalVotesFor.call('snow').toLocaleString()