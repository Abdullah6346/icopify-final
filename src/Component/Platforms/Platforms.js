import { Platform_data } from ".";
import "./platforms.css";

const Platforms = () => {
  return (
    <div className="container my-5 text-center mx-auto">
      <h2 className="fw-bold main-title fs-1">How Our Platform Works</h2>
      <div className="row my-5 d-flex align-items-stretch">
        {Platform_data.map(({ id, title, description }) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={id}>
            <div className="card rounded-2 shadow shadow h-100">
              <div className="p-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="circle ">{id}</span>
                  <span className="title-text fw-semibold fs-5 text-start">
                    {title}
                  </span>
                </div>
                <p className="description text-start fs-6 mt-3">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
