//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")

// GLOBAL OWNER //

global.owner = ['6285263390832'] //GANTI JADI NO MU
global.namaowner = "RAINSTOREID" // GANTI JADI NAMA MU
global.namebot = "RainBotzz" // GANT JADI NAMA BOT MU
global.sessionName = 'RainScrpit☆☆' // JANGAN DI UBAH
global.prefa = ['','!','.',',','🐤','🗿'] // JANGAN DI UBAH KALAU GAK MAU EROR

// WATERMARK //

global.v = 'RainBotzz' // GANTI AJA
global.wm = 'RqinBotzz' // GANTI AJA
global.packname = "RainBotzz" //Ganti Aja
global.author = "RainStoreID" // GANTI AJA
global.author2 = "HighStoreID" // GANTI SAJA
global.footer = 'RainBotzz' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://telegra.ph/file/d98b4738e971c3c88d062.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://youtube.com/@SafeStoreH" // GANTI SAJA
global.yt = "https://youtube.com/@SafeStoreH" //ganti jadi link yt lu

// PAYMENT //
global.Qris = 'https://img1.dd.ci/file/bb59fe1f867d09a25193f.jpg' //GANTI JADI QRIS MU UNTUK UBAH FOTO MENJADI URL SILAHKAN KE WEB https://dd.ci
global.dana = '085263390832' // GANTI NO LU AJA
global.gopay = '085263390832'  // GANTI NO LU AJA
global.ovo = '085263390832' // GANTI PAKE NO LU
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

// GLOBAL MESS //

global.mess = {
    success: '*DONE NIH*',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Nya ga Admin We',
    owner: 'Fitur Ini Khusus Owner Aja',
    group: 'Saya Harus Berada Di Dalam Group Karena Ini Fitur Khusus Buat Group',
    private: 'Fitur Ini Khusus Di private Ga Bisa Disini!',
    bot: 'Fitur Ini Khusus Saya Doang',
    wait: 'Sabar Ne Onee-chan',
    notregist: 'Kamu Belum Terdaftar Ketik .daftar untuk Mendaftarkan Diri Kamu Biar Masuk Ke database Saya',
    premium: 'Fitur Ini Khusus Premium, Kalau Mau Premium Silahkan Chat .owner Nya ya Kalau Baik Sih Di Kasih hehe',
    endLimit: 'Limit Harian Kamu Udah Habis, Nanti Bakalan Ke Add Lagi Kok WIB 00.00 AM Silahlan Ditunggu ya atau ga Kakak bisa buy limit/Premium Chat .Owner Saja Ya kak untuk kepastian lebih lanjut ',
}
global.limitawal = {
	free: "10",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
