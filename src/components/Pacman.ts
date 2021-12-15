import Positions from "../assets/spriteSheet"

class Pacman {
    directions: string[] = ["up", "left", "down", "right"]
    direction: number = 1
    nextDirection: number = 1
    ctx: CanvasRenderingContext2D
    img: HTMLImageElement
    zoom: number = 3
    posx: number
    posy: number
    moveCounter: number = 0
    startNeeded: boolean = true
    changePacmanCoord: Function
    blockMove: boolean = false
    checkColl: Function
    checkField: Function
    constructor(ctx: CanvasRenderingContext2D, img: HTMLImageElement, positions: number[], changeFn: Function, checkColl: Function, checkField: Function) {
        this.ctx = ctx
        this.img = img
        this.posx = positions[1]
        this.posy = positions[0]
        this.changePacmanCoord = changeFn
        this.checkColl = checkColl
        this.checkField = checkField
        document.addEventListener('keydown', (e) => this.changeNextDirection(e))
    }

    changeNextDirection(key: KeyboardEvent) {
        switch (key.code) {
            case "ArrowUp":
                this.nextDirection = 0
                break;
            case "ArrowLeft":
                this.nextDirection = 1
                break;
            case "ArrowDown":
                this.nextDirection = 2
                break;
            case "ArrowRight":
                this.nextDirection = 3
                break;
        }
    }

    checkDirectionChange = () => {
        console.log(this.checkField())

        if (this.nextDirection != this.direction && this.moveCounter == 0) {
            if (this.checkColl(this.nextDirection) != 4) {
                this.direction = this.nextDirection
                this.blockMove = false
                this.moveCounter = 0
            }
        }

    }

    makeMove = () => {
        this.checkDirectionChange()
        if (this.checkColl(this.direction) != 4) {
            if (this.startNeeded) {
                if (this.moveCounter < 6) {
                    switch (this.direction) {
                        case 0:
                            this.posy -= 2
                            break;
                        case 1:
                            this.posx -= 2
                            break;
                        case 2:
                            this.posy += 2
                            break;
                        case 3:
                            this.posx += 2
                            break;
                    }
                    this.moveCounter++
                } else {
                    this.changePacmanCoord(this.direction)
                    this.moveCounter = 0
                    this.startNeeded = false
                }
            } else {
                if (this.moveCounter < 12) {
                    switch (this.direction) {
                        case 0:
                            this.posy -= 2
                            break;
                        case 1:
                            this.posx -= 2
                            break;
                        case 2:
                            this.posy += 2
                            break;
                        case 3:
                            this.posx += 2
                            break;
                    }
                    this.moveCounter++
                } else {
                    this.changePacmanCoord(this.direction)
                    this.checkDirectionChange()
                    this.moveCounter = 0
                }
            }
        }
    }

    drawPacman = (x: number, y: number) => {
        this.ctx.drawImage(this.img, Positions.pacman.full.start.x, Positions.pacman.full.start.y, Positions.pacman.full.size.x, Positions.pacman.full.size.y, this.posx, this.posy, Positions.pacman.full.size.x * this.zoom, Positions.pacman.full.size.y * this.zoom)
    }
}

export default Pacman