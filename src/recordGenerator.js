import * as Record from './Records';
import { publish } from './PubSub';

export default function () {
    return new Promise(async (resolve, reject) => {
        try {
            const randomRecord = await Record.getRandomRecord();

            // Add label data to the random data
            randomRecord.labels = getRandomLabels();

            publish(randomRecord).catch(error => {
                throw error
            });

            resolve(randomRecord);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

function getRandomLabels(){
    const numberOfLabels = Math.ceil(Math.random()*3);
    const labelList = ['High value transaction', 'Internal Transaction', 'Games', 'DeFi', 'Shopping', 'HFT', 'Fees', 'Loan', 'Tuition', 'Health care'];
    const labels = [];
    for (let i = 0; i < numberOfLabels; i++) {
        labels.push(labelList[Math.floor(Math.random()*labelList.length)]);
    }
    return labels;
}