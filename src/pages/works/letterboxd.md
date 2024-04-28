---
layout: ../../layouts/Article.astro
title: "Film Club"
pubDate: 2023-15-06
description: ""
author: "Uyen Dien"
tags: ["uiux"]
---

## Letterboxd: Film Club

`May 2021`
`ui/ux`
`case study`

![image](/assets/letterboxd/letterboxd.jpg)

# How can we enhance Letterboxd's community features to facilitate meaningful social interaction within the platform?

## Overview

In 2020, Letterboxd’s explosive growth brought in an influx of younger, casual film fans.

Before Letterboxd, there wasn’t a social film discovery platform focused on audiences. While competitors focused on critic reviews (i.e. Rotten Tomatoes), Letterboxd gave **everyday audiences** a platform to review films and curate movie lists. 
‍
During COVID-19, movie theaters shut down and people watched more films at home. Letterboxd's popularity skyrocketed with a 40% growth and over a million new users (Deseret News). Now, the **largest user demographic is 18-24 year olds**, who are mostly **casual film fans** (NYTimes).

## The Problem
Letterboxd is a social film discovery platform, but it's surprisingly hard to be **social**. Casual film fans need greater film discovery opportunities to overcome blind spots in their film knowledge, as well as direct social functionalities to stay engaged with the community.
‍
> So why is it so difficult?

Users have trouble directly accomplishing their tasks, taking extra, unnecessary steps to discover new films and socialise with the community. This causes users to leave the app to interact with the community on third party platforms instead.

## The solution
A **"Film Club"** feature, which helps users discover niche movies, watch asynchronously, and meaningfully interact with the community.

To help casual fans access social film discovery opportunities, I integrated a feature called Film Club into Letterboxd’s mobile app. I scoped out the feature, mapped out key interaction flows, and tested the feature with real users.
‍
I also worked alongside their existing UI and created new components that adhered to their existing visual design.

> ‍Disclaimer❗ I am not affiliated with Letterboxd. This was an academic project borne out of my passion for the platform. Thus, this project is limited by lack of access to Letterboxd's internal data, business goals, and success metrics.

## My role

My role in this project covers:
- UX Researcher
- UI Designer

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase One`
# Exploring User Needs: Unveiling Letterboxd's Community Dynamics

## Letterboxd can’t keep up with the community features that users have been asking for 

Prior to 2020, Letterboxd’s small, scrappy team (only 8 people) couldn’t prioritise arduous development jobs. Thus, they have a backlog of planned features dating back to **2011**.
‍
Despite a lack of features, Letterboxd’s users are passionate and **take charge in other ways** — from volunteer moderating, coding projects using Letterboxd API, and countless Reddit threads on platform suggestions and improvements.

![image](/assets/letterboxd/letterboxd-1.png)
#### User suggestions from Letterboxd’s feedback forum

Users are frustrated that Letterboxd doesn’t provide enough **film discovery opportunities** (i.e. no recommendations or niche groups). In addition, they find it difficult to **access other users** who can **help** them discover film more meaningfully.

## Casual fans now make up the majority of Letterboxd’s user base, and have different needs

**Casual** fans outnumber Letterboxd’s previous majority of hardcore cinephiles. Now, the majority of users are likely to be **younger, less knowledgeable** about film, and prefer **light-hearted** social interaction over serious film analysis (NYTimes).
‍
Thus, I identified two provisional user groups:
![image](/assets/letterboxd/letterboxd-2.png)

I decided to focus on the **casual fans**, as they made up the **majority** of Letterboxd's userbase.

## User interviews
> Interacting with Letterboxd’s community is intimidating and time-consuming. This makes it harder for users to discover and watch films.

I interviewed **casual fans** to understand their experiences with Letterboxd. My user interviews revealed these **key insights**: 
![image](/assets/letterboxd/letterboxd-3.png)

Throughout the interviews, I discovered one **common thread — users resorted to roundabout methods to accomplish simple tasks.**
- They socialised by making Lists, but couldn’t collaborate on them. Users ended up adding hundreds of comments to recommend films to add, which would need to be closely monitored.
- They commented on reviews, but couldn’t directly reply, tag, or message other users. Lack of notifications harmed re-engagement, preventing users from deepening potential friendships.
- They added “friend tags” to reviews to remember who they watched a film with, but couldn’t actually link their friends.
- They made extra Lists to decide what to watch, rather than referencing and utilising their Watchlist to its fullest potential.

## The opportunity
> How might we help casual film fans discover film and hone their taste directly alongside the Letterboxd community?

Letterboxd’s drastic user growth means that their “metrics are up across the board”, with **increased revenue** from ads and paid members. They even “brought on several full-time staff.” (NYTimes) 
‍
Now, Letterboxd has the resources to **improve** community features and **accommodate** their growing user base. Thus, based off my research, I established four **design objectives**:
![image](/assets/letterboxd/letterboxd-4.png)

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Two`
# Innovative Solutions: Crafting the Film Club Concept

