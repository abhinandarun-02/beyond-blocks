import { Contract, JsonRpcProvider, Wallet} from "ethers";
import details from "./detail.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

const provider = new JsonRpcProvider(process.env.RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

const instance = new Contract(details.contract_address, details.abi, wallet);

export default instance;