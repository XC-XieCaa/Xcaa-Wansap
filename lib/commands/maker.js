(async () => {
     switch(true) {
         case /^(lisa|changemymind)$/i.test(command): {
             if (!text) return reply('Text needed.')
             await reply(mess.wait)
             conn.sendFile(from, API('zaki', '/'+ command, { text: (text || ' ') }, 'apikey'), '', 'Done.', m)
             break
         }
         case /^blur$/i.test(command): {
             let q = m.quoted ? m.quoted : m
             if (isQuotedDocument && /image/.test(m.quoted.mimetype) || /image/.test(q.mtype)) {
                 await reply(mess.wait)
                 let url = await uploadFile(await q.download())
                 conn.sendFile(from, API('zaki', '/blur', { url: url, level: '10' }, 'apikey'), '', 'Done.', m)
             } else reply('Picture needed.')
             break
         }
         case /^(wanted|wasted|hornycard|komunis|patrick|spongebob|jojo|trash|rip|burn|circle)$/i.test(command): {
             let q = m.quoted ? m.quoted : m
             if (isQuotedDocument && /image/.test(m.quoted.mimetype) || /image/.test(q.mtype)) {
                 await reply(mess.wait)
                 let url = await uploadFile(await q.download())
                 conn.sendFile(from, API('zaki', '/'+ command, { url: url }, 'apikey'), '', 'Done.', m)
             } else reply('Picture needed.')
             break
         }
     }
})()