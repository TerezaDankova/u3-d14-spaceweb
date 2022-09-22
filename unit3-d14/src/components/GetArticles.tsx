import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import { News } from "../types/News";


const GetArticles = () => {

const [articles, setArticles] = useState <News[]>([])

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
                  {articles.map((article, index) => (
                  <Col md={6} key={index}>
                        <SingleArticle news={article} />
                  </Col>
                    ))}
              </Row>
            </Container>
          );

}
export default GetArticles