---
layout: puckboard
title: Puckboard
sections:
  hero:
    logo: ./images/Puckboard_Wordmark_WH.svg
    header: The future of collaborative scheduling
  features:
    - header: Learn what Puckboard can do for you
      cards:
       - image: ./images/requests.svg
         header: Event Volunteering
         descriptor: Easily request open positions on flights, sims, or ground events from your personal device, anywhere in the world...without needing a lengthy text chain to your schedulers.
       - video: https://player.vimeo.com/video/519703716?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
         header: Conflict Resolution
         descriptor: Quickly identify and resolve conflicts, even when crewmembers are scheduled separately by two different organizations.
       - image: ./images/checkfilled.svg
         header: Crew Availability
         descriptor: View available crewmembers before accidentally scheduling someone for two flights at the same time.
         image-alt: Platform One Ecosystem
    - header: What's new in Puckboard?
      descriptor: The latest releases.
      cards:
       - header: Mobile Improvements
         descriptor: Access your schedule from any device with internet connection, make requests, and approve them all on your phone. 
       - header: Multi-week View
         descriptor: View your schedule across multiple weeks with the click of a button, with easy filters available to view by personnel or event type.
       - header: Performance Improvements & Bug Fixes
         descriptor: Improvements to loading time and bug fixes for multiple features. 
       - header: Restructured Permission Set
         descriptor: Added functionality for Squadron POCs and Organizational Admins, with greater flexibility to scale fast and securely.
       - header: Delete / Cancel Requests
         descriptor: Delete or cancel requests after review, improving communications within your squadron. 
       - header: Puckboard Logging Beta
         descriptor: Puckboard Logging Beta Program, contact us to get involved!
  splitColumns:
    - header: Schedule Anytime, Anywhere
      descriptor: Puckboard is designed as a live, collaborative scheduling platform available to servicemembers around the globe on your desktop, phone, or tablet. Anywhere you have the internet! <b>This software is fully accredited on the military network for your mission data, uses the same account login as other Platform One apps such as Mattermost, and best of all - completely free!</b>
      # image: ./images/Puckboard_Main_View.png
      video: https://player.vimeo.com/video/519703781
      textOrientation: left
    - header: Let us do the heavy lifting
      descriptor: Build a schedule in minutes, with customizable roles, event types, and conflict settings. View your squadron or unit roster while you’re building the schedule, and see in real time who is available for missions.
      image: ./images/Puckboard_Settings_page.png
      textOrientation: right
    - header: Access your live schedule anywhere, anytime
      descriptor: Puckboard is available anywhere you have internet access and a browser, and updates are shown in real time. The mobile view is optimized for all devices, adding needed flexibility to your operations.
      image: ./images/Puckboard_Settings_page.png
      textOrientation: right
  timeline:
    color: '3fb599'
    releases:
      - name: Crew Rainbow
        date: April 21
      - name: Qualifications
        date: May 21
      - name: Mattermost Integration
        date: June 21
      - name: Shift Scheduling
        date: Jul 21
      - name: Combined Scheduling
        date: Aug 21
      - name: Puckboard Logging
        date: August 21
      - name: ARMS integration v1 
        date: Aug 21   
      - name: Currency Capability
        date: Aug 21  
      - name: Training Profile
        date: Aug 21  
  faq:
    header: Frequently Asked Questions (FAQs)
    tabs:
      - question: What is Mattermost?
        answer: Mattermost is an open-source collaborative messaging software that is hosted within the DoD’s own cyber infrastructure.<br><br>Mattermost is accessible on any device connected to the internet, both government devices on the military network as well as personal devices with any kind of civilian internet access around the globe. Mattermost is an IL-4 approved software that allows FOUO, PII, and mission information with the capability of 2-way file transfer. 
      - question: How is Mattermost accessible anywhere?
        answer: Mattermost utilizes the DoD’s PlatformOne (P1) architecture to provide secure, approved delivery of IL-4 data to any device.The P1 structure allows a user to login to hosted web apps using Single Sign On (SSO) and Multi-Factor Authentication (MFA) such as Google Authenticator. Each user is capable of using either 1) a username + password + MFA or 2) CAC card + pin to log into any P1 hosted software from any web browser and URL. Some applications like Mattermost (MM) even have approved iOS and Android native apps.
      - question: Is Mattermost Legal?
        answer: Mattermost lives completely within the P1 framework and complies with all federal and DoD security requirements. They operate under the PartyBus continuous ATO, and employ a cybersecurity method known as DevSecOps which bakes in security requirements at every step of the coding, testing, evaluation, and launch process. Mattermost currently operates at Impact Level 4 (IL-4) and each unit is responsible for ensuring their use case is capable of IL-4 dissemination.<br><br>Our team can help answer any security questions and provide expanded security & ATO paperwork if requested. 
      - question: Who pays for Mattermost?
        answer: Mattermost is maintained by Platform one and receives funding from multiple large programs of record. There is no cost to individual units or wings to use Mattermost. 
  cta:
    - header: Get started today!
      button1Text: Onboard with us
      button1Url:  /puckboard/getstarted/
      isInternal: 'yes'
    - header: Ready to get started?
      descriptor: Get started today or contact us
      buttons:
        - text: Onboard with us
          url: getstarted
          isInternal: 'yes'
        - text: Contact us
          url: mailto:puckboard.tron@afwerx.af.mil
    - header: Ready to get started?
      descriptor: Get started today or contact us
      buttons:
        - text: Onboard with us
          url: getstarted
          isInternal: 'yes'
        - text: Contact us
          url: mailto:puckboard.tron@afwerx.af.mil
---
