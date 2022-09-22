import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { News } from "../types/News";

interface ArticleProps {
      news: News;
    }

const SingleArticle = ({ news }: ArticleProps) => {

      const navigate = useNavigate();

      const goToDetails = () => {
            navigate("/ArticleDetails/" + news.id);
          };

  return (
      <Container className="mt-5 mb-5">
            <Card border="dark" style={{ width: '30rem', borderRadius: "10px"}} onClick={goToDetails}>
            <Card.Img style={{ height: '20rem'}}className="card-img" src={news.imageUrl}/>
            <Card.Body style={{ height: '6rem'}}>
                  <Card.Title style={{fontSize: "20px", textAlign: "left"}}>{news.title}</Card.Title>
            </Card.Body>
            </Card>
      </Container>
  );
};

export default SingleArticle;