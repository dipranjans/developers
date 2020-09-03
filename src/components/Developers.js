import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const FeaturedDevelopers = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    setLoader(true);
    function fetchData() {
      fetch(`http://localhost:3000/items`)
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          setDevelopers(data);
          setLoader(false);
        });
    }
    fetchData();
  }, []);

  // delete user
  const deleteUser = id => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        history.push("/");
      });
  };

  return (
    <>
      <div className="row mt-3">
        {loader && <h3>Loading...</h3>}
        {!loader && developers.length === 0 && <h3>No Results...</h3>}
        {developers.length > 0 &&
          developers.map(res => {
            const {
              logo,
              imgURL,
              imgTitle,
              title,
              totalExp,
              totalProjects,
              desc,
              id
            } = res;
            return (
              <div
                className="test p-2 mr-2 mb-3"
                style={{
                  width: "250px",
                  border: "1px solid #b7bfbd",
                  borderRadius: "4px",
                  borderTop: "3px solid #4732bb"
                }}
                key={id}
              >
                <div className="developers__edit">
                  <span style={{ cursor: "pointer", color: "#007bff" }}>
                    <Link to={`/edit/${id}`}>
                      {/* <i
                        className="fa fa-edit"
                        style="font-size:24px;color:red"
                      ></i> */}
                      Edit
                    </Link>
                  </span>
                  <br />
                  <span
                    style={{ cursor: "pointer", color: "#007bff" }}
                    onClick={deleteUser(id)}
                  >
                    Delete
                  </span>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to={`/edit/${id}`}>
                    <img
                      src={logo}
                      alt={imgTitle}
                      width="70"
                      style={{
                        border: "1px solid #cac5ca",
                        padding: "8px",
                        marginRight: "5px"
                      }}
                    />
                  </Link>
                  <div>
                    <strong>{title}</strong>
                    <br />
                    <div style={{ float: "left", marginRight: "10px" }}>
                      <strong>{totalExp}</strong>
                      <br />
                      Years Exp
                    </div>
                    <div>
                      <strong>{totalProjects}</strong> <br /> Projects
                    </div>
                  </div>
                </div>
                <p
                  className="pt-2"
                  style={{
                    height: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {desc}
                </p>
                <p className="pt-3">
                  <strong>{imgTitle}</strong>
                </p>
                <p>
                  <img src={imgURL} alt="" width="100%" />
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FeaturedDevelopers;
