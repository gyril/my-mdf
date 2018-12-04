import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  public allDocumentation: any;

  constructor(private _firebase: AngularFireDatabase) { }

  async ngOnInit() {
    // Récupération des données firebase
    this._firebase.object('/documentation').valueChanges().subscribe(data => {
      this.allDocumentation = data;

      console.log('this.allDocumentation', this.allDocumentation);

    });
  }

}
