import { Slide } from "react-awesome-reveal";
import "./skills.css";

import {
  ReactIcon,
  JsIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  BootstrapIcon,
  NodeIcon,
  ExpressIcon,
  MysqlIcon,
  SequelizeIcon,
  MongodbIcon,
  GitIcon,
  GraphqlIcon,
  JestIcon,
  HerokuIcon,
  HandlebarsIcon,
  BabelIcon,
  InsomniaIcon,
  NetlifyIcon,
  ApolloIcon,
  MongooseIcon,
  VscodeIcon,
  ChromeIcon,
  GithubIcon,
} from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <h2 className="main-section-title mb-5 pt-5">Skills</h2>
        <div className="skills-container d-flex flex-wrap mx-auto justify-content-center">
          <div className="section-title text-decoration-underline text-white">
            <h3>Front-End</h3>
          </div>
          <div className="front-end">
            <div className="skills-icons d-grid">
              <Slide cascade damping={0.08} triggerOnce>
                <ReactIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <JsIcon iconClassName="skill-icon" divClassName="skill-div" />
                <HtmlIcon iconClassName="skill-icon" divClassName="skill-div" />
                <HandlebarsIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <CssIcon iconClassName="skill-icon" divClassName="skill-div" />
                <TailwindIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <BootstrapIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <BabelIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
              </Slide>
            </div>
          </div>
          <div className="section-title text-decoration-underline text-white">
            <h3>Back-End</h3>
          </div>
          <div className="back-end">
            <div className="skills-icons d-grid">
              <Slide cascade damping={0.08} triggerOnce>
                <NodeIcon iconClassName="skill-icon" divClassName="skill-div" />
                <ExpressIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <MongodbIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <MongooseIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <GraphqlIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <ApolloIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <MysqlIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <SequelizeIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
              </Slide>
            </div>
          </div>
          <div className="section-title text-decoration-underline text-white">
            <h3>Tools</h3>
          </div>
          <div className="tools">
            <div className="skills-icons d-grid">
              <Slide cascade damping={0.08} triggerOnce>
                <GitIcon iconClassName="skill-icon" divClassName="skill-div" />
                <GithubIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <VscodeIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <HerokuIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <NetlifyIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <ChromeIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <InsomniaIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <JestIcon iconClassName="skill-icon" divClassName="skill-div" />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
