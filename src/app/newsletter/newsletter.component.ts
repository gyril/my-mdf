import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  public allNewsletter: any;
  public selectedNewsletter: number;

  constructor(private _firebase: AngularFireDatabase) {
  }

  async ngOnInit() {
    // Récupération des données firebase
    this._firebase.object('/newsletter').valueChanges().subscribe(data => {
      this.allNewsletter = data;

      // On commence par la première news
      this.selectedNewsletter = 0;
    });



  }

  public next() {
    this.selectedNewsletter = this.selectedNewsletter + 1;
  }

  public previous() {
    this.selectedNewsletter = this.selectedNewsletter - 1;
  }

}
