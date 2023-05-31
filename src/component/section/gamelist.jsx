import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import gameList from "../data/data.json";
import "./style.css";

const GameList = () => {
  const [items, setItems] = useState(gameList.data);
  const [selectedTab, setSelectedTab] = useState("All matches");

  const filterItem = (categoryItem) => {
    setSelectedTab(categoryItem);
    if (categoryItem === "All matches") {
      setItems(gameList.data);
    } else {
      const updateItems = gameList.data.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItems(updateItems);
    }
  };

  function handleClick(link) {
    window.location.href = link;
  }

  return (
    <section className="collection-section padding-top padding-bottom">
      <div className="container">
        <div className="section-wrapper">
          <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
            <li
              className={selectedTab === "All matches" && "selectedTab"}
              onClick={() => filterItem("All matches")}
            >
              All matches
            </li>
            <li
              className={selectedTab === "Skill-based" && "selectedTab"}
              onClick={() => filterItem("Skill-based")}
            >
              Skill-based
            </li>
            <li
              className={selectedTab === "Cars" && "selectedTab"}
              onClick={() => filterItem("Cars")}
            >
              Cars
            </li>
            <li
              className={selectedTab === "Kids" && "selectedTab"}
              onClick={() => filterItem("Kids")}
            >
              Kids
            </li>
            <li
              className={selectedTab === "Adventure" && "selectedTab"}
              onClick={() => filterItem("Adventure")}
            >
              Adventure
            </li>
            <li
              className={selectedTab === "Action" && "selectedTab"}
              onClick={() => filterItem("Action")}
            >
              Action
            </li>
            <li
              className={selectedTab === "Memory" && "selectedTab"}
              onClick={() => filterItem("Memory")}
            >
              Memory
            </li>
            <li
              className={selectedTab === "Strategy" && "selectedTab"}
              onClick={() => filterItem("Strategy")}
            >
              Strategy
            </li>
            <li
              className={selectedTab === "Dot games" && "selectedTab"}
              onClick={() => filterItem("Dot games")}
            >
              Dot games
            </li>
            <li
              className={selectedTab === "Dress Up" && "selectedTab"}
              onClick={() => filterItem("Dress Up")}
            >
              Dress Up
            </li>
            <li
              className={selectedTab === "Sports" && "selectedTab"}
              onClick={() => filterItem("Sports")}
            >
              Sports
            </li>
            <li
              className={selectedTab === "Dice" && "selectedTab"}
              onClick={() => filterItem("Dice")}
            >
              Dice
            </li>
            <li
              className={selectedTab === "Puzzles" && "selectedTab"}
              onClick={() => filterItem("Puzzles")}
            >
              Puzzles
            </li>
            <li
              className={selectedTab === "Math games" && "selectedTab"}
              onClick={() => filterItem("Math games")}
            >
              Math games
            </li>
          </ul>

          <div className="row g-4 justify-content-center collection-grid GameListStyle">
            {items.map((elem) => {
              const { id, logo, name, link } = elem;
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                  <div className="game-item item-layer">
                    <div className="game-item-inner">
                      <div className="game-thumb">
                        <img src={logo} alt={name} />
                      </div>
                      <div className="game-overlay">
                        <h4>
                          <Link to="" onClick={() => handleClick(link)}>
                            {name}
                          </Link>
                        </h4>
                        <Rating />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameList;
