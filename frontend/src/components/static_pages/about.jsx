import React, { Component } from "react";
import "../../index.css";
import SingleCarousel from "../SingleCarousel";

class About extends Component {
  render() {
    return (
      <>
        <SingleCarousel />
        <div class="container" itemprop="text">
          <h1 className="mt-5 mb-5"> About </h1>

          <h2 className="mb-3">Our Mission</h2>

          <p>
            The Young Masterbuilders in Motion (YMIM) inspires, connects, and
            empowers young women orphans, adoptees, and foster youth alumnae to
            thrive.
          </p>

          <p>
            The YMIM provides a holistic approach to mentoring and leadership
            development. Our programs are delivered through empowerment
            workshops, life enrichment retreats, and international missions
            experiences.
          </p>

          <h2 className="mb-3"> Our Values </h2>

          <p>
            We believe that a caring and supportive community can equip young
            women and empower global communities.
          </p>

          <p>
            We whole-heartedly embrace peace, grace, joy, love and wisdom and
            want to share what we have learned in our wide and varied life
            experiences with those who are yet vulnerable and who desire such
            support.
          </p>

          <h2 className="mb-3">Our Approach to Engagement</h2>

          <p>
            {" "}
            The YMIM works to enhance participants’ global perspective of the
            world economy. Through access and exposure to the arts, healthcare
            advocacy, sciences, technology, industries, and international
            mission experiences we aim to enrich the cultural, personal, and
            professional aspects of each participant.
          </p>

          <p>
            We listen to participants, address their concerns, and help connect
            them with resources to navigate life. We help participants develop
            life skills necessary to thrive as the masterbuilder of their
            future.
          </p>

          <p>
            Our approach includes models and scenarios of self-direction that
            cover a broad span on topics of visioning life goals, decision
            making, and self-sufficiency. Additionally, we help participants
            mature in accountability and leadership through peer-to-peer
            mentoring and workshops on the precepts and concepts of
            entrepreneurship, sustained employment, global community service
            activities and more. **Our Road to Impactful Programming** Alumnae
            input and feedback are the drivers of ongoing program enhancements.
            Our pre and post self assessments provide our guideposts to
            impactful programming. Participants of each age segment serve on
            ideation and planning committees. Participant-centered needs is how
            we determine where to prioritize cultural, education, life skills,
            and employment programming.  **Resources and Referrals** We link
            participants to resources and services beyond our capacity for those
            desiring or requiring additional support. {" "}
          </p>
        </div>
        <div className="lowermid group ">
          <div className="container clear">
            <h1>Our People</h1>
            <img
              alt="floatimg"
              className="floatimg"
              src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587"
            />
            <div className="floatp">
              <h1>Kim Wright, MBA</h1>
              <h4>Founder and President</h4>
              <p>
                Wright grew up as a youth-in-care from age 2 to 17 in multiple
                foster homes and a catholic orphanage after losing her mother to
                a premature death due to a horrific domestic violence incident.
                At the age of 7, Wright knew then that her life’s path would
                lead her serve children and young people who also grew up
                without the care and guidance of their own loving mother or
                father. Lacking mentors and relatives to share their experiences
                on how they made it and how she could too, caused Wright to
                always read and research how to do anything. Wright has worked
                as a reporter, writer, editor, HR manager, trainer, case
                manager, and director. Finally stepping out on faith to do what
                she had in her heart since age 7, Wright quotes Audrey Lorde,
                “When I dare to be powerful—to use my strength in the service of
                my vision, then it becomes less and less important whether I am
                afraid.”
              </p>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="container clear ">
            <img
              alt="floatimg"
              className="floatimg"
              src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587"
            />

            <div className="floatp">
              <h1>Pierre Priestley, JD, MBA</h1>
              <h4>Board Officer, Treasurer</h4>
              <p>
                “Service to our youth today will ensure the strength of our
                world tomorrow.” Priestley currently serves as an associate
                general counsel of Investment Property Exchange Services, Inc.
                He is an attorney and Certified Public Accountant. Priestley
                served in a variety of roles in large companies as a tax analyst
                and manager. He has worked on many community service initiatives
                for to equip youth and young adults.
              </p>
            </div>
          </div>
        </div>

        <div className="lowermid group margin-bottom">
          <div className="container clear">
            <img
              alt="floatimg"
              className="floatimg"
              src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587"
            />
            <div className="floatp">
              <h1>Shirley Scott, MS, RN-BC, C-EFM, APN, DNP</h1>
              <h4>Board Officer, Secretary</h4>
              <p>
                Scott works as a perinatal network administrator and cares for
                women and infants. She has a special interest in the adolescent
                and young adult women population particularly those living in
                underserved areas. Scott incorporates the physical, social,
                emotional, and spiritual aspects of life to help women and
                families obtain optimal health. U.S. Air Force Veteran.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
