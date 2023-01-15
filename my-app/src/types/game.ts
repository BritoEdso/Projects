import { User } from "./user"

export interface Game {
    game_id?: number
    host: User
    players: User[]
    observers: User[]
    winner?: "liberals" | "facists"
    open?: boolean
}