import { Injectable } from '@angular/core'

export interface Todo {
  id: number
  label: string
  description: string
  dueDate: string
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
    },
    {
      id: 2,
      label: 'blue',
      description: 'Cook Dinner',
      dueDate: '15-May-2019',
      stage: 'backlog',
    },
    {
      id: 3,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'backlog',
    },
    {
      id: 4,
      label: 'red',
      description: 'Buy Groceries',
      dueDate: '13-May-2019',
      stage: 'wip',
    },
    {
      id: 5,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'wip',
    },
    {
      id: 6,
      label: 'blue',
      description: 'Cook Dinner',
      dueDate: '15-May-2019',
      stage: 'completed',
    },
    {
      id: 7,
      label: 'green',
      description: 'Sleep 8 hours',
      dueDate: '17-May-2019',
      stage: 'completed',
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
