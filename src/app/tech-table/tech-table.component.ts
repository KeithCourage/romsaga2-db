import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { techs } from "../shared/techs";

import { TechData } from "../shared/tech-data.model";
import { techTableColumns } from "./tech-table-columns";

@Component({
  selector: "app-tech-table",
  templateUrl: "./tech-table.component.html",
  styleUrls: ["./tech-table.component.css"]
})
export class TechTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource(techs);

  columns = techTableColumns;
  columnsToDisplay = this.columns.map(c => c.columnDef);

  sortBy = "weaponType";
  reverseSort = false;

  constructor(){}

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;
  }

  ngOnInit() {
  }

  onSearchFiltered() {
  }

  onFiltered() {
  }

  applyFilters() {
  }

  onColumnsFiltered() {
  }

  getPageSizeOptions() {
    let sizes: number[] = [];
    let curSize = 10;
    let maxSize = this.dataSource.data.length;
    while (curSize < maxSize) {
      sizes.push(curSize);
      curSize *= 2;
    }
    sizes.push(maxSize);
    return sizes;
  }
}
