export interface Logs {
  description: string
  title: string
  type: string
  member: string
  date: string
  id?: any
}

export interface Members {
  firstName: string
  lastName: string
  email: string
  id?: any
}

export interface LogState {
  logs?: Logs[]
  members?: Members[]
  pending?: boolean
  error?: string
  created?: boolean
  id?: number
  log?: Logs
  current?: Logs
}
