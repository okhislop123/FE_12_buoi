import React from "react";
import ServiceItem from "./ServiceItem";


const Service = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
            {/* props */}
          <ServiceItem title="Title 1" description="Description 1" image="https://img.vn/uploads/thuvien/logo-png-20190723151552YQQtRCTrdJ.png" />
          <ServiceItem title="Title 2" description="Description 2" image="https://img.vn/uploads/thuvien/img-renderacc-aeon-1-jpeg-20230926175923hJd6oSpnqQ.jpeg" />
          <ServiceItem title="Title 3" description="Description 3" />
          <ServiceItem title="Title 4" description="Description 4" />
          <ServiceItem title="Title 5" description="Description 5" />
          <ServiceItem title="Title 6" description="Description 6" />
        </div>
      </div>
    </section>
  );
};

export default Service;
