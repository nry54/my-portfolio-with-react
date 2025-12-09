import { Outlet, NavLink } from "react-router";

const Services = () => {
  return (
    <>
      <h2 className="sectionTitle">Services</h2>

      <div className="services-navigation">
        <nav className="services-nav">
          <NavLink
            to="web-sites"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Web Site Development
          </NavLink>
          <NavLink
            to="ui-ux-design"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Dynamic and Responsive Interfaces
          </NavLink>
          <NavLink
            to="consulting"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            API Entegrasyonu
          </NavLink>
          <NavLink
            to="modernisation"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Modernisation of the Existing System
          </NavLink>
          <NavLink
            to="ai-solutions"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
            Artificial Intelligence
          </NavLink>
        </nav>
      </div>

      <div className="services-content">
        <Outlet />
      </div>
    </>
  );
};

export default Services;
