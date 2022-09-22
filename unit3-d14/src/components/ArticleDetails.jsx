import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Image } from "react-bootstrap";

const ArticleDetails = () => {
  
  const [selectedArticle, setSelectedArticle] = useState(null);

  const params = useParams();
  console.log("PARAMS", params);

  const articleID = params.articleID;

  useEffect(() => {
    fetchArticleDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticleDetails = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles/" + articleID
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSelectedArticle(data);
        } 
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="text-center">
      <h1>DETAILS ABOUT ARTICLE</h1>
      {selectedArticle && (
        <Container>
          <Row>
            <Col>
              <Image src={selectedArticle.imageUrl} alt=""/>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ArticleDetails;