import {client} from './DB';

function getRandomRecord(id = null) {
    return new Promise(async (resolve, reject) => {
        const minRecordId = 1;
        const maxRecordId = 290870;
        const randomRecordId = getRandomNumber(minRecordId, maxRecordId);

        let query = `SELECT * from transactions WHERE id ='${id || randomRecordId}'`;

        try {
            const result = await client.query(query);
            return resolve(result.rows[0]);
        } catch (error) {
            console.error(error);
            reject(error);
        };
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export {
    getRandomRecord,
    getRandomNumber
};