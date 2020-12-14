import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { FilterChecker } from "../shared/filter-checker";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters: { [key: string]: FilterChecker } = {};
  private columnFilter: string[] = [];
  private searchFilter: string = "";

  // Observable string sources
  private filterChangedSource = new Subject<void>();
  private columnFilterChangedSource = new Subject<void>();
  private searchFilterChangedSource = new Subject<void>();

  // Observable string streams
  filterChanged$ = this.filterChangedSource.asObservable();
  columnFilterChanged$ = this.columnFilterChangedSource.asObservable();
  searchFilterChanged$ = this.searchFilterChangedSource.asObservable();

  constructor() {}

  get ColumnFilter() {
    return this.columnFilter;
  }

  get SearchFilter() {
    return this.searchFilter;
  }

  setSearchFilter(searchTerms: string) {
    this.searchFilter = searchTerms;
    this.searchFilterChangedSource.next();
  }

  setFilter(key: string, filterChecker: FilterChecker) {
    this.filters[key] = filterChecker;
    this.filterChangedSource.next();
  }

  getFilters() {
    return this.filters;
  }

  clearFilters() {
    this.filters = {};
    return this.filters;
  }

  setColumnFilter(columnFilter: string[]) {
    this.columnFilter = columnFilter;
    this.columnFilterChangedSource.next();
  }
}
