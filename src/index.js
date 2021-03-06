import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/css/bulma-woldcup-live.css";
// import 'font-awesome/css/font-awesome.css';

import fontawesome from "@fortawesome/fontawesome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";
import faCircle from "@fortawesome/fontawesome-free-regular/faCircle";
import faUserCircle from "@fortawesome/fontawesome-free-regular/faUserCircle";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faCircleNotch from "@fortawesome/fontawesome-free-solid/faCircleNotch";
import faTrophy from "@fortawesome/fontawesome-free-solid/faTrophy";

import AppService from "./services/AppService";

import packageJson from "./package.json.lnk";

fontawesome.library.add(faUser);
fontawesome.library.add(faCircle);
fontawesome.library.add(faUserCircle);
fontawesome.library.add(faTimes);
fontawesome.library.add(faAngleDown);
fontawesome.library.add(faFacebook);
fontawesome.library.add(faGithub);
fontawesome.library.add(faCircleNotch);
fontawesome.library.add(faTrophy);

// import registerServiceWorker from './registerServiceWorker';

const urlParams = new URLSearchParams(window.location.search);
const env = urlParams.has("env") ? urlParams.get("env") : "prod";

ReactDOM.render(<App env={env} />, document.getElementById("root"));
// registerServiceWorker();

AppService.init(env).then(() => {
  console.log("init " + env);
  console.log(packageJson.version);
});

