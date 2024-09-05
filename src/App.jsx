import './styles.css'

function App() {

  return (
    <>
      <div className="card">
        <div className="header">
          <div className="pokemon-name">Oshawott</div>
          <div className="pokemon-id">#501</div>
        </div>
        <div className="image-container">
          <div className="circular-progress">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
              alt="Oshawott"
              width="200"
            />
          </div>
        </div>
        <div className="poke-info">
          <div className="types-container">
            <div className="type water">Water</div>
          </div>
          <div className="basics-info">
            <div className="icon-color">
              <i className="fas fa-weight" style={{marginRight: '5px'}}></i>
              5.9 kg
            </div>
            <div className="icon-color">
              <i className="fas fa-ruler-vertical" style={{marginRight: '5px'}}></i>
              0.5m
            </div>
          </div>
          <p className="description">
            La vieira de su ombligo no solo sirve como arma, sino también como
            instrumento para cortar las bayas que estén duras.
          </p>
          <div className="base-stats">
            <h4 className="base-stats-title" >Base Stats</h4>
            <div className="stat">
              <span className="stat-info">HP</span>
              <span className="stat-percentage">45</span>
              <div className="stat-bar" >
                <div className="stat-fill" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="stat">
              <span className="stat-info">ATK</span>
              <span className="stat-percentage">49</span>
              <div className="stat-bar">
                <div className="stat-fill"  style={{width: '49%'}}></div>
              </div>
            </div>

            <div className="stat">
              <span className="stat-info">DEF</span>
              <span className="stat-percentage">49</span>
              <div className="stat-bar">
                <div className="stat-fill"  style={{width: '49%'}}></div>
              </div>
            </div>

            <div className="stat">
              <span className="stat-info">SATK</span>
              <span className="stat-percentage">65</span>
              <div className="stat-bar">
                <div className="stat-fill"  style={{width: '65%'}}></div>
              </div>
            </div>

            <div className="stat">
              <span className="stat-info">SDEF</span>
              <span className="stat-percentage">65</span>
              <div className="stat-bar">
                <div className="stat-fill"  style={{width: '65%'}}></div>
              </div>
            </div>

            <div className="stat">
              <span className="stat-info">SPD</span>
              <span className="stat-percentage">45</span>
              <div className="stat-bar">
                <div className="stat-fill"  style={{width: '65%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
