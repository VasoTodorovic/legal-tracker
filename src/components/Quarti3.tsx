import {
    DataGrid,
    GridColDef,
    GridColumnGroupingModel,
  } from "@mui/x-data-grid";
  
  export const columnsQ3: GridColDef[] = [
    { field: "quartil3.pdv", headerName: "PDV", width: 90 },
    {
      field: "quartil3.porezNaDobit",
      headerName: "Porez na dobit",
      width: 150,
    },
    {
      field: "quartil3.ios",
      headerName: "IOS",
      width: 150,
    },
    {
      field:"quartil3.lpa",
      headerName:"LPA",
      width:150,
    },
    {
      field: "quartil3.dl1",
      headerName: "dl1",
      type: "string",
      width: 110,
    },
    {
      field: "quartil3.msecni",
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

  export const columnGroupingQ3: GridColumnGroupingModel = [
    {
      groupId: "Jul",
      headerClassName: "quartil3-jull", //for css
      children: [
        { field: "quartil3.pdv" },
        { field: "quartil3.porezNaDobit" },
        { field: "quartil3.ios" },
        { field: "quartil3.lpa" },
        { field: "quartil3.dl1" },
        { field: "quartil3.msecni" },
      ],
    },
  ];
  
  export default function Quartil3() {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          
          sx={{
            backgroundColor: "white",
            "& .quartil3-jull": {
              backgroundColor: "rgba(255, 7, 0, 0.55)",
            },
          }}
          experimentalFeatures={{ columnGrouping: true }}
          rows={rows}
          columns={columnsQ3}
          checkboxSelection
          disableRowSelectionOnClick
          columnGroupingModel={columnGroupingQ3}
        />
      </div>
    );
  }