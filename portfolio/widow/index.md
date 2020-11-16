---
layout: product
title: Widow
sections:
  intro:
    logo:
      image: Widow-logo-intro.png
      color: 3fb599
    banner:
      image: WIDOW_intro_F_35s_centered.png
      color: aaaaaa
      leftText: I'm on the left!
      rightText: And I'm on the right!
      spacer: true
  main:
    - descriptor: A Description of
      purpose: Our Purpose
      color: 3fb599
      video: https://www.youtube.com/embed/Obb0BFUIEnQ
      feature:
        image: coordination_conflict.png
        compactDescription: Short Set of Info
        expandedDescription: An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
    -
    -
    -
    - image: Widow_Computer.png
    -
    -
    -
    -
  support:
    image: 
---

<section class="intro">
  <div class="main-logo-intro" style="background-color: #{{ page.sections.intro.logo.color }};" >
    <img src="images/{{ page.sections.intro.logo.image }}" alt="{{ page.title }}"/>
  </div>
  <div class="main-banner-intro" style="background-image: url(images/{{ page.sections.intro.banner.image }}); background-color: #{{ page.sections.intro.banner.color }};">
    <div class="text">{{ page.sections.intro.banner.leftText }}</div>
    {% if page.sections.intro.banner.spacer %}
    <div class="spacer"></div>
    {% endif %}
    <div class="text">{{ page.sections.intro.banner.rightText }}</div>
  </div>
