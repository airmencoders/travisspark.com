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
      color: 3fb599
      leftText: I'm on the left!
      rightText: And I'm on the right!
      spacer: true
  main:
    - descriptor: A Description of
      purpose: Our Purpose
      color: "000"
      video: https://www.youtube.com/embed/Obb0BFUIEnQ
      feature:
        image: coordination_conflict.png
        compactDescription: Short Set of Info
        expandedDescription: >
          An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
          This should tie to the purpose.
    - descriptor: A Description of
      impact: Our Impact
      color: "000"
      feature:
        image: card_bong.png
        compactDescription: Short Set of Info
        expandedDescription: >
          An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
          This should tie to the impact.
    - image: Walkthrough0289.png
      features:
        - icon: icon-1.png
          compactDescription: Short Set of Info
          expandedDescription: >
            An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
            This should tie to the purpose.
        - icon: icon-2.png
          compactDescription: Short Set of Info
          expandedDescription: >
            An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
            This should tie to the purpose.
        - icon: icon-3.png
          compactDescription: Short Set of Info
          expandedDescription: >
            An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
            This should tie to the purpose.
    - images:
        desktop: Widow_Computer.png
        mobile: Widow_Computer-mobile.png
      compactDescription: Short Set of Info
      expandedDescription: >
        An expanded explanation of this feature, meant to help the reader understand in more detail what is being done.
        This should tie to the purpose.
  events:
    - name: Red Flag
      image: red-flag.png
      dateTime: 30 JUL @ 1300 EST
      linkText: ZOOM LINK
      link: https://google.com
      description: >
        Red Flag exercises provide mission commanders, and air, space, and cyber operators the opportunity to experience realistic combat scenarios to prepare for future warfare. The goal of Red Flag is to prioritize the experience of an operator's "first" combat mission, mission commander upgrades, and Flag unique experiences for all participants.
    - name: Orange Flag
      image: orange-flag.png
      dateTime: 30 SEP - 01 OCT
      linkText: OF 20-3
      link: https://google.com
      description: >
        Orange Flag is a multi-domain test event specializing in collaborative, large force test that spans domains, services, and platforms.  Orange Flag allows data-driven test and experimentation to occur in a complex, operationally representative environment.
  timeline:
    color: '3fb599'
    releases:
      - name: 1801 Flight Plan
        date: jul 2020
      - name: 1802 Flight Plan
        date: aug 2020
      - name: 1803 Flight Plan
        date: sep 2020
      - name: 1804 Flight Plan
        date: oct 2020
      - name: 1805 Flight Plan
        date: nov 2020
  resources:
    files:
      - title: WIDOW Press Release
        fileName: WIDOW - WSINT Press Release.pdf
      - title: Designation of WIDOW as the USAF Mission Planning Cell Tool
        fileName: WIDOW - HBM - WIDOW for USAF.pdf
      - title: Leadership and Operator Quotes
        fileName: WIDOW - Leadership and Operator Quotes.pdf
    links:
      - title: Google
        link: https://google.com
      - title: Bing
        link: https://bing.com
  support:
    logo: widow-logo-intro.png
    email: email@yourdomain.mil
---

