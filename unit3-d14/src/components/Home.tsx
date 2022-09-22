import { Button } from "react-bootstrap"
import { FaSpaceShuttle } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Home = () => {
      const navigate = useNavigate();

      return (
      <div className="pt-5" style={{ backgroundImage: "url('http://store-images.s-microsoft.com/image/apps.47636.13819498107583324.fb06b53a-4974-4acb-85e6-f6f363f85ab6.edec48d0-ec35-4a1f-8bf5-c455987b4a1e')", height: 800 }}>
        <h1 className="text-center jumb-heading mt-1 text-light text-monospace mt-5">Welcome on Spaceflight news website!</h1>
        <div className="mt-5">
            <FaSpaceShuttle 
            color="white"
            size={300}
            />
        </div>
        <div className="text-center mt-5">
        <Button variant="outline-light" onClick={() => navigate("/articles")}>Come to check some space news!</Button>
        </div>
      </div>
      )
      }
export default Home