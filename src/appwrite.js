import { Account, Client } from 'appwrite';
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('67b26a61000c747b5c6a');

const account = new Account(client);

export {account, client};