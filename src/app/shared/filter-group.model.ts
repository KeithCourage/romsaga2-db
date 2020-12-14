import { Filter } from "./filter.model";

export interface FilterGroup {
  groupName: string;
  groupKey: string;
  filters: Filter;
}
