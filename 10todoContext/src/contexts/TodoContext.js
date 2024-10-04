import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            compeleted: false,
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toogleCompelete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider