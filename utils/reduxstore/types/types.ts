export type Logs = {
  description: string
  title: string
  type: string
  member: string
  date: string
  id?: any
}

export type Members = {
  firstName: string
  lastName: string
  email: string
  id?: any
}

export type LogState = {
  value: number
  logs?: Logs[]
  members?: Members[]
  pending?: boolean
  error?: string
  created?: boolean
  id?: number
  log?: Logs
}
