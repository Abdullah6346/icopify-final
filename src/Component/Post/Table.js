import React from "react";
import { data } from "./index";
import "./table.css";
import { FaClock, FaBezierCurve, FaLink } from "react-icons/fa";

const TableComponent = () => {
  return (
    <div className="mt-6 container ">
      <div className="table-responsive">
        <table className="table table-sm table-bordered table-hover table-striped fs-6">
          <thead className="">
            <tr>
              <th className="sort">Websites</th>
              <th className="sort">Categories</th>
              <th className="sort text-center">Monthly Traffic</th>
              <th className="sort text-center">Ahrefs DR</th>
              <th className="sort text-center">Moz DA</th>
              <th className="sort text-center">Language</th>
              <th className="sort text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="align-middle">
                  <span className="text-facebook font-weight-bold">
                    <FaLink />
                    <a
                      href={row.url}
                      className="text-decoration-none text-facebook"
                    >
                      {row.website}
                      <span className="badge badge-soft-primary">
                        Unhide the URL
                      </span>
                    </a>
                  </span>
                  <br />
                  <span>
                    <FaBezierCurve />
                    <span>Max </span>
                    <strong className=" text-secondary">
                      03 DoFollow links
                    </strong>
                  </span>
                  <br />
                  <span>
                    <FaClock />
                    <span>Turnaround Time: </span>
                    <strong className="text-secondary">
                      {row.turnaroundTime}
                    </strong>
                  </span>
                </td>

                <td className="align-middle">
                  {row.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="badge badge-soft-primary fs--1 mb-1 ml-2"
                    >
                      {category}
                    </span>
                  ))}
                </td>

                <td className="text-center align-middle">
                  Monthly Traffic <br />
                  <img
                    src="/images/table/analytics.svg"
                    alt="google analytic icon"
                    className="mb-1"
                    width="13px"
                  />
                  <span className="font-weight-bold h6">{row.traffic}</span>
                </td>

                <td className="text-center align-middle">
                  <img
                    src="/images/table/Ahrefs-icon.jpeg"
                    className="mr-1"
                    alt="Ahrefs icon"
                    width="20px"
                  />
                  DR
                  <strong className="font-weight-bold">{row.ahrefsDr}</strong>
                </td>

                <td className="text-center align-middle">
                  <span className="badge badge-primary mr-1">M</span>
                  DA <strong className="font-weight-bold">{row.mozDa}</strong>
                </td>

                <td className="text-center align-middle">
                  <img
                    src="images/table/us.jpg"
                    alt=""
                    className="shadow rounded"
                  />
                  <br />
                  <span>{row.language}</span>
                </td>

                <td className="align-middle text-center">
                  <div className="text-center">
                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group btn-block"
                        role="group"
                        aria-label="First group"
                      >
                        <a
                          href={row.url}
                          className="btn bg-facebook text-white btn-block btn-sm"
                          role="button"
                          title="Buy Post"
                        >
                          Buy Post
                        </a>
                        <a
                          href={row.url}
                          className="btn btn-primary btn-sm"
                          role="button"
                        >
                          {row.price}
                        </a>
                      </div>
                      <a
                        href={row.url}
                        className="btn btn-outline-google-plus btn-block btn-sm mt-2"
                        role="button"
                        title="View Details"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