<style>
:root {
  --main0: #{{ page.sections.main[0].color }};
  --main1: #{{ page.sections.main[1].color }};
  --timeline: #{{ page.sections.timeline.color }};
}
</style>
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
  <div class="gradient" style='background: linear-gradient(0deg, var(--main1), var(--main0) 49%, #fff);'>
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
    <div class="bar" style="background-color: #{{ page.sections.main[1].color }};">
      <div class="heading-block">
        <h3>{{ page.sections.main[1].descriptor }}</h3>
        <h2>{{ page.sections.main[1].impact }}</h2>
      </div>
    </div><!-- End Bar -->
    <div class="img-text">
      <div class="img-text-inner">
        <div class="text">
          <div class="text-head">{{ page.sections.main[1].feature.compactDescription }}</div>
          <div class="text-body">
          <p>{{ page.sections.main[1].feature.expandedDescription }}</p>
          </div>
        </div>
        <div class="img">
          <img src="images/{{ page.sections.main[1].feature.image }}" alt="{{ page.sections.main[1].impact }}" />
        </div>
      </div>
    </div><!-- End Img-text block -->

  </div> <!-- End Gradient Group -->

  <div class="block icon-graphic-group">
    <div class="icon-row">
      <div class="icon-block">
        <img class="icon" src="images/{{ page.sections.main[2].features[0].icon }}"/>
        <div class="icon-heading">{{ page.sections.main[2].features[0].compactDescription }}</div>
        <div class="icon-body">{{ page.sections.main[2].features[0].expandedDescription }}</div>
      </div>
      <div class="icon-block">
        <img class="icon" src="images/{{ page.sections.main[2].features[1].icon }}"/>
        <div class="icon-heading">{{ page.sections.main[2].features[1].compactDescription }}</div>
        <div class="icon-body">{{ page.sections.main[2].features[1].expandedDescription }}</div>
      </div>
      <div class="icon-block">
        <img class="icon" src="images/{{ page.sections.main[2].features[2].icon }}"/>
        <div class="icon-heading">{{ page.sections.main[2].features[2].compactDescription }}</div>
        <div class="icon-body">{{ page.sections.main[2].features[2].expandedDescription }}</div>
      </div>
    </div>
    <img class="graphic" src="images/{{ page.sections.main[2].image }}" />
  </div>
  <div class="block lap-top" style="background-image: url(images/{{ page.sections.main[3].images.desktop }});">
    <img class="main-img" src="images/{{ page.sections.main[3].images.mobile }}" />
    <div class="text-col">
      <div class="text">
        <div class="text-head">{{ page.sections.main[3].compactDescription }}</div>
        <div class="text-body">{{ page.sections.main[3].expandedDescription }}</div>
      </div>
    </div>
  </div><!-- End icon-graphic-group -->
  <div class="events">
    <div class="heading-block">
      <h3>Coming Up</h3>
      <h2>Planned Events</h2>
    </div>
    {% for event in page.sections.events %}
    <div class="img-text">
      <div class="img-text-inner icon">
        <div class="img">
          <img src="images/{{ event.image }}" />
        </div>
        <div class="text">
          <div class="text-head">{{ event.name }}</div>
          <div class="text-body">
            <p>{{ event.description }}</p>
            <div class="icon-row">
              <div class="icon-block">
                <a href="{{ event.link }}">
                  <div class="icon-heading">{{ event.linkText }}</div>
                </a>
                <div class="icon-body">{{ event.dateTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div><!-- End Events -->

  <div class="timeline">
    <div class="heading-block">
      <h3>Timeline for release</h3>
      <h2>Feature Roadmap</h2>
    </div>
    <div class="timeline-inner">
      {% for release in page.sections.timeline.releases %}
      <div class="timeline-item" style="background-color: var(--timeline);">
          {{ release.name }} <strong class="upper">{{ release.date }}</strong>
      </div>
      {% endfor %}
      <div class="line"></div>
    </div>
  </div><!-- End Timeline -->

  <div class="gradient gray">
    <div class="bar">
      <div class="heading-block">
        <h3>Additional</h3>
        <h2>Resources</h2>
      </div>
    </div>
    <div class="resources">
      {% for file in page.sections.resources.files %}
      <a href="resources/{{ file.fileName }}">{{ file.title }}</a>
      {% endfor %}
      {% for link in page.sections.resources.links %}
      <a href="{{ link.link }}">{{ link.title }}</a>
      {% endfor %}
    </div>
  </div>

</section><!-- End Main -->
<section class="support">
  <div class="support">
    <div class="support-heading">Have Questions? Want a Demo?</div>
    <a class="support-link" href="mailto:{{ page.sections.support.email }}">{{ page.sections.support.email }}</a>
  </div>
  <div class="main-logo-support">
    <img src="images/{{ page.sections.support.logo }}" alt="{{ page.title }}" />
  </div>
</section>
