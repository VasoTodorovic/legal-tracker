import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";

export const columnsQ2: GridColDef[] = [
  { field: "quartil2.pdv", headerName: "PDV", width: 90 },
  {
    field: "quartil2.porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
  },
  {
    field: "quartil2.ios",
    headerName: "IOS",
    width: 150,
  },
  {
    field: "quartil2.lpa",
    headerName: "LPA",
    width: 150,
  },
  {
    field: "quartil2.dl1",
    headerName: "dl1",
    type: "string",
    width: 110,
  },
  {
    field: "quartil2.lpaFirm",
    headerName: "LPA firmina",
    width: 150,
  },
  {
    field: "quartil2.msecni",
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

export const columnGroupingQ2: GridColumnGroupingModel = [
  {
    groupId: "April",
    headerClassName: "quartil2-april", //for css
    children: [
      { field: "quartil2.porezNaDobit" },
      { field: "quartil2.pdv" },
      { field: "quartil2.ios" },
      { field: "quartil2.dl1" },
      { field: "quartil2.msecni" },
      { field: "quartil2.lpa" },
      { field: "quartil2.lpaFirm" },
    ],
  },
];
export default function Quartil2() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          backgroundColor: "white",
          "& .quartil2-april": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        columns={columnsQ2}
        checkboxSelection
        disableRowSelectionOnClick
        columnGroupingModel={columnGroupingQ2}
      />
    </div>
  );
}
