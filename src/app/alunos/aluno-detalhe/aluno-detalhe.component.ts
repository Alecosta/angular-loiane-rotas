import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {


  aluno:Aluno;
  inscricao: Subscription | undefined;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
    
  ) {
    this.aluno = new Aluno(0, '', '');
   }

  ngOnInit() {
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        console.log('ID: ' +  this.alunosService.getAluno(id));
        console.log(this);
  
        
      }
    )
    */
      console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: any) => {
        //this.aluno = this.alunosService.getAluno(info.aluno.id);
        this.aluno = info.aluno;
        console.log('Recebendo o Objeto Aluno do Resolver');
      }
    )

 
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);  
    //alert('Edição de Contato');
  }
  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

}
