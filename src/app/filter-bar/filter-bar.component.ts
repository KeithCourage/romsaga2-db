import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDrawer } from '@angular/material/sidenav';
import { FilterService } from '../shared/filter.service';
import { FilterChecker } from '../shared/filter-checker';
import { Filter } from '../shared/filter.model';
import { FilterGroup } from '../shared/filter-group.model';


type SubFilterChecker = (filterType: string, currentType: string) => boolean;

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})

export class FilterBarComponent implements OnInit, AfterViewInit {

  weaponTypeFilters : FilterGroup = {
    groupName:'Weapon Type',
    groupKey:'weaponType',
    filters: {
      name:'All',
      value:'allWeaponTypes',
      color:'accent',
      expanded: true,
      subfilters: [
        {name:'Axe',          value:'Axe',           color:'primary'},
        {name:'Bow',          value:'Bow',           color:'primary'},
        {name:'Club',         value:'Club',          color:'primary'},
        {name:'Great Sword',  value:'Great Sword',   color:'primary'},
        {name:'Hammer',       value:'Hammer',        color:'primary'},
        {name:'Short Sword',  value:'Short Sword',   color:'primary'},
        {name:'Spear',        value:'Spear',         color:'primary'},
        {name:'1H Sword',     value:'1H Sword',      color:'primary'},
        {name:'Unarmed',      value:'Unarmed',       color:'primary'},
        {name:'Medicine',     value:'Medicine',      color:'primary'},
        {name:'Magic',        value:'magicTypes',    color:'accent', expanded:false, subfilters:[
          {name:'Dark',         value:'Dark',          color:'primary'},
          {name:'Earth',        value:'Earth',         color:'primary'},
          {name:'Fire',         value:'Fire',          color:'primary'},
          {name:'Light',        value:'Light',         color:'primary'},
          {name:'Water',        value:'Water',         color:'primary'},
          {name:'Wind',         value:'Wind',          color:'primary'}
        ]}
      ]}
  };

  sparkTypeFilters : FilterGroup = {
    groupName: 'Spark Types',
    groupKey: 'sparkTypes',
    filters: {
      name:'All',
      value:'allSparkTypes',
      color:'accent',
      expanded:true,
      subfilters: [
        {name:'T 00 - Pugilist',          value:'type00',  color:'primary'},
        {name:'T 01 - Ascetic',          value:'type01',  color:'primary'},
        {name:'T 02 - Bow',          value:'type02',  color:'primary'},
        {name:'T 03 - Epee',          value:'type03',  color:'primary'},
        {name:'T 04 - Spear',          value:'type04',  color:'primary'},
        {name:'T 05 - Hammer',          value:'type05',  color:'primary'},
        {name:'T 06 - Axe',          value:'type06',  color:'primary'},
        {name:'T 07 - Stagnant',          value:'type07',  color:'primary'},
        {name:'T 08 - Samurai',          value:'type08',  color:'primary'},
        {name:'T 09 - Polearm',          value:'type09',  color:'primary'},
        {name:'T 10 - Swordmaster',          value:'type10',  color:'primary'},
        {name:'T 11 - Great Sword',          value:'type11',  color:'primary'},
        {name:'T 12 - Generalist',          value:'type12',  color:'primary'},
        {name:'T 13 - 1H Sword Gen',          value:'type13',  color:'primary'},
        {name:'T 14 - 1H Sword',          value:'type14',  color:'primary'},
        {name:'T 15 - Sorceror',          value:'type15',  color:'primary'}
    ]}
  };

