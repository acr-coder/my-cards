import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "@material-ui/core";

const CardFlip = ({ kelime, kelimeler, sira, artir, azalt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div style={cfStyle} onClick={handleClick}>
          <h1>{kelime.eng}</h1>
          <h3>"{kelime.example}"</h3>
        </div>

        <div style={cbStyle} onClick={handleClick}>
          <h1>{kelime.tr}</h1>
        </div>
      </ReactCardFlip>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Button
          disabled={sira === kelimeler.length}
          onClick={artir}
          variant="contained"
          color="primary"
        >
          {sira ? "Sonraki" : "Başla"}
        </Button>

        <Button
          disabled={sira === 1}
          display={sira > 1}
          onClick={azalt}
          variant="contained"
          color="primary"
        >
          {sira ? "Önceki" : ""}
        </Button>
      </div>
    </div>
  );
};

const cfStyle = {
  height: "300px",
  width: "300px",
  backgroundColor: "#F5B041",
  color: "#212F3D",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "30px",
};

const cbStyle = {
  height: "300px",
  width: "300px",
  backgroundColor: "#212F3D",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "30px",
};

export default CardFlip;
