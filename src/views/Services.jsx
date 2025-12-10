import { Outlet, NavLink } from "react-router";

const Services = () => {
  return (
    <>
      <h2 className="sectionTitle">Services</h2>

      <div className="services-navigation">
        <nav className="services-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Web Site Development
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Dynamic and Responsive Interfaces
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            API Entegrasyonu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Modernisation of the Existing System
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Artificial Intelligence
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Services;
