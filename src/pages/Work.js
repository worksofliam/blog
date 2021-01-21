import React from "react";

import Project from "../components/Project"
import '../ghost-blog.css';

export default function Home() {
  return (
    <div>
        <div id="work" className="columns">
          <div className="column is-4">
            <img src="https://lh3.googleusercontent.com/Y8XAszHzUFsAfjK3uXZZqKzQnT_Sj1BmTLB6o_1M3qqiRI8c0wQFHuwlKdegpjTT13f2KXFCyfbWt_AB0KD-utmFPd29djEtbnUoNNWS8H6BlxNwPw9XACwmBYPpoo7__4LZwGct5r_LLfbaPIBoHjJGME0m6g5DTmFcz1x5fAiraZfTuqYjeVFH5PXrVe3d1fgbRZNud5T7DooGRjQ3OoDnojOh7stBy_ht3dVnwTBnSYC7Phz6Xsc2Kdmwh7WjIkTGHFTDXYkK1w11EGWNvundzuni50r4fKXjFylfQtOKZp7QPi1XB1cawBMbwZNJeOEpVabyWxgerkrRPKAtKifvqiBJZMLfWPlr4UXQaaKt8EOYBGNf0wSWmoR6A5raEDOqpyNtO86vVY0JQcSqnemthQM8ThhXnnd2aRhRbCgSUqlomek70Wj2ZaHuKZusvTm4cd5ytHA_z4OydA-cqNFspPWfZRWzLoT3eWTtMFPcTtmn2ko50fKCwyNsgHF6Fym4o0yda5C8cD3ENRQgLmtVUIB48KR45d2-U5pHW-l_Aww5GNX0A1suA3a6DFcxdJZOFHhQ1S53g-T_bmv9LADLJ17vP-o1cwf4-B8tuGd4BVC0j1nfv2IOs_EGRsGS0YS_r44jVeEBuwZkD9pe_Um4un7n74-OscZ7SUFYkyFx6jtebe41rhjTWT6U=w1200-h1600-no?authuser=0" />
          </div>
          <div className="column is-1"></div>
          <div className="column is-6" style={{marginTop: "3em"}}>
            <h1 className="title">
              Liam Barry Allan
            </h1>
            <p>
              Experienced software developer & IBM Champion with a background in Node.js and IBM i. Skilled in integrating open-source tech with IBM i, development planning, and building applications to grow with the business.
            </p>
            <p>
              Studied in Southampton in early life, but grown to become a speaker at many conferences in Europe and the Americas on many aspects of development. Loves to encourage the use of git with their RPG/COBOL code; to give businesses the tools and training to help achieve their goals. Believer in open-source.
            </p>
            <h3 className="subtitle is-3">Let's work together</h3>
            <p>
              I want to help businesses of all shapes and sizes. Whether it's working with RPG/COBOL, Node.js, React or planning what is next for your business, let's find out what works for you.
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