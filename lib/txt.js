exports.menu = (m, body, pushname) => {
  return `*Hai ${pushname}*

╭「 *INFO BOT* 」
├ checkapikey
├ ${prefix}owner
├ ${prefix}runtime
├ ${prefix}speed
└ ${prefix}listgrup

╭「 *ANONYMOUS* 」
├ ${prefix}start
├ ${prefix}next
└ ${prefix}stop

╭「 *RDM IMAGE* 」
├ ${prefix}loli
├ ${prefix}milf
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}shinobu
└ ${prefix}megumin

╭「 *CONVERTER* 」
├ ${prefix}toimg
├ ${prefix}tovideo
├ ${prefix}tourl
├ ${prefix}tomp3
└ ${prefix}sticker

╭「 *DOWNLOAD* 」
├ ${prefix}ytv
├ ${prefix}yta
├ ${prefix}fbdl
├ ${prefix}pixiv
├ ${prefix}igdl
├ ${prefix}pindl
├ ${prefix}twitter
├ ${prefix}tiktokdl
├ ${prefix}mediafire
├ ${prefix}anonfiles
├ ${prefix}sfilemobi
└ ${prefix}zippyshare

╭「 *SEARCHING* 」
├ ${prefix}domain
├ ${prefix}google
├ ${prefix}gimage
├ ${prefix}sfilemobi
├ ${prefix}ytsearch
├ ${prefix}wikipedia
├ ${prefix}konachan
├ ${prefix}pinterest
├ ${prefix}stickerpack
├ ${prefix}happymod
├ ${prefix}stickerline
├ ${prefix}stelesearch
├ ${prefix}alphacoders
└ ${prefix}wallpapercave

╭「 *GROUPS* 」
├ ${prefix}linkgc
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}promote
├ ${prefix}demote
└ ${prefix}setppgc

╭「 *FUNNY* 」
├ ${prefix}bonk
├ ${prefix}ship
├ ${prefix}gay
├ ${prefix}kiss
├ ${prefix}bully
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}lick
└ ${prefix}slap

╭「 *MAKER* 」
├ ${prefix}lisa
├ ${prefix}changemymind
├ ${prefix}blur
├ ${prefix}jojo
├ ${prefix}trash
├ ${prefix}rip
├ ${prefix}burn
├ ${prefix}circle
├ ${prefix}wanted
├ ${prefix}wasted
├ ${prefix}hornycard
├ ${prefix}komunis
├ ${prefix}patrick
└ ${prefix}spongebob

╭「 *MISC* 」
├ ${prefix}quotes
├ ${prefix}ppcouple
├ ${prefix}get
├ ${prefix}rvo
├ ${prefix}delete
└ ${prefix}quotesanime

╭「 *OWNER* 」
├ ${prefix}self
├ ${prefix}public
├ ${prefix}restart
├ ${prefix}join
├ ${prefix}setprefix
├ ${prefix}setppbot
├ $
└ > / >>
`.trim()
}

exports.penggunaan = () => {
return `
Panduan:
Format command

Contoh command full:
${prefix}sticker -crop
Contoh command biasa:
${prefix}sticker

Kendala? hubungi owner.
`.trim()
}

exports.mess = {
  wait: '*Sedang proses...*',
  group: '*Khusus group...*',
  admin: '*Khusus admin...*',
  botAdmin: '*Jadikan bot admin terlebih dahulu...*',
  owner: '*Khusus Owner*'
}