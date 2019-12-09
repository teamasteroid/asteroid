const Logger = require('korean-logger')
const Core = require('./data/core.json')
const { ShardingManager } = require('discord.js')

const shardManager = new ShardingManager('./bot.js', {
  token: Core.bot.token,
  totalShards: Core.bot.shard.count,
  respawn: Core.bot.shard.respawn
})

shardManager.spawn(
  Core.bot.shard.count === 'auto' ? shardManager.totalShards : config.bot.shard.count,
  Core.bot.shard.delay
)

shardManager.on('launch', shard => {
  Logger.success(`#${shard.id} 샤드 시작됨.`)
})