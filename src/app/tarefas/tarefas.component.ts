import { Component } from '@angular/core';
import { Tarefa } from '../tarefaModel';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent{
  tarefa = null;
  editarTarefa: Tarefa = null;
  tarefas_pendentes = [];
  tarefas_executadas = [];

  salvar(): void {
    if (this.editarTarefa){
      this.editarTarefa.nome = this.tarefa;
    }else{
    const t = new Tarefa(this.tarefa);
    this.tarefas_pendentes.push(t);
    this.tarefa = null;
    }

    this.tarefa = null;
    this.editarTarefa = null;
  }

  excluir(tar):void {
    if (confirm('Tem certeza que deseja excluir a disciplina?')) {
      const indice = this.tarefas_pendentes.indexOf(tar);
      this.tarefas_pendentes.splice(indice, 1);
    }
  }

  editar(tar):void {
    this.tarefa = tar.nome;

    this.editarTarefa = tar;
  }

  mudar(tar):void{
    const i = this.tarefas_pendentes.indexOf(tar);
    this.tarefas_pendentes.splice(i,1);
    this.tarefas_executadas.push(tar)
  }
}
