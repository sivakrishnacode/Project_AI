import React, { useState } from "react";
import OpenAI from "openai";
import { api_token } from "../key";

function Asking() {
  const [content, setContent] = useState("");
  const [createContent, setCreateContent] = useState("");
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const generateContent = async () => {
    setCreateContent("");
    setLoading(true);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content,  }],
    });
    setCreateContent(response.choices[0].message.content);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <h4 className="text-light text-center mt-5">Loading</h4>
      ) : (
        <></>
      )}
      {createContent.length > 0 ? (
        <center>
          <textarea
            className="text-light border-none mt-5 bg-dark lg"
            rows="15"
            cols="32"
            value={createContent}
          ></textarea>
        </center>
      ) : (
        <></>
      )}

      <div style={{ position: "fixed", bottom: "5px" }}>
        <input
          type="text"
          style={{
            height: "50px",
            width: "270px",
            borderRadius: "10px",
            marginRight: "5px",
          }}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn btn-primary" onClick={generateContent}>
          Send
        </button>
      </div>
    </>
  );
}

export default Asking;
