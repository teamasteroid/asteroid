interface CommandMeta {
  /** name of command */
  name: string
  /** description of command */
  description: string
  /** number of parameters */
  parameter: number
  /** aliases of command */
  alias: string[]
  /** whether this command is admin only or not */
  isAdminOnly: boolean
  /** category of command */
  category: string
}

export default CommandMeta
