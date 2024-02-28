import { NgModule } from '@angular/core';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent, 
        AlunoDetalheComponent],
    providers: [
        AlunosService,
        AlunosDeactivateGuard
    ],
})
export class AlunosModule { }
