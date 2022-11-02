// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavigasiBar() {
  return (
    <>
      <div className="container">
        <Navbar expand="md" className="mb-3 navbar" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">Muhammad Irvan Shandika</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
              <Offcanvas.Header closeButton className="sidebar">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Muhammad Irvan Shandika</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="sidebar">
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#aboutme">About Me</Nav.Link>
                  <Nav.Link href="#socialmedia">Social Media</Nav.Link>
                  <Nav.Link href="#contacus">Contact</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigasiBar;
