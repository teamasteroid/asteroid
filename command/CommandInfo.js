class CommandInfo {
  constructor (doc) {
    this.defaultValue = {
      name: 'NoName',
      aliases: [''],
      description: 'No description given',
      isAdminOnly: false
    }

    const { name, aliases, description, isAdminOnly } = doc
    this.name = name || this.defaultValue.name
    this.aliases = aliases || this.defaultValue.aliases
    this.description = description || this.defaultValue.description
    this.isAdminOnly = isAdminOnly || this.defaultValue.isAdminOnly
  }
}

module.exports = CommandInfo
