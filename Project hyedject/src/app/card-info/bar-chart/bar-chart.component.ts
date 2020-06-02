import {Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import {ActivatedRoute} from "@angular/router";
import {CardInfoService} from "../../services/card-info.service";
import {VisitsService} from "../../visits.service";
import {Visits} from "../../visits";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {

  constructor(private visitsService: VisitsService,
              private route: ActivatedRoute,
              private cardInfoService: CardInfoService) {
  }

  public chartType = 'bar';
  visits: Visits[];
  formating = [
    {id: 1, name: "1 week"},
    {id: 2, name: "2 weeks"},
    {id: 3, name: "1 month"}
  ];

  selectedFormatObj = this.formating[0].name;
  data: number[] = [0];
  public day: string[] = [''];
  public chartDatasets: Array<any> = [
    {data: this.data, label: 'Hours'}
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
          max: 24
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

  public switchFormat(id: number) {
    // Я пытался найти что-либо по refresh для chart bart , но все что нашел это сообщение от разработчика что они не смогли это сделать но в скором времени все додлеют (1 год назад...)
  }

  getAllows() {
    const skudId = +this.route.snapshot.paramMap.get("id");
    const cardId = +this.route.snapshot.paramMap.get("cardId");
    const cardNumber = this.cardInfoService.getSelectedCard(skudId, cardId).cardId;
    this.visits = this.visitsService.getVisitsByCardNumber(cardNumber);
    for (let i = 0; i < this.visits.length && i < 10; i++) {
      this.data[i] = this.visits[i].hours.getHours();
      this.day[i] = this.visits[i].entryDate.toLocaleDateString();
    }
    this.chartDatasets[0].data = this.data;
    console.log(this.data);
  }
}

// TODO Подвязать данные к таблцице, сделать разделение на неделю , 2 недели , месяц
// TODO Подпись к таблице по дате (15.11)

