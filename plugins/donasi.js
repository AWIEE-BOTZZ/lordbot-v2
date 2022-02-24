let handler = async m => m.reply(`
╭─「 Donasi • Pulsa dan dana 」
│ • Indosat [085852311805]
│ • dana [0895367208200]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62896545070096
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
