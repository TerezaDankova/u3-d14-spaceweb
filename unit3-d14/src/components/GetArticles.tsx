import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleArticle from "./SingleArticle";



const GetArticles = () => {

const [articles, setArticles] = useState([]);

useEffect(() => {
      fetchArticles()
}, [])

const fetchArticles = async () => {
      console.log("articles")
      try { let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
      if (response.ok) {
            const data = await response.json()
            console.log("data", data)
            setArticles(data)
        }
      } catch (error) {
            console.log(error)
      }
}
      return (
            <Container>
              <Row>
                  {articles.slice(0, 8).map((article, i) => (
                  <Col md={6} key={i}>
                        <SingleArticle news={article} />
                  </Col>
                    ))}
              </Row>
            </Container>
          );

}
export default GetArticles