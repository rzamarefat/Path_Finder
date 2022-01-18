import {BOARD_TYPE_A, BOARD_TYPE_B, BOARD_TYPE_C} from './BoardTypes'


class Board{
    constructor(config){
        this.config = config

        if (this.config["typeOfBoard"] === "A"){
            this.boardType = BOARD_TYPE_A
        }else if(this.config["typeOfBoard"] === "B"){
            this.boardType = BOARD_TYPE_B
        }else if (this.config["typeOfBoard"] === "C"){
            this.boardType = BOARD_TYPE_C
        }
    }

    #createCellElement = (type) => {
        const cell = document.createElement("div")
        cell.classList.add("cell-element")

        if (type === "open"){
            cell.classList.add("open-cell")
        }else{
            cell.classList.add("closed-cell")
        }

        return cell
        
    }

    
    #createRowElement = () =>{
        const row = document.createElement("div")
        row.classList.add("row-element")

        return row 
    }

    #createStartPoint = () =>{
        const cell = document.createElement("div")
        cell.classList.add("cell-element")
        cell.classList.add("start-element")

        return cell
    }


    #createTargetPoint = () =>{
        const cell = document.createElement("div")
        cell.classList.add("cell-element")
        cell.classList.add("target-element")

        return cell
    }

    getCells = () => {
        const closedCells = []
        const openCells = []

        this.boardType.map((row, rowIndex) => {
            row.map((col, colIndex) => {
                if (col ===  0){
                    openCells.push([rowIndex, colIndex])
                }else{
                    closedCells.push([rowIndex, colIndex])
                }
            })
        })


        return {
            openCells: openCells,
            closedCells: closedCells
        }

    }


    displayBoard = () => {
        let c = 0
        this.boardType.forEach((row, index) => {
            
            const rowElement = this.#createRowElement()
            const boardParentElement = document.getElementById("board-area")

            row.map((col, col_index) => {
                if (index === this.config["startPoint"][0] && col_index === this.config["startPoint"][1]){
                    const cellElemenet = this.#createStartPoint()
                    rowElement.appendChild(cellElemenet)
                }else if (index === this.config["targetPoint"][0] && col_index === this.config["targetPoint"][1]){
                    const cellElemenet = this.#createTargetPoint()
                    rowElement.appendChild(cellElemenet)
                }else{
                    if (col === 0){
                        const cellElemenet = this.#createCellElement("open")
                        rowElement.appendChild(cellElemenet)
                    }else{
                        const cellElemenet = this.#createCellElement("closed")
                        rowElement.appendChild(cellElemenet)
                    }    
                }

            })

            boardParentElement.appendChild(rowElement)
        })
    }
}

export default Board