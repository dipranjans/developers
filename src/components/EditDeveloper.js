import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditDeveloper = () => {
  let { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({
    id: null,
    logo: "",
    title: "",
    totalExp: "",
    totalProjects: "",
    desc: "",
    imgTitle: "",
    location: "",
    imgURL: ""
  });

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://localhost:3000/items/${id}`);
      const result = await data.json();
      setUser(result);
    }
    fetchData();
  }, [id]);
  // console.log(user);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        history.push("/");
      })
      .catch(err => {
        //console.log(err);
        history.push("/");
      });
  };

  return (
    <>
      <h5>Edit feature developer</h5>
      <div className="row">
        <div className="col-6 m-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="developer_logo">Developer Logo image URL</label>
              <input
                type="text"
                className="form-control"
                id="developer_logo"
                name="logo"
                placeholder="Developer Logo image URL"
                value={user.logo || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="developer_name">Developer Name</label>
              <input
                type="text"
                className="form-control"
                id="developer_name"
                name="title"
                placeholder="Developer Name"
                value={user.title || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="years_of_experience">Years of experience</label>
              <input
                type="text"
                className="form-control"
                id="years_of_experience"
                name="totalExp"
                placeholder="Years of experience"
                value={user.totalExp || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="projects_count">Projects count</label>
              <input
                type="text"
                className="form-control"
                id="projects_count"
                name="totalProjects"
                placeholder="Projects count"
                value={user.totalProjects || ""}
                onChange={handleChange}
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                name="desc"
                value={user.desc || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="project_name">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="project_name"
                placeholder="Project Name"
                name="imgTitle"
                value={user.imgTitle || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="project_location">Project location</label>
              <input
                type="text"
                className="form-control"
                id="project_location"
                placeholder="Project location"
                name="location"
                value={user.location || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Projectimgurl">Project image url</label>
              <input
                type="text"
                className="form-control"
                id="Projectimgurl"
                placeholder="Project image url"
                name="imgURL"
                value={user.imgURL || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditDeveloper;
