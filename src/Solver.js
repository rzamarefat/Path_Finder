class Solver{
    constructor(config, cells){
        this.method = config["method"]
        this.startPoint = config["startPoint"]
        this.targetPoint = config["targetPoint"]
        this.openCells = cells["openCells"]
        this.closedCells = cells["closedCells"]
        this.movementStyle = cells["movementStyle"]
        this.dimensionOfBoard = config["dimensionOfBoard"]
        this.graph = this.#defineGraph()
    }

    #defineGraph = () =>  {
        let modifiedNetworks = []

        this.openCells.forEach(cell => {
            let neighbours = [
                [cell[0], cell[1]+1],
                [cell[0], cell[1]-1],
                [cell[0]+1, cell[1]],
                [cell[0]-1, cell[1]],
            ] 
            
            if(this.movementStyle === "8"){
                neighbours = [
                    [cell[0], cell[1]+1],
                    [cell[0], cell[1]-1],
                    [cell[0]+1, cell[1]],
                    [cell[0]-1, cell[1]],
    
                    [cell[0]+1, cell[1]+1],
                    [cell[0]-1, cell[1]-1],
                    [cell[0]-1, cell[1]+1],
                    [cell[0]+1, cell[1]-1],
                ]
            }

            neighbours.forEach(n => {
                this.closedCells.forEach(c => {
                    if (!((c[0] == n[0] && c[1] == c[1]))||!(c[0] < 0 || c[1] < 0 || c[0] < this.dimensionOfBoard || c[0] < this.dimensionOfBoard[1])){
          
                        modifiedNetworks.push(n)    
                    }
                })
            })  
        })
        return modifiedNetworks
    }

    #DFSSolver = ()=> {
        const stack = [this.startPoint]
        
        
        
        console.log(this.graph)

        
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