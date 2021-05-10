import React from "react";
import { Pagination as Page } from "react-bootstrap";

const Pagination = () => {
  return (
    <Page className="d-flex justify-content-center">
      <Page.First />
      <Page.Prev />
      <Page.Item active>{1}</Page.Item>
      <Page.Item>{2}</Page.Item>
      <Page.Item>{3}</Page.Item>
      <Page.Item>{4}</Page.Item>
      <Page.Next />
      <Page.Last />
    </Page>
  );
};

export default Pagination;
