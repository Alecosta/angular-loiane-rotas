import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AlunoFormComponent } from "./../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(
        component: IFormCanDeactivate, 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('guarda de desativação');

            return component.podeDesativar();

            //return true;
        
    }
}