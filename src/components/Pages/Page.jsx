import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion";

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      <NotionRenderer blockMap={pageData} />
    </div>
  );
};
