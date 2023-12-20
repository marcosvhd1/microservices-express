import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['https://excited-wombat-12574-us1-kafka.upstash.io:9092'],  // Replace with your Kafka broker
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',  // Replace with your SASL mechanism
        username: 'ZXhjaXRlZC13b21iYXQtMTI1NzQk8lqwJV2AbfDaBc2xubm0LiUjbmsfMcvqk5Y',
        password: 'YzVlY2U0ZDktYzYwZS00YjU1LWFkZGMtOTA1YzYyMmIxMzE3'
    },
});

export { kafka };