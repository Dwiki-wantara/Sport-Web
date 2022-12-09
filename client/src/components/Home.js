import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import Square from "./Timbul.module.css"
import ButtonText from "./Timbul.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from "react-bootstrap";
import banner1 from "../assets/project/banner1.png"
import banner2 from "../assets/project/banner2.png"
import DeleteData from './DeleteData';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import { useEffect } from "react";
// API config
import { API } from '../config/api';

export default function UserHome() {
  document.title = 'Home';
  let navigate = useNavigate();
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { data: fetchData, refetch } = useQuery('articlesCache', async () => {
    const response = await API.get('/articles');
    return response.data.data;
  });

    const settings = {
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    const handleUpdate = (id) => {
      navigate('/update-article/' + id);
    };

    const handleAdd = () => {
      navigate('/add-article');
    };
  
    const handleDelete = (id) => {
      setIdDelete(id);
      handleShow();
    };
  
    const deleteById = useMutation(async (id) => {
      try {
        await API.delete(`/article/${id}`);
        refetch();
      } catch (error) {
        console.log(error);
      }
    });
  
    useEffect(() => {
      if (confirmDelete) {
        handleClose();
        deleteById.mutate(idDelete);
        setConfirmDelete(null);
      }
    }, [confirmDelete]);

  return (
    <div className='bg-white'>
      <div style={{marginTop:"49px"}}>
          <Slider {...settings} style={{minWidth:"100%",maxWidth:"100%"}}>
            <div>
              <Card style={{backgroundColor: "black"}}>
                <Card.Img src={banner1}  alt="Card image" style= {{width:"100vw", height:"50vw"}} />
                <Card.ImgOverlay>
                  <h1 className="text-white" style={{marginTop: "450px"}}>Perancis Gagahkan Mbape</h1> 
                  <Card.Text className="text-justify-center  text-light fw-semibold" >
                  Jelang laga melawan Inggris <br /> Perancis perkuat serangan depan dengan Mbape sebagai striker andalan
                  </Card.Text>
                  </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card style={{backgroundColor: "black"}}>
                <Card.Img src={banner2}  alt="Card image" style= {{width:"100vw", height:"50vw"}} />
                <Card.ImgOverlay>
                  <h1 className="text-white" style={{marginTop: "450px"}}>Portugal Rayakan Pesta Goal</h1> 
                  <Card.Text className="text-justify-center  text-light fw-semibold" >
                    Setelah kalahkan Swiss Di partai 16-Besar <br /> Masyarakat portugal rayakan kemenangan atas Swiss 6-1 di Qatar Stadion
                  </Card.Text>
                  </Card.ImgOverlay>
              </Card>
            </div>
          </Slider>
        </div>

      <div style={{ marginTop:"5vh",backgroundColor:"white", height:"100%"}}>
        <div style={{textAlign:"left",backgroundColor:"white",padding:"20px"}}>
         <button onClick={handleAdd} className={ButtonText.ButtonText} style={{backgroundColor:"green", border:"none", color:"white"}}>Add Berita</button>
          <h4 className="text-danger">Blog // Tag</h4>
        </div>

        <div style={{display: "grid", gridTemplateColumns:"repeat(3, 2fr)",justifyContent:"center", padding:"0px 50px", marginLeft:"50px"}}>
        {fetchData?.map((item, index) => (
            <div  style={{textAlign:"center",textDecoration:"none",color:"black"}}  >
              <div  key={index} style={{ backgroundColor:"white", borderRadius:"5px",height:"100%", width:"300px"}}>
                
                <a href={`/detail-article/`+ item.id}>
                  <img className={Square.Square} src={item?.image} alt="" style={{minHeight:"170px", maxHeight:"170px",minWidth:"100%",maxWidth:"100%"}} />
                </a>

                <div style={{marginTop:"5px"}}>

                  <div style={{display:"flex", textAlign:"left"}}>
                    <p style={{textDecoration:"none", fontWeight:"bold"}}>{item.title.length> 100 ? item.title.substring(0,100) + "..." : item.title}</p>
                  </div>
                  <div style={{textAlign:"left"}}>
                    <p>{item?.body.length> 100 ? item?.body.substring(0,100) + "..." : item?.body}</p>
                  </div>

                </div>
                <div style={{marginTop:"5px" ,display:"flex", justifyContent:"center"}}>
                  <div style={{marginRight:"10px"}}>
                    <button onClick={() => {handleUpdate(item.id)}} className={ButtonText.ButtonText} style={{backgroundColor:"orange", border:"none"}}>Update</button>
                  </div>
                  <div>
                    <button onClick={() => {handleDelete(item.id)}} className={ButtonText.ButtonText} style={{backgroundColor:"green",border:"none"}}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{display: "grid", gridTemplateColumns:"repeat(1, 2fr)", justifyContent:"center", padding:"0px 50px", marginLeft:"50px"}}>
        {fetchData?.map((item, index) => (
            <Link to={`/detail-article/`+ item.id}  style={{marginTop:"20px", textAlign:"center",  textDecoration:"none",color:"black"}}>

              <div  key={index} style={{display:"flex", backgroundColor:"white", borderRadius:"5px",height:"100%", width:"1000px"}}>
                <div>
                  <img className={Square.Square} src={item?.image} alt="" style={{minHeight:"170px", maxHeight:"170px",minWidth:"100%",maxWidth:"100%"}} />
                </div>

                <div style={{marginLeft:"10px", width:"400px"}}>
                  <div style={{display:"flex", textAlign:"left", height:"100px"}}>
                    <p style={{textDecoration:"none", fontWeight:"bold"}}>{item?.title.length> 150 ? item?.title.substring(0,150) + "..." : item?.title}</p>
                  </div>

                  <div style={{textAlign:"left"}}>
                    <p>{item?.body.length> 150 ? item?.body.substring(0,150) + "..." : item?.body}</p>
                  </div>
                </div>        
              </div>
             
            </Link>
          ))}
        </div> 
      </div>
      <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose}/>
    </div>
  );
}