With these objectives in mind, I facilitated a group brainstorming session. We **voted** on the ideas we thought were most effective, which included interest groups, discussion forums, and Spotify-like recommendation bundles.

![image](/assets/letterboxd/letterboxd-5.png)
#### Facilitating a group brainstorm via Invision Freehand

Then, I discovered that some Letterboxd users had created an in-platform **Film Club**. Like book clubs, **users watch specific films on a curated schedule**, and return to **participate in weekly discussion**. 

As expected, it was initiated via roundabout methods. Hosted on a single profile, it took 71+ Lists, a makeshift film calendar, and a private Discord server to serve its growing community.
‍
With a whopping **700+** participants, I realised Film Club was a feature that many users were trying to create on their own, **without the actual functionalities** to do so. Like our voted features, Film Club brought together users with similar interests, provided a venue for **casual**, **direct** discussion, and encouraged **film discovery**.
‍
Thus, I moved forward, deciding to integrate a **mobile Film Club feature**.

> ‍Note❗ Film Club started out with a different name: Watch Parties. This was changed after user testing — which will be explained! For consistency purposes, I will refer to the feature as Film Club. In my artifacts, Watch Parties = Film Club.

## Adding guardrails and further defining the new Film Club feature

Using the MoSCoW Method, I prioritised some **notable** features, including:
- **Invite a friend** to increase shared film discovery
- **Theme-based schedules** to help users explore niche interests
- **2 event** options at any given time to provide users with choices
- Direct user-to-user **reply** threads

![image](/assets/letterboxd/letterboxd-6.png)

I went forward with Must-Have and Should-Have features

## Mapping out intuitive entry points to integrate Film Club throughout the app

I created a **sitemap** to show where Film Club could integrate into Letterboxd’s navigation, pinpointing where users would expect to access it. Some notable entry points:
1. **Via Home:** Shows the newest Film Club events and provides access to a comprehensive event schedule
2. **Via Film Pages:** Incentivises browsing users to actually watch a film alongside the Film Club event
3. **Via Profiles:** Shows users’ personal upcoming Film Club events

![image](/assets/letterboxd/letterboxd-7.png)
#### Pinpointing entry points in the mobile sitemap

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Three`
# Exploring designs that provide more social engagement

## Wireframing the user flows

When deciding on flows to design, I created **user stories** to contextualise user goals when accessing Film Club, sectioning key flows into three scenarios:
1. Before joining an event
2. After joining, before the event goes live
3. After the event goes live
Then, I created **low-fidelity wireflows** to account for conditional pages. Throughout the flows, I wanted to ensure that Letterboxd would help them access the events that they had opted into, without **being intrusive**.
‍
The Home Page was Film Club’s primary entry point. In its **default** state, it would provide an overview of upcoming events. If they had joined an event, the Home Page would show their personal upcoming events. This would make the events **accessible** and ensure users wouldn’t forget to participate, even if the event was scheduled weeks later.

![image](/assets/letterboxd/letterboxd-8.jpg)

## Recreating Letterboxd’s UI Kit to create a visually consistent experience

I audited Letterboxd's Design System to understand what native components I could reuse. I discovered some inconsistencies and usability issues – for example, Letterboxd’s mobile and desktop UI don’t follow a unified design language. While the desktop uses **green CTA buttons**, the mobile UI only uses **grey buttons**.

When recreating Letterboxd’s mobile UI kit, I created **new components** only when necessary, ensuring that they aligned with Letterboxd’s brand. Button states were vital to my interactions, so I designed **mobile-optimised green CTA buttons**, based on the desktop UI.

![image](/assets/letterboxd/letterboxd-9.png)

Then, I referenced my wireflows and UI kit to design a high-fidelity mobile prototype.

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Four`
# Testing the new Film Club feature with Letterboxd users

I conducted moderated usability tests to see whether users could **successfully explore and understand** Film Club, **accomplish** their tasks, and if they found it **valuable** or **desirable**.

