import Board from './Board'
import DOMManager from './DOMManager'

const main = () => {
    // The following vars will be encapsulated with the DOMManager later
    const domManager = new DOMManager()
    const config = domManager.getConfig()

    const board = new Board(config)
    board.displayBoard()


}



main()