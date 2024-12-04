import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { isAuthenticated, readToken } from '@/lib/authenticate'; // Make sure to adjust these imports

export default function MainNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchField, setSearchField] = useState('');
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const queryString = `title=true&q=${searchField}`;
    setIsExpanded(false);
    router.push(`/artwork?${queryString}`);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" expanded={isExpanded}>
        <Navbar.Brand href="/">Darshan Kalpeshbhai Prajapati</Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsExpanded(!isExpanded)} />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/" active={router.pathname === "/"} onClick={() => setIsExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="/search" active={router.pathname === "/search"} onClick={() => setIsExpanded(false)}>
              Advanced Search
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button type="submit" variant="outline-light">Search</Button>
          </Form>

          {/* Conditionally render based on authentication */}
          {isAuthenticated() ? (
            <Nav>
              <NavDropdown title={readToken().userName} id="user-dropdown">
                <NavDropdown.Item href="/favourites" onClick={() => setIsExpanded(false)}>
                  Favourites
                </NavDropdown.Item>
                <NavDropdown.Item href="/history" onClick={() => setIsExpanded(false)}>
                  Search History
                </NavDropdown.Item>
                <NavDropdown.Item href="/login" onClick={() => {
                  localStorage.removeItem('authToken');  // Clear the token to logout
                  setIsExpanded(false);
                }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login" onClick={() => setIsExpanded(false)}>
                Login
              </Nav.Link>
              <Nav.Link href="/register" onClick={() => setIsExpanded(false)}>
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </>
  );
}
