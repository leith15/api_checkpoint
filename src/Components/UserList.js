import axios from "axios";
import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [data, getData] = useState([{}]);
  useEffect(() => {
    axios.get(`${URL}`).then((response) => getData(response.data));
  }, []);
  return (
    <div className="pcontainer">
      {data.map((el) => (
        <section id="team" className="pb-5" key={el.id}>
          <div className="container">
            <div className="row">
              {/* Team member */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src="./img.jpg"
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">{`${el.name}${el.username}`}</h4>
                          <p className="card-text">
                            <p>{`Email : ${el.email}`}</p>
                            <p>{`Phone : ${el.phone}`}</p>
                            <p>{`Website : ${el.website}`}</p>
                          </p>
                          <a
                            href="https://www.fiverr.com/share/qb8D02"
                            className="btn btn-primary btn-sm"
                          >
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">{`ID : ${el.id}`}</h4>
                          <p className="card-text">
                            <h2>Company</h2>
                            <p>{`name : ${el.company}`}</p>
                            <p>{`catchphrase : ${el.company}`}</p>
                            <p>{`bs : ${el.company}`}</p>
                          </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="https://www.fiverr.com/share/qb8D02"
                              >
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UserList;
