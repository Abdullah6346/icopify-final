import React from "react";

import Hero from "../Component/Hero/Hero";
import Status from "../Component/Status/Status";
import Feature from "../Component/Feature/Feature";
import Platforms from "../Component/Platforms/Platforms";
import Social from "../Component/Social/Social";
import WebsiteTable from "../Component/Post/Table";

const Home = () => {
  return (
    <div>
      <Hero />
      <Status />
      <Feature />
      <WebsiteTable />
      <Platforms />
      <Social />
    </div>
  );
};

export default Home;
