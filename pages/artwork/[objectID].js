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
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
import ArtworkCardDetail from '@/components/ArtworkCardDetail';

export default function ArtworkById() {
  const router = useRouter();
  const { objectID } = router.query;

  return (
    <Row>
      <Col>
        <ArtworkCardDetail objectID={objectID} />
      </Col>
    </Row>
  );
}
