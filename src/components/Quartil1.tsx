import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";

export const columnsQ1: GridColDef[] = [
  { field: "quartil1.pdv", headerName: "PDV", width: 90 },
  {
    field: "quartil1.porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    editable:true,
  },
  {
    field: "quartil1.ios",
    headerName: "IOS",
    width: 150,
  },
  {
    field: "quartil1.dl1",
    headerName: "dl1",
    type: "string",
    width: 110,
  },
  {
    field: "quartil1.mesecni",
    headerName: "Mesecni Izvestaj",
    type: "string",
    width: 110,
  },
];

const rows = [
  { id: 1, pdv: "da", porezNaDobit: "da", ios: "ne", dl1: "da", msecni: "da" },
  { id: 2, pdv: "ne", porezNaDobit: "ne", ios: "da", dl1: "da", msecni: "da" },
  { id: 3, pdv: "da", porezNaDobit: "da", ios: "ne", dl1: "da", msecni: "ne" },
  { id: 4, pdv: "ne", porezNaDobit: "da", ios: "da", dl1: "da", msecni: "da" },
  { id: 5, pdv: "da", porezNaDobit: "da", ios: "ne", dl1: "da", msecni: "ne" },
  // Add more rows as needed
];

export const columnGroupingQ1: GridColumnGroupingModel = [
  {
    groupId: "Januar",
    headerClassName: "quartil1-januar", //for css
    children: [
      { field: "quartil1.porezNaDobit" },
      { field: "quartil1.pdv" },
      { field: "quartil1.ios" },
      { field: "quartil1.dl1" },
      { field: "quartil1.mesecni" },
    ],
  },
];

export default function Quartil1() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        
        sx={{
          backgroundColor: "white",
          "& .quartil1-januar": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={columnsQ1}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingQ1}
      />
    </div>
  );
}
