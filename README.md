# Greenfield Project

#### Table of Contents
- [Overview](#overview)
  - [Duration and Milestones](#duration-and-milestones)
  - [Design](#design)
- [Basic Requirements](#basic-requirements)
  - [Group Formation](#group-formation)
  - [Role Assignment](#role-assignment)
  - [Project Organization](#project-organization)
  - [Product Design](#product-design)
  - [Project Infrastructure](#project-infrastructure)
    - [Project Backlog](#project-backlog)
    - [Contribution Guide](#contribution-guide)
    - [Style Guide](#style-guide)
    - [Project Readme](#project-readme)
  - [Continuous Deployment](#continuous-deployment)
  - [Team Communication](#team-communication)
    - [New Code](#new-code)
    - [Speaking to each other](#speaking-to-each-other)
  - [Product Development](#product-development)
- [Extra Credit](#extra-credit)
  - [Testing and You](#testing-and-you)
  - [Misc.](#misc.)
- [Group Assignments](#group-assignments)

## Overview

### Duration and Milestones

The Greenfield project begins on Week 6 Day 3 (Wednesday) runs through solo week, and ends on Week 7 Day 1 (Monday). During solo week you're expected to stay in contact with you group (via google hangouts, carrier pigeon, etc) and work 50% time (~5 hours per day).

Your project must be feature __and__ code complete by the end of solo week.

You'll present you project to your cohort on Week 7 Day 1 (Monday). You also use Monday to wrap up any lose ends and make sure your project is ready to for hand-off to the next team.

On Week 7 Day 2, (Tuesday) you'll begin the Legacy Project.

### Design

You'll be randomly assigned to groups by cohort. You'll work with your team to generate a project idea, assign roles, and build something awesome. In the real world, you'll rarely have the opportunity to choose all of the people you collaborate with. Your success in the software engineering industry will, in large part, be determined by how well you're able to integrate with varied groups of engineers. The ability to contribute to a shared vision and iterate towards it effectively among peers is extremely valuable. This sprint will help you hone that skill.

The Greenfield project is about:
- group dynamics and collaboration
- product design
- product implementation
- project architecture
- project documentation
- testing

During the greenfield project, you must document your code, syntax styling, git workflow and feature roadmap in sufficient detail so that it can be handed to an arbitrary team with virtually no explanation.

This repo contains templates that you'll use as a guide to successfully document and structure your project on github.

## Basic Requirements

#### Group Formation

- [ ] Get into your assigned groups (end of this document)

- Each member should spend five minutes (no talking) answering the following questions:
- [ ] What are my 2 greatest technical strengths?
- [ ] What are my 2 greatest technical challenges?
- [ ] What are my personal goals for this project?

- [ ] Discuss your answers with your group. Get to know each other.

- [ ] Begin brainstorming with your group about ideas in prep for the afternoon lecture.

### Role Assignment
As a group, decide which team members will fulfill each of the three core scrum roles.
  - [ ] [Product Owner][2]
  - [ ] [Scrum Master][3]
  - [ ] [Development Team][4]
  - [ ] Fill out the Team section in the readme with this info.

### Project Organization
Don't worry too much about choosing a name at this point. You'll likely refactor it several times anyway.
  - [ ] The Scrum Master must [Create a new GitHub Organization account](https://help.github.com/articles/creating-a-new-organization-account) for your team. This ensures that all members share equally in the glory of the project.
  - [ ] Add all your team-mates as members to the new org.
  - [ ] Create a repo within your new org for your project.

### Product Design
Create product vision by drafting a 'Project Summary'
  - [ ] Copy `_PRESS-RELEASE.md` into the root directory of your own project repo and complete the exercise described therein. Note that the actual instructions are hidden in a comment block. You'll need to view the raw file, not the rendered markdown version to see them.
  - [ ] Use github issues

### Project Infrastructure
In order to support your current team _and_ future contributers to your project, you'll need to document your project as you build it. It should be the case that, without any intervention or additional explanation from you, the next team of collaborators  (or yourself in six months) can dive in and figure out how to start hacking easily.

Document your project and codebase to the point that if you decide to push it to hacker-news, anyone with a solid understanding of JavaScript can (after reviewing your documentation and comments) start submitting pull requests. Plan on not having any face-to-face interaction with the next team of collaborators. The most effective and efficient way to accomplish this is to do it right from the very start. Don't wait till the last minute. That will never work.
  - [ ] Heavily comment all aspects of your code.

#### Project Backlog

Be sure keep your project backlog (using github issues) up to date. There should be clear
documentation of tasks completed (github provides this functionality automatically) and
next steps/features in your project backlog so that your collaborators can just dive right in.

You should use github issues to track both your project's backlog of tasks and
fixes and to provide a way to track future goals. You can use labels to
organize issues and milestones to group issues together and to visualize your
progress.

You may want to take advantage of a tool like [waffle.io](waffle.io) to manage github 
issues with a more powerful interface and can provide a kanban-board-like place to manage your 
project and workflow.

#### Contribution Guide

- [ ] Document your team's git workflow by copying `_CONTRIBUTING.md` into the root directory of your repo and editing it suite your needs. It follows a [forking workflow](https://www.atlassian.com/git/workflows#!workflow-forking).

The provided `_CONTRIBUTING.md` advocates for a `git rebase` based workflow
instead of a `git merge` based workflow. The advantage of a `rebase` based
workflow over `merge` is that a rebase, even one which fixes conflicts, does
not introduce a new commit into your history. If you use `merge` and there are
any conflicts, then you will get a new "merge commit" in your history. Over
time, you can accrue hundreds of merge commits which can make your history
significantly harder to read and introduce a much lower signal to noise ratio
in your history. `rebase` avoids these problems by changing existing commits
instead of creating a new one.

Because `rebase` changes commits, you will have to push with the `-f` or
`--force` flag to your branch after rebasing, as the history has changed in a
way that git cannot resolve. You should _never_ rebase or push with force to
the `master` branch of your repository, as that will invalidate everyone elses
clones and checkouts of the repository.

##### `CONTRIBUTING.md` Workflow Diagram

![](http://i.imgur.com/p0e4tQK.png)

Remember, you're welcome to use which ever git workflow you want, `_CONTRIBUTING.md` is provided here as a suggestion (with the intention of you editing it). But whichever workflow you choose, you must document it well, you __must__ be consistent, and you should always have someone other than the person who wrote the code review it before it's merged into the central repository.

#### Style Guide
- [ ] Document your team's style guide by copying `_STYLE-GUIDE.md` into the root directory of your repo. `_STYLE-GUIDE.md` is provided as a template, you should edit it to reflect your agreed upon setup.
  - [AirBnB's](https://github.com/airbnb/javascript) and [The Google JS Style Guide](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) are also excellent examples.

#### Project Readme
Your project readme is the very first thing that users will see when they view your github project. It's the portal that must link to the other content files in the root of your repo.
- [ ] Use `_README.md` as a template to create a thorough readme.
  - It must link to the documentation you've created (as described by the items above).

### Continuous Deployment
You must have a deployed website setup.
- [ ] Configure automatic deployment of your master branch using Azure

### Team Communication

#### New Code

Your team should communicate new ideas for features or report important bugs
through github issues or whatever tool you use to manage github issues, that
way everyone on your project can see what important things are happening and
there is always a repository of further work to be done.

To introduce new code into your project, your team should _always_ make pull
requests - never make commits and push directly to master. After you make a
pull request, at least one other member of your team should do a thorough code
review of the changes and you should have a good back and forth where the code
is refactored and improved before being merged in. This will guarantee a higher
degree of code quality and will prevent careless errors from being merged into
your application.
- [ ] Read this excellent (and brief) [article about pull requests](https://github.com/blog/1124-how-we-use-pull-requests-to-build-github)

With continuous integration, you will benefit even more from a
pull request based workflow because you will always know that you are never
merging breaking code into your master branch.

#### Speaking to each other

You may want to use a persistent chat service like [hipchat](5), [slack](6), or irc to
communicate as a team so that you can have efficient asynchronous
communication. This will make your team more accountable and efficient, so you
don't have to stop everyone else's work to discuss small issues or request code
review.

### Product Development
- [ ] Create a simple home page for your project.
  - If you're not sure where to start, checkout using GitHub pages. It's free, robust, and can easily be personalized to your own domain.
  - [ ] Make the landing page a salesman's dream (clear, flashy, cool design, etc)! Templates are your friends!
- [ ] Add a sweet "Made a Hack Reactor" Banner with this simple script:

  ```javascript
  $('body').append(
    '<a href="http://hackreactor.com"> \
    <img style="position: fixed; top: 0; right: 0; border: 0;" \
    src="http://i.imgur.com/x86kKmF.png" \
    alt="Built at Hack Reactor"> \
    </a>'
  );
  ```

## Extra Credit

### Testing and You

Use TDD.

Test driven development is not valuable because it catches errors, but because it changes the way you think about interfaces between modules. Writing tests before you write code influences how you think about the process. It provides a safety net for performing refactoring and it documents the expected behavior of the system.

You must implement _all_ of the following:
  - [ ] Include testing when defining your project scope
  - [ ] Continuous integration to run all tests on commit
    - You can use any CI system you like, TravisCI (easy) or Circle-CI (med) or Jenkins (hard) are all options
  - [ ] Make testing part of daily standups
  - [ ] Discuss testing during mentor check-ins

You must implement 2-3 of the following:
  - [ ] Unit testing on the client
  - [ ] Unit testing on the server side
  - [ ] Integration testing for your API and database
  - [ ] End-to-end testing for your main workflows
  - [ ] Code coverage reports for unit tests
  - [ ] Visual testing for your app’s look and feel

### Misc.
- [ ] Create a screencast demo of the product and share on landing page.
- [ ] Write a technical blog post
- [ ] Maximize project exposure via reddit stuff
- [ ] Run usability tests, collect user feedback and simplify UI
- [ ] Schedule architecture and product review with mentor


## Group Assignments

### HR17 Greenfield Groups

#### Team: Reckless Saturn
- David Nguyen  (blankmaker)
- Armando Perez (armandopmj)
- Ly Mai  Le  (lmle)
- Eddie Jimenez (phoenix16t)


#### Team: Gracious Unicorn
- Jonathan  Ng  (codengjon)
- Jonathan  Sadka (jonsadka)
- Christopher McCloud (cmccloud)
- Christopher Singhavong  (singalongwithme)

#### Team: Brave Beehive
- Collin Wu (collinwu)
- Mike  Luby  (mluby)
- Jonathan  Warrick (JonathanWarrick)
- Tommy Tan (gitSauced)

#### Team: Common Badger
- Dominic Czarnota  (dczarnota)
- Dan Thareja (danthareja)
- Haiming Bao (nrobeR)
- Park Tamaroon (loqi)

#### Team: Solid Creek
- Collin Kokotas  (kokobeens)
- Jacob Gribschaw (Zithrill)
- Geoffrey  Abdallah  (gabdallah222)
- Stefanie  Contreras (stefceror)

#### Team: Navy Haystack
- Tejaswini Pingili (tpingili)
- Tyler Lewis (tylerlewis)
- Dara Bun (darabun)
- Lawrence Kang (lawrencekang)

#### Team: Dangerous Vegetable
- Wil Andrade (Alphabat)
- Keenan Lidral-Porter  (kayellpeee)
- Andrew Switlyk (ASwitlyk)

#### Team: Global Mustard
- Jeffrey VanDalsum (jeffvan576)
- Brandon Yun (yunbran)
- Joseph Lowinske (lowi0008)


### Juniors(HR16)

#### Team: Northern Moose
- Etienne Tripier (etripier)
- Matt  Kim (mattphoto)
- Samantha  Puth  (sputh)
- Sean  Chen  (seanchen1991)

#### Team: Dangerous Wrench
- Mario Ponticello  (eave)
- Austin  Connelly  (aconnelly)
- Lauren  Pappone (lpappone)
- James Edwards (incrediblesound)

#### Team: Indigo Crayon
- Aaron Melocik (SterlingVix)
- Jim O'Brien (jimobrien)
- Wesley  Pascual (seewes)
- Iago  Prates  (iagowp)

#### Team: Tidy Magenta
- Issaq Al-Ahmed  (iAl-Ahmed)
- Jarrod  Ruhland (jangahroo)
- Jimmy Jea (jimjea)
- Kim Marquardt (robotBones)

#### Team: Elastic Notorious
- Brandon McNary  (bmcnary)
- Fleur Dragan  (fleur)
- Samuel  Nelson  (SunJieMing)
- Stacy Hseu  (shseu)

#### Team: Next Mars
- Jacob (Andrew)  Brassington (jabbrass)
- Bo  Liu (liubolightning)
- Jack  Lu  (JackTanRoo)
- Daniel  Streit  (danielstreit)

#### Team: Golden Lion
- Mike  Lam (myclamm)
- Wai-Yin Kwan  (wykhuh)
- Ben Rowles  (browles)
- Kelly Walker  (kwalker3690)
- Chun  Wang  (Chunhao137)

<!-- LINKS -->

[1]:http://en.wikipedia.org/wiki/Scrum_(software_development)#Roles
[2]:http://en.wikipedia.org/wiki/Scrum_(software_development)#Product_Owner
[3]:http://en.wikipedia.org/wiki/Scrum_(software_development)#Scrum_Master
[4]:http://en.wikipedia.org/wiki/Scrum_(software_development)#Development_Team
[5]:https://www.hipchat.com/
[6]:https://slack.com/
