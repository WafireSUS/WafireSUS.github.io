module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Méo có nhạc đang chạy!. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Nhạc đang chạy **${queue.current.title}** đã tạm dừng ✅` : `${message.author}, Có gì đó khoai khoai. ❌`);
    },
};