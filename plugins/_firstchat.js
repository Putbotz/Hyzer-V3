let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${this.ucapan()}

${user.banned ? 'kamu dibanned' : `Ada yang bisa ${this.user.name} bantu?`}
`.trim(), '© Putbotz', user.banned ? 'Verify🍜' : 'Menu', user.banned ? '.verify put.19' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
