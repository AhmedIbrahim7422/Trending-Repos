import { Component, OnInit } from '@angular/core';
import { IUsers } from './interface/interface';
import { GetDataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trending Repos';

  //pagination code
  totalRocords: number | undefined
  page: number = 1;

  constructor(private get: GetDataService) { }
  //import Iusers interface
  data: Array<IUsers> = [];

  //get the day date
  n = new Date();
  //get the current year
  newYear = this.n.getFullYear()

  //make array for the time interval
  timeInterval: Number | undefined;
  since: Array<any> = []

  ngOnInit(): void {
    this.getData();
  }
  //get Data method
  getData() {
    this.get.getData().subscribe(
      (res) => {
        //use the interface and get the array
        this.data = res.items
        //get array length and use it to make the pagination
        this.totalRocords = this.data.length
        //get  created date and push the time interval in since array
        for (let index = 0; index < this.data.length; index++) {
          const theDate = new Date(this.data[index].created_at);
          const theYear = theDate.getFullYear()
          this.timeInterval = this.newYear - theYear
          this.since.push(this.timeInterval)
        }
      }
    );
  }
}
