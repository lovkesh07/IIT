import React from "react";
import Textsec1 from "../../../components/Textsec1";
import Textsec2 from "../../../components/Textsec2";
import Textsec3 from "../../../components/Textsec3";
import Textsec4 from "../../../components/Textsec4";
import Textsec5 from "../../../components/Textsec5";
import Subnavbar from '../../../components/Subnavbar'

const page = () => {

  const links = [
    { label: 'Aim', url: '/experiment1' },
    { label: 'Theory', url: '/experiment1/theory' },
    // Add more links as needed
  ];
  return (
    <div>
        <Subnavbar links={links} />

      <div className="px-4 lg:px-16">
        <Textsec1 />
        <Textsec2 />
        <Textsec3 />
        <Textsec4 />
        <Textsec5 />
      </div>
    </div>
  );
};

export default page;
