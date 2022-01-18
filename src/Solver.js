class Solver{
    constructor(config, cells){
        this.method = config["method"]
        this.startPoint = config["startPoint"]
        this.targetPoint = config["targetPoint"]
        this.openCells = cells["openCells"]
        this.closedCells = cells["closedCells"]
        this.movementStyle = cells["movementStyle"] 
        
    }

    #DFSSolver = ()=> {
        const stack = [this.startPoint]

        let neighbours = [
            [this.startPoint[0], this.targetPoint[1]+1],
            [this.startPoint[0], this.targetPoint[1]-1],
            [this.startPoint[0]+1, this.targetPoint[1]],
            [this.startPoint[0]-1, this.targetPoint[1]],
        ]
        if(this.movementStyle === "8"){
            neighbours = [
                [this.startPoint[0], this.targetPoint[1]+1],
                [this.startPoint[0], this.targetPoint[1]-1],
                [this.startPoint[0]+1, this.targetPoint[1]],
                [this.startPoint[0]-1, this.targetPoint[1]],

                [this.startPoint[0]+1, this.targetPoint[1]+1],
                [this.startPoint[0]-1, this.targetPoint[1]-1],
                [this.startPoint[0]-1, this.targetPoint[1]+1],
                [this.startPoint[0]+1, this.targetPoint[1]-1],
            ]
        }

        neighbours.forEach(n => {
            
        })
        

        
    }

    #BFSSolver = () => {
        

    }

    #AStarSolver = () => { 

    }



    solve = () =>{
        if (this.method === "DFS"){
            this.#DFSSolver()
        }else if (this.method === "BFS"){
            this.#BFSSolver()
        }else if (this.method === "AStar"){
            this.#AStarSolver()
        }
    }
}



export default Solver