![image](/assets/letterboxd/letterboxd-10.png)

I renamed Watch Parties to **Film Club** to better reflect the feature's asynchronous nature. I also prioritised revisions that clarified the feature’s concept, such as designing **collapsible** schedule layouts and adding **contextual**, **logistical information** to schedule cards.

To make social interaction more **personalised** and **meaningful**, I highlighted **friend participation** to help users interact with friends and build their existing relationships.

![image](/assets/letterboxd/letterboxd-11.png)

#### High-level revisions from user testing

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Five`
# The final solution: Introducing Letterboxd's Film Club

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-1.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-2.gif" class="img-small">
</div>

## 1. Accessible, relevant discovery from the Home tab
Film Club activity is seamlessly integrated into the Home tab to encourage users to **directly interact** with the community and **discover** new films.
When users have already joined a Film Club event, users can easily and **directly jump** into the relevant event.

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-3.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-4.gif" class="img-small">
</div>

## 2. Multiple film discovery options
There are multiple Film Club schedule options available to users, with **two** going on at any given time. Thus, there are enough choices to cover a **variety of user interests**, but not so many choices that it will be overwhelming.

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-5.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-6.gif" class="img-small">
</div>

## 3. Plan ahead and watch film
A comprehensive **schedule view** of all upcoming Film Club events, scheduled out 2 months in advance. This incentivises users to **plan ahead** and **set aside time** to watch films. Collapsible accordion menus help users to quickly navigate between event options. 

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-7.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-8.gif" class="img-small">
</div>

## 4. Casually watch movies with friends
Users can also **invite friends** to watch specific films with them. Users can see which friends are already watching. Seeing **familiar faces** will make Film Club seem **less intimidating** and encourage more users to join in on the fun.

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-9.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-10.gif" class="img-small">
</div>

## 5. Direct social interaction
Robust discussion features help users **dynamically** talk to one another, more **often**. Now, users can finally see all “Likes” and “Reply” interactions at a glance, acting as activity signposts to help them casually **participate in conversations**.

Friends’ activity is floated to the top so users can quickly interact with them and meaningfully connect with them.

<div class="portrait">
    <img src="/assets/letterboxd/letterboxd-g1-11.gif" class="img-small">
    <img src="/assets/letterboxd/letterboxd-g1-12.gif" class="img-small">
</div>

## 6. Track Film Club activity in personal record
Film Club reviews are a part of the **wider review ecosystem**. An automatic **Film Club tag** is added to the usual review flow, but helps **auto-populate reviews** in the Film Club event pages. This way, users can keep track of Film Club watches, just like any other film.

> You can also check out the full prototype here: [Film Club](http://bit.ly/letterboxd-film-club-prototype) 

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Six`
# Final thoughts: What comes next?

This was definitely my most challenging, complex project yet. However, as a frequent Letterboxd user myself, it was gratifying to work so closely with one of my favorite apps. 

If I had more time, I would:
- Conduct another round of **user testing**. Does the "Film Club" title make more sense to users now?
- Explore **tiered** Film Club features — if **paid members** could create personalised film schedules, could this incentivise users to **convert to paid plans**?
- Consider the **post-event flow**. What happens if a user joins an event and forgets to add a review? Or participate? How might we remind users without being intrusive?
- Improve Letterboxd's **accessibility**. For example, their desktop UI has green buttons with white text, which doesn’t pass WCAG accessibility standards. I’d like to explore green buttons with black text (inspired by Spotify).

## What I learned 

### 🔎 Adapting to flawed design systems

Letterboxd’s UI could use some improvement; however, for the sake of time, I reused some subpar components (i.e. the review’s modal-within-a-modal). For the most part, I avoided arbitrarily following not-great patterns by auditing Letterboxd’s UI to ensure Film Club could stand on its own. While it would’ve been easier to choose an app with less existing usability issues, this project made me a more discernible designer — a blessing in disguise. 

### 🔖 Feature naming is an art

Film Club is a feature unique to Letterboxd — there wasn't an exact replica on competitor apps. Thus, using an existing, standard name (i.e. “Groups”) would have only misled users. The solution was to make the name distinctive — like Atlassian’s team said, “the more distinctive a name, the less it relies on context to prop it up.”

### 🤝 The strength of communities

I was awed by the creative lengths that users took to interact with each other. What other platform's usability issues become embedded into the social culture? (See: the faux-friend tags.) Despite any UX pitfalls, the community’s persisting enthusiasm illustrated the joy that Letterboxd brought the film community.