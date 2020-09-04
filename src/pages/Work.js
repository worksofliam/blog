import React from "react";

import Project from "../components/Project"
import '../ghost-blog.css';

export default function Home() {
  return (
    <div>
        <div id="work" className="columns">
          <div className="column is-4">
            <img src={process.env.PUBLIC_URL + "/images/cool.jpg"} />
          </div>
          <div className="column is-1"></div>
          <div className="column is-6" style={{marginTop: "3em"}}>
            <h1 className="title">
              Liam Barry Allan
            </h1>
            <p>
              Experienced software developer & IBM Champion with a background in Node.js and IBM i. Skilled in DevOps for IBM i, development planning, and building applications to grow with the business.
            </p>
            <p>
              Studied in Southampton in early life, but grown to become a speaker at many conferences in Europe and the Americas on many aspects of development. Loves to encourage the use of git with their RPG/COBOL code; to give businesses the tools and training to help achieve their goals. Believer in open-source.
            </p>
            <h3 className="subtitle is-3" style={{marginTop: "3em"}}>Let's work together</h3>
            <p>
              I want to help businesses of all shapes and sizes. Whether it's working with RPG/COBOL, Node.js or planning what is next for your business, let's find out what works for you.
            </p>
            <div className="columns">
              <Mailto email="liam@worksofbarry.com" subject="Remote training for your team">
                <Project title="Workshops and training" subtitle="Remote training for your team"/>
              </Mailto>
              <Mailto email="liam@worksofbarry.com" subject="Help, guidance and implementation">
                <Project title="Consultancy" subtitle="Help, guidance and implementation" />
              </Mailto>
            </div>
          </div>
        </div>
    </div>
  )
}

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}`}>{props.children}</a>
  );
}