import logo from "./logo.svg";
import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import { Card, CardBody, Container, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "../src/App.css";
const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if(itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2]&& itemArray[0]!=='empty'){
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5]&& itemArray[3]!=='empty'){
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if(itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8]&& itemArray[6]!=='empty'){
      setWinMessage(`${itemArray[6]} wins`)
    }
    else if(itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6]&& itemArray[3]!=='empty'){
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7]&& itemArray[1]!=='empty'){
      setWinMessage(`${itemArray[1]} wins`)
    }
    else if(itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8]&& itemArray[2]!=='empty'){
      setWinMessage(`${itemArray[2]} wins`)
    }
    else if(itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8]&& itemArray[0]!=='empty'){
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if(itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6]&& itemArray[2]!=='empty'){
      setWinMessage(`${itemArray[2]} wins`)
    }
    else if(!itemArray.includes('empty')){
      setWinMessage('game draw')
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success",theme:"colored" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error",theme:"colored" });
    }
    checkIsWinner();
  };
  const setClassColor= (index)=>{
  if(itemArray[index]==='empty'){
    return 'bg-warning'
  }
  else if(itemArray[index]==='cross'){
    return 'bg-success'
  }
  else if (itemArray[index]==='circle'){
    return 'bg-danger text-white'
  }
  }
  const setButtonColor = ()=>{
    if (winMessage==='circle wins'){
      return 'danger'
    }
    if(winMessage === 'cross wins'){
      return 'success'
    }
    if(winMessage ==='game draw'){
      return "warning"
    }
  }
  const setTextColor = ()=>{
    if (winMessage==='circle wins'){
      return 'text-danger text-uppercase text-center'
    }
    if(winMessage === 'cross wins'){
      return 'text-success text-uppercase text-center'
    }
    if(winMessage === 'game draw'){
      return 'text-warning text-uppercase text-center'
    }
  }
  return (
    <Container className="p-5">
      <h1 className="text-center text-white">⚛️React Tic Tac Toe Game⚛️</h1>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offSet-md-3 offset-lg-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className={setTextColor()}>
                {winMessage}
              </h1>
              <div className="d-grid gap-2">
                <Button variant={setButtonColor()} size="lg" onClick={reloadGame}>
                  {" "}
                  Reload Game
                </Button>
              </div>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross " : "Circle "}Turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((ele, index) => (
              <Card className={setClassColor(index)} onClick= {()=>changeItem(index)}>
                <Card.Body className="box">
                  <Icon name={ele} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
