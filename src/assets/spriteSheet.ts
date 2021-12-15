const Positions = {
    logo: { start: { x: 2, y: 4 }, end: { x: 184, y: 50 } },
    numbers: [{ start: { x: 0, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 8, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 16, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 24, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 32, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 40, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 48, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 56, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 64, y: 53 }, size: { x: 8, y: 8 } }, { start: { x: 72, y: 53 }, size: { x: 8, y: 8 } }],
    letters: {
        space: { start: { x: 0, y: 61 }, size: { x: 8, y: 7 } },
        'a': { start: { x: 8, y: 61 }, size: { x: 8, y: 7 } },
        'b': { start: { x: 16, y: 61 }, size: { x: 8, y: 7 } },
        'c': { start: { x: 24, y: 61 }, size: { x: 8, y: 7 } },
        'd': { start: { x: 32, y: 61 }, size: { x: 8, y: 7 } },
        'e': { start: { x: 40, y: 61 }, size: { x: 8, y: 7 } },
        'f': { start: { x: 48, y: 61 }, size: { x: 8, y: 7 } },
        'g': { start: { x: 56, y: 61 }, size: { x: 8, y: 7 } },
        'h': { start: { x: 64, y: 61 }, size: { x: 8, y: 7 } },
        'i': { start: { x: 72, y: 61 }, size: { x: 8, y: 7 } },
        'j': { start: { x: 80, y: 61 }, size: { x: 8, y: 7 } },
        'k': { start: { x: 88, y: 61 }, size: { x: 8, y: 7 } },
        'l': { start: { x: 96, y: 61 }, size: { x: 8, y: 7 } },
        'm': { start: { x: 104, y: 61 }, size: { x: 8, y: 7 } },
        'n': { start: { x: 112, y: 61 }, size: { x: 8, y: 7 } },
        'o': { start: { x: 120, y: 61 }, size: { x: 8, y: 7 } },
        'p': { start: { x: 0, y: 69 }, size: { x: 8, y: 7 } },
        'q': { start: { x: 8, y: 69 }, size: { x: 8, y: 7 } },
        'r': { start: { x: 16, y: 69 }, size: { x: 8, y: 7 } },
        's': { start: { x: 24, y: 69 }, size: { x: 8, y: 7 } },
        't': { start: { x: 32, y: 69 }, size: { x: 8, y: 7 } },
        'u': { start: { x: 40, y: 69 }, size: { x: 8, y: 7 } },
        'w': { start: { x: 48, y: 69 }, size: { x: 8, y: 7 } },
        'x': { start: { x: 56, y: 69 }, size: { x: 8, y: 7 } },
        'y': { start: { x: 64, y: 69 }, size: { x: 8, y: 7 } },
        'z': { start: { x: 72, y: 69 }, size: { x: 8, y: 7 } },
    },
    pacman: {
        full: { start: { x: 489, y: 1 }, size: { x: 13, y: 13 } },
        right: {
            half: { start: { x: 473, y: 1 }, size: { x: 12, y: 12 } },
            open: { start: { x: 457, y: 1 }, size: { x: 12, y: 12 } },
        },
        left: {
            half: { start: { x: 473, y: 17 }, size: { x: 12, y: 12 } },
            open: { start: { x: 457, y: 17 }, size: { x: 12, y: 12 } },
        },
        up: {
            half: { start: { x: 473, y: 33 }, size: { x: 12, y: 12 } },
            open: { start: { x: 457, y: 33 }, size: { x: 12, y: 12 } },
        },
        down: {
            half: { start: { x: 473, y: 49 }, size: { x: 12, y: 12 } },
            open: { start: { x: 457, y: 49 }, size: { x: 12, y: 12 } },
        },
        deathStages: [{ start: { x: 3, y: 91 }, end: { x: 17, y: 91 } }, { start: { x: 3, y: 91 }, end: { x: 17, y: 91 } }, { start: { x: 3, y: 91 }, end: { x: 17, y: 91 } }, { start: { x: 3, y: 91 }, end: { x: 17, y: 91 } },]
    },
    board: {
        classic: { start: { x: 228, y: 0 }, size: { x: 224, y: 248 } }
    },
    points: {
        food: { start: { x: 3, y: 81 }, size: { x: 2, y: 2 } },
        energizer: { start: { x: 8, y: 79 }, size: { x: 7, y: 7 } }
    }
}

export default Positions