import dotenv from "dotenv";
dotenv.config();
import cron from "node-cron";
import recordGenerator from './recordGenerator';

cron.schedule("0/15 * * * * *", async () => {
    console.log(`15 seconds passed, random record generated`);
    console.log(await recordGenerator());
});