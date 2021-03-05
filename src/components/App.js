import "../App.css";
// import Navbar from './Navbar.js'
// import About from './About.js'
import { Grid, Embed } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div class="welcome">
        <Grid>
          <Grid.Column width={9}>
            <h1>HI, I'M DENA NEUMAN.</h1>
            <h3>A Full Stack Software Engineer</h3>
          </Grid.Column>
          <Grid.Column width={3}>
            <img
              className="image"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFaKEKhH-bvww/profile-displayphoto-shrink_800_800/0/1614699152318?e=1620259200&v=beta&t=L0pFGmHCkp-MOElRqEF_6rCSqDGbffW1hDuzq84NKDw"
              alt="picture of me"
            />
          </Grid.Column>
        </Grid>
      </div>

      <div className="background">
        <Grid>
          <Grid.Column width={9}>
            <p>- MY BACKGROUND</p>
            <h3>
              I am a full stack software engineer with a background in
              psychology. Prior to my career change, I was a Human Resources
              Director. My past experiences gave me the opportunity to
              understand different people and work well with a diverse team.
              When I made the change, I attended a coding bootcamp. Flatiron
              School taught me GRIT, PERSEVERENCE, and HOW TO OVERCOME ANY
              CHALLENGE THROWN MY WAY.
            </h3>
          </Grid.Column>
          <Grid.Column width={5}>
            <p>- MY SKILLS</p>
            <h3>
              Leadership, Communication, Problem-Solving, Analytical-Thinking,
              Team-Player<br></br>
              <br></br>
              Ruby, Rails, Javascript, React, Redux, HTML, CSS
            </h3>
          </Grid.Column>
        </Grid>
      </div>
      <div className="work">
        <Grid>
          <Grid.Column width={4}>
            <p>- WORK EXPERIENCE</p>
          </Grid.Column>
          <Grid.Column width={10} class="work_experience">
            <h2>Human Resources Director</h2>
            <h4>Bria Health Services / July 2019 - October 2020</h4>
            <h4>
              I solved work conflict and maintained positive employee
              relationships. I managed a bi-weekly payroll for 200 employees. I
              ensured legal compliance for the entire facility. I Counseled
              managers and employees in groups and one-on-one meetings. I
              interviewed and on-boarded new employees.
            </h4>
          </Grid.Column>
        </Grid>
      </div>
      <div className='education'>
        <Grid>
          <Grid.Column width={4}>
          <p>- EDUCATION</p>
          </Grid.Column>
          <Grid.Column width={10} class="education_experience">
            <Grid.Row>
            <h2>Flatiron School</h2>
            <h4>Full Stack Software Engineering Immersive / February 2021</h4>
            <h4>
            Experienced in Ruby on Rails, Javascript, React, Redux, CSS, 
            HTML, Bootstrap, Semantic-UI, API's, JSON Web tokens, RESTful backends, Client-Side routing.
            </h4>
            </Grid.Row>
            <hr className='hr'></hr>
            <Grid.Row>
              <h2>Baruch College, City University of New York</h2>
              <h4>Bachelor of Arts, Psychology / May 2019</h4>
              <h4>
              Summa Cum Laude 
              </h4>
            </Grid.Row>
          </Grid.Column>
        </Grid>

      </div>
      <div className='projects'>
      <h2>- PROJECTS</h2>
      <Grid container columns={3}>
        
    <Grid.Column>
      <Embed
      id='cfzUZdhdb-o'
      source='youtube'
      placeholder='https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg'
    ></Embed>
      </Grid.Column>
    <Grid.Column>
    <Embed
      id='mnhX_JFRejY'
      source='youtube'
      placeholder='https://www.espatial.com/wp-content/uploads/How-to-bubble-map-81-1030x581.jpg'
    ></Embed>
    </Grid.Column>
    <Grid.Column>
      <p>
    <Embed
      id='mnhX_JFRejY'
      source='youtube'
      placeholder='https://www.tomorrowsworldtoday.com/wp/wp-content/uploads/2020/01/twt-sticky-note-cork-scaled-1-1024x683.jpg'
    ></Embed></p>
    </Grid.Column>
    <Grid.Column>
    <Embed
      id='rMW-a3ftwqE'
      source='youtube'
      placeholder='https://newsroom.unl.edu/announce/files/file119251.png'
    ></Embed>
    </Grid.Column>
    <Grid.Column>
   
    </Grid.Column>
  </Grid>
      </div>
    </div>
  );
}

export default App;
