import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}


let teks = encodeURI(text)
if (command == 'attp1') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/attp?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'attp2') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/attp2?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp6') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp6?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp5') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp5?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp4') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp4?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp3') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp3?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp2') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp2?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'ttp1') {
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp?apikey=ee99d6df5f8c5eaf7667a90d&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}

if (command == 'ttpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'attpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}
if (command == 'attpg2') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, fdoc)
    throw stiker.toString()
}    


}
handler.command = handler.help = ['ttpg', 'attpg', 'attpg2', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'attp1', 'attp2']
handler.tags = ['sticker']
export default handler
