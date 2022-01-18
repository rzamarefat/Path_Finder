
class DOMManager{
    constructor(){
        this.typeOfBoard = "A"
        this.startPoint = [0,0]
        this.targetPoint = [15, 15]
        this.method = "DFS"
        this.movementStyle = "4"

    }

    getConfig = () => {

        return {
            typeOfBoard: this.typeOfBoard, 
            startPoint: this.startPoint,
            targetPoint: this.targetPoint,
            method: this.method

        }
    }
}

export default DOMManager