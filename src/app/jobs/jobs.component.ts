import { Component, OnInit } from '@angular/core';
import { ListaJob } from '../_models/listaJob';
import { Job } from '../_models/job';
import { ItJobsService } from '../services/it-jobs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public contrato: string;
  public local: string;
  public tipo: string;
  public search: string;
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
  pageList(page: number) {
    this.itJobsService.pageListJob(page).subscribe((data: ListaJob) => {
      this.listJobs = data;
      this.results = data.results;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  getSelect(event, target) {
    target = event.target.value;
    console.log(this.contrato);
  }

  test() {
    console.log(this.search, this.tipo, this.local, this.contrato);
  }

  searchJob() {
    this.itJobsService
      .searchJob(this.search, this.local, this.tipo, this.contrato)
      .subscribe((data: ListaJob) => {
        this.listJobs = data;
        this.results = data.results;
      });
  }
}
