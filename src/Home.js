import React from 'react'
import HomeSection from "./components/HomeSection"
import Services from "./components/Services"
import Trusted from "./components/Trusted"

const Home = () => {
  const data = {
    name: "ONLINE POOJA BOOKING",
  };
return (<>
<HomeSection myData={ data }/>
<Services/>
<Trusted/>

</>
);
};

export default Home;