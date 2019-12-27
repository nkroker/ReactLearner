import React, { Component } from 'react'
import styled from 'styled-components'


const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 250px 0;
    color: #fff;
`

const Header = styled.h1`
    color: #fff;
    font-weight:700;
    font-size:40px;
    line-height:52px;
`

const Subhead = styled.p`
    font-size: 18px;
    font-weight: 500;
`

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    color: #333 !important;
    padding: 10px 20px;
    font-size: 18px;
    // width: 50%;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
`

const Jumbotron = () => {
  return(
      <Section className="home-secion--1">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-5">
                    <div className="pt-4 mt-4">
                        <Header>Nikhil Kumar</Header>
                        <p>Supercharge your ROR apps with React.js</p>
                        <div className="cta-wrapper">
                            <Button className="btn fancy-btn">Get Started</Button>
                        </div>"
                    </div>
                </div>
                <div className="col col-sm-12 col-md-7">
                    <div className="pt-0 mt-2 text-center">
                        <img src="https://www.athmin.com/img/hiredeveloper/gif/react.gif"></img>
                    </div>
                </div>
            </div>
        </div>
      </Section>
  )
}

export default Jumbotron
