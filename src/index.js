import React from "react";
import ReactDOM from "react-dom";

import Viewer from "./Viewer";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    //     "https://cdn-images.kreativsoftware.com/api/v1/Images/nNLzs-P1000713;width_1000;longcache_1;dpi_2.png"

    console.log(window.innerHeight);
    let imageWidth = 250;
    if (window.innerHeight > 600) {
      imageWidth = 500;
    } else if (window.innerHeight > 800) {
      imageWidth = 1000;
    }

    this.images = [
      `https://cdn-images.kreativsoftware.com/api/v1/Images/3g6YaW-P1000697;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/JNIk0-P1000698;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/U5CW4-P1000699;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/1wnDCu-P1000700;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/4pV5zX-P1000701;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/4igmVl-P1000702;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/47QnWs-P1000703;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/1hWd5I-P1000704;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/44C1xf-P1000705;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/4oMqvy-P1000706;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/2kmTvb-P1000707;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/REjWk-P1000708;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/8vM0I-P1000709;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/3Wh4CN-P1000710;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/h9WLS-P1000711;width_${imageWidth};longcache_1;dpi_2.png`,
      `https://cdn-images.kreativsoftware.com/api/v1/Images/3hBKiR-P1000712;width_${imageWidth};longcache_1;dpi_2.png`
    ];

    this.details = [
      {
        content: (
          <div>
            <h3>Label</h3>
            <p>Our cloting is not only durable, but also sustainable!</p>
          </div>
        ),
        0: { x: 27.96731234866828, y: 40 },
        1: { x: 30.76404358353511, y: 40.43583535108959 },
        "12": { x: 49.695762711864404, y: 39.83050847457627 },
        13: { x: 40.22990314769976, y: 39.346246973365616 },
        "14": { x: 32.7002421307506, y: 39.22518159806295 },
        15: { x: 28.182445520581112, y: 39.70944309927361 }
      },
      {
        content: (
          <div>
            <h3>Pockets</h3>
            <p>
              Our unique double pocket design gives you the right tool at the
              right time.
            </p>
          </div>
        ),
        "0": { x: 30.11864406779661, y: 54.842615012106535 },
        "7": { x: 68.62748184019371, y: 54.842615012106535 },
        "8": { x: 66.90641646489104, y: 55.08474576271186 },
        "9": { x: 64.32481840193705, y: 55.44794188861985 },
        "10": { x: 58.08595641646489, y: 55.69007263922518 },
        "11": { x: 49.695762711864404, y: 55.44794188861985 },
        "12": { x: 41.52070217917676, y: 54.842615012106535 },
        "13": { x: 34.42130750605327, y: 54.479418886198545 },
        "14": { x: 29.903510895883777, y: 54.72154963680387 },
        "15": { x: 28.61271186440678, y: 54.60048426150121 }
      }
    ];

    this.state = { images: this.images, details: this.details };
  }

  onDetailClick = (position, detail, event) => {
    if (!position) {
      this.setState({
        popover: null
      });
      return;
    }
    // console.log({
    //   position,
    //   detail,
    //   event
    // });
    this.setState({
      popover: {
        position,
        content: detail.content
      }
    });
  };

  render() {
    const { popover } = this.state;
    return (
      <div className="App">
        <Viewer
          images={this.state.images}
          details={this.state.details}
          onDetailClick={this.onDetailClick}
        />
        {popover && (
          <div
            className="popover"
            style={{
              top: popover.position.y - 21,
              left: popover.position.x - 21
            }}
          >
            <div className="close" onClick={() => this.onDetailClick()}>
              &times;
            </div>
            {popover.content}
          </div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
