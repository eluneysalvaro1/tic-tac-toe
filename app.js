let d = document

class Game {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.turns = true
        this.table = d.getElementById('table')
        this.lockers = d.querySelectorAll('.locker')
        this.comprobation = []
        this.games = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        this.gameFinish = false
        this.winner = ""
        this.allLockersHasValue = false
    }
    getAllLockersHasValue() {
        return this.allLockersHasValue
    }
    setAllLockersHasValue(valor) {
        this.allLockersHasValue = valor
    }
    getWinner() {
        return this.winner
    }
    setWinner(valor) {
        this.winner = valor
    }
    getPlayer1() {
        return this.player1
    }
    setPlayer1(player) {
        this.player1 = player
    }
    getGameFinish() {
        return this.gameFinish
    }
    setGameFinish(valor) {
        this.gameFinish = valor
    }
    getPlayer2() {
        return this.player2
    }
    setPlayer2(player) {
        this.player2 = player
    }
    getTurns() {
        return this.turns
    }
    setTurns(turns) {
        this.turns = turns
    }
    getLockers() {
        return this.lockers
    }
    setLockers(locker) {
        this.lockers = locker
    }
    getGames() {
        return this.games
    }


    isLocker(locker) {
        let rta = false
        this.getLockers().forEach((el, index) => {
            if (locker == el) {
                rta = true
                this.blockLocker(index)
            }
        });
        return rta
    }

    blockLocker(index) {
        let lockers = this.getLockers()
        lockers[index].classList.add('disabled')
    }

    print(locker) {
        if (this.getTurns() == true) {
            locker.innerHTML = "<h1>X</h1>"
            this.setTurns(false)
        } else {
            locker.innerHTML = "<h1>O</h1>"
            this.setTurns(true)
        }
    }


    sameValue(valor) {
        let response = {
            winner: " ",
            hasWinner: false,
            positionWin: []
        }
        let lockers = this.getLockers()
        if (valor == 'X') {
            if (lockers[0].textContent == valor && lockers[1].textContent == valor && lockers[2].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [0, 1, 2]
            } else if (lockers[3].textContent == valor && lockers[4].textContent == valor && lockers[5].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [3, 4, 5]
            } else if (lockers[6].textContent == valor && lockers[7].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [6, 7, 8]
            } else if (lockers[0].textContent == valor && lockers[3].textContent == valor && lockers[6].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [0, 3, 6]
            } else if (lockers[1].textContent == valor && lockers[4].textContent == valor && lockers[7].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [1, 4, 7]
            } else if (lockers[2].textContent == valor && lockers[5].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [2, 5, 8]
            } else if (lockers[0].textContent == valor && lockers[4].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [0, 4, 8]
            } else if (lockers[2].textContent == valor && lockers[4].textContent == valor && lockers[6].textContent == valor) {
                response.winner = 'X'
                response.hasWinner = true
                response.positionWin = [2, 4, 6]
            }
        } else {
            if (lockers[0].textContent == valor && lockers[1].textContent == valor && lockers[2].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [0, 1, 2]
            } else if (lockers[3].textContent == valor && lockers[4].textContent == valor && lockers[5].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [3, 4, 5]
            } else if (lockers[6].textContent == valor && lockers[7].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [6, 7, 8]
            } else if (lockers[0].textContent == valor && lockers[3].textContent == valor && lockers[6].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [0, 3, 6]
            } else if (lockers[1].textContent == valor && lockers[4].textContent == valor && lockers[7].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [1, 4, 7]
            } else if (lockers[2].textContent == valor && lockers[5].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [2, 5, 8]
            } else if (lockers[0].textContent == valor && lockers[4].textContent == valor && lockers[8].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [0, 4, 8]
            } else if (lockers[2].textContent == valor && lockers[4].textContent == valor && lockers[6].textContent == valor) {
                response.winner = 'O'
                response.hasWinner = true
                response.positionWin = [2, 4, 6]
            }
        }
        return response
    }


    printPositionWinner(valor) {
        let lockersWin = valor.positionWin
        let lockers = this.getLockers()
        lockersWin.forEach(lock => {
            lockers[lock].classList.add('winner')
        })
    }

    comprobateAllLockersHasValue() {
        let value = this.getAllLockersHasValue()
        let lockers = this.getLockers()
        let flag = true
        let i
        do {

            if (lockers[i]) {

            }

            i++
        } while (flag);

    }

    isGameFinish(valor) {
        if (valor.hasWinner) {
            this.printPositionWinner(valor)
            this.setGameFinish(true)
            this.setWinner(valor.winner)
        } else {

        }
    }


}


let game = new Game('Tu madre', 'tu padre')

let button = d.getElementById('showModal')
let modalTitle = d.getElementById('modal-title')
let modalBody = d.getElementById('modal-body')
let close = d.getElementById('close')
let playAgain = d.getElementById('playAgain')

d.addEventListener('click', e => {
    let target = e.target
    e.preventDefault()
    e.stopPropagation()
        // button.click()

    if (game.isLocker(target)) {
        game.print(target)
        game.isGameFinish(game.sameValue('X'))
        game.isGameFinish(game.sameValue('O'))
        if (game.getGameFinish() == true) {
            let winner = game.getWinner()
            modalTitle.innerHTML = `<h3> ${winner == 'X' ? 'Ganó: ' + game.getPlayer1() :  'Ganó: ' + game.getPlayer2()} </h3>`
            modalBody.innerHTML = `<p> Buena partida crack. Gracias por probar este pequeño jueguito. No es la gran cosa pero todo se hace desde el ❤ </p>`
            button.click()
        }
    }


    if (target == close) {
        location.reload()
        window.close()
    }
    if (target == playAgain) {
        location.reload()
    }
})