import { Observable } from 'rxjs/Rx';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';

import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
        
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("AlunosDeactivateGuard");
            return component.podeMudarRota();
    }
}