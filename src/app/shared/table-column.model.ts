export interface TableColumn<t> {
  columnDef: string;
  header: string;
  cell: (data: t) => string;
}
