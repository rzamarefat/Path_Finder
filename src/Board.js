import {BOARD_TYPE_A, BOARD_TYPE_B, BOARD_TYPE_C} from './BoardTypes'


class Board{
    constructor(config){
        if (config["typeOfBoard"] === "A"){
            this.boardType = BOARD_TYPE_A
        }else if(config["typeOfBoard"] === "B"){
            this.boardType = BOARD_TYPE_B
        }else if (config["typeOfBoard"] === "C"){
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
        cell.classList.add("start-element")
    }


    #createTargetPoint = () =>{
        const cell = document.createElement("div")
        cell.classList.add("target-element")
    }


    displayBoard = () => {
        let c = 0
        this.boardType.forEach(row => {
            const rowElement = this.#createCellElement()
            const boardParentElement = document.getElementById
            ("board-area")

            row.map(col => {
                if (col === 0){
                    const cellElemenet = this.#createCellElement("open")
                    rowElement.appendChild(cellElemenet)
                }else{
                    const cellElemenet = this.#createCellElement("closed")
                    rowElement.appendChild(cellElemenet)
                }
            })
            boardParentElement.appendChild(rowElement)
        })

        

        

    }
}

export default Board