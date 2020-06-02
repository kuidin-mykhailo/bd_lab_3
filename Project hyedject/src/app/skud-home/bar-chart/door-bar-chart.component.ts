import {Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import {ActivatedRoute} from "@angular/router";
import {CardInfoService} from "../../services/card-info.service";
import {VisitsService} from "../../visits.service";
import {Visits} from "../../visits";
import {VisitCounter} from "../../visit-counter";

@Component({
  selector: 'app-door-bar-chart',
  templateUrl: './door-bar-chart.component.html',
  styleUrls: ['./door-bar-chart.component.css'],
})
export class DoorsBarChartComponent implements OnInit {

  constructor(private visitsService: VisitsService,
              private route: ActivatedRoute,
              private cardInfoService: CardInfoService) {
  }

  public chartType = 'bar';
  visits = new Array<VisitCounter>(10);
  formating = [
    {id: 1, name: "1 week"},
    {id: 2, name: "2 weeks"},
    {id: 3, name: "1 month"}
  ];

  selectedFormatObj = this.formating[0].name;
  data: number[] = [0];
  public day: string[] = [''];
  public chartDatasets: Array<any> = [
    {data: this.data, label: 'Entries'}
  ];

  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartData = [
    1, 2, 3, 4, 5, 6, 8
  ];

  public chartOptions: any = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 20
        }
      }]
    }
  };

  ngOnInit(): void {
    this.getAllows();
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  getAllows() {
    const skudId = +this.route.snapshot.paramMap.get("id");
    this.visits = this.visitsService.getVisitsByLastDays(skudId);
    console.log(this.visits);
    for (let i = 0; i < this.visits.length && i < 10; i++) {
      this.data[i] = this.visits[i].visitsCount;
      this.day[i] = this.visits[i].visitDate.toLocaleDateString();
    }
    this.chartDatasets[0].data = this.data;
    console.log(this.data);
  }
}

// TODO Подвязать данные к таблцице, сделать разделение на неделю , 2 недели , месяц
// TODO Подпись к таблице по дате (15.11)

