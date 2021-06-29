import React from 'react';
import './Infos.scss';

export default ({ info }) => {
  const data = info;
  return (
    <div className="infos-country-container">
      {!data.message ? (
        <section className="infos-section">
          <div className="card">
            <div className="country-title">
              <h2>{data.country}</h2>
              <img src={`${data.countryInfo.flag}`} className="flag" alt="Country flag" />
            </div>
            <div className="content">
              <div>
                Population: <span className="number">{data.population.toLocaleString('pt-BR')}</span>
              </div>
              <div>
                Continent: <span className="number">{data.continent}</span>
              </div>
            </div>
          </div>
          <div className="case card last">
            <div className="cases-title">
              <h2>Covid-19 Infos</h2>
            </div>
            <div className="content">
              <div>
                Tests:  <span className="number">{data.tests.toLocaleString('pt-BR')}</span>
              </div>
              <div>
                Total: <span className="number">{data.cases.toLocaleString('pt-BR')}</span>
              </div>
              <div>
                Actives: <span className="number">{data.active.toLocaleString('pt-BR')}</span>
              </div>
              <div>
                Recovered: <span className="number">{data.recovered.toLocaleString('pt-BR')}</span>
              </div>
              <div>
                Deaths: <span className="number">{data.deaths.toLocaleString('pt-BR')}</span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="error">
          Oops! {data.message}.
        </div>
      )}
    </div>
  );
};
