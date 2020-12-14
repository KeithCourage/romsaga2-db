import { ThemePalette } from "@angular/material/core";

export interface Filter {
  name: string;
  value: string;
  color: ThemePalette;
  expanded?: boolean;
  subfilters?: Filter[];
}
