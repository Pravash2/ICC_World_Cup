import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Fade } from "react-reveal";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      margin: "0 auto",
      height: "400px"
    },
    table: {
      minWidth: 650
    }
  })
);

function createData(
  name1: string,
  name2: string,
  date: string,
  time: string,
  venue: string
) {
  return { name1, name2, date, time, venue };
}

const rows = [
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground"),
  createData("India", "Pakistan", "5th May", "8PM", "Load's Cricket Ground")
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <Fade>
      <div style={{ marginBottom: "150px" }}>
        {" "}
        <div
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "600",
            margin: "10px",
            color: "black",
            padding: "50px"
          }}>
          MATCHES
        </div>{" "}
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team </TableCell>

                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Venue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.name1} vs {row.name2}
                  </TableCell>

                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.venue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </Fade>
  );
}

export default SimpleTable;
