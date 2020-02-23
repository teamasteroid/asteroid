class Plugin {
  _name: string

  constructor(name: string) {
    this._name = name
  }

  execute() {
    console.warn('Nothing happen...')
  }
}

export default Plugin
