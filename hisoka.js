/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const crypto = require('crypto')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { performance } = require('perf_hooks')
const { covidindo } = require("./lib/covidindo.js")
const { corona } = require("./lib/corona.js")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { bytesToSize,  UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { waMessageID } = require('@adiwajshing/baileys/lib/Store/make-in-memory-store')
const { data } = require('cheerio/lib/api/attributes')

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let tebaklogo = db.game.tebaklogo = []
let vote = db.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "." : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const WaktuWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const WaktuWita = moment.tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const WaktuWit = moment.tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const versibot = (global.botversion)
        const name = (global.nama)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
            }
            username = '@ramadhankukuh'
            const copidindo = await covidindo()
            const copidworld = await corona()
            const covidapi = await fetchJson(`https://apicovid19indonesia-v2.vercel.app/api/indonesia`)
            const vaksin = await fetchJson(`https://vaksincovid19-api.vercel.app/api/vaksin`)

            const  { cmmnd } = require(`./command`)
            oiii = cmmnd

            const { top_up } = require (`./shop`)
            oii = top_up

            const { po_dm } = require (`./shop`)
            oii = po_dm
            
            //Waktu
        const salam = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(salam < "23:59:00"){
var sayingtime = 'Selamat Malam'
}
if(salam < "19:00:00"){
var sayingtime = 'Selamat Petang'
}
if(salam < "18:00:00"){
var sayingtime = 'Selamat Sore'
}
if(salam < "15:00:00"){
var sayingtime = 'Selamat Siang'
}
if(salam < "11:00:00"){
var sayingtime = 'Selamat Pagi'
}
if(salam < "05:00:00"){
var sayingtime = 'Selamat Malam'
}

var countDownDate = new Date("2022-04-02").getTime();
var now = new Date().getTime();
var total = countDownDate - now;
const demtik = Math.floor((total / 1000) % 60);
const memnit = Math.floor((total / 1000 / 60) % 60);
const jamm = Math.floor((total / (1000 * 60 * 60)) % 24);
const hamri= Math.floor(total / (1000 * 60 * 60 * 24));
const ResCount = `${hamri} Hari ${jamm} Jam ${memnit} Menit ${demtik} Detik`

