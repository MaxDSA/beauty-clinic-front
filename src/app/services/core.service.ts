import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { IS_PUBLIC } from "./auth.interceptor";

@Injectable({
    providedIn: 'root',
  })
  export class CoreService {
    private readonly http = inject(HttpClient);
    private readonly CONTEXT = {context: new HttpContext().set(IS_PUBLIC, true)};

    
    getClientes(){
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
        return this.http.get<any>(`${environment.apiUrl}/clientes`, {headers})
    }
  }