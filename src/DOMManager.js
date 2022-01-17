class DOMManager{
    constructor(){
        this.typeOfBoard = "A"
        this.starPoint = (4,4)
        this.targetPoint = (15, 15)
        
    }


    getConfig = () => {

        return {
            typeOfBoard: this.typeOfBoard, 
            starPoint: this.starPoint,
            targetPoint: this.endPoint 
        }
    }
}

export default DOMManager