import Head from "next/head";
import React from "react";
import BreadcrumbsComponent from "../../app/components/breadcrumbs/Breadcrumbs";

const Rankings = () => {
  return (
    <>
      <Head>
        <title>Rankingi - rankingmyjni.pl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BreadcrumbsComponent />
      </main>
    </>
  );
};

export default Rankings;
