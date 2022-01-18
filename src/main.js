import Board from './Board'
import DOMManager from './DOMManager'
import Solver from './Solver'

const main = () => {
    // The following vars will be encapsulated with the DOMManager later
    const domManager = new DOMManager()
    const config = domManager.getConfig()

    const board = new Board(config)
    board.displayBoard()

    const cells  = board.getCells()

    const solver  = new Solver(config, cells)
    solver.solve()
    
}

main()