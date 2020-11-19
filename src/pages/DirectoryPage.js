import React from 'react';
import { EmployeeGrid } from "../components"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const DirectoryPage = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <EmployeeGrid />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default DirectoryPage;
