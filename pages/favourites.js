import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import ArtworkCard from '@/components/ArtworkCard';
import { Row, Col, Card } from 'react-bootstrap';

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);

  if (!favouritesList.length) {
    return (
      <Card>
        <h4>Nothing Here</h4>
        Try adding some artwork to the favourites list.
      </Card>
    );
  }

  return (
    <Row className="gy-4">
      {favouritesList.map((id) => (
        <Col lg={3} key={id}>
          <ArtworkCard objectID={id} />
        </Col>
      ))}
    </Row>
  );
}