  techTableColumns : FilterGroup = {
    groupName: 'Table Columns',
    groupKey: 'tableColumns',
    filters: {
      name:'All',
      value:'allTableColumns',
      color:'accent',
      expanded:true,
      subfilters: [
        {name:'Name',           value:'name',       color:'primary'},
        {name:'Info (Basic)',   value:'infoBasic',  color:'accent', expanded:false, subfilters: [
          {name:'Weapon Type',    value:'weaponType',   color:'primary'},
          {name:'Power',          value:'power',        color:'primary'},
          {name:'Damage Type',    value:'damageType',   color:'primary'},
          {name:'Special Notes',  value:'specialNotes', color:'primary'}
        ]},
        {name:'Info (Extra)',     value:'infoExtra',  color:'accent', expanded:false, subfilters: [
          {name:'Accuracy',         value:'accuracy',         color:'primary'},
          {name:'Flat Evasion',     value:'flatEvasion',      color:'primary'},
          {name:'Use Shield',       value:'useShield',        color:'primary'},
          {name:'Counter',          value:'counter',          color:'primary'},
          {name:'Evade',            value:'evade',            color:'primary'},
          {name:'Evade Difficulty', value:'evadeDifficulty',  color:'primary'},
        ]},
        {name:'Sparking',     value:'sparking',  color:'accent', expanded:false, subfilters: [
          {name:'Spark Difficulty',       value:'sparkDifficulty',            color:'primary'},
          {name:'Alternate Spark',        value:'alternateSpark',             color:'primary'},
          {name:'Alt Spark Difficulty',   value:'alternateSparkDifficulty1',  color:'primary'},
          {name:'Alt Spark 2',            value:'alternateSpark2',            color:'primary'},
          {name:'Alt Spark 2 Difficulty', value:'alternateSparkDifficulty2',  color:'primary'},
          {name:'Weapon',                 value:'weapon',                     color:'primary'},
        ]},
        {name:'Spark Types',     value:'sparkTypes',  color:'accent', expanded:false, subfilters: [
          {name:'T 00 - Pugilist',          value:'type00',  color:'primary'},
          {name:'T 01 - Ascetic',          value:'type01',  color:'primary'},
          {name:'T 02 - Bow',          value:'type02',  color:'primary'},
          {name:'T 03 - Epee',          value:'type03',  color:'primary'},
          {name:'T 04 - Spear',          value:'type04',  color:'primary'},
          {name:'T 05 - Hammer',          value:'type05',  color:'primary'},
          {name:'T 06 - Axe',          value:'type06',  color:'primary'},
          {name:'T 07 - Stagnant',          value:'type07',  color:'primary'},
          {name:'T 08 - Samurai',          value:'type08',  color:'primary'},
          {name:'T 09 - Polearm',          value:'type09',  color:'primary'},
          {name:'T 10 - Swordmaster',          value:'type10',  color:'primary'},
          {name:'T 11 - Great Sword',          value:'type11',  color:'primary'},
          {name:'T 12 - Generalist',          value:'type12',  color:'primary'},
          {name:'T 13 - 1H Sword Gen',          value:'type13',  color:'primary'},
          {name:'T 14 - 1H Sword',          value:'type14',  color:'primary'},
          {name:'T 15 - Sorceror',          value:'type15',  color:'primary'}
        ]}
    ]}
  };

  filterGroups = [this.weaponTypeFilters, this.sparkTypeFilters, this.techTableColumns];
  filterSelection : {[id:string] : SelectionModel<Filter>} = { };

  @ViewChild('drawer') drawer? : MatDrawer;

  constructor(
    private filterService : FilterService
  ) { }

  ngOnInit() {
    this.filterGroups.forEach(group => this.filterSelection[group.groupKey] =
      new SelectionModel<Filter>(true,
        this.getAllChildren(group.filters, [group.filters])));
    //spark types starts with nothing selected
    this.filterSelection[this.sparkTypeFilters.groupKey].clear();
  }

  ngAfterViewInit() {
  }

  toggleShown() {
    this.drawer?.toggle();
  }

  /*
   *  Filter toggling/checking methods
   */

  childrenAllSelected(groupKey: string, filter: Filter): boolean {
    if(filter.subfilters == null)
      return this.filterSelection[groupKey].isSelected(filter);
    return filter.subfilters.every(f => this.filterSelection[groupKey].isSelected(f));
  }

