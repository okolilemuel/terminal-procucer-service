const {
    PubSub
} = require('@google-cloud/pubsub');

const pubsub = new PubSub();

export async function publish(data) {
    const topicName = 'terminal-test';
    data = JSON.stringify(data);
    const dataBuffer = Buffer.from(data);

    const messageId = await pubsub.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
}