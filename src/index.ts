import './style.css';
import Game from './components/Game'

const game = new Game()

function animation() {
    game.render()
    window.requestAnimationFrame(animation)
}

animation()