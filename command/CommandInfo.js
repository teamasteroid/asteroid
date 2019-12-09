class CommandInfo {
  defaultValue = {
    name: 'NoName',
    aliases: ['NoAliases'],
    description: 'No description given',
    isAdminOnly: false
  }

  constructor(doc) {
    const { name, aliases, description, isAdminOnly } = doc
  }
}

module.exports = CommandInfo