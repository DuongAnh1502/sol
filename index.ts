import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("BVpNAVjk917bRkj25zU7xEbA2bNaxFZhycB3bsEd9VGf");

const connection = new Connection(clusterApiUrl("mainnet-beta"));

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / 10000000;

console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOLANA!`
);
