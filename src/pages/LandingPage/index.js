import React from "react";


function LandingPage() {
  return (
    <>
      {/* <div className="container pad text-center">
          <div className="row">
          <h4 className="headProject">PROJECTS</h4><h4 className="text-white"> + </h4><h4 className="headOps">OPERATIONS</h4><h4 className="text-white"> + </h4><h4 className="headPerf">PERFORMANCE</h4>
          </div>
      </div> */}
      <div className="container pad">
        <div className="row">
          <div className="col text-center">
          <h4 className="headProject">PROJECTS</h4><h4 className="text-white"> + </h4><h4 className="headOps">OPERATIONS</h4><h4 className="text-white"> + </h4><h4 className="headPerf">PERFORMANCE</h4>
          </div>
        </div>
      </div>

      <div className="jumbotron text-center paral paralsec">
        <h1 className="iconSize"><i class="fas fa-lightbulb"></i></h1>
      </div>

      <div className="container pad">
        <div className="row">
          <div className="col text-center">
            <h4 className="headProject">PROJECTS + INNOVATION</h4>
            <p className="text-white fontSize"><span className="headProject textSize30">Projects bring new ideas to life.</span> POP services can assist you in realising those
                ideas through the use of project management tools and techniques such as market research, project
                definition, work breakdown structure (WBS), scheduling and timeline creation and cost/benefit analysis.
                By understanding how the idea/project may impact your business or fit your business model is vital
                before diving head first into the abyss.</p>
          </div>
        </div>
      </div>

      <div class="jumbotron paral paralsec">
        <h1 className="iconSize"><i class="fas fa-bezier-curve"></i></h1>
      </div>

      <div className="container pad">
        <div className="row">
          <div className="col text-center">
            <h4 className="headOps">OPERATIONS + STRATEGY</h4>
            <p className="text-white fontSize"><span className="headOps textSize30">Focus on the things that matter.</span>  Quite often businesses and organisations waste a lot of time and effort in doing "stuff" that has little to no positive impact on their desired outcomes.  Further to this most businesses and organisations don't have a detailed strategy or road map that help guide their decisions.  POP services can assist in developing strategic plans, process and procedures, streamline workflows, risk management and decision making.  These tools will help to strengthen your business position in the current market and stay relevant when the operating environment changes.</p>
          </div>
        </div>
      </div>

      <div class="jumbotron paral paralsec">
        <h1 className="iconSize"><i class="fas fa-chart-line"></i></h1>
      </div>

      <div className="container pad">
        <div className="row">
          <div className="col text-center">
            <h4 className="headPerf">PERFORMANCE + GROWTH</h4>
            <p className="text-white fontSize"><span className="headPerf textSize30">Measure and grow.</span>  If you can’t measure something and know the results its near impossible to improve and grow.  By setting clear Key Performance Indicators (KPI's) your businesses is then able to understand where it is performing poorly or performing well.  POP services will help you determine the metrics that make your business tick and then measure and act accordingly.</p>
          </div>
        </div>
      </div>

      <div class="jumbotron paral paralsec">
        <h1 className="iconSize"><i class="fas fa-user-cog"></i></h1>
      </div>

      <div className="container pad">
        <div className="row">
          <div className="col  text-white text-center">
            <h4 className="headLead">MANAGEMENT + LEADERSHIP</h4>
            <p className="text-white fontSize"><span className="headLead textSize30">Management is not leadership</span>  Management is doing things right; leadership is doing the right things.  Almost always these 2 concepts gets confused or blurred with each other. Most people are not prepared for leadership roles and mainly focus on managing instead of also leading.  We can help individuals or leadership groups by utilising tools and techniques that build connections and strengthen teams while also more efficiently manage day to day tasks.</p>
          </div>
        </div>
      </div>

      <div class="jumbotron text-center paral paralsec">
        <a class="btn btn-danger" href="/assets/pics/PDFPOPServices.pdf" target="_blank" role="button">CLICK HERE TO DOWNLOAD BROCHURE</a>
      </div>
    </>
  );
}

export default LandingPage;