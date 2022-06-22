exports.listMenu = (covidapi, week, weton, dateIslamic, copidindo, copidworld, WaktuWib, WaktuWita, WaktuWit, sayingtime, pushname) => {
    return `${sayingtime} ${pushname} 

Bot Ini Aktif 24 Jam, Jika Ada BUG / BOT Tidak Merespon Bisa Hubungi Owner. Untuk Melihat Menu Tekan Tombol *LIST MENU*


『 *TANGGAL* 』
〆 Weton : ${week} ${weton}
〆 Islam : ${dateIslamic}

『 *INDO TIME* 』
〆 ${WaktuWib} WIB
〆 ${WaktuWita} WITA
〆 ${WaktuWit} WIT


『 *COVID INDO* 』
〆 Positif : ${copidindo[0].kasus}
〆 Sembuh : ${copidindo[0].sembuh}
〆 Meninggal : ${copidindo[0].kematian}
〆 Dirawat : ${covidapi.dirawat}

『 *COVID DUNIA* 』
〆 Positif : ${copidworld[0].kasus}
〆 Sembuh : ${copidworld[0].sembuh}
〆 Meninggal : ${copidworld[0].kematian}`
}


exports.allMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Anonymous Chat Menu
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓

┌──⭓ Downloader Menu
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}ig2 [url]
│⭔ ${prefix}igreels [url]
│⭔ ${prefix}igtv [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│
└───────⭓

┌──⭓ Search Menu
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│
└───────⭓

┌──⭓ Random Menu
│
│⭔ ${prefix}coffe
│⭔ ${prefix}porno
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│
└───────⭓

┌──⭓ Islam Menu
│
│⭔ ${prefix}ummi  <url>
│⭔ ${prefix}kisahnabi  <nabi> [ERROR]
│⭔ ${prefix}jadwalsholat  <daerah> [ERROR]
│
└───────⭓

┌──⭓ Wibu Menu
│
│⭔ ${prefix}hentai
│⭔ ${prefix}anime  <query>[ERROR]
│⭔ ${prefix}otakudesu  <query>[ERROR]
│
┌⭓ Random Anime
│
│⭔ ${prefix}cry
│⭔ ${prefix}kill
│⭔ ${prefix}hug
│⭔ ${prefix}pat
│⭔ ${prefix}lick
│⭔ ${prefix}kiss
│⭔ ${prefix}bite
│⭔ ${prefix}yeet
│⭔ ${prefix}neko
│⭔ ${prefix}bully
│⭔ ${prefix}bonk
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}nom
│⭔ ${prefix}slap
│⭔ ${prefix}waifu
│⭔ ${prefix}smile
│⭔ ${prefix}wave
│⭔ ${prefix}awoo
│⭔ ${prefix}blush
│⭔ ${prefix}smug
│⭔ ${prefix}glomp
│⭔ ${prefix}happy
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}cuddle
│⭔ ${prefix}highfive
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}handhold
│
└───────⭓

┌──⭓ Image Menu
│
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓

┌──⭓ Fun Menu
│
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│
└───────⭓

┌──⭓ Primbon Menu
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓

┌──⭓ Convert Menu
│
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}memegen
│⭔ ${prefix}smeme
│⭔ ${prefix}tovideo
│⭔ ${prefix}emojimix
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│
└───────⭓

┌──⭓ Main Menu
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│
└───────⭓

┌──⭓ Database Menu
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓

┌──⭓ Group Menu
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral
│⭔ ${prefix}setpp
│⭔ ${prefix}afk [alasan]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}group
│⭔ ${prefix}editinfo
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│
└───────⭓

┌──⭓ Owner Menu
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup
│⭔ ${prefix}bcall
│
└───────⭓

┌──⭓ Other Menu
│
│⭔ ${prefix}herolist
│⭔ ${prefix}herodetail [hero]
│
└───────⭓`
}


exports.anonMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Anonymous Chat Menu
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│⭔ ${prefix}sendkontak
│
└───────⭓`
}


exports.downloadMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Downloader Menu
│
│⭔ ${prefix}tiktoknowm  <url>
│⭔ ${prefix}tiktokwm   <url>
│⭔ ${prefix}tiktokmp3   <url>
│⭔ ${prefix}instagram   <url>
│⭔ ${prefix}ig2   <url>
│⭔ ${prefix}igreels   <url>
│⭔ ${prefix}igtv   <url>
│⭔ ${prefix}twitter   <url>
│⭔ ${prefix}twittermp3   <url>
│⭔ ${prefix}facebook   <url>
│⭔ ${prefix}pinterestdl   <url>
│⭔ ${prefix}ytmp3   <url>
│⭔ ${prefix}ytmp4   <url>
│⭔ ${prefix}getmusic <query>
│⭔ ${prefix}getvideo <query>
│
└───────⭓`
}


exports.islamMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Islam Menu
│
│⭔ ${prefix}iqra
│⭔ ${prefix}juzamma
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}tafisrsurah
│⭔ ${prefix}ummi  <url>
│⭔ ${prefix}kisahnabi  <nabi> [ERROR]
│⭔ ${prefix}jadwalsholat  <daerah> [ERROR]
│
└───────⭓`
}


exports.grubMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Group Menu
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral
│⭔ ${prefix}setpp
│⭔ ${prefix}afk  <alasan>
│⭔ ${prefix}setname  <text>
│⭔ ${prefix}group
│⭔ ${prefix}editinfo
│⭔ ${prefix}hidetag  <text>
│⭔ ${prefix}tagall  <text>
│⭔ ${prefix}add  62xxx
│⭔ ${prefix}kick  @tag
│⭔ ${prefix}promote  @tag
│⭔ ${prefix}demote  @tag
│
└───────⭓`
}


exports.searchMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Search Menu
│
│⭔ ${prefix}play  <query>
│⭔ ${prefix}yts  <query>
│⭔ ${prefix}google  <query>
│⭔ ${prefix}gimage  <query>
│⭔ ${prefix}pinterest  <query>
│⭔ ${prefix}wallpaper  <query>
│⭔ ${prefix}wikimedia  <query>
│⭔ ${prefix}ytsearch  <query>
│
└───────⭓`
}


exports.primbonMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Primbon Menu
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓`
}


exports.wibuMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Wibu Menu
│
│⭔ ${prefix}anime [ ERROR BANH ]
│⭔ ${prefix}waifu [ ERROR BANH ]
│⭔ ${prefix}husbu [ ERROR BANH ]
│⭔ ${prefix}neko [ ERROR BANH ]
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓`
}


exports.imageMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Image Menu
│
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│
└───────⭓`
}


exports.funMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Fun Menu
│
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│
└───────⭓`
}


exports.convertMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Convert Menu
│
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}memegen
│⭔ ${prefix}smeme
│⭔ ${prefix}tovideo
│⭔ ${prefix}emojimix
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│
└───────⭓`
}


exports.randomMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Random Menu
│
│⭔ ${prefix}coffe
│⭔ ${prefix}porno
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│
└───────⭓`
}


exports.databaseMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Database Menu
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
}


exports.otherMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Other Menu
│
│⭔ ${prefix}herolist
│⭔ ${prefix}herodetail [hero]
│
└───────⭓`
}


exports.ownerMenu = (sayingtime, WaktuWib, pushname, prefix) => {
    return `${sayingtime} ${pushname} 
    
Time Server :
⭔ ${WaktuWib}

┌──⭓ Owner Menu
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup
│⭔ ${prefix}bcall
│
└───────⭓`
}