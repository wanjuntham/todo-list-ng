import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
interface User {
  name: string
  id: number
}

export interface swAPI{
  name: string
  eye_color: string
  skin_color: string
  birth_year: string
  gender: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []

  constructor(private http:HttpClient) {
    this.http.get('https://swapi.co/api/people/4').subscribe(res => {
      // the response will be in a specific format
      const data = res as swAPI
      console.log(data.name)
      console.log(data.gender)
      console.log(data.eye_color)
      console.log(data.birth_year)
      console.log(data.skin_color)
  })
  }

  getUserById(userId) {
    const x = this.http.get(`https://swapi.co/api/people/${userId}`)
    return x
  }
}