  childrenPartiallySelected(groupKey: string, filter: Filter): boolean {
    if(filter.subfilters == null)
      return false;
    return filter.subfilters.filter(f => this.checkAnySelected(groupKey, f)).length > 0
      && !this.childrenAllSelected(groupKey, filter);
  }

  checkAnySelected(groupKey: string, filter: Filter): boolean {
    if(this.filterSelection[groupKey].isSelected(filter))
      return true;
    if(filter.subfilters == null)
      return false;
    //check subfilters
    return filter.subfilters.some(f => this.checkAnySelected(groupKey, f));
  }

  filterSelectionToggle(groupKey: string, filter: Filter, ...parentFilters: Filter[]): void {
    this.filterSelection[groupKey].toggle(filter);
    let children = this.getAllChildren(filter, []);
    this.filterSelection[groupKey].isSelected(filter)
      ? this.filterSelection[groupKey].select(...children)
      : this.filterSelection[groupKey].deselect(...children);

    // Force update for the parent(s)
    parentFilters.forEach(f => this.updateParentSelection(groupKey, f));
    this.applyFilter(groupKey);
  }

  getAllChildren(filter: Filter, children: Filter[]): Filter[] {
    if(filter.subfilters == null)
      return children;
    filter.subfilters.forEach(f => {
      children.push(f);
      children.concat(this.getAllChildren(f, children));
    });
    return children;
  }

  updateParentSelection(groupKey: string, parentFilter: Filter) {
    let children = this.getAllChildren(parentFilter, []);
    if(children.some(child => !this.filterSelection[groupKey].isSelected(child)))
      this.filterSelection[groupKey].deselect(parentFilter);
    else
      this.filterSelection[groupKey].select(parentFilter);
  }

  hasChildren(filter: Filter): boolean {
    return filter.subfilters != null;
  }

  isExpanded(filter: Filter): boolean {
    return filter.expanded == null || filter.expanded;
  }

  toggleExpanded(filter: Filter) {
    if(filter.expanded != null)
      filter.expanded = !filter.expanded;
  }

  /*
   * Filter Application Methods
   */

  applyFilter(groupKey: string) {
    let selection = this.filterSelection[groupKey];
    //this is used later to create the actual filter check
    let filterSearchTerms = this.generateFilterSearchTerms(selection.selected);
    //filter weapon types
    if(groupKey == this.weaponTypeFilters.groupKey) {
      this.filterService.setFilter(groupKey,
        this.generateFilterChecker(filterSearchTerms));
    }
    else if(groupKey == this.sparkTypeFilters.groupKey) {
      this.sparkTypeFilters.filters.subfilters?.forEach(sparkType => {
        let searchTerm = filterSearchTerms.includes(sparkType.value) ?
          "Y" : "";
        this.filterService.setFilter(sparkType.value,
          this.generateFilterChecker([searchTerm]))
      });
    }
    else if(groupKey == this.techTableColumns.groupKey) {
      this.filterService.setColumnFilter(filterSearchTerms);
    }
  }

  generateFilterSearchTerms(filters: Filter[]): string[] {
    let filterSearchTerms: string[]  = [];
    filters.forEach(f => {
      if(f.subfilters == null)
        filterSearchTerms.push(f.value);
    })
    return filterSearchTerms;
  }

  //filter checker generator
  generateFilterChecker(filterSearchTerms: string[], subPositiveCheck?: SubFilterChecker,
    subNegativeCheck?: SubFilterChecker) : FilterChecker {
    let filterChecker: FilterChecker =
      (value: string) => {
        for(let i = 0; i < filterSearchTerms.length; i++) {
          // console.log(value);
          if(subPositiveCheck?.(filterSearchTerms[i], value))
            return true;
          else if(subNegativeCheck?.(filterSearchTerms[i], value))
            return false
          else if(value.includes(filterSearchTerms[i]))
            return true;
        }
        return false;
    }
    return filterChecker;
  }

  clearFilters() {
    this.filterService.clearFilters();
  }

  applySearchFilter(value: string) {
    this.filterService.setSearchFilter(value);
  }

}
