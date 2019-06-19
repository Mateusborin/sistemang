import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { teste } from './teste.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [TesteComponent]
})

export class TesteComponent implements OnInit {

    teste: teste;
    testeRef: AngularFireList<any>;
    

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.teste = new teste(null,null,null);
        this.listar();
    }

    salvar() {
        this.db.list('teste').push(this.teste)
            .then((result: any) => {
                console.log(result.key);
            });            
    }
    excluir(key:string) {
        if (confirm('Deseja realmente excluir?')){
        this.db.list('teste').remove(key)
            .then((result: any) => {
                console.log(result.key);
            });
            this.teste = new teste (null,null,null)    
        }        
    }

    listar() {        
        this.getAll().subscribe(
            //teste => this.teste = teste,
            error => alert(error),
            () => console.log("terminou")
          );        
    }

    getAll() : Observable<any[]> {
        return this.db.list('teste')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
      }


}