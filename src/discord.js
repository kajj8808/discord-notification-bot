// web hook part
import "dotenv/config";
import { EmbedBuilder, WebhookClient } from "discord.js";

const webhookClient = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URL,
});

export function sendMessage({ message, title, image }) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setColor(0x00ffff)
    .setDescription(message);
  webhookClient.send({
    username: "notification bot",
    avatarURL: process.env.DISCORD_WEBHOOK_AVATAR,
    embeds: [embed],
  });
}
