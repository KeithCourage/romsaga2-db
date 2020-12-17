import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { FilterService } from "../shared/filter.service";
import { FilterChecker } from "../shared/filter-checker";

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

  constructor(private filterService: FilterService) {}

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;
  }

  ngOnInit() {
    this.filterService.filterChanged$.subscribe(() => this.onFiltered());
    this.filterService.columnFilterChanged$.subscribe(() =>
      this.onColumnsFiltered()
    );
    this.filterService.searchFilterChanged$.subscribe(() =>
      this.onSearchFiltered()
    );
  }

  onSearchFiltered() {
    this.dataSource.filter = this.filterService.SearchFilter.trim().toLowerCase();
  }

  onFiltered() {
    this.dataSource.data = this.applyFilters();
  }

  applyFilters() {
    var filters: {
      [key: string]: FilterChecker;
    } = this.filterService.getFilters();
    var filteredTechs = techs;
    //filter techs for each key (column) in filters

    for (var key in filters) {
      filteredTechs = filteredTechs.filter(tech =>
        filters[key](tech[key as keyof TechData])
      );
    }
    return filteredTechs;
  }

  onColumnsFiltered() {
    let columnNames = this.filterService.ColumnFilter;
    //change column names to camel case to match techs data format
    for (let i = 0; i < columnNames.length; i++) {
      let lowerCasedLetter = columnNames[i][0].toLowerCase();
      let formattedName = columnNames[i].replace(" ", "");
      // columnNames[i] = lowerCasedLetter + formattedName.slice(1);
    }
    this.columnsToDisplay = columnNames;
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
