import { Direction, GameKey } from '../types/index.js'
import { Game } from '../game.js'

export class Controls {

    static last_key: number = null
    
    static on_key_up = (ev: KeyboardEvent) => { Controls.last_key = ev.keyCode }

    static process_input() {

        if (!Controls.last_key) { return }

        switch (Controls.last_key) {

            case GameKey.UP:
                if (Game.player_one.direction != Direction.DOWN) {
                    Game.player_one.direction = Direction.UP
                }
                break

            case GameKey.DOWN:
                if (Game.player_one.direction != Direction.UP) {
                    Game.player_one.direction = Direction.DOWN
                }
                break

            case GameKey.LEFT:
                if (Game.player_one.direction != Direction.RIGHT) {
                    Game.player_one.direction = Direction.LEFT
                }
                break

            case GameKey.RIGHT:
                if (Game.player_one.direction != Direction.LEFT) {
                    Game.player_one.direction = Direction.RIGHT
                }
                break

            case GameKey.SPACEBAR:
                Game.player_one.jump()
        }

        Controls.last_key = null
    }
}