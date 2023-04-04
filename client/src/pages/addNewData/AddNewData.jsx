import React from 'react';
import { useState } from 'react';
import './addNewData.scss';
import Icon from '../../icon/Icon';
import { Link } from 'react-router-dom';

function AddNewData() {
  const endpoint = 'http://localhost:3001/chalec';
  const [nazev, setNazev] = useState('');
  const [cena, setCena] = useState('');
  const [popis, setPopis] = useState('');

  const submitData = async () => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nazev: nazev,
          cena: cena,
          popis: popis,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setNazev('');
    setCena('');
    setPopis('');
  };

  return (
    <div>
      <Link className="back-to-home" to="/">
        <Icon name="arrow-left" type="fas" color="black" />
      </Link>
      <h1 className="form-header">Formulář</h1>
      <input
        type="text"
        className="nazev"
        placeholder="Název"
        value={nazev}
        onChange={(e) => setNazev(e.target.value)}
      />
      <br /> <br />
      <input
        type="number"
        className="cena"
        placeholder="Cena"
        value={cena}
        onChange={(e) => setCena(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        className="popis"
        placeholder="Popis"
        value={popis}
        onChange={(e) => setPopis(e.target.value)}
      />
      <br />
      <br />
      <button className="Add" onClick={submitData}>
        <Icon name="floppy-disk" type="fas" color="white" />
        Save
      </button>
    </div>
  );
}

export default AddNewData;