</section> <!-- End Intro -->
<section class="main">
  <div class="gradient" style="background: linear-gradient(0deg, #000, #{{ page.sections.main[0].color }} 49%, #fff);">
    <div class="heading-block">
      <h3>{{ page.sections.main[0].descriptor }}</h3>
      <h2>{{ page.sections.main[0].purpose }}</h2>
    </div>
    <div class="video">
      <iframe width="560" height="315" src="{{ page.sections.main[0].video }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="img-text">
      <div class="img-text-inner">
        <div class="img">
          <img src="images/{{ page.sections.main[0].feature.image }}" alt="{{ page.sections.main[0].purpose }}" />
        </div>
        <div class="text">
          <div class="text-head">{{ page.sections.main[0].feature.compactDescription }}</div>
          <div class="text-body">
          {{ page.sections.main[0].feature.expandedDescription }}
          </div>
        </div>
      </div>
    </div><!-- End Img-text block -->
    <div class="bar">
      <div class="heading-block">
        <h3>Enabling Warfighters to focus on</h3>
        <h2>Tactics &amp; Lethality</h2>
      </div>
    </div><!-- End Bar -->
    <div class="img-text">
      <div class="img-text-inner">
        <div class="text">
          <div class="text-head">Visualize Coordination Details Immediately</div>
          <div class="text-body">
          <p>A mission planning cell chief (MPCC) is able to visualize coordinating details immediately as the mission takes shape, even when those planning cells are spread across the globe.</p>
          </div>
        </div>
        <div class="img">
          <img src="images/card_bong.png" alt="Asset Card" />
        </div>
      </div>
    </div><!-- End Img-text block -->

  </div> <!-- End Gradient Group -->

  <div class="block icon-graphic-group">
    <div class="icon-row">
      <div class="icon-block">
        <img class="icon" src="images/icon-1.png"/>
        <div class="icon-heading">Automatically create mission products</div>
        <div class="icon-body">Mission details such as CSAR, Timeline, Codewords, and COMM Plan are exported into a standard Coordination Card format. Dynamic tanker plan allows for primary and fall out plans to be directly inserted.</div>
      </div>
      <div class="icon-block">
        <img class="icon" src="images/icon-2.png"/>
        <div class="icon-heading">All domain operation capability</div>
        <div class="icon-body">Assets from CYBER, SPACE, and more are invovled in the process and coordination</div>
      </div>
      <div class="icon-block">
        <img class="icon" src="images/icon-3.png"/>
        <div class="icon-heading">Coordinate from mulitple locations</div>
        <div class="icon-body">WIDOW is designed against the AFTTP 3-3.IPE standard for mission planning with each unit working in unison.</div>
      </div>
    </div>
    <img class="graphic" src="images/Walkthrough0289.png" />
  </div>
  <div class="block lap-top" style="background-image: url(images/{{ page.sections.main[4].image }});">
    <img class="main-img" src="images/Widow_Computer-mobile.png" />
    <div class="text-col">
      <div class="text">
        <div class="text-head">Visualize Mission Data with Dynamic Mapping</div>
        <div class="text-body">Dynamic mapping visualizes the mission timeline, effects, assets, routes, and positions while automatically highlighting conflicting altitudes, times, and locations.</div>
      </div>
    </div>
  </div><!-- End icon-graphic-group -->
  <div class="excercises">
    <div class="heading-block">
      <h3>Coming Up</h3>
      <h2>Planned exercises</h2>
    </div>
    <div class="img-text">
      <div class="img-text-inner icon">
        <div class="img">
          <img src="images/red-flag.png" />
        </div>
        <div class="text">
          <div class="text-head">Red Flag</div>
          <div class="text-body">
            <p>Red Flag exercises provide mission commanders, and air, space, and cyber operators the opportunity to experience realistic combat scenarios to prepare for future warfare. The goal of Red Flag is to prioritize the experience of an operator's "first" combat mission, mission commander upgrades, and Flag unique experiences for all participants.</p>
            <div class="icon-row">
              <div class="icon-block">
                <div class="icon-heading">RF-ALASKA 20-3</div>
                <div class="icon-body">30 JUL - 14 AUG</div>
              </div>
              <div class="icon-block">
                <div class="icon-heading">RF-ALASKA 21-1</div>
                <div class="icon-body">08 OCT - 23 OCT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-text">
      <div class="img-text-inner icon">
        <div class="img">
          <img src="images/orange-flag.png" />
        </div>
        <div class="text">
          <div class="text-head">Orange Flag</div>
          <div class="text-body">
            <p>Orange Flag is a multi-domain test event specializing in collaborative, large force test that spans domains, services, and platforms.  Orange Flag allows data-driven test and experimentation to occur in a complex, operationally representative environment.</p>
            <div class="icon-row">
              <div class="icon-block">
                <div class="icon-heading">OF 20-3</div>
                <div class="icon-body">30 SEP - 01 OCT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-text">
      <div class="img-text-inner icon">
        <div class="img">
          <img src="images/valient-shield.png" />
        </div>
        <div class="text">
          <div class="text-head">Valiant Shield</div>
          <div class="text-body">
            <p>Biennial field training exercise aimed at ensuring the joint force is ready to conduct a wide range of combat operations.</p>
            <div class="icon-row">
              <div class="icon-block">
                <div class="icon-heading">VS 20</div>
                <div class="icon-body">14 SEP - 25 SEP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-text">
      <div class="img-text-inner icon">
        <div class="img">
          <img src="images/wsint.png" />
        </div>
        <div class="text">
          <div class="text-head">WSINT</div>
          <div class="text-body">
            <p>U.S. Air Force Weapons School Integration (WSINT) is a series of complex, large-force employment missions that serve as the capstone portion of Weapons School classes, which take place twice a year. WSINT involves the planning and execution of every aspect of air, space and cyber combat operations, with joint force components converging over the Nevada Test and Training Range.</p>
            <p>WSINT demonstrates the strategic advantage of multi-domain, integrated command and control and produces leaders capable of delivering success in a spectrum ranging from small tactical teams to strategic transformational change.</p>
            <div class="icon-row">
              <div class="icon-block">
                <div class="icon-heading">WSINT 20B</div>
                <div class="icon-body">23 NOV - 16 DEC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!-- End Excercises -->

  <div class="timeline">
    <div class="heading-block">
      <h3>Timeline for release</h3>
      <h2>Capabilities Under Development</h2>
    </div>
    <div class="timeline-inner">
      <div class="timeline-item">
          1801 Flight Plan <strong>JUL 2020</strong>
      </div>
      <div class="timeline-item">
          Dynamic Comm Plan <strong>AUG 2020</strong>
      </div>
      <div class="timeline-item">
          Integrated Chat <strong>SEP 2020</strong>
      </div>
      <div class="timeline-item">
          SIPR Deployment <strong>SEP 2020</strong>
      </div>
      <div class="timeline-item">
          Dynamic Deconfliction by GEO/TIME <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Integrated Map and Fly-Through <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Infinite Whiteboard <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          GATT Flow &amp; MSN Timeline <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Kessel Run Integration <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Dynamic NKE Planning Tool <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Top Secret Deployment <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Ability to Reject Changes <strong>TBD</strong>
      </div>
      <div class="timeline-item">
          Mission Debrief <strong>TBD</strong>
      </div>
      <div class="line"></div>
    </div>
  </div><!-- End Timeline -->

  <div class="gradient gray">
    <div class="bar">
      <div class="heading-block">
        <h3>Additional</h3>
        <h2>Documents</h2>
      </div>
    </div>
    <div class="documents">
      <a href="docs/WIDOW - WSINT Press Release.pdf">WIDOW Press Release</a>
      <a href="docs/WIDOW - HBM - WIDOW for USAF.pdf">Designation of WIDOW as the USAF Mission Planning Cell Tool</a>
      <a href="docs/WIDOW - Leadership and Operator Quotes.pdf">Leadership and Operator Quotes</a>
      <a href="docs/WIDOW - Future Employment Diagram.pdf">Future Employment Diagram</a>
    </div>
  </div>

</section><!-- End Main -->
<section class="support">
  <div class="support">
    <div class="support-heading">Need Help? Have Questions?</div>
    <a class="support-link" href="mailto:support@widow.app">support@widow.app</a>
  </div>
  <div class="main-logo-support">
    <img src="images/widow-logo-intro.png" alt="WIDOW" />
  </div>
</section>
