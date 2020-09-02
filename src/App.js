import React from "react";
import FeaturedDevelopers from "./components/FetDevelopers";
const App = () => {
  return (
    <>
      <div className="container  app__container">
        <div className="row">
          <div className="col-6">
            <h4>Featured Developers</h4>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary">+ ADD NEW DEVELOPER</button>
          </div>
        </div>
        <FeaturedDevelopers />
      </div>
    </>
  );
};

export default App;
