async function githubCommand(sock, chatId) {
    const repoInfo = `*ICEBACK-XMD*

*📂 GitHub Repository:*
https://github.com/GLOBALTECHKINGS/ICEBACK-XMD 

*📢 Official Channel:*
https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '1203601903613460@newsletter',
                    newsletterName: 'ICEBACK-XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 