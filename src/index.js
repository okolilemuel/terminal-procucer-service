import dotenv from "dotenv";
dotenv.config();
import cron from "node-cron";
import recordGenerator from './recordGenerator';

cron.schedule("0/5 * * * * *", async () => {
    console.log(`5 seconds passed, random record generated`);
    console.log(await recordGenerator());
});