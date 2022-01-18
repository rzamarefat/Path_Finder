class DOMManager{
    constructor(){
        this.typeOfBoard = "A"
        this.startPoint = [0,0]
        this.targetPoint = [15, 15]
        
    }


    getConfig = () => {

        return {
            typeOfBoard: this.typeOfBoard, 
            startPoint: this.startPoint,
            targetPoint: this.targetPoint 
        }
    }
}

export default DOMManager