import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    return (
      <div>
        <p>
          What's up ya'll. In this project, I set up a simple pipeline with <a href="https://travis-ci.com/">Travis </a>
          and <a href="https://aws.amazon.com/s3/">AWS S3</a>. My goal was to make a website, build and deploy with Travis
          everytime I have a code check in on Github, and host it with AWS S3.
        </p>
        <br />
        <img src={require("../../assets/img/pipeline.png")} alt="maaaaa-pipilineeee"/>
        <br />
        <p>
          When the user pushes code on Github, Travis will automatically pick it up based on the
          <font color="#ff8080">.travis.yml</font> file. In my example, Travis will build the project
          and generate a build/ folder to upload/deploy to AWS S3. Then S3 will host whatever I have uploaded on the website. 
          In this way, I don't have to manually upload the build/ folder onto S3 or restart the webserver myself.
        </p>
        <br />
        <h3><font color="#00bfff">React</font></h3>
        <p>
          I used <a href="https://reactjs.org/docs/create-a-new-react-app.html">create-react-app</a> to 
          set up a project on Github. I know it's overkill but whatever. This page is made with 
          <a href="https://react-bootstrap.github.io/"> React-Bootstrap</a>.
        </p>
        <br />
        <h3>Github -> <font color="#ffc34d">Travis</font></h3>
        <p>
          <a href="https://docs.travis-ci.com/user/tutorial/">Travis CI</a> is free for open source projects.
          All you need is a <font color="#ff8080">.travis.yml</font> file in your repo. Travis will look for this file when you
          pushes your code. Here is my <a href="https://github.com/Stanliest/A-Simple-Pipeline/blob/master/.travis.yml">
            .travis.yml</a>. You can tell Travis to build on pushed branches or pushed pull requests through settings.
        </p>
        <br />
        <h3><font color="#ffc34d">Travis</font> -> <font color="#ff751a">AWS S3</font></h3>
        <p>
          AWS S3 (Simple Storage Service) is mainly introduced for storage management, but I used it for static website hosting.
          I believe if you sign up for AWS then you are <a href="https://aws.amazon.com/free/">'AWS Free Tier'</a> with 12
          months of S3 (5 GB of Amazon S3 standard storage, 20,000 Get Requests, and 2,000 Put Requests). After 12 months you
          do pay-as-you-go but it's fairly cheap.
          <br /><br />
          You will need a S3 bucket(<a href="https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">
          create a bucket</a>) in order to have a hostname. I believe you can have your custom hostname too, but I only used
          the auto-generated one.         
          <br /><br />
          SO, to automate Travis CI to build and deploy to da S3, first I <code>yarn/npm run build</code> my project, then I 
          used the <a href="https://docs.travis-ci.com/user/deployment/s3/">Travis built-in configuration</a> in my 
          .travis.yml. For the AWS access_key_id and secret_access_key, please DON'T PASTE YOURS ON GITHUB LOL. I did that 
          and Amazon actually called me from the States telling me to delete that key.. Here are the 
          <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html"> best practices </a> 
          for managing AWS access keys.
          <br /><br />
          You can put your AWS access_key_id and secret_access_key in the environment variables of Travis build settings, so 
          that when deploying, Travis knows which account and bucket to upload to.
          <br /><br />
        </p>
        <h3>Another note..</h3>
          <p>
            When writing the .travis.yml file, remember to specify <code>local_dir</code> under deploy. If you don't, Travis 
            will upload your whole project, INCLUDING NODE_MODULES, into S3. You only have 2000 put requests to start with 
            Free tier, and node_modules have like 2000 files? ..you know I uploaded it and I'm already paying for da extra 
            money (thank God it's less than a small coffee).
          </p>
          <br /><br />
          <h3>Conclusion</h3>
          <p>
            There you go, now when you check in your code, Travis will build your code and deploy to AWS S3.
          </p>
          <br /><br /><br /><br />
      </div>
    )
  }
}

export default MainPage;
