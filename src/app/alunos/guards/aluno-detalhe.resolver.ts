import { Aluno } from './../aluno';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosService } from '../alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService)  {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): Observable<any> | Promise<any> | any {

            console.log('AlunoDetalheResolver');

            let id = route.params['id'];

            return this.alunosService.getAluno(id);
        
    }
}