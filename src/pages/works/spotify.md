---
layout: ../../layouts/Article.astro
title: "Spotify Stories"
pubDate: 2023-15-06
description: ""
author: "Uyen Dien"
tags: ["uiux"]
---

## Spotify Stories

`Apr 2023`
`ui/ux`
`case study`

![image](/assets/spotify/spotify-1.png)

# How can we increase social engagement within the Spotify mobile app?

Since the day I sneakily joined Spotify Premium with my mum’s credit card, I have been obsessed with it’s sleek interfaces. This was a personal project where my genuine curiosities led my design process!

## Overview
Spotify has transformed the ways people access, listen, and produce music, reshaping the landscape of the audio streaming industry. While Spotify is known for its highly tailored recommendations and eclectic music variety, what truly differentiates the company from competitors is its social focus. I helped design a Spotify Story feature where users can access friends’ listening activities easily, increasing social engagement with the app.

## My role

My role in this project covers:
- UX Research
- UI Design

<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase One`
# I can’t see what my friends are listening to on my iPhone…

On Spotify’s Desktop app, users can access their friends’ listening activities through a sidebar.

![image](/assets/spotify/spotify-2.png)

This feature encourages a **social experience**, where users can find insights into their friends’ music tastes and share their own. One of my favourite things to do when I first open the Desktop app is to scroll through my friends’ listening activities and look for interesting choices. The Friend Activity feature is like no other and distinguishes Spotify from other streaming services.

I want to bring this fun and distinctive feature onto the Spotify iOS app.

Spotify has not implemented the Friend Activity feature on its mobile applications. In fact, many users have reached out requesting the addition of the feature on mobile. Since its first suggestion in 2015, the idea has received over 4,000 votes. However, it seems like Spotify is adamant on its stance, keeping the idea to “Not Right Now”.

![image](/assets/spotify/spotify-3.png)

It is clear that Spotify has considered the idea and decided not to include the feature on its mobile app. Whether or not Spotify implements a similar feature in the future, I believe the addition of a social feed can increase the retention rate on the app, as well as consistency to the overall user experience. Since the sidebar is an essential feature in the Desktop app, the mobile app should also follow a similar experience pattern.

In addition, I would love to explore possibilities with the feature and implementing data from Friend Activities into playlist recommendations. The app currently offers song recommendations based on existing songs in a personal playlist. I wanted to diversify the variety by incorporating the option to view friends’ past listening activities, where users can find and receive playlist recommendations quickly via Spotify Story.

## The Goal & Objective
> To increase social engagement within the App by implementing the Friend Activity feed and Similar Playlists by Friends feature.

In order to achieve the goal and objective, the following questions were posed:
- How might we make the Friend Activity feed more engaging, increasing the time users spend on the app?
- How might we make this more of a seamless experience, corresponding to the user experience of Spotify Desktop?
- How might we get people to feel more excited about exploring playlist recommendations? 


<hr style="
    margin-top: 50px;
    margin-bottom: 45px;">

`Phase Two`
# What are Spotify users’ routines while using the app?

## Analysing the Spotify Model
The hook is an experience designed to **bridge** the user’s problem and the solution.

![image](/assets/spotify/spotify-4.jpeg)

The current Spotify app follows a **HOOK model**, found in Nir Eyal’s theories on customer behaviour. HOOK consists of four parts — Trigger, Action, Reward, and Investment.

A Trigger is a cue that causes an individual to take action. There are two types of triggers: internal triggers are emotions such as loneliness, boredom, and insecurity, whereas external triggers can consist of friend recommendations, messages, and the current weather.

1. **The Trigger** → I want to listen to some music and see what my friends are listening to

An Action takes place after the trigger. Action can include scrolling, listening, refreshing, and playing within an App.

2. **The Action** → Opens the app, views the friend activity feed

The Reward is the user’s desire, taking the form of happiness, information, recognition, and acceptance.

3. **The Reward** → Find what your friends are listening to

An Investment is what users are willing to do for further rewards. In Nir Eyal’s argument, repeated rewards contribute to increased investments — whether time or monetary consumption. In a sense, investments can drive future benefits including money, effort, and time.

4. **The Investment** → Scroll through the friend feed and click on individual profiles, spending more time on the app

> Spotify has crafted a near-ideal habit loop… I want to know how I can enhance it further.

## Conducting interviews with Spotify users

I conducted 9 interviews with individuals who use Spotify and had several conversations with casual Spotify users. My goals were to:

- Understand how users make listening choices
- Discover the Spotify elements that loyal Spotify users care the most about (music variety, the design, playlist recommendations, Desktop Friend Activity feed, etc.)

![image](/assets/spotify/spotify-5.jpeg)

## User interview takeaways and key findings

- Spotify users use the streaming app not only for listening to music but also for **discovering new music**
- Users like to stay organized and categorise their favorite songs

> “I create a ton of playlists depending on my moods. Sometimes my playlists are just a note pad filled with random songs my friends recommended me.”

- Users stick to a **singular app** when listening to music

> “I use Spotify instead of Apple Music for its sleek design and interesting stats. I love looking at artist profiles, reading through the monthly listener numbers and locations.”

- The Friend Activity feature is immensely popular

> “My favorite part about Spotify Desktop is the Friend Activity Feed. I like to look at what friends are listening to and find new music.”

- Users **really trust Spotify’s curated playlists**. They like to explore music through their playlist recommendations and find similar songs.

## Empathising with the niche, target music listeners

![image](/assets/spotify/spotify-6.jpeg)
![image](/assets/spotify/spotify-7.jpeg)
![image](/assets/spotify/spotify-8.jpeg)
![image](/assets/spotify/spotify-9.jpeg)

Through the exploration of the three personas, I identified an overlapping pain point which the current Spotify Mobile lacks — an active social feed. Whether they are casual, moderate, or loyal users, people are interested in engaging with their friends. These personas are crucial to the development of my design decisions, so I made sure to always refer back to their needs.

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