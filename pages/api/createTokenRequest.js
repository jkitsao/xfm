import Ably from "ably/promises";
const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'radio-chat-app' });
    console.log(tokenRequestData)
    if(tokenRequestData) return res.status(200).json(tokenRequestData);
    return res.status(200).json({message:'bad request'});
};