import { Component, OnInit } from '@angular/core';
import { ListaJob } from '../_models/listaJob';
import { Job } from '../_models/job';
import { ItJobsService } from '../services/it-jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public listJobs: ListaJob;
  public results: Job[];

  constructor(private itJobsService: ItJobsService) {
    this.getListJobs();
  }

  ngOnInit(): void {}

  getListJobs() {
    this.itJobsService.listJobs().subscribe((data: ListaJob) => {
      this.listJobs = data;
      this.results = data.results;
    });
  }
}