let d = new Date(new Date + 3600000)
    let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isNumber = x => typeof x === 'number' && !isNaN(x)
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }


        // image buat menu
        const logo_listmenu = fs.readFileSync('./lib/hisoka.jpg')
        const logo_allmenu = await getBuffer('https://i.ibb.co/LtvGbT9/20220220-133108.jpg')
        const logo_anonmenu = await getBuffer('https://i.ibb.co/prrW6Fn/20220220-161136.jpg')
        const logo_downloadmenu = await getBuffer('https://i.ibb.co/6wbTsDZ/20220220-161214.jpg')
        const logo_islammenu = await getBuffer('https://i.ibb.co/TkpKdR7/20220220-161228.jpg')
        const logo_grubmenu = await getBuffer('https://i.ibb.co/c8fC532/20220220-161256.jpg')
        const logo_searchmenu = await getBuffer('https://i.ibb.co/VBpYZL5/20220220-161319.jpg')
        const logo_primbonmenu = await getBuffer('https://i.ibb.co/bQ0FcnB/20220220-161332.jpg')
        const logo_wibumenu = await getBuffer('https://i.ibb.co/wWrDmxb/20220220-161343.jpg')
        const logo_imagemenu = await getBuffer('https://i.ibb.co/YL4SsBc/20220220-161356.jpg')
        const logo_funmenu = await getBuffer('https://i.ibb.co/rbqCzMw/20220220-161407.jpg')
        const logo_convertmenu = await getBuffer('https://i.ibb.co/x6Dx3xN/20220220-161421.jpg')
        const logo_randommenu = await getBuffer('https://i.ibb.co/qdQcXHR/20220220-161435.jpg')
        const logo_databasemenu = await getBuffer('https://i.ibb.co/QJdRZVX/20220220-161447.jpg')
        const logo_othermenu = await getBuffer('https://i.ibb.co/Y06sJ0m/20220220-161458.jpg')
        const logo_ownermenu = await getBuffer('https://i.ibb.co/vDD2NYn/20220220-161507.jpg')
        const logo_statustopup = await getBuffer('https://i.ibb.co/p1ckgww/20220220-172726.jpg')


        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        // write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)
        
        // Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return hisoka.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return hisoka.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return hisoka.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return hisoka.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        }

        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
            if (type == 'image') {
            hisoka.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(thumbnail), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
            } else if (type == 'video') {
            if (options === undefined || options === null) return reply('illegal method, chat owner bot')
            hisoka.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
            } else if (type == 'location') {
            hisoka.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(thumbnail) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
            } else if (type == 'text') {
            hisoka.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
            } else {
            reply('invalid type, please contact the owner bot')
            }
            }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }

		// DATABASE AFK
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
            }
        } catch (err) {
            console.error(err)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
           await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklogo.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklogo[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak logo', buttonText: { displayText: 'Tebak Logo' }, type: 1 }], `🎮 Tebak Logo 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebaklogo[m.sender.split('@')[0]]
            } else m.reply('Jawaban Salah!')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, username, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

                //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir (+${playScore} XP)` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
        let mentionUserr = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUserr) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
        	case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Menunggu @${room.game.currentTurn.split('@')[0]}
Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break

	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7486dc50589a45f4b3a3f.jpg' }, caption: `Hai Kak ${m.pushName}\n\n*Bot Rental Price :*\n⭔ 5k Per Group Selama 1 Bulan\n\n*Pembayaran :*\n⭔ Dana, GoPay, OVO\n⭔ ShopeePay, LinkAja, QRIS\n⭔ Pulsa XL/Axis, Telkomsel, Indosat\n⭔ Paypal : https://www.paypal.me/ramadhankukuh\n\nMau Sewa / Donasi?\n\nFor More Detail, You Can Chat With The Owner https://wa.me/12816245470 (Kukuh)` }, { quoted: m })
            }
            break
            case 'payment': {
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7486dc50589a45f4b3a3f.jpg' }, caption: `Hai Kak ${m.pushName}\n\n*Pembayaran Bisa Scan Lewat QRIS Ya / PAYPAL*\n\n\n*Pembayaran Lainnya:*\n⭔Bank BRI, BCA, MANDIRI\n⭔ Dana, GoPay, OVO\n⭔ ShopeePay, LinkAja, QRIS\n⭔ Pulsa XL/Axis, Telkomsel, Indosat\n⭔ Paypal : https://www.paypal.me/ramadhankukuh\n\nFor More Detail, You Can Chat With The Owner https://wa.me/12816245470 (Kukuh)` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('Script : -')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong\n7. logo`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.my.id/database/games/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'logo') {
                    if (tebaklogo.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/Aidils60/database/main/logoquizid.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebaklogo[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklogo.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak logo', buttonText: { displayText: 'Tebak Logo' }, type: 1 }], `Waktu Habis\nJawaban: ${tebaklogo[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebaklogo[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, username, m)
                    delete caklontong[m.sender.split('@')[0]]
                    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, username, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, username, m, {mentions: ments})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
            case 'vote': {
                if (!m.isGroup) throw mess.group
                if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
                m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                vote[m.chat] = [q, [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*
    *Alasan:* ${vote[m.chat][0]}
    ┌〔 UPVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    │
    │ 
    └────
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    │
    │ 
    └────
    Ketik *${prefix}hapusvote* - untuk menghapus vote`
    let buttonsVote = [
      {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
      {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
    ]
    
                let buttonMessageVote = {
                    text: teks_vote,
                    footer: username,
                    buttons: buttonsVote,
                    headerType: 1
                }
                hisoka.sendMessage(m.chat, buttonMessageVote)
            }
                break
                   case 'upvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*
    *Alasan:* ${vote[m.chat][0]}
    ┌〔 UPVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    Ketik *${prefix}hapusvote* - untuk menghapus vote`
                let buttonsUpvote = [
                  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1} //𝚄𝙿𝚅𝙾𝚃𝙴 𝙳𝙴𝚅𝙾𝚃𝙴
                ]
    
                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: username,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                 }
                hisoka.sendMessage(m.chat, buttonMessageUpvote)
            }
                 break
                    case 'devote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*
    *Alasan:* ${vote[m.chat][0]}
    ┌〔 UPVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][1].length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${vote[m.chat][2].length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    Ketik *${prefix}hapusvote* - untuk menghapus vote`
                let buttonsDevote = [
                  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1} //𝚄𝙿𝚅𝙾𝚃𝙴 𝙳𝙴𝚅𝙾𝚃𝙴
                ]
    
                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: username,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                hisoka.sendMessage(m.chat, buttonMessageDevote)
        }
                break
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*
    *Alasan:* ${vote[m.chat][0]}
    ┌〔 UPVOTE 〕
    │ 
    ├ Total: ${upvote.length}
    ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    ┌〔 DEVOTE 〕
    │ 
    ├ Total: ${devote.length}
    ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
    │ 
    └────
    Ketik *${prefix}hapusvote* - untuk menghapus vote
${username}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
                  case 'hapusvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                delete vote[m.chat]
                m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
                break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, username, m)
             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, username, m)
            }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                cc = await hisoka.serializeM(text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                cck = text ? text : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    await hisoka.copyNForward(i, hisoka.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `「 *${hisoka.user.name} Broadcast* 」\n\n ${cck}`), true).catch(_ => _)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                let anu = await store.chats.all().map(v => v.id)
                cc = await hisoka.serializeM(q ? m : m.quoted ? await m.getQuotedObj() : false || m)
                cck = q ? q : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    await hisoka.copyNForward(yoi, hisoka.cMod(m.chat, cc, /bc|broadcast/i.test(cck) ? cck : `「 *${hisoka.user.name} BROADCAST* 」\n\n ${cck}`), true).catch(_ => _)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'smeme': case 'stickermeme': case 'stickmeme': {
                if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
                m.reply(`Loading...`)
                arg = args.join(' ')
                mee = await hisoka.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
                memek = await hisoka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(memek)
                }
                break
                case 'memegen': case 'smeme2': {
                if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
                if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
                m.reply(`Loading...`)
                arg = args.join(' ')
                atas = arg.split('|')[0]
                bawah = arg.split('|')[1]
                let abeb = await hisoka.downloadAndSaveMediaMessage(quoted)
                let abe = await TelegraPh(abeb)
                let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
                let mengmeme = await hisoka.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(mengmeme)
                }
                break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/scraper')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: 'Kukuh',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: username,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                    db.data.users[m.sender].limit -= 1
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
            case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
                let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: username,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}
${arab}
${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=xxxx 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=xxx 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		        let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		        let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                .then(({data}) => {
                let buttons = [
                        {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: data.url },
                        caption: `Random SFW\nAyo🤨📸`,
                        footer: name,
                        buttons: buttons,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                break
                case 'couple': {
                    m.reply(mess.wait)
                    let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                    let random = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                    hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                }
            break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: 'Kukuh',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: 'Kukuh',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Command : ${prefix + command} Nama Kamu, tgl lahir, bln lahir, thn lahir, Nama Dia, tgl lahir, bln lahir, thn lahir\n\nExample : ${prefix + command} Kamu, 6, 9, 2005, Dia, 6, 9, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + comman} Kukuh Ramadhan`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `*Command :* ${prefix + command} Nama Kamu, tgl lahir, bln lahir, thn lahir\n\n*Example :* ${prefix + command} Kukuh, 1, 11, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `*Command :* ${prefix + command} Nama Kamu|Nama Dia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `*Command :* ${prefix + command} tgl jadian, bln jadian, thn jadian\n\n*Example :* ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `*Command :* ${prefix + command} tgl bisnis, bln bisnis, thn bisnis\n\n*Example :* ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `*Command :* ${prefix + command} tgl rezeki, bln rezeki, thn rezeki\n\n*Example :* ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `*Command :* ${prefix + command} tgl kerja, bln kerja, thn kerja\n\n*Example :* ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `*Command :* ${prefix + command} tgl nasib, bln nasib, thn nasib\n\n*Example :* 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `*Command :* ${prefix + command} tgl sakit, bln sakit, thn sakit\n\n*Example :* ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `*Command :* ${prefix + command} tgl lahir, bln lahir, thn lahir\n\n*Example :* ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `*Example :* ${prefix + command} Nama kamu, 1, 2005\n\n*Note :* ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': case 'ttnowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let { Tiktokdl } = require('./lib/gif')
                let result = await Tiktokdl(isUrl(text)[0])
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': case 'ttwm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let { Tiktokdl } = require('./lib/gif')
                let result = await Tiktokdl(isUrl(text)[0])
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: result.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let { Tiktokdl } = require('./lib/gif')
                let result = await Tiktokdl(isUrl(text)[0])
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(result.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                hisoka.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'igdl': case 'ig': case 'instagram': case 'igtv': {
                if (!text) throw `Masukkan Query Link!\nExample : ${prefix + command} https://www.instagram.com/urlVideo`
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                let { igdl } = require ('./lib/gif')
                let result = await igdl((`${text}`))
                hisoka.sendMedia(m.chat, result.result.link, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
          }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
        case 'herolist':
       await herolist().then((ress) => {
       let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
       for (var i = 0; i < ress.hero.length; i++) {
       listt += '-  ' + ress.hero[i] + '\n'
       }
       m.reply(listt)
       })
       break
       case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
              
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}
              
*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
               
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}
              
*Story* : ${res.background_story}`
m.reply(her)
break
	case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, username, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await hisoka.profilePictureUrl(room.b)
                let status = await hisoka.fetchStatus(room.b)
                let msg = await hisoka.sendImage(room.a, profile, `Nama : ${await hisoka.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                hisoka.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, username, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, username, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, username, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, username, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, username, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, username, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, username, m)
                }
            }
                break
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break

