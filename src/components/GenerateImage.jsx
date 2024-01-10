import React from "react";
import { useState } from "react";
import openai from "openai";
import Spinner from "react-bootstrap/Spinner";
import { api_token } from "../key";

function GenerateImage() {

  console.log(process.env.REACT_APP_API_KEY);
  const [imgGenerate, setImgGenerate] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const ai = new openai({
    apiKey : process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async () => {
    setImage("");
    setLoading(true);
    const response = await ai.images.generate({
      prompt: imgGenerate,
      size: '1024x1024',
      n: 1,
      model: 'dall-e-2',
      quality:'standard',
      
    })

    setImage(response.data[0].url);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-secondary text-center mb-3">
        OpenAI Image Generator Using ReactJS
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            jusitfyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search Image"
            onChange={(e) => setImgGenerate(e.target.value)}
            style={{
              borderRadius: "10px",
              height: "50px",
              width: "300px",
              fontSize: "20px",
            }}
          />
          <button className="btn btn-primary mt-3 " onClick={generateImage}>
            Generate Image
          </button>
        </div>
        <br />
        {loading ? (
          <h1 className="text-light">
            Loading <Spinner animation="grow" variant="light" size="sm" />
            <Spinner animation="grow" variant="light" size="sm" />
            <Spinner animation="grow" variant="light" size="sm" />
          </h1>
        ) : (
          <></>
        )}
        {image.length > 0 ? (
          <img src={image} height={400} width={360} alt="Not Found" />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default GenerateImage;
