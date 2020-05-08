import React, {Fragment} from 'react'

 function About() {
    return (
        <Fragment>
            <h1 style = {aboutStyle}>About</h1>
            <p style={pargStyle}>To publish and install packages to and from the public
            npm registry or your company’s npm Enterprise registry, you must install Node.js
            and the npm command line interface using either a Node version manager or a Node
            installer. We strongly recommend using a Node version manager to install Node.js and npm.
            We do not recommend using a Node installer, since the Node installation process installs
            npm in a directory with local permissions and can cause permissions errors when you run
              npm packages globally. </p>
        </Fragment>
    )
}
const pargStyle = {
padding : '10px'
}

const aboutStyle = {
    paddingLeft: '630px'
}
export default About