//COMMAND
case 'command': {
                let sections = [
                    {
                    title: "Menu - 1",
                    rows: [
                        {title: "Semua Perintah", rowId: "allmenu", description: "Menampilkan Semua Menu"}
                    ]
                    },
                   {
                    title: "Menu - 2",
                    rows: [
                        {title: "Anonymous Chat", rowId: "anonmenu", description: "Menampilkan Menu Anonymous Chat"}
                    ]
                    },
                   {
                    title: "Menu - 3",
                    rows: [
                        {title: "Menu Downloader", rowId: "downloadmenu", description: "Menampilkan Menu Downloader YT / IG / TT / TWIT"}
                    ]
                    },
                   {
                    title: "Menu - 4",
                    rows: [
                        {title: "Menu Islam", rowId: "islammenu", description: "Menampilkan Menu Tentang Islam"}
                    ]
                    },
                    {
                    title: "Menu - 5",
                    rows: [
                        {title: "Menu Lagu Sad / Gamon", rowId: "soundmenu", description: "Menampilkan Menu Lagu Yang Bikin Kamu Gamon"}
                    ]
                    },
                   {
                    title: "Menu - 6",
                    rows: [
                        {title: "Menu Group", rowId: "grubmenu", description: "Menampilkan Menu Group"}
                    ]
                    },
                   {
                    title: "Menu - 7",
                    rows: [
                        {title: "Menu Searching", rowId: "searchmenu", description: "Menampilkan Menu Pencaharian"}
                    ]
                    },
                   {
                    title: "Menu - 8",
                    rows: [
                        {title: "Menu Primbon", rowId: "primbonmenu", description: "Menampilkan Menu Primbon"}
                    ]
                    },
                   {
                    title: "Menu - 9",
                    rows: [
                        {title: "Menu Wibu", rowId: "wibumenu", description: "Menampilkan Menu Para Wibu"}
                    ]
                    },
                    {
                    title: "Menu - 10",
                    rows: [
                        {title: "Menu Image", rowId: "imagemenu", description: "Menampilkan Menu Image"}
                    ]
                    },
                    {
                    title: "Menu - 11",
                    rows: [
                        {title: "Menu Fun", rowId: "funmenu", description: "Menampilkan Menu Fun"}
                    ]
                    },
                   {
                    title: "Menu - 12",
                    rows: [
                        {title: "Menu Converter", rowId: "convertmenu", description: "Menampilkan Menu Converter Link / Musik / Gambar Ke Stiker"}
                    ]
                    },
                   {
                    title: "Menu - 13",
                    rows: [
                        {title: "Menu Random", rowId: "randommenu", description: "Menampilkan Menu Random"}
                    ]
                    },
                   {
                    title: "Menu - 14",
                    rows: [
                        {title: "Menu Database", rowId: "databasemenu", description: "Menampilkan Menu Database BOT"}
                    ]
                    },
                   {
                    title: "Menu - 15",
                    rows: [
                        {title: "Menu Other", rowId: "othermenu", description: "Menampilkan Menu Lainnya"}
                    ]
                    },
                   {
                    title: "Menu - 16",
                    rows: [
                        {title: "Menu Owner", rowId: "ownermenu", description: "Menampilkan Menu Khusus Owner BOT"}
                    ]
                    },
                ]
                
                let listMessage = {
                  text: "Pilih Menu Disini",
                  footer: "Kuh",
                  title: `${sayingtime} ${pushname}`,
                  buttonText: "CLICK HERE",
                  sections
                }
                
                hisoka.sendMessage(m.chat, listMessage, { quoted: m })
            }
                break

//KATEGORI JUALAN
case 'topupdm': {
                    let sections = [
                       {
                        title: "Kategori",
                        rows: [
                            {title: "Free Fire", rowId: "listdmff", description: "Menampilkan List Topup Free Fire"}
                        ]
                        },
                       {
                        title: "Kategori",
                        rows: [
                            {title: "Mobile Legends Paket A", rowId: "listdmmla", description: "Menampilkan List Topup Mobile Legends Paket A"}
                        ]
                        },
                        {
                        title: "Kategori",
                        rows: [
                            {title: "Mobile Legends Paket B", rowId: "listdmmlb", description: "Menampilkan List Topup Mobile Legends Paket B"}
                            ]
                            },
                       {
                        title: "Kategori",
                        rows: [
                            {title: "Mobile Legends Pre Order [ CLOSED ]", rowId: "listdmmlpo", description: "Menampilkan List Topup Mobile Legends Pre Order (Stok Terbatas)"}
                        ]
                        },
                    ]
                    
                    let listMessage = {
                      text: "Pilih Jenis Game Disini",
                      footer: "Kuh",
                      title: `${sayingtime} ${pushname}`,
                      buttonText: "CLICK HERE",
                      sections
                    }
                    
                    hisoka.sendMessage(m.chat, listMessage, { quoted: m })
                }
                    break


//LIST FREE FIRE
case 'listdmff':{
    anu = top_up.listFF(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'MENU',
    id: 'menu'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'PEMBAYARAN',
    id: 'payment'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//LIST MOBILE LEGENDS A
case 'listdmmla': {
    anu = top_up.listmlA(sayingtime, WaktuWib, pushname, prefix)
    anuInfo = top_up.infomlA(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                        hydratedFooterText: anuInfo,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'MENU',
    id: 'menu'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'PEMBAYARAN',
    id: 'bonusmla'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//LIST MOBILE LEGENDS B
case 'listdmmlb': {
    anu = top_up.listmlB(sayingtime, WaktuWib, pushname, prefix)
    anuInfo = top_up.infomlB(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                        hydratedFooterText: anuInfo,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'MENU',
    id: 'menu'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'PEMBAYARAN',
    id: 'bonusmlb'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//LIST MOBILE LEGENDS PO
case 'podmml': {
    anu = po_dm.listmlPO(sayingtime, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                hydratedFooterText: `\n『 ROAD TO RAMADHAN 』\n${ResCount}\n\n〆 Time : ${WaktuWib}\n〆 Weton : ${week} ${weton}\n〆 Islam : ${dateIslamic}`,
                hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'MENU',
    id: 'menu'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'PEMBAYARAN',
    id: 'payment'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//FLASH SALE MOBILE LEGENDS
case 'flashsaleml': {
    anu = po_dm.flashsaleMl(WaktuWib, week, dateIslamic, weton, ResCount, sayingtime, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                        hydratedFooterText: `\n『 ROAD TO RAMADHAN 』\n${ResCount}\n\n〆 Time : ${WaktuWib}\n〆 Weton : ${week} ${weton}\n〆 Islam : ${dateIslamic}`,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'MENU',
    id: 'menu'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'PEMBAYARAN',
    id: 'bonusmla'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break


//FORMAT ORDER FREE FIRE
case 'topupff':{
	      const serialFF = createSerial(12)
	      if (!text) throw 'Untuk Melanjutkan Pemesanan\n\nKetik :\ntopupff *id_nominal*\n\nContoh Format :\ntopupff 12345678_70'
          m.reply(mess.waittopup)
          arg = args.join(' ')
          id = arg.split('_')[0]
          order = arg.split('_')[1]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=1756919c2cec2aa7d7769084`)
          nick = get_result.result
          txt = `${sayingtime} ${pushname} 
                                   
⭔ UID : ${id}
⭔ Nickname : ${nick}
⭔ Order : ${order} Diamond
⭔ Status : Gagal
⭔ Waktu : ${WaktuWib} WIB
⭔ No Referensi ${serialFF}: 
⭔ WhatsApp : ${m.sender.split('@')[0]}`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        hydratedContentText: txt,
                            locationMessage: {
                                jpegThumbnail: logo_statustopup  },
                                    hydratedFooterText: username,
                                         hydratedButtons: [{
                                 urlButton: {
                                 displayText: 'Website Owner',
                                 url: 'https://ramadhankukuh.github.io'
                                                    }
                                                }, {
                                 urlButton: {
                                 displayText: 'YouTube Owner',
                                 url: 'https://youtube.com/c/KukuhRamadhann'
                                                    }
                                                }, {
                                quickReplyButton: {
                                 displayText: 'MENU',
                                id: 'menu'
                                                    }
                                                }, {
                                 quickReplyButton: {
                                 displayText: 'OWNER',
                                 id: 'owner'
                                                    }  
                                                }, {
                                quickReplyButton: {
                                 displayText: 'PEMBAYARAN',
                                 id: 'payment'
                                                    }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                }
break


//FORMAT ORDER MOBILE LEGENDS
case 'topupml':{
	      const serialML = createSerial(12)
	      if (!text) throw 'Untuk Melanjutkan Pemesanan\n\nKetik :\ntopupml *id_server_nominal*\n\nContoh Format :\ntopupml 12345678_1234_92'
          m.reply(mess.waittopup)
          arg = args.join(' ')
          id = arg.split('_')[0]
          server = arg.split('_')[1]
          order = arg.split('_')[2]
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${id}/${server}?apikey=c0163b349edd0273f5df2835`)
          nick = get_result.result
          txt = `${sayingtime} ${pushname} 
                                   
⭔ UID : ${id}
⭔ Server : ${server}
⭔ Nickname : ${nick}
⭔ Order : ${order} Diamond
⭔ Status : Gagal
⭔ Waktu : ${WaktuWib} WIB
⭔ No Referensi ${serialML}
⭔ WhatsApp : ${m.sender.split('@')[0]}`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        hydratedContentText: txt,
                            locationMessage: {
                                jpegThumbnail: logo_statustopup  },
                                    hydratedFooterText: username,
                                         hydratedButtons: [{
                                 urlButton: {
                                 displayText: 'Website Owner',
                                 url: 'https://ramadhankukuh.github.io'
                                                    }
                                                }, {
                                 urlButton: {
                                 displayText: 'YouTube Owner',
                                 url: 'https://youtube.com/c/KukuhRamadhann'
                                                    }
                                                }, {
                                quickReplyButton: {
                                 displayText: 'MENU',
                                id: 'menu'
                                                    }
                                                }, {
                                 quickReplyButton: {
                                 displayText: 'OWNER',
                                 id: 'owner'
                                                    }  
                                                }, {
                                quickReplyButton: {
                                 displayText: 'PEMBAYARAN',
                                 id: 'payment'
                                                    }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                }
break

//SEMUA MENU
case 'allmenu':{
anu = cmmnd.allMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_allmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU ANONYMOUS
case 'anonmenu':{
    anu = cmmnd.anonMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_anonmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break
    
    //MENU DOWNLOADER
case 'downloadmenu':{
    anu = cmmnd.downloadMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_downloadmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

    //MENU ISLAM
case 'islammenu':{
    anu = cmmnd.islamMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_islammenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

    //MENU SOUND
case 'soundmenu': {
                m.reply('Lagi Di Coding Banh, Sabar')
            }
            break

case 'soundmenubanh': {
                    let sections = [
                        {
                        title: "Kategori - 1",
                        rows: [
                            {title: "Sound 1", rowId: "audio1", description: "69 Detik"}
                        ]
                        },
                       {
                        title: "Kategori - 2",
                        rows: [
                            {title: "Free Fire", rowId: "listdmff", description: "Menampilkan List Topup Free Fire"}
                        ]
                        },
                       {
                        title: "Kategori - 3",
                        rows: [
                            {title: "Mobile Legends", rowId: "listdmml", description: "Menampilkan List Topup Mobile Legends"}
                        ]
                        },
                       {
                        title: "Kategori - 4",
                        rows: [
                            {title: "Mobile Legends Pre Order", rowId: "listdmmlpo", description: "Menampilkan List Topup Mobile Legends Pre Order (Stok Terbatas)"}
                        ]
                        },
                    ]
                    
                    let listMessage = {
                      text: "Pilih Jenis Game Disini",
                      footer: "Kuh",
                      title: `${sayingtime} ${pushname}`,
                      buttonText: "CLICK HERE",
                      sections
                    }
                    
                    hisoka.sendMessage(m.chat, listMessage, { quoted: m })
                }
                    break
    
    //MENU GROUB
case 'grubmenu':{
    anu = cmmnd.grubMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_grubmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break
    
//MENU SEARCHING
case 'searchmenu':{
    anu = cmmnd.searchMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_searchmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break
    
    //MENU PRIMBON
    case 'primbonmenu':{
        anu = cmmnd.primbonMenu(sayingtime, WaktuWib, pushname, prefix)
        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
                hydratedTemplate: {
                    hydratedContentText: anu,
                        locationMessage: {
                            jpegThumbnail: logo_primbonmenu },
                            hydratedFooterText: username,
                            hydratedButtons: [{
        urlButton: {
        displayText: 'Website Owner',
        url: 'https://ramadhankukuh.github.io'
                            }
                        }, {
        urlButton: {
        displayText: 'YouTube Owner',
        url: 'https://youtube.com/c/KukuhRamadhann'
                            }
                        }, {
        quickReplyButton: {
        displayText: 'TOPUP DM',
        id: 'topupdm'
                            }
                        }, {
        quickReplyButton: {
        displayText: 'OWNER',
        id: 'owner'
                            }  
                        }, {
        quickReplyButton: {
        displayText: 'BACK TO MENU',
        id: 'menu'
                    }
                }]
            }
            }
        }), { userJid: m.chat, quoted: m })
        await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
    break
    
//MENU WIBU
case 'wibumenu':{
    anu = cmmnd.wibuMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_wibumenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU IMAGE
case 'imagemenu':{
    anu = cmmnd.imageMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_imagemenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU FUN
case 'funmenu':{
    anu = cmmnd.funMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_funmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU CONVERT
case 'convertmenu':{
    anu = cmmnd.convertMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_convertmenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU RANDOM
case 'randommenu':{
    anu = cmmnd.randomMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_randommenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU DATABASE
case 'databasemenu':{
    anu = cmmnd.databaseMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_databasemenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU OTHER
case 'othermenu':{
    anu = cmmnd.otherMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_othermenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU OWNER
case 'ownermenu':{
    anu = cmmnd.ownerMenu(sayingtime, WaktuWib, pushname, prefix)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_ownermenu },
                        hydratedFooterText: username,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'BACK TO MENU',
    id: 'menu'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break

//MENU
case 'list': case 'menu': case 'help': case '?': {
    anu = cmmnd.listMenu(covidapi, week, weton, dateIslamic, copidindo, copidworld, WaktuWib, WaktuWita, WaktuWit, sayingtime, pushname)
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: anu,
                    locationMessage: {
                        jpegThumbnail: logo_listmenu },
                        hydratedFooterText: `\n『 ROAD TO RAMADHAN 』\n ${ResCount}`,
                        hydratedButtons: [{
    urlButton: {
    displayText: 'Website Owner',
    url: 'https://ramadhankukuh.github.io'
                        }
                    }, {
    urlButton: {
    displayText: 'YouTube Owner',
    url: 'https://youtube.com/c/KukuhRamadhann'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'TOPUP DM',
    id: 'topupdm'
                        }
                    }, {
    quickReplyButton: {
    displayText: 'OWNER',
    id: 'owner'
                        }  
                    }, {
    quickReplyButton: {
    displayText: 'LIST MENU',
    id: 'command'
                }
            }]
        }
        }
    }), { userJid: m.chat, quoted: m })
    await hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })}
break
//END MENU

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
    }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})