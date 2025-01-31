require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
const RPC_URL=process.env.RPC_URL
const PRIVATE=process.env.PRIVATE_KEY
module.exports = {defaultNetwork:"hardhat",
  networks:{
    sepolia:{
  url:process.env.RPC_URL,
  accounts:[`0x${PRIVATE}`]
}
},
  solidity: "0.8.18",
};
