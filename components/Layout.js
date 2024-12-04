/*********************************************************************************
*  WEB422 – Assignment 5
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Darshan Kalpeshbhai Prajapati Student ID: 112908215 Date: 3rd Dec, 2024
*
*
********************************************************************************/ 
import MainNav from './MainNav';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <>
      <MainNav />
      <Container>
        {children}
      </Container>
      <br />
    </>
  );
}
