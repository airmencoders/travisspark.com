---
layout: page
title: Our Work
permalink: /kajsghdfuyshdjofajsdkfgausdghfkjasdf/
projects:
  - name: Puckboard
    path: puckboard
    image: Puckboard_Stacked_Logo_BK.svg
    description: >
      Collaborative, distributed flight scheduling
  # - name: Airmen Coders
  #   path: widow
  #   image: Airmen_Coders_Logo.png
  #   description: >
  #     Built By Airmen
  # - name: Platform One
  #   path: p1
  #   image: Platform_One_Logo.png
  #   description: >
  #     The official DevSecOps development platform for the DoD
  # - name: Tron Cells
  #   image: Puckboard_Stacked_Logo_WH.svg
  #   description: >
  #     Collaborative, distributed flight scheduling
---

<!-- Slider Start -->
<section id="global-header">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="block">
                    <h1>The Tron Portfolio.</h1>
                    <p>Projects in development or production across our servicmember and industry partners.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio Start -->
<section id="portfolio-work">
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <div class="portfolio-menu">
                <ul>
                    <li class="filter" data-filter="all">Everything</li>
                    {% for project in page.projects %}
                    <li class="filter" data-filter=".{{ project.path }}">{{ project.name }}</li>
                    {% endfor %}
                </ul>
              </div>
              <div class="portfolio-contant">
                <ul id="portfolio-contant-active">
                    {% for project in page.projects %}
                    <li class="mix {{ project.path }}">
                      <a href="{{ '/portfolio/'project.path  | absolute_url }}">
                        <img src="{{ '/img/portfolio/'project.image  | absolute_url }}" alt="">
                        <div class="overly">
                          <div class="position-center">
                            <h2>{{ project.name }}</h2>
                            <p>{{ project.description }}</p>
                          </div>
                        </div>
                      </a>
                   </li>
                   {% endfor %}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</section>

<!-- Clients Logo Section Start -->
<!-- <section id="clients-logo-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <div id="clients-logo" class="owl-carousel">
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo1.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo2.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo3.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo4.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo5.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo3.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo2.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo5.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo1.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo4.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo5.png' | absolute_url }}" alt="Features">
            </div>
            <div class="clients-logo-img">
              <img src="{{ '/img/clients/clients-logo3.png' | absolute_url }}" alt="Features">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> -->


<!-- Call to action Start -->
<section id="call-to-action">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block">
          <h2>There is no reason to wait before believing you can have an impact.</h2>
          <p>Check out our service catalogue to see how we can best collaborate to help bring your vision to reality.</p>
          <a class="btn btn-default btn-call-to-action" href="{{ /#service | absolute_url }}" >Browse our Services</a>
        </div>
      </div>
    </div>
  </div>
</section>
