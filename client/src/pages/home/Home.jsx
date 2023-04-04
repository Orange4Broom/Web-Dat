import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@chakra-ui/react';
import Icon from '../../icon/Icon';
import './home.scss';
import { Link } from 'react-router-dom';

function Home() {
  const endpoint = 'http://localhost:3001/chalec';
  const [loading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    // GET
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .finally(() => setLoading(false));
  }, [endpoint]);

  const deleteData = async (id) => {
    Link;
    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      setFetchData(fetchData.filter((item) => item.chalec_id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="form-header-home">Home</h1>

      {!loading && fetchData ? (
        <div className="boxlist">
          <Link className="container" to="/add">
            <div className="center-container">
              <Link to="/add">
                <Icon name="plus" type="fas" color="grey" />
              </Link>
            </div>
          </Link>
          {fetchData.map((data) => (
            <div key={data.chalec_id} className="box">
              <li>
                <Icon name="utensils" type="fas" color="lightgrey" />
                <h1>{data.nazev}</h1>
              </li>
              <li>
                <Icon name="tag" type="fas" color="rgb(228, 179, 115)" />
                <h1>{data.cena}</h1>
              </li>
              <li>
                <Icon name="message" type="fas" color="rgb(178, 223, 235)" />
                <h1>{data.popis}</h1>
              </li>
              <div className="bottom">
                <button
                  className="deleteButton"
                  onClick={() => deleteData(data.chalec_id)}
                >
                  <Icon name="trash-can" type="fas" color="red" />
                </button>
                <button className="likeButton">
                  <Icon name="edit" type="fas" color="rgb(87, 194, 73)" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div id="loader">
            <CircularProgress isIndeterminate color="limegreen" />
          </div>
          <p>Načítání</p>
        </>
      )}
    </div>
  );
}

export default Home;
