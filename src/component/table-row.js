import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table-row.css'
import { Table, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { BsPeopleCircle } from "react-icons/bs";

const TableRow = () => {



  const Row = [
    {
      client: "Swedbank",
      owner: 4,
      order: 2,
      brand: "photopoint"

    },
    {
      client: "Derivco",
      owner: 11,
      order: 3,
      brand: "photopoint"

    },
    {
      client: "Hansaplant",
      owner: 8,
      order: 7,
      brand: "photopoint"

    },
    {
      client: "Prisma",
      owner: 7,
      order: 4,
      brand: "photopoint"

    },
    {
      client: "Rademas",
      owner: 9,
      order: 5,
      brand: "photopoint"

    },
  ]
  const [Rows, setRows] = useState([...Row])
  const [Basic, setBasic] = useState(false)
  const DeleteRow = (i) => {
    setRows(Rows.filter((t, index) => index != i))
    Rows.length == 1 ?
      setBasic(true)
      :
      console.log(Rows.length)
  }

  return (
    <div>
      <Container>
        <Table hover size="sm">
          <thead className={Basic ?  "hide" : "show"}>
            <tr>
              <th >Client</th>
              <th >Owners</th>
              <th>Orders</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            <h6 className={Basic ? "basic" : "hide"}>Unfortuantely There Is No Data</h6>
            {Rows.map((v, i) => {
              return (
                <tr key={i}>
                  <td className="column-1"> <span className="icon"> <BsPeopleCircle /></span> {v.client}</td>
                  <td > <span className="column-2"> {v.owner} </span></td>
                  <td > <span className="column-3"> {v.order} </span></td>
                  <td className="column-4">{v.brand} <span className="dropdown">
                    <DropdownButton className="dropdown-btn" id="dropdown-basic-button" title="...">
                      <Dropdown.Item href="#/action-1">Change Client</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Create New</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={() => DeleteRow(i)}>Delete Client</Dropdown.Item>
                    </DropdownButton>
                  </span>
                  </td>
                </tr>

              )
            })}


          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default TableRow;