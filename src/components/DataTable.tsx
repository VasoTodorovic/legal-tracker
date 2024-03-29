import { useEffect,useState } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridColDef,GridToolbarContainer } from "@mui/x-data-grid";
import { columnGroupingQ1, columnsQ1 } from "./Quartil1";
import { columnGroupingQ2, columnsQ2 } from "./Quartil2";
import { columnGroupingQ4, columnsQ4 } from "./Quartil4";
import { columnGroupingQ3, columnsQ3 } from "./Quarti3";
import AddIcon from '@mui/icons-material/Add';
import * as Realm from "realm-web";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "legal", headerName: "Pausalac/DOO", width: 130 },
  { field: "firmId", headerName: "Maticni", width: 130 },
  {
    field: "name",
    headerName: "Ime",
    type: "string",
    width: 90,
  },
  {
    field: "emp",
    headerName: "Zaposleni",
    type: "number",
    width: 90,
  },
];


function EditToolbar() {

  const handleClick = () => {
    console.log("You bro how are you")
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
export default function DataTable() {
  const [selectedQuartil, setSelectedQuartil] = useState<number | null>(1);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const app = new Realm.App({ id: "application-1-qmokd" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const response = await user.functions.getAllCompany();
        setCompanies(response)
      } catch(err) {
        console.error("Failed to log in", err);
      }
 }
fetchData();
}, []);
  const handleQuartilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuartil(parseInt(event.target.value));
  };

  const renderQuartilColumn = (quartil: number): GridColDef[] => {
    switch (quartil) {
      case 1:
        return columnsQ1;
      case 2:
        return columnsQ2;
      case 3:
        return columnsQ3;
      case 4:
        return columnsQ4;
      default:
        return [];
    }
  };
  return (
    <div style={{ height: "100%", width: "1500px" }}>
      <div>
        <input
          type="radio"
          id="quartil1"
          name="quartil"
          value="1"
          checked={selectedQuartil === 1}
          onChange={handleQuartilChange}
        />
        <label htmlFor="quartil1">Quartil 1</label>
        <input
          type="radio"
          id="quartil2"
          name="quartil"
          value="2"
          checked={selectedQuartil === 2}
          onChange={handleQuartilChange}
        />
        <label htmlFor="quartil2">Quartil 2</label>
        <input
          type="radio"
          id="quartil3"
          name="quartil"
          value="3"
          checked={selectedQuartil === 3}
          onChange={handleQuartilChange}
        />
        <label htmlFor="quartil3">Quartil 3</label>
        <input
          type="radio"
          id="quartil4"
          name="quartil"
          value="4"
          checked={selectedQuartil === 4}
          onChange={handleQuartilChange}
        />
        <label htmlFor="quartil4">Quartil 4</label>
      </div>
      <DataGrid
        rows={companies}
        columns={[
          ...columns,
          ...(selectedQuartil ? renderQuartilColumn(selectedQuartil) : []),
        ]}
        sx={{
          backgroundColor: "white",
          "& .quartil2-april": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
          "& .quartil1-januar": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
          "& .quartil3-jull": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
          "& .quartil4-oktobar": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={[
          ...columnGroupingQ1,
          ...columnGroupingQ2,
          ...columnGroupingQ3,
          ...columnGroupingQ4,
        ]}
        slots={{
          toolbar: EditToolbar,
        }}
        disableRowSelectionOnClick={true}
        checkboxSelection
      />
    </div>
  );
}
