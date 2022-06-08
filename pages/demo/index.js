import { useState, useEffect } from "react";
import Axios from "axios";

export default function Home() {
  const [myurl, setMyUrl] = useState("");
  const [shortnerUrl, setShortnerUrl] = useState("");

  function genrateShortURL(e) {
    Axios.post("https://url-shortner-web-app.herokuapp.com/url/shorten", {
      longUrl: myurl,
    }).then((res) => {
      console.log(res.data);
      setShortnerUrl(res.data.data.shortUrl);
    });
  }

  useEffect(() => {
    console.log(shortnerUrl);
  }, [shortnerUrl]);

  return (
    <div className="Home">
      <div className="showData">
        <input
          value={myurl}
          onChange={(e) => {
            setMyUrl(e.target.value);
          }}
        />
        <button
          onClick={() => {
            genrateShortURL();
          }}
        >
          ShortMe
        </button>
        {shortnerUrl && (
          <div>
            your short url is : <a href={shortnerUrl}>{shortnerUrl}</a>
          </div>
        )}
      </div>
    </div>
  );
}
