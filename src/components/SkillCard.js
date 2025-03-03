import React from "react";
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiJqueryLogo, DiDocker, DiJira, DiJava } from "react-icons/di";
import { SiVisualstudiocode, SiFigma, SiAmazonaws } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandPhp,
  TbBrandPython,
  TbBrandMysql,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandBootstrap,
  TbBrandTypescript,
  TbApi,
  TbBrandMongodb,
  TbBrandAzure,
} from "react-icons/tb";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="C++">
              <a
                href="https://www.geeksforgeeks.org/c-plus-plus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CgCPlusPlus className="techLogo" />
              </a>
            </abbr>

            <abbr title="JavaScript">
              <a
                href="https://www.w3schools.com/js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandJavascript className="techLogo" />
              </a>
            </abbr>
            <abbr title="HTML 5">
              <a
                href="https://www.w3schools.com/html/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandHtml5 className="techLogo" />
              </a>
            </abbr>
            <abbr title="Php">
              <a
                href="https://www.w3schools.com/php/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandPhp className="techLogo" />
              </a>
            </abbr>
            <abbr title="Python">
              <a
                href="https://www.w3schools.com/python/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandPython className="techLogo" />
              </a>
            </abbr>
            <abbr title="SQL">
              <a
                href="https://www.w3schools.com/sql/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandMysql className="techLogo" />
              </a>
            </abbr>
            <abbr title="JAVA">
              <a
                href="https://www.w3schools.com/java/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiJava className="techLogo" />
              </a>
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS">
              <a
                href="https://www.w3schools.com/react/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandReact className="techLogo" />
              </a>
            </abbr>
            <abbr title="CSS 3">
              <a
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandCss3 className="techLogo" />
              </a>
            </abbr>

            <abbr title="Node Js">
              <a
                href="https://www.w3schools.com/nodejs/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandNodejs className="techLogo" />
              </a>
            </abbr>
            {/* <abbr title="Bootstrap">
              <a
                href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandBootstrap className="techLogo" />
              </a>
            </abbr> */}
            <abbr title="TypeScript">
              <a
                href="https://www.w3schools.com/typescript/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandTypescript className="techLogo" />
              </a>
            </abbr>
            <abbr title="PostmanAPI">
              <a
                href="https://www.geeksforgeeks.org/introduction-postman-api-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbApi className="techLogo" />
              </a>
            </abbr>
            <abbr title="JQuery">
              <a
                href="https://www.w3schools.com/jquery/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiJqueryLogo className="techLogo" />
              </a>
            </abbr>
            <abbr title="MongoDB">
              <a
                href="https://www.w3schools.com/mongodb/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandMongodb className="techLogo" />
              </a>
            </abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title="Visual Studio Code">
              <a
                href="https://en.wikipedia.org/wiki/Visual_Studio_Code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVisualstudiocode className="techLogo" />
              </a>
            </abbr>
            <abbr title="Git/Github">
              <a
                href="https://www.w3schools.com/git/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGit className="techLogo" />
              </a>
            </abbr>
            <abbr title="AWS">
              <a
                href="https://en.wikipedia.org/wiki/Amazon_Web_Services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiAmazonaws className="techLogo" />
              </a>
            </abbr>
            <abbr title="Figma">
              <a
                href="https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma#:~:text=Figma%20Design%20is%20for%20people,and%20make%20better%20decisions%2C%20faster."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFigma className="techLogo" />
              </a>
            </abbr>
            <abbr title="Azure">
              <a
                href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/?ef_id=_k_Cj0KCQiAoJC-BhCSARIsAPhdfShQRIco0SOKMTFH_1B-S7bdRIZ1zxe81Fv0c8Vi-wZ72_EwhcLB4TgaApJcEALw_wcB_k_&OCID=AIDcmmfq865whp_SEM__k_Cj0KCQiAoJC-BhCSARIsAPhdfShQRIco0SOKMTFH_1B-S7bdRIZ1zxe81Fv0c8Vi-wZ72_EwhcLB4TgaApJcEALw_wcB_k_&gad_source=1&gclid=Cj0KCQiAoJC-BhCSARIsAPhdfShQRIco0SOKMTFH_1B-S7bdRIZ1zxe81Fv0c8Vi-wZ72_EwhcLB4TgaApJcEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandAzure className="techLogo" />
              </a>
            </abbr>
            <abbr title="Docker">
              <a
                href="https://docs.docker.com/get-started/docker-overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiDocker className="techLogo" />
              </a>
            </abbr>
            <abbr title="Jira">
              <a
                href="https://www.atlassian.com/software/jira/guides/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiJira className="techLogo" />
              </a>
            </abbr>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
