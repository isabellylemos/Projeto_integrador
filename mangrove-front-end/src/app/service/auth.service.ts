import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { Observable } from 'rxjs';
import { UsuariosModel } from '../model/UsuariosModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token={
    headers: new HttpHeaders().set('Authorization', environment.tokenUsuario)
  }
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.tokenUsuario)
    }
  }
  constructor(
    private http: HttpClient
  ) { }

  entrar( usuarioLoginModel: UsuarioLoginModel): Observable<UsuarioLoginModel>{
    return this.http.post<UsuarioLoginModel>('https://mangroveprojeto.herokuapp.com/usuarios/logar', usuarioLoginModel)

  }
  cadastrar(usuarioModel:UsuariosModel): Observable<UsuariosModel>{
    return this.http.post<UsuariosModel>('https://mangroveprojeto.herokuapp.com/usuarios/cadastrar', usuarioModel)
  }

  logado () {
    let ok: boolean = false;
    if (environment.tokenUsuario != '') {
      ok = true
    }
    return ok

  }
}
