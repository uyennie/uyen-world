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
# Exploring solutions that provide more social engagement

## Wireframing
### Home Screen
Users can scroll through their friends’ icons to find what they are currently listening to
![image](/assets/spotify/spotify-10.jpeg)

#### Changing the Current Song Pop-Up
Adding the “Friend’s Profile” component to the song pop-up
![image](/assets/spotify/spotify-11.jpeg)

## Mid-fi mockups
First, I started by dissecting the existing Desktop Friend Activity Profile into its essential parts.

![image](/assets/spotify/spotify-12.jpeg)

The current Desktop Friend Activity Profile consists of: the friend’s name, song title, artist, how the friend is listening to the music (either through album or playlist) and timestamp. Spotify Desktop emphasises the interactive experience with the Friend Activity profile, for instance, when you hover over Kevin’s icon, you have the option to play the song he just listened. With the personas’ needs for social engagement in mind, I believe it is crucial to retain the original five components and the interactive aspect in the translated Mobile version.

<div class="portrait">
    <img src="/assets/spotify/spotify-13.jpeg" class="img-portrait">
</div>

I lined the individual Friend Activity profiles in a row and implemented it at the top of the current Home screen, following the same format as Spotify Desktop.

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

## User Feedback

### Complex Visual
- Users mentioned that the design is **cramped**. The social feed is complicated and seems out of place. I would want to introduce a simpler interaction design to reduce any friction in viewing friends’ activities.

### Size
- The social feed occupied a large chunk of screen space. When I asked if the users care more about the friend’s name, song title, artist, album, playlist, or timestamp, they were adamant that the album and the playlist labels were the least relevant.
- Users requested a quick way to **click** into their friends’ profiles and the songs they are currently listening to.

### Content
- One user suggested an accessibility feature to **increase the font size** of the song and to **remove the listening source**.
- Another user found the icon **unnecessarily large**, occupying a serious amount of space.
- Users mentioned that the **inclusion of a timestamp** would make the activity feed more interactive, however, it could further complicate the spacing.

It is evident that my initial assumptions of translating all the components from the Desktop Friend Activity Profile do not work. The mid-fi mockup revealed a confusing interaction design, where users cannot identify the prioritised feature.

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Four`
# Time to shift gears

I began to pivot my design process by searching for the **best social feeds**. It is important to figure out what features I should show and chose to omit. Looking into popular social media platforms such as Facebook, Snapchat, and Instagram, I realized that minimal design is key to a successful activity feed. I could potentially save space by moving the original content of the Desktop Activity Profile into a different screen, i.e. including the content into the song detail popup.

I find Instagram’s story feed the most simple yet engaging among its competing platforms.

![image](/assets/spotify/spotify-14.jpeg)

I saw an opportunity in emulating a similar story feed like Instagram, which shows the two fundamental information — user icon and name. By limiting the details shown on the Home screen, the activity feed no longer occupies a large amount of space and the core information is prioritised.

Instagram uses **colour outlines** to differentiate between personal story and friends’ story. I sought to use the outlines as **timestamps** in the Spotify social feed, where the green color indicates current listening activity and the grey color indicates past listening activity.

![image](/assets/spotify/spotify-15.jpeg)

If a user decides to go into a private session, his or her profile icon will indicate the status by including a lock.

![image](/assets/spotify/spotify-16.jpeg)

In this iteration, only the profile icon and name are present. If the user is interested in watching all friend activities, the feed would just play continuously.

![image](/assets/spotify/spotify-17.jpeg)

Placing the simplified profiles into a row resolves the cramped screen from the mid-fi mockup, offering users a more seamless transition between different listening activities.

<div class="portrait">
    <img src="/assets/spotify/spotify-18.jpeg" class="img-portrait">
</div>

The translated row component takes up less space and reveals the most important information (icon, name, and listening activity status) with a minimal design.

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Five`
# Continuing the iterative design process

Once I finalised the Friend Activity row, I wanted to focus on the popup screen. When a user taps on a profile icon, a screen would show in a similar motion as the current Spotify song detail popup. The popup is an efficient method to organise necessary information of the song, in addition to those that cannot fit in the home screen display. I based my redesign on the current song detail pop up from Spotify Mobile.

## How is Spotify currently presenting a song you're currently listening to?
The current song detail modal includes navigation for both social and personal functions. I want to enhance the detail screen by incorporating the “Spotify Story” aspect, where users can view their friends’ listening choices. Since our users are exposed to the original Spotify Mobile screen, following the established layout would be the most fitting.

![image](/assets/spotify/spotify-19.jpeg)

## Redesigned Story Screen — First Iteration
![image](/assets/spotify/spotify-20.jpeg)
I decided to design multiple versions of each interface to indicate the active, inactive, and private listening status.

Based on the task flow and current Spotify UI, the detail screen retains in-depth options for the particular song. Here, I asked the users. Most of them prefer a simpler interface, without the complex options. Some users mentioned that the inclusion of listening history can make the app more engaging

> “I think the song details and functions are quite distracting. I just want to know what my friend is listening to and then decide whether I am interested by the music choice.”

> “A play function would be nice so I can immediately listen to the song.”

> “It would be interesting if we can see past listening activities, instead of only the most recent song choice.”

I took the above feedback and iterated on the screen, following Spotify’s design system.

## Redesigned Story Screen — Second and Final Iteration
![image](/assets/spotify/spotify-21.jpeg)
Instead of cramping the screen with listening history, I decided to **minimise** the design and **hide** further functions within the rewind icon on the top right.

Here, I went back to our persona. Our target user group is those who look for a social experience, by which song recommendations should be accessed within a few clicks. I kept the **three most popular functions** (add to playlist, add to queue, and share) so users can make **intuitive navigating choices**.

The story screen also becomes more accessible with the enlarged album cover, like option, and the play button.

## Past Listening Activity Popup
![image](/assets/spotify/spotify-22.jpeg)
On-tap of the **rewind icon**, this screen would show as a detailed popup. The list consists of **past listening activity** with **infinite scroll**. If the user is interested in a particular song, he or she can click on the **three-dot icon** for further functions.

## Refreshing Friend Activity
<div class="portrait">
    <img src="/assets/spotify/spotify-23.jpeg" class="img-portrait">
</div>
Emulating a similar design as Instagram, I wanted to create a refresh interaction, which reloads the story feed data. The user can update their current friend activity anytime they want with a simple pull on the home screen.

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Six`
# My retro🎵-spective
I started this case study after finding a common blindspot in listening trends among my peers. People have a tendency to stick with cyclical listening habits, constantly rewinding playlists and songs based on personal preference. While most get bored of the loop, searching for new music could be a tedious task. Considering the larger user base on Spotify iOS, translating the Friend Activity feed could potentially make the browsing process fun and engaging. The core idea is to create networks between friends, sharing their playlist circles and ultimately building joint circles together.

I would want to track metrics such as story clicks, direct links to friends’ past listening activities, and the number of queued songs referred from the story feed. 

## Key learnings

Other ways to measure success include: 
> **More usability testing** – At which points are the users exiting the story feed?

> **More user feedback** – What are users’ behaviors and opinions?

> **Traffic analysis** – How are the users interacting with the new story feature?

> **A/B testing** – Is this story feature really effective in increasing users’ likelihood to listen to new music?