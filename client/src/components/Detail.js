import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function UserDetail() {
  let { id } = useParams();

  let { data: item } = useQuery("articleCache", async () => {
    const response = await API.get("/article/" + id);
    return response.data.data;
  });

  return (
    <div style={{backgroundColor:""}}>
      <Container style={{marginTop:"80px",backgroundColor:""}}>
        <div className="d-flex" style={{padding:"0px 100px 0px 100px"}}>
            <div style={{paddingRight:"20px"}}>
              <p style={{color:"black", fontSize:"35px", fontFamily:"initial", paddingLeft:"10px"}}>{item?.title}</p>
              <img style={{minWidth:"100%", maxWidth:"100%", borderRadius:"10px"}} src={item?.image}/>
              <p style={{color:"black", fontSize:"25px", fontFamily:"initial", paddingLeft:"10px"}}>{item?.body}</p>
            </div>
        </div>
      </Container>
    </div>
  );
}
