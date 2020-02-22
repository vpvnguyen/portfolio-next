import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import Footer from '../components/Footer';
// render landing page
// route to about me, projects, and resume
// show contact info at footer
// allow personal login - use jwt / auth
// project generator

const Index = () => (
  <>
    <Head>
      <title>Vincent Nguyen</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    
    {/* hidden login button */}
    <Link href="/login">
      <Button className="login"></Button>
    </Link>

    <div className="hero">
      <h1 className="title">Vincent Nguyen</h1>
      <p className="description">summary about me here</p>
      <p className="description">add some animations here</p>
      <p className="description">welcome to my page maybe?</p>


      <div className="row">

        <Link href="/projects">
          <a className="card">
            <h3>Projects &rarr;</h3>
            <p>See my work</p>
          </a>
        </Link>

        <Link href="/Resume">
          <a className="card">
            <h3>Resume &rarr;</h3>
            <p>View and download PDF</p>
          </a>
        </Link>

      </div>

    <Footer />
    </div> 


    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .login {
        display: flex;
        text-align: center;
      }
    `}</style>

  </>
)

const handleClick = () => console.log('clicked');

export default Index;
