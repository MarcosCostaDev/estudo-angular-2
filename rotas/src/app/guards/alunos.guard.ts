import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AlunosGuard implements CanActivateChild {
   
   	canActivateChild(
           route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot
       ): Observable<boolean>|Promise<boolean>|boolean {

          
          if(state.url.includes("editar"))
          {
              //alert("usuário sem acesso");
              //return Observable.of(false);
          }
           return true;
       }


}