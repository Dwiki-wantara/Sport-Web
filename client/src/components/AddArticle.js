import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { API } from "../config/api";

export default function AdminAddProduct() {
  document.title = "Tambah Berita"

  let navigate = useNavigate();
  const [preview, setPreview] = useState(null); //For image preview

  const [form, setForm] = useState({
    image: "",
    title: "",
    body: "",
    author: "",
  })

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("title", form.title);
      formData.set("body", form.body);
      formData.set("author", form.author);
      // Insert data
      const response = await API.post("/article", formData, config);
      console.log("response.data.data");
      console.log(response.data.data);

      if (response.data.code == 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="bg-dark" style={{padding:"100px 300px 50px 300px"}}>
      <Container className="py-5" style={{backgroundColor:"white",padding:"30px"}}>
        <Row>
          <Col xs="12">
            <h3 className="mt-1 mb-4">Tambah Berita</h3>
          </Col>
          <Col xs="12">
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
              {preview && (
                <div className="d-flex justify-content-center">
                  <img  src={preview}  style={{maxWidth: "300px",minWidth:"300px",minHeight: "150px", marginBottom:"10px"}} alt={preview}/>
                </div>
              )}
              <div>
                <input type="file" id="upload" name="image" hidden onChange={handleChange}/>
                <label for="upload" style={{border:"none", backgroundColor:"green", color:"white", padding:"5px 20px", cursor:"pointer", borderRadius:"10px"}}>
                  Upload Gambar
                </label>  
              </div>
              
              <div className="d-flex mt-4">
                <label>Judul Berita</label>
              </div>
              <div className="d-flex">
                <input type="text" placeholder="Judul Berita" name="title" onChange={handleChange} style={{width:"100%"}}/>
              </div>

              <div className="d-flex mt-3">
                <label>Deskripsi</label>
              </div>
              <div className="d-flex">
                <textarea  placeholder="Deskripsi Berita" name="body" onChange={handleChange}  style={{width:"100%", height:"100px"}}></textarea>
              </div>
              
              <div className="d-flex mt-3">
                <label>Author</label>
              </div>
              <div className="d-flex">
                <input  type="text"  placeholder="Nama Penulis" name="author" style={{width:"100%"}} onChange={handleChange}/>
              </div>

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Tambah
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
