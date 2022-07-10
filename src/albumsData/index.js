import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumsData = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [pointAlbumsData, setPointAlbumsData] = useState();

  const albumsUrl = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    getAlbumsData();
  }, []);

  const getAlbumsData = () => {
    axios
      .get(`${albumsUrl}/albums`)
      .then((response) => {
        const allAlbumsData = response.data;
        setAlbumsData(allAlbumsData);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  useEffect(() => {
    const pointAlbums = albumsData.map((album) => {
      return (
        <div>
          <div>{album.title}</div>
        </div>
      );
    });
    setPointAlbumsData(pointAlbums);
  }, [albumsData]);
  return <div>{pointAlbumsData}</div>;
};

AlbumsData.propTypes = {};

export default AlbumsData;
