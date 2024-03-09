import GetEthBalance from "get_eth_balance";
import Web3 from 'web3';
import Web3HttpProvider from 'web3-providers-http';

const DEFAULT_RPC = 'https://eth1.lava.build/lava-referer-ea1cef83-8849-46ce-a431-f2493e5aec9a/'

class WainoRennernEth {
    async getBalance(address, libName = undefined) {
        try {
            if (libName) {
                const LIB = new (eval(libName))()
                return await LIB.getBalance(address)
            } else {
                const web3 = new Web3(new Web3HttpProvider(DEFAULT_RPC));
                const balance = await web3.eth.getBalance(address)
                return web3.utils.fromWei(balance, 'ether')
            }
        } catch (e) {
            console.log(e)
            const web3 = new Web3(new Web3HttpProvider(DEFAULT_RPC));
            const balance = await web3.eth.getBalance(address)
            return web3.utils.fromWei(balance, 'ether')
        }
    }
}
export default WainoRennernEth;
