
import Logo from "../assets/project/logo.png";
import  {React,useContext} from 'react'
import { Container, Navbar as NavbarComp, Nav } from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { UserContext } from '../context/userContext'
import { Navbar } from "react-bootstrap";
import { FaBurn, FaStar, FaLayerGroup, FaUserPlus } from "react-icons/fa";

export default function NavbarHome() {

  return (
   <> 
      <Navbar fixed="top" style={{display:"flex", height: "10vh",backgroundColor:"#FF5E00" }}>
        <Navbar.Brand as={Link} to="/" style={{marginLeft: "100px", display:"flex"}}>
          <img src={Logo} alt="" style={{flex:"100%",width:"100px"}}/>
        </Navbar.Brand>
        <Container style={{flex:"80%"}}>
          <Nav>
            <Nav.Link style={{ marginTop:"15px"}}>
              <Link to="#" className="fs-5" style={{textDecoration:"none", color:"white"}}>
                # SkuatHipwee
              </Link>
            </Nav.Link>
            <Nav.Link style={{marginLeft:"10px", marginTop:"15px"}}>
              <Link to="#" className="fs-5" style={{textDecoration:"none", color:"white"}}>
               <FaBurn style={{marginBottom:"5px"}}/> Terpopuler 
              </Link>
            </Nav.Link>

            <Nav.Link style={{marginLeft:"10px", marginTop:"15px"}}>
              <Link to="#" className="fs-5" style={{textDecoration:"none", color:"white"}}>
               <FaStar style={{marginBottom:"5px"}}/> Editor's Pick 
              </Link>
            </Nav.Link>
            <Nav.Link style={{marginLeft:"10px", marginTop:"15px"}}>
              <Link to="#" className="fs-5" style={{textDecoration:"none", color:"white"}}>
               <FaLayerGroup style={{marginBottom:"5px"}}/> Community
              </Link>
            </Nav.Link>
            <Nav.Link style={{marginLeft:"100px", marginTop:"15px"}}>
              <Link to="#" className="fs-5" style={{textDecoration:"none", color:"white"}}>
              <p 
                style={{border:"2px solid white", 
                backgroundColor:"white", 
                color:"#FF5E00", 
                padding:"2px 10px", 
                borderRadius:"5px"}}>
                  <FaUserPlus style={{marginRight:"10px", marginBottom:"5px"}}/>
                  Gabung Komunitas
              </p>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};


