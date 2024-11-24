import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer';
const URL="http://localhost:3000/computers"
@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private readonly http:HttpClient=inject(HttpClient);
  getComputers():Observable<Computer[]>{
    return this.http.get<Computer[]>(URL)
  }
  getComputerById(id:number):Observable<Computer>{
    return this.http.get<Computer>(`${URL}/${id}`)
  }
  patchComputer(id:number, data:any):Observable<Computer>{
    return this.http.patch<Computer>(URL+"/"+ id, data);
  }
  deleteComputer(id:number){
    return this.http.delete(URL+"/"+ id);
  }
  addComputer(pc:Computer){
    return this.http.post(URL,pc);
  }
    
}
