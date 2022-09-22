import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Info } from "../types/Info";

const ArticleDetails = () => {
  
  const [selectedArticle, setSelectedArticle] = useState <Info | null>(null);

  const params = useParams();
  console.log("PARAMS", params);

  const id = params.articleID;

  useEffect(() => {
    fetchArticleDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticleDetails = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles/" + id
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
    <div className="text-left">
      {selectedArticle && (
        <Container className="mt-5 mb-5">
               <Card border="dark" className="m-auto  " style={{ width: '50rem' }}>
                <Card.Img variant="top" src={selectedArticle.imageUrl} alt=""/>
                <Card.Body>
                  <Card.Title style={{fontSize: "40px"}}>{selectedArticle.title}</Card.Title>
                  <Card.Text>
                    {selectedArticle.summary}
                  </Card.Text>
                  <Card.Text className="text-monospace" style={{fontSize: "12px"}}>
                  <b>Published at: </b>
                  {selectedArticle.publishedAt.slice(0, 10)}
                  </Card.Text>
                </Card.Body>
              </Card>   
        </Container>
      )}
    </div>
  );
};

export default ArticleDetails;