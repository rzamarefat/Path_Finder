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
        neighbours.forEach(n =>{
            if (!(this.#arrInArr(this.closedCells, n))){
                filtered_neighbours.push(n)
            }
        })

        filtered_neighbours = [... new Set(filtered_neighbours)]

        filtered_neighbours = filtered_neighbours.filter(neighbour =>{
            return (neighbour[0] >=0) && (neighbour[1] >= 0) && (neighbour[0] <= this.dimensionOfBoard[0]) && (neighbour[1] <= this.dimensionOfBoard[0])
        })



        return filtered_neighbours
    }


    #arrInArr = (referenceArr, targetArr) => {
        for( let i = 0; i < referenceArr.length; i++ ){
          // don't even starting to compare if length are not equal
          if( referenceArr[i].length != targetArr.length ){ continue }
          
          let match = 0; // To count each exact match
          for( let j = 0; j < targetArr.length; j++ ){
            if( referenceArr[i][j] === targetArr[j] ){
              match++;
            } else {
              break;
            }
          }
          if( match === targetArr.length ){ // If each element exactly matched
            return true; 
          }
        }
        return false;
      }

    #defineGraph = () =>  {
        let graph = {}

        this.openCells.forEach(cell => {
            graph[cell] = this.#getNeighboursForOneCell(cell)
        })
        return graph
    }

    #DFSSolver = ()=> {
        const stack = [this.startPoint];
        // const current = stack.pop()
        
        console.log(this.graph)
        // while (stack.length > 0) {
        //     const current = stack.pop()
        //     console.log(current)
        //     for(let neighbour of this.graph[current]){
        //         stack.push(neighbour)
        //     }
            
        // }
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