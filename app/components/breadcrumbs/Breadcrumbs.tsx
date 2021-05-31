import Image from "next/image";
import React from "react";
import {
  BreadcrumbsWrap,
  BreadcrumbsContent,
} from "./styles/BreadcrumbsStyles";

import { Breadcrumbs } from "nextjs-breadcrumbs";

const BreadcrumbsComponent = () => {
  const breadcrumbs = Breadcrumbs();

  return (
    <BreadcrumbsWrap justifyContent="center" wrap="wrap" alignItems="center">
      <BreadcrumbsContent>
        <div>{breadcrumbs}</div>
      </BreadcrumbsContent>
      <Image
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
