const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h", "halp"],
    cooldown: 4,
    usage: "help",
    description: "Shows you Help for RED MUSIC",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `:white_check_mark: Type \`${prefix}commands\` for a list of Commands\n\n:question: New to **REDMUSIC**? 
        
        TO INVITE BOT  [INVITE LINK](https://discord.com/oauth2/authorize?client_id=894526860782886915&scope=bot&permissions=4330884416&response_type=code)
        
        \n\n:page_facing_up: Still need help? [Click here](https://discord.gg/jY57RH4YPp) `
        let embed = new MessageEmbed()
        .setTitle("REDMUSIC Help")
        .setURL("")
        .setDescription(string)
        if(message.guild.me.permissionsIn(message.channel).has("EMBED_LINKS")){
          message.reply(embed)
        }else{
          message.reply(string)
        }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}

