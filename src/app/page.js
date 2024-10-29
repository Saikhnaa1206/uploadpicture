"use client";
import { useState } from "react";
const Page = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload");
    formData.append("cloud_name", "dig2iwfma");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dig2iwfma/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const res = await data.json();
    setImageUrl(res.secure_url);
    setImage(null);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <button onClick={uploadImage}>upload</button>
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
};
export default Page;
