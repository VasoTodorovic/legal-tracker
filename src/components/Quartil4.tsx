import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";

export const columnsQ4: GridColDef[] = [
  { field: "quartil4.pdv", headerName: "PDV", width: 90 },
  {
    field: "quartil4.porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
  },
  {
    field: "quartil4.ios",
    headerName: "IOS",
    width: 150,
  },
  {
    field: "quartil4.lpa",
    headerName: "LPA",
    width: 150,
  },
  {
    field: "quartil4.dl1",
    headerName: "dl1",
    type: "string",
    width: 110,
  },
  {
    field: "quartil4.msecni",
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

export const columnGroupingQ4: GridColumnGroupingModel = [
  {
    groupId: "Oktobar",
    headerClassName: "quartil4-oktobar", //for css
    children: [
      { field: "quartil4.pdv" },
      { field: "quartil4.porezNaDobit" },
      { field: "quartil4.ios" },
      { field: "quartil4.lpa" },
      { field: "quartil4.dl1" },
      { field: "quartil4.msecni" },
    ],
  },
];

export default function Quartil4() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          backgroundColor: "white",
          "& .quartil4-oktobar": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={columnsQ4}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingQ4}
      />
    </div>
  );
}
