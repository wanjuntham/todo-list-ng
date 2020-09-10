import { Injectable } from '@angular/core'

export interface Todo {
  id: number
  label: string
  description: string
  dueDate: string
  stage: string
  userID: number
}

export interface List {
  title: string
  todos: Todo[]
}

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  todos: Todo[] = [
    {
      id: 1,
      label: 'red',
      description: 'Buy Groceries',
      dueDate: '13-May-2019',
      stage: 'backlog',
      userID: 1
    },
    {
      id: 2,
      label: 'blue',
      description: 'Cook Dinner',
      dueDate: '15-May-2019',
      stage: 'backlog',
      userID: 2
    },
    {
      id: 3,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'backlog',
      userID: 1
    },
    {
      id: 4,
      label: 'red',
      description: 'Buy Groceries',
      dueDate: '13-May-2019',
      stage: 'wip',
      userID: 2
    },
    {
      id: 5,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'wip',
      userID: 1
    },
    {
      id: 6,
      label: 'blue',
      description: 'Cook Dinner',
      dueDate: '15-May-2019',
      stage: 'completed',
      userID: 2
    },
    {
      id: 7,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'completed',
      userID: 1
    },
  ]

  constructor() {}

  getTodosByStage(stage) {
    let result = []
    for (let todo of this.todos) {
      if (todo.stage === stage) {
        result.push(todo)
      }
    }
    return result
  }

  changeColor(todoId, color) {
    for (let todo of this.todos) {
      if (todo.id === todoId) {
        todo.label = color
      }
    }
  }
}
