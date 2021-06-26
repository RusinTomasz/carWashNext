import Image from "next/image";
import React from "react";
import {
  BreadcrumbsWrap,
  BreadcrumbsContent,
} from "./styles/BreadcrumbsStyles";

import Breadcrumbs from "nextjs-breadcrumbs";

const BreadcrumbsComponent = () => {
  const removeQueryString = (url: string) => {
    const splitedUrl = url.split("?");
    const urlWithoutQUeryString = splitedUrl[0];
    return urlWithoutQUeryString;
  };

  return (
    <BreadcrumbsWrap justifyContent="center" wrap="wrap" alignItems="center">
      <BreadcrumbsContent>
        <Breadcrumbs
          containerClassName="breadcrumb"
          transformLabel={(title: string) => removeQueryString(title)}
        />
      </BreadcrumbsContent>
      <Image
        priority={true}
        className="bg-index"
        src="/img/breadcrumbs/breadcrumbs-big.jpg"
        alt="Mycie szyby gąbką"
        layout="fill"
        objectFit="cover"
      />
    </BreadcrumbsWrap>
  );
};

export default BreadcrumbsComponent;
