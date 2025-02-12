import logo from "./logo.svg";
import * as styles from "./App.css.ts";
import { Carousel } from "antd";
import "./App.css";
import spiritedaway from "./assets/spiritedaway/spiritedaway.mp4";
import harrypotter from "./assets/harrypotter/harrypotter.mp4";
import marnie from "./assets/marnie/marnie.mp4";
import frozen from "./assets/frozen/frozen.mp4";
import spiritedaway0 from "./assets/spiritedaway/0.jpeg";
import spiritedaway1 from "./assets/spiritedaway/1.jpeg";
import spiritedaway2 from "./assets/spiritedaway/2.jpeg";
import harrypotter0 from "./assets/harrypotter/0.jpeg";
import harrypotter1 from "./assets/harrypotter/1.jpeg";
import harrypotter2 from "./assets/harrypotter/2.jpeg";
import frozen0 from "./assets/frozen/0.jpg";
import frozen1 from "./assets/frozen/1.jpeg";
import frozen2 from "./assets/frozen/2.jpg";
import marnie0 from "./assets/marnie/0.png";
import marnie1 from "./assets/marnie/1.jpeg";
import marnie2 from "./assets/marnie/2.jpeg";
import { Github, ScrollText } from "lucide-react";

function App() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.app}>
      <h1>StyleScape: Stylized and Depth-Consistent 3D Scene Generation</h1>
      <h2>Project Page</h2>
      <div
        style={{
          margin: "30px 0",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <a
          href="https://github.com/49emily/stylescape"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Github /> Github
        </a>
        <a
          href="https://github.com/49emily/stylescape/blob/1ca5be7b18c49cb418a72292163c4e4b080126f9/report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ScrollText /> Paper
        </a>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.nameDiv}>
          <h3>Emily Zhang</h3>
          <code>emily49@stanford.edu</code>
        </div>
        <div className={styles.nameDiv}>
          <h3>Chetan Nair</h3>
          <code>cnair@stanford.edu</code>
        </div>
      </div>
      <div>
        <div className={styles.abstract}>
          <h2>Abstract</h2>
          In this paper, we propose a method for 3D-consistent scene generation to create diverse,
          visually appealing, and infinite walkthroughs of specific films. Our approach builds on
          the SceneScape pipeline and uses Dreambooth to train Stable Diffusion models for few-shot,
          scene-driven generation of novel views with specific characters, settings, and styles. We
          use ControlNet to condition these models for inpainting tasks, ensuring structurally and
          contextually coherent scenes as the model inpaints the masks recursively generated from
          the depth estimation model and the constructed 3D mesh. We conducted experiments on four
          stylistically distinct films, and our method outperforms the baseline on both quantitative
          aesthetic metrics and qualitative human evaluations, based on content and style
          resemblance with the target film.
        </div>
      </div>
      <Carousel arrows className={styles.carousel} afterChange={onChange}>
        <div className={styles.contentStyle}>
          <h2>
            Train from <span className={styles.italic}>Spirited Away</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div className={styles.carouselContentDivOne}>
              <h3>Few-shot training images:</h3>
              <img className={styles.dreamboothImage} src={spiritedaway0} width="70%" />
              <img className={styles.dreamboothImage} src={spiritedaway1} width="70%" />
              <img className={styles.dreamboothImage} src={spiritedaway2} width="70%" />
            </div>
            <div className={styles.carouselContentDivTwo}>
              <h3>Generated walkthrough:</h3>
              <video src={spiritedaway} width="90%" controls autoPlay={true} muted playsInline />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            The Great Hall from{" "}
            <span className={styles.italic}>Harry Potter and the Sorcerer's Stone</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div className={styles.carouselContentDivOne}>
              <h3>Few-shot training images:</h3>
              <img className={styles.dreamboothImage} src={harrypotter0} width="70%" />
              <img className={styles.dreamboothImage} src={harrypotter1} width="70%" />
              <img className={styles.dreamboothImage} src={harrypotter2} width="70%" />
            </div>
            <div className={styles.carouselContentDivTwo}>
              <h3>Generated walkthrough:</h3>
              <video src={harrypotter} width="90%" controls autoPlay={true} muted playsInline />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            Anna's room from <span className={styles.italic}>When Marnie Was There</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div className={styles.carouselContentDivOne}>
              <h3>Few-shot training images:</h3>
              <img className={styles.dreamboothImage} src={marnie0} width="70%" />
              <img className={styles.dreamboothImage} src={marnie1} width="70%" />
              <img className={styles.dreamboothImage} src={marnie2} width="70%" />
            </div>
            <div className={styles.carouselContentDivTwo}>
              <h3>Generated walkthrough:</h3>
              <video src={marnie} width="90%" controls autoPlay={true} muted playsInline />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            Arendelle Castle from <span className={styles.italic}>Frozen</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div className={styles.carouselContentDivOne}>
              <h3>Few-shot training images:</h3>
              <img className={styles.dreamboothImage} src={frozen0} width="70%" />
              <img className={styles.dreamboothImage} src={frozen1} width="70%" />
              <img className={styles.dreamboothImage} src={frozen2} width="70%" />
            </div>
            <div className={styles.carouselContentDivTwo}>
              <h3>Generated walkthrough:</h3>
              <video src={frozen} width="90%" controls autoPlay={true} muted playsInline />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
