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

    #getNeighboursForOneCell = (cell) =>{

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
        let filtered_neighbours = []
        this.closedCells.forEach( closedCell => {
            neighbours.forEach(neighbour =>{
                if (!(neighbour[0] === closedCell[0] && neighbour[1] === closedCell[1])){
                    filtered_neighbours.push(neighbour)
                }
            })
        })
        filtered_neighbours = [... new Set(filtered_neighbours)]
        console.log(filtered_neighbours)
        // filtered_neighbours = filtered_neighbours.filter(neighbour =>{
        //     return (neighbour[0] >=0) && (neighbour[1] >= 0) && (neighbour[0] <= this.dimensionOfBoard[0]) && (neighbour[1] <= this.dimensionOfBoard[0])
        // })

        

        return filtered_neighbours
    }

    #defineGraph = () =>  {
        let graph = {}

        this.openCells.forEach(cell => {
            graph[cell] = this.#getNeighboursForOneCell(cell)
        })
        return graph
    }

    #DFSSolver = ()=> {
        const stack = [this.startPoint]
        
        
        console.log(this.closedCells)
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