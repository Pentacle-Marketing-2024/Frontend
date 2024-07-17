import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useEffect } from "react";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "fullName", label: "Full Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "method", label: "Method", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 170 },
  {
    id: "createDate",
    label: "Create Date",
    minWidth: 170,
    align: "right",
    format: (value) => new Date(value).toLocaleDateString(),
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [searchNameValue, setSearchNameValue] = React.useState("");
  const [searchEmailValue, setSearchEmailValue] = React.useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    if (!token) {
      window.location.href = "/login";
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  useEffect(() => {
    if (loading) {
      fetch("https://pentaclemarketings.azurewebsites.net/api/form", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            setRows(data);
          } else {
            setError("No data found");
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    window.location.href = "/login";
  };

  const searchByName = () => {
    let api = "https://pentaclemarketings.azurewebsites.net/api/form";
    if (searchNameValue !== "") {
      api =
        "https://pentaclemarketings.azurewebsites.net/api/form/searchByFullName?fullName=" +
        searchNameValue;
    }
    axios
      .get(api, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setRows(response.data);
          setSearchEmailValue("");
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setRows([]);
      });
  };

  const searchByEmail = () => {
    let api = "https://pentaclemarketings.azurewebsites.net/api/form";
    if (searchEmailValue !== "") {
      api =
        "https://pentaclemarketings.azurewebsites.net/api/form/searchByEmail?email=" +
        searchEmailValue;
    }
    axios
      .get(api, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setRows(response.data);
          setSearchNameValue("");
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setRows([]);
      });
  };

  return (
    <div>
      <Button
        onClick={logout}
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          float: "right",
          width: "10rem",
          backgroundColor: "red",
        }}
      >
        Logout
      </Button>
      <Paper sx={{ width: "96%", overflow: "hidden", margin: "2%" }}>
        <Box sx={{ display: "flex", float: "right" }}>
          <Box sx={{ mt: 1, width: "20rem", mr: 5 }}>
            <TextField
              fullWidth
              id="searchNameValue"
              label="searchNameValue"
              name="searchNameValue"
              autoComplete="searchNameValue"
              autoFocus
              value={searchNameValue}
              onChange={(a) => setSearchNameValue(a.target.value)}
            />
            <Button
              onClick={searchByName}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search full name
            </Button>
          </Box>
          <Box sx={{ mt: 1, width: "20rem" }}>
            <TextField
              fullWidth
              id="searchEmailValue"
              label="searchEmailValue"
              name="searchEmailValue"
              autoComplete="searchEmailValue"
              autoFocus
              value={searchEmailValue}
              onChange={(e) => setSearchEmailValue(e.target.value)}
            />
            <Button
              onClick={searchByEmail}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search email
            </Button>
          </Box>
        </Box>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "string"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
