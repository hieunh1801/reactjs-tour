import animalApi from "api/animalApi";
import React, { useEffect, useState } from "react";
import keyGenerator from "utils/keyGenerator";
import styles from "./ScreenAnimalList.module.css";
import {
  useHistory,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AiFillPlusSquare } from "react-icons/ai";

const ScreenAnimalList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchAnimals = async () => {
      setIsLoading(true);
      try {
        const response = await animalApi.getAllAnimals({
          params: {
            _page: page,
            _limit: limit,
          },
        });
        const json = await response.json();
        setAnimals((pre) => [...pre, ...json]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimals();
  }, [page, limit]);

  // sync query with router
  // useEffect(() => {
  //   navigate(
  //     {
  //       pathname: location.pathname,
  //       search: new URLSearchParams({ page: page, limit: limit }).toString(),
  //     },
  //     { replace: true }
  //   );
  // }, [page, limit, location.pathname, navigate]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOnClickAnimal = (animal) => {
    navigate(`/animals/${animal.id}`);
  };

  return (
    <div className={styles.container}>
      <h3>
        Animals <AiFillPlusSquare />
      </h3>

      <div className={styles.listContainer}>
        {animals?.map((animal) => {
          const { id, name, thumbnailUrl } = animal;
          return (
            <div
              key={keyGenerator()}
              className={styles.listItemContainer}
              onClick={() => handleOnClickAnimal(animal)}
            >
              <img src={thumbnailUrl} alt="animal"></img>
              <div>
                {id}. {name}
              </div>
            </div>
          );
        })}
        {(isLoading && (
          <div key="loading" className={styles.loadMoreContainer}>
            Loading...
          </div>
        )) || (
          <div
            key="load-more"
            className={styles.loadMoreContainer}
            onClick={handleLoadMore}
          >
            Load More
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenAnimalList;
