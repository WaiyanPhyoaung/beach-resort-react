import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quidem.",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quidem.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quidem.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beers",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quidem.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
