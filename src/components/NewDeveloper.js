import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";

const NewDeveloper = () => {
  const initialState = {
    id: null,
    logo: "",
    title: "",
    totalExp: "",
    totalProjects: "",
    desc: "",
    imgTitle: "",
    location: "",
    imgURL: ""
  };
  const [developers, setDevelopers] = useState(initialState);

  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setDevelopers({
      ...developers,
      [name]: value
    });
  };
  // setDevelopers({
  //   ...developers,
  //   id: uuidv4(),
  //   [e.target.name]: e.target.value
  // });

  async function postDeveloper() {
    const data = await fetch(`http://localhost:3000/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(developers)
    });

    return data.json();
  }

  useEffect(() => {
    postDeveloper();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    postDeveloper();
    history.push(`/`);
  };

  return (
    <>
      <h5>Add new feature developer</h5>
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
                value={developers.logo}
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
                value={developers.title}
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
                value={developers.totalExp}
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
                value={developers.totalProjects}
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
                value={developers.desc}
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
                value={developers.imgTitle}
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
                value={developers.location}
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
                value={developers.imgURL}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add new Developer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewDeveloper;
