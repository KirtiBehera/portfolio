import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-content">
            <div className="career-info-box">
              <div className="career-role">
                <h4>Accenture</h4>
                <h5>Senior Technical Architect</h5>
              </div>
              <h3>NOW</h3>
              <p>
                Working on AI, Copilot, Agentic AI. Focused on building autonomous systems and scalable, data-driven solutions.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Cognizant</h4>
                <h5>Tech Lead</h5>
              </div>
              <h3>2021–25</h3>
              <p>
                Worked on O365 Cloud, Teams, Slack, Exchange 2013.Automated mailbox operations using PowerShell.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Microland</h4>
                <h5>Messaging Administrator</h5>
              </div>
              <h3>2019–21</h3>
              <p>
                Managed Exchange 2013/2016, Intune, Citrix XenMobile and implemented MDM/MAM policies.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Future Focus</h4>
                <h5>System Administrator</h5>
              </div>
              <h3>2018–19</h3>
              <p>
                SLA management using IBM Maximo. Monitored mail flow,backup systems, and generated reports.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Collabera</h4>
                <h5>System Administrator</h5>
              </div>
              <h3>2017–18</h3>
              <p>
                Managed Lync Server, O365, G Suite, and handled DAG/CAS issues.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Govt. Autonomous College,Rourkela(Odisha)</h4>
                <h5>Technical Manager</h5>
              </div>
              <h3>2015–16</h3>
              <p>
                Server maintenance, AD, DHCP, DNS, routing & switching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;