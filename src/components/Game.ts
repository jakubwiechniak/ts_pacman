import Positions from "../assets/spriteSheet"
import Sprite from '../assets/pacman_spritesheet.png'
import SpriteLetters from '../assets/pacman_spritesheet_letters.png'
import Pacman from './Pacman'

const img = new Image()
img.src = Sprite
const imgLetters = new Image()
imgLetters.src = SpriteLetters

class Game {
    gameArray: number[][]
    main: HTMLDivElement
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    zoom: number = 3
    boardHeigth: number = 36
    boardWidth: number = 28
    tileSize: number = 8
    generalScore: number = 0
    pacmanStartPos: number[]
    pacman: Pacman
    pacmanCoord: { x: number, y: number } = { x: 14, y: 23 }
    netArray: HTMLDivElement[][] = []

    constructor() {
        this.gameArray = [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [4, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 4],
            [4, 2, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 2, 4],
            [4, 1, 4, 6, 6, 4, 1, 4, 6, 6, 6, 4, 1, 4, 4, 1, 4, 6, 6, 6, 4, 1, 4, 6, 6, 4, 1, 4],
            [4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4],
            [4, 11, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 11, 1, 1, 11, 1, 1, 11, 1, 1, 11, 1, 1, 1, 1, 11, 4],
            [4, 1, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 4],
            [4, 1, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 1, 4],
            [4, 1, 1, 1, 1, 1, 11, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 11, 1, 1, 1, 1, 1, 4],
            [4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 0, 0, 0, 9, 0, 0, 9, 0, 0, 0, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 0, 4, 4, 4, 5, 5, 4, 4, 4, 0, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 1, 4, 4, 4, 4, 4, 4],
            [7, 0, 0, 0, 0, 0, 11, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 4, 8, 0, 0, 11, 0, 0, 0, 0, 0, 7],
            [4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 1, 4, 4, 4, 4, 4, 4],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [6, 6, 6, 6, 6, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 6, 6, 6, 6, 6],
            [4, 4, 4, 4, 4, 4, 1, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 1, 4, 4, 4, 4, 4, 4],
            [4, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1, 4, 4, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1, 1, 1, 4],
            [4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4],
            [4, 1, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 1, 4],
            [4, 2, 1, 1, 4, 4, 11, 1, 1, 11, 1, 1, 10, 0, 0, 10, 1, 1, 11, 1, 1, 11, 4, 4, 1, 1, 2, 4],
            [4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4],
            [4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 1, 4, 4, 4],
            [4, 1, 1, 11, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 11, 1, 1, 4],
            [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
            [4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4],
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        ]
        this.main = document.createElement('div')
        this.main.className = "main"
        document.body.appendChild(this.main)

        this.canvas = document.createElement('canvas')
        this.modifyCanvas()
        this.main.appendChild(this.canvas)

        let ctx = this.canvas.getContext('2d')
        if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
            throw new Error('failed to get context')
        }
        this.ctx = ctx

        this.pacmanStartPos = [this.tilesToPx(22 + 3) + 18, this.tilesToPx(13) + 6]
        this.pacman = new Pacman(this.ctx, img, this.pacmanStartPos, this.changePacmanCoord, this.checkNextField, this.checkCurrentField)
        img.onload = this.generateBoard
        imgLetters.onload = this.drawHighScoreSign

        this.generateNet()


    }

    changePacmanCoord = (direction: number) => {
        switch (direction) {
            case 0:
                this.pacmanCoord.y -= 1
                break;
            case 1:
                this.pacmanCoord.x -= 1
                break;
            case 2:
                this.pacmanCoord.y += 1
                break;
            case 3:
                this.pacmanCoord.x += 1
                break;
        }
        if (this.checkCurrentField() == 1) {
            this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x] = 0
            this.generalScore += 10
        }
        if (this.checkCurrentField() == 2) {
            this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x] = 0
            this.generalScore += 50
        }
        if (this.checkCurrentField() == 11) {
            this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x] = 8
            this.generalScore += 10
        }
        if (this.checkCurrentField() == 10) {
            this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x] = 9
            this.generalScore += 10
        }
    }

    checkNextField = (direction: number) => {
        switch (direction) {
            case 0:
                return this.gameArray[this.pacmanCoord.y - 1][this.pacmanCoord.x]
            case 1:
                return this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x - 1]
            case 2:
                return this.gameArray[this.pacmanCoord.y + 1][this.pacmanCoord.x]
            case 3:
                return this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x + 1]
        }
    }

    checkCurrentField = () => {
        return this.gameArray[this.pacmanCoord.y][this.pacmanCoord.x]
    }

    render = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.netArray[this.pacmanCoord.y + 3][this.pacmanCoord.x].style.backgroundColor = "#ff000033"
        this.pacman.makeMove()
        this.generateBoard()
        this.drawHighScoreSign()
    }

    generateNet = () => {
        let netDiv = document.createElement('div')
        netDiv.style.position = "absolute"
        netDiv.style.top = "50%"
        netDiv.style.left = "50%"
        netDiv.style.zIndex = "3"
        netDiv.style.width = (this.boardWidth * this.tileSize * this.zoom) + "px"
        netDiv.style.height = (this.boardHeigth * this.tileSize * this.zoom) + "px"
        for (let x = 0; x < this.boardHeigth; x++) {
            let arr = []
            for (let y = 0; y < this.boardWidth; y++) {
                let netElem = document.createElement('div')
                netElem.style.width = (this.tileSize * this.zoom - 2) + "px"
                netElem.style.height = (this.tileSize * this.zoom - 2) + "px"
                netElem.style.position = "absolute"
                netElem.style.top = (x * this.tileSize * this.zoom) + "px"
                netElem.style.left = (y * this.tileSize * this.zoom) + "px"
                netElem.style.border = "1px solid #333"
                netDiv.appendChild(netElem)
                arr.push(netElem)
            }
            this.netArray.push(arr)
        }
        netDiv.style.transform = "translate(-50%, -50%)"
        document.body.appendChild(netDiv)
    }

    tilesToPx = (tiles: number) => {
        return tiles * this.tileSize * this.zoom
    }

    modifyCanvas = () => {
        this.canvas.width = this.tilesToPx(this.boardWidth)
        this.canvas.height = this.tilesToPx(this.boardHeigth)
    }

    generateBoard = () => {
        this.ctx.drawImage(img, Positions.board.classic.start.x, Positions.board.classic.start.y, Positions.board.classic.size.x, Positions.board.classic.size.y, 0, this.tilesToPx(3), Positions.board.classic.size.x * this.zoom, Positions.board.classic.size.y * this.zoom)
        this.pacman.drawPacman(this.pacmanStartPos[1], this.pacmanStartPos[0])
    }

    drawHighScoreSign = () => {
        this.ctx.drawImage(imgLetters, Positions.letters.h.start.x, Positions.letters.h.start.y, Positions.letters.h.size.x, Positions.letters.h.size.y, this.tilesToPx(9), 0, Positions.letters.h.size.x * this.zoom, Positions.letters.h.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.h.start.x, Positions.letters.h.start.y, Positions.letters.h.size.x, Positions.letters.h.size.y, this.tilesToPx(9), 0, Positions.letters.h.size.x * this.zoom, Positions.letters.h.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.i.start.x, Positions.letters.i.start.y, Positions.letters.i.size.x, Positions.letters.i.size.y, this.tilesToPx(10), 0, Positions.letters.i.size.x * this.zoom, Positions.letters.i.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.g.start.x, Positions.letters.g.start.y, Positions.letters.g.size.x, Positions.letters.g.size.y, this.tilesToPx(11), 0, Positions.letters.g.size.x * this.zoom, Positions.letters.g.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.h.start.x, Positions.letters.h.start.y, Positions.letters.h.size.x, Positions.letters.h.size.y, this.tilesToPx(12), 0, Positions.letters.h.size.x * this.zoom, Positions.letters.h.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.s.start.x, Positions.letters.s.start.y, Positions.letters.s.size.x, Positions.letters.s.size.y, this.tilesToPx(14), 0, Positions.letters.s.size.x * this.zoom, Positions.letters.s.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.c.start.x, Positions.letters.c.start.y, Positions.letters.c.size.x, Positions.letters.c.size.y, this.tilesToPx(15), 0, Positions.letters.c.size.x * this.zoom, Positions.letters.c.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.o.start.x, Positions.letters.o.start.y, Positions.letters.o.size.x, Positions.letters.o.size.y, this.tilesToPx(16), 0, Positions.letters.o.size.x * this.zoom, Positions.letters.o.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.r.start.x, Positions.letters.r.start.y, Positions.letters.r.size.x, Positions.letters.r.size.y, this.tilesToPx(17), 0, Positions.letters.r.size.x * this.zoom, Positions.letters.r.size.y * this.zoom)
        this.ctx.drawImage(imgLetters, Positions.letters.e.start.x, Positions.letters.e.start.y, Positions.letters.e.size.x, Positions.letters.e.size.y, this.tilesToPx(18), 0, Positions.letters.e.size.x * this.zoom, Positions.letters.e.size.y * this.zoom)
        let scr = String(this.generalScore)
        for (let x = 0; x < scr.length; x++) {
            this.ctx.drawImage(imgLetters, Positions.numbers[parseInt(scr[x])].start.x, Positions.numbers[parseInt(scr[x])].start.y, Positions.numbers[parseInt(scr[x])].size.x, Positions.numbers[parseInt(scr[x])].size.y, this.tilesToPx(6 + x), this.tilesToPx(1), Positions.numbers[parseInt(scr[x])].size.x * this.zoom, Positions.numbers[parseInt(scr[x])].size.y * this.zoom)
        }
        this.drawFood()
    }

    drawFood = () => {
        this.gameArray.forEach((row, i) => {
            row.forEach((point, j) => {
                switch (point) {
                    case 1: case 10: case 11:
                        this.ctx.drawImage(imgLetters, Positions.points.food.start.x, Positions.points.food.start.y, Positions.points.food.size.x, Positions.points.food.size.y, this.tilesToPx(j) + 9, this.tilesToPx(i + 3) + 9, Positions.points.food.size.x * this.zoom, Positions.points.food.size.y * this.zoom)
                        break;
                    case 2:
                        this.ctx.drawImage(imgLetters, Positions.points.energizer.start.x, Positions.points.energizer.start.y, Positions.points.energizer.size.x, Positions.points.energizer.size.y, this.tilesToPx(j), this.tilesToPx(i + 3), Positions.points.energizer.size.x * this.zoom, Positions.points.energizer.size.y * this.zoom)
                }
            })
        })
    }

}

export default Game