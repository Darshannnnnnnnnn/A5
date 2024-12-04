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
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ArtworkCard({ objectID }) {
  const placeholderImage = "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";
  return (
    <Card>
      <Card.Img variant="top" src={placeholderImage} alt="Artwork" />
      <Card.Body>
        <Card.Title>{objectID || "N/A"}</Card.Title>
        <Link href={`/artwork/${objectID}`} passHref>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
