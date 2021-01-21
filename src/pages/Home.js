import React from "react";

import Page from "../components/Page"
import Project from "../components/Project"
import '../ghost-blog.css';
import Special from "../components/Special";

export default function Home() {
  return (
    <div>
    <Page>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-3"></div>
            <div className="column is-2">
              <img className="image_round" src="https://pbs.twimg.com/profile_images/1346120714831736834/M9kuGK2F_400x400.jpg" width="200" height="200" />
            </div>
            <div className="column is-4">
              <h1 className="title">
                Works Of Barry
              </h1>
              <h2 className="subtitle">
                Developer, speaker, and advocate
              </h2>
            </div>
            <div className="column is-3"></div>
          </div>
        </div>
      </div>
    </Page>
    
    <div className="blog-posts">
      <div className="container">
        <div id="mainpanel">
          <div class="panelgroup">
            <h3 className="title is-3 is-spaced">Recent Projects</h3>
            <p className="subtitle is-6">Here is some of my past works from personal projects, open source projects and client work.</p>

            <div className="columns">
              <Project title="Node.js" subtitle="Bits and pieces I've done for OS and clients">
                <p>
                  <a href="/?post=44">GraphQL</a>
                  <a href="/?post=41">OpenAPI</a>
                  <a href="/?post=40">ODBC</a>
                  <a href="https://github.com/worksofbarry/db2Model">db2Model</a>
                </p>
              </Project>
              <Project title="RPGLE" subtitle="Workshops, tutorials, cool stuff">
                <p>
                  <a href="/?post=35">Intro</a>
                  <a href="https://github.com/worksofliam/modern_rpg_workshop">Modern&nbsp;RPG</a>
                  <a href="https://github.com/worksofliam/rpg_sdk_workshop">SDKs</a>
                  <a href="https://github.com/worksofbarry/openapi-ileastic">OpenAPI</a>
                  <a href="/?post=37">DevOps</a>
                </p>
              </Project>
            </div>
            <div className="columns">
              <Project title="ILEditor 2" subtitle="Super fast, super cool, IBM i IDE">
                <p>
                  <a href="https://ileditor.dev/">Website</a>
                  <a href="https://www.itjungle.com/2020/05/06/ileditor-2-gives-ibm-i-shops-a-new-development-option/">ITJungle</a>
                </p>
              </Project>
              <Project title="Other stuff" subtitle="Other personal interests">
                <p>
                  <a href="https://www.linkedin.com/posts/worksofbarry_ibm-ibmi-activity-6679730979776548864-kIME">IBM Champion</a>
                  <a href="https://github.com/worksofbarry/NetRPG">NetRPG</a>
                  <a href="https://github.com/worksofbarry/ILEditor">ILEditor 1</a>
                  <a href="https://github.com/sitemule/noxDB">noxDB</a>
                </p>
              </Project>
            </div>
          </div>

          <div class="panelgroup">
            <h3 className="title is-3 is-spaced">Notable moments</h3> 
            <div class="special">
              <Special 
                title="IBM Think Speaker"
                text="In February 2019, I got to partake in 3 talks at IBM Think. I spoke about DevOps and how RPGLE+Node.js is a great combination to expand the average IBM i business."
                icon="fa-chalkboard-teacher" />
              <hr />
              <Special 
                title="IBM Champion 2017 - 2021"
                text="I have been fortunate enough to be named an IBM Champion by IBM every year since 2017. I want to continue helping the community and industry in many ways that I can."
                icon="fa-handshake" />
              <hr />
              <Special 
                title="COMMON Innovation Award 2019"
                text="In May 2019, I won the COMMON Innovation Award for building a build server aimed at targetting ILE applications on IBM i. The application was written in Node.js and the purpose for it was to automate the deployment of ILE applications."
                icon="fa-trophy" />
              <hr />
              <Special 
                title="COMMON Student Innovation Award 2016"
                text="In May 2016, I won the COMMON Student Innovation Award for building a language and compiler targetting the IBM i OPM MI instruction set."
                icon="fa-trophy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}