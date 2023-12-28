import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Input() currentPage: number = 1;
  @Input() url: string = '';
  pageCount: number = 1;
  pages: number[] = [];

  constructor(private utilsService: UtilsService) {}
  ngOnInit(): void {
    this.pageCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pageCount > 0 ? this.utilsService.range(1, this.pageCount) : [];
    console.log(this.total);
  }
}