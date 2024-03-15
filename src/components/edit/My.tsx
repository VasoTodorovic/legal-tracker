import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
const columns: GridColDef[] = [
  {
    field: "q1pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q1porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
];
const rows = [
  { id: 1, q1pdv: "da" },
  { id: 2, q1pdv: "ne" },
];
export default function My() {
  return(
   <DataGrid
    sx={{
      backgroundColor: "white",
      "& .quartil3-jull": {
        backgroundColor: "rgba(255, 7, 0, 0.55)",
      },
    }}
    rows={rows}
    columns={columns}
    checkboxSelection
    disableRowSelectionOnClick
  /> );
}
