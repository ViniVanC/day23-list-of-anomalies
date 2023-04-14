import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion";
import { Loader } from "../Loader/Loader";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const Page = () => {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function fetchPageData() {
      const response = await fetch(
        `https://notion-api.splitbee.io/v1/page/${id}`
      );

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      const pageData = await response.json();
      setPageData(pageData);
    }

    fetchPageData();
  }, [id]);

  if (!pageData) {
    return <Loader />;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Link to={"/"} className="back-btn">
          <MdKeyboardArrowLeft />
        </Link>
        <h1
          style={{
            margin: "0",
          }}
        >
          {pageData[Object.keys(pageData)[0]].value.properties.title}
        </h1>
      </div>
      <NotionRenderer blockMap={pageData} />
    </div>
  );
};
