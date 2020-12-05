import { TechData } from "../shared/tech-data.model";
import { TableColumn } from "../shared/table-column.model";

export const techTableColumns: TableColumn<TechData>[] = [
  {
    columnDef: "name",
    header: "Name",
    cell: (tech: TechData) => `${tech.name}`
  },
  {
    columnDef: "weaponType",
    header: "Weapon Type",
    cell: (tech: TechData) => `${tech.weaponType}`
  },
  {
    columnDef: "power",
    header: "Power",
    cell: (tech: TechData) => `${tech.power}`
  },
  {
    columnDef: "damageType",
    header: "Damage Type",
    cell: (tech: TechData) => `${tech.damageType}`
  },
  {
    columnDef: "specialNotes",
    header: "Special Notes",
    cell: (tech: TechData) => `${tech.specialNotes}`
  },
  {
    columnDef: "accuracy",
    header: "Accuracy",
    cell: (tech: TechData) => `${tech.accuracy}`
  },
  {
    columnDef: "flatEvasion",
    header: "Flat Evasion",
    cell: (tech: TechData) => `${tech.flatEvasion}`
  },
  {
    columnDef: "useShield",
    header: "Use Shield",
    cell: (tech: TechData) => `${tech.useShield}`
  },
  {
    columnDef: "counter",
    header: "Counter",
    cell: (tech: TechData) => `${tech.counter}`
  },
  {
    columnDef: "evade",
    header: "Evade",
    cell: (tech: TechData) => `${tech.evade}`
  },
  {
    columnDef: "evadeDifficulty",
    header: "Evade Difficulty",
    cell: (tech: TechData) => `${tech.evadeDifficulty}`
  },
  {
    columnDef: "sparkDifficulty",
    header: "Spark Difficulty",
    cell: (tech: TechData) => `${tech.sparkDifficulty}`
  },
  {
    columnDef: "alternateSpark",
    header: "Alternate Spark",
    cell: (tech: TechData) => `${tech.alternateSpark}`
  },
  {
    columnDef: "alternateSparkDifficulty1",
    header: "Alt Spark Difficulty",
    cell: (tech: TechData) => `${tech.alternateSparkDifficulty1}`
  },
  {
    columnDef: "alternateSpark2",
    header: "Alternate Spark 2",
    cell: (tech: TechData) => `${tech.alternateSpark2}`
  },
  {
    columnDef: "alternateSparkDifficulty2",
    header: "Alt Spark 2 Difficulty",
    cell: (tech: TechData) => `${tech.alternateSparkDifficulty2}`
  },
  {
    columnDef: "weapon",
    header: "Weapon",
    cell: (tech: TechData) => `${tech.weapon}`
  },
  {
    columnDef: "type00",
    header: "Type 00",
    cell: (tech: TechData) => `${tech.type00}`
  },
  {
    columnDef: "type01",
    header: "Type 01",
    cell: (tech: TechData) => `${tech.type01}`
  },
  {
    columnDef: "type02",
    header: "Type 02",
    cell: (tech: TechData) => `${tech.type02}`
  },
  {
    columnDef: "type03",
    header: "Type 03",
    cell: (tech: TechData) => `${tech.type03}`
  },
  {
    columnDef: "type04",
    header: "Type 04",
    cell: (tech: TechData) => `${tech.type04}`
  },
  {
    columnDef: "type05",
    header: "Type 05",
    cell: (tech: TechData) => `${tech.type05}`
  },
  {
    columnDef: "type06",
    header: "Type 06",
    cell: (tech: TechData) => `${tech.type06}`
  },
  {
    columnDef: "type07",
    header: "Type 07",
    cell: (tech: TechData) => `${tech.type07}`
  },
  {
    columnDef: "type08",
    header: "Type 08",
    cell: (tech: TechData) => `${tech.type08}`
  },
  {
    columnDef: "type09",
    header: "Type 09",
    cell: (tech: TechData) => `${tech.type09}`
  },
  {
    columnDef: "type10",
    header: "Type 10",
    cell: (tech: TechData) => `${tech.type10}`
  },
  {
    columnDef: "type11",
    header: "Type 11",
    cell: (tech: TechData) => `${tech.type11}`
  },
  {
    columnDef: "type12",
    header: "Type 12",
    cell: (tech: TechData) => `${tech.type12}`
  },
  {
    columnDef: "type13",
    header: "Type 13",
    cell: (tech: TechData) => `${tech.type13}`
  },
  {
    columnDef: "type14",
    header: "Type 14",
    cell: (tech: TechData) => `${tech.type14}`
  },
  {
    columnDef: "type15",
    header: "Type 15",
    cell: (tech: TechData) => `${tech.type15}`
  }
];
