import React, { useEffect, useState } from "react";
import GameOptionsComp from "./components/GameOptionsComp";
import TowerComp from "./components/TowerComp";
import WinMessageComp from "./components/WinMessageComp";
import Tower from "./utils/Tower";
import { randomColor } from "./helpers/randoms";
import "./App.css";

const App = () => {
  //Contar el numero de movimientos
  const [moveCount, setMoveCount] = useState(0);
  //El disco que se está movimiendo
  const [dragTile, setDragTile] = useState();
  //Los discos para la torre principal
  const [disks, setDisks] = useState(3);

  //Los discos de cada torre (1, 2, 3)
  const [tiles, setTiles] = useState([]);
  const [tilesTwo, setTilesTwo] = useState([]);
  const [tilesThree, setTilesThree] = useState([]);

  //Las 3 torres (columnas)
  let [towerOne, setTowerOne] = useState(new Tower());
  let [towerTwo, setTowerTwo] = useState(new Tower());
  let [towerThree, setTowerThree] = useState(new Tower());

  const towers = {
    1: {
      tower: towerOne,
    },
    2: {
      tower: towerTwo,
    },
    3: {
      tower: towerThree,
    },
  };

  useEffect(() => {
    //Resetear las torres
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disks]);

  //Actualizar todos los discos de las torres
  //Esta actualización se hará con cada movimiento de las torres
  useEffect(() => {
    setTiles(towerOne.disks.traverse());
  }, [towerOne, moveCount]);

  useEffect(() => {
    setTilesTwo(towerTwo.disks.traverse());
  }, [towerTwo, moveCount]);

  useEffect(() => {
    setTilesThree(towerThree.disks.traverse());
  }, [towerThree, moveCount]);

  const reset = () => {
    //COMPLETAR
    const tower = new Tower();
    for (let i = disks; i > 0; i--) {
      tower.add(i, randomColor());
    }
    setTowerOne(tower);
    setTowerTwo(new Tower());
    setTowerThree(new Tower());
    setMoveCount((prevState) => prevState * 0); //Actualizar los movimientos
  };

  const handleDrag = (e, tile, id) => {
    //Funcion que se lanza cada vez que movemos un disco que se encuentra en la parte superior de una torre
    const dragTile = { tile, towerId: id };
    if (towers[id].tower.disks.top === dragTile.tile) {
      setDragTile(dragTile);
    } else {
      e.preventDefault();
    }
  };

  const handleDrop = (e) => {
    //Funcion que se lanza cada vez que un disco se deja en una nueva torre
    const dropColumn = e.currentTarget.id; //ID de la columna de destino
    let source = towers[dragTile.towerId].tower; //Torre de origen
    let destination = towers[dropColumn].tower; //Torre de destino

    const goodMove = source.moveTopTo(destination); //Mover el disco desde la torre de origen al destino
    if (goodMove) {
      //Si es un movimiento valido -> incrementar los movimientos
      setMoveCount((prevState) => prevState + 1); //Actualizar los movimientos
    }
  };

  const solve = () => {
    //COMPLETAR
    if (moveCount > 0) {
      reset();
    } else {
      autocomplete(disks, towerOne, towerThree, towerTwo);
    }

    function autocomplete(disks, origin, destination, auxiliar) {
      if (disks === 1) {
        origin.moveTopTo(destination);
        setMoveCount((prevState) => prevState + 1); //Actualizar los movimientos
      } else {
        autocomplete(disks - 1, origin, auxiliar, destination);
        origin.moveTopTo(destination);
        setMoveCount((prevState) => prevState + 1); //Actualizar los movimientos
        autocomplete(disks - 1, auxiliar, destination, origin);
      }
    }
  };

  const winCondition = towerThree.disks.size === disks; //COMPLETAR
  return (
    <>
      <div className="container d-none d-md-block">
        <GameOptionsComp
          reset={reset}
          disks={disks}
          setDisks={setDisks}
          solve={solve}
          moveCount={moveCount}
        />
        <div className="content">
          <TowerComp
            id={1}
            disks={tiles}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <TowerComp
            id={2}
            disks={tilesTwo}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
          <TowerComp
            id={3}
            disks={tilesThree}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        </div>
        <WinMessageComp
          disks={disks}
          show={winCondition}
          moveCount={moveCount}
        />
      </div>
      <div style={{minHeight: '100vh'}} className="container d-flex flex-column d-md-none justify-content-center align-items-center">
        <div className="h1 mb-3">Oops! 😔</div>
        <div className="text-center h2">
          Esta app funciona mejor en pantallas grandes, ingresa desde una tablet, ipad o
          cualquier computadora o smart tv que prefieras.
        </div>
      </div>
    </>
  );
};

export default App;
