import Sketch from "react-p5";

let x = 50;
let y = 50;
const App = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.ellipse(p5.mouseX, p5.mouseY, 30, 30);
  };
  // const mousePressed = (p5) => {};
  // const windowResized = (p5) => {
  //   p5.resizeCanvas(p5.windowWidth, p5.windowHeight, false);
  // };
  return (
    <Sketch
      setup={setup}
      windowResized={windowResized}
      mousePressed={mousePressed}
      draw={draw}
    />
  );
};
export default App;
