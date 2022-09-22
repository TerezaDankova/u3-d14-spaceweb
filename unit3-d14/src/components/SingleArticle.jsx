import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleArticle = ({ news }) => {

      const navigate = useNavigate();

      const goToDetails = () => {
            navigate("/ArticleDetails/" + news.id);
          };
          
  return (
    <>
      <Card style={{ width: '18rem' }} onClick={goToDetails}>
        <Card.Img className="card-img" src={news.imageUrl}/>
      </Card>
    </>
  );
};

export default SingleArticle;