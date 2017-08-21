## Explanation of Exercise Files

# Introduction
All of the files for this course are freely available in GitHub for all users at this URL(https://github.com/planetoftheweb/vueinterface). In GitHub, you'll see that the project is organized into branches. Each branch corresponds to a video in the course. They are named according to the video they correspond to. If you see a branch that starts with a name like 01_03, that means that the branch corresponds to the `FIRST CHAPTER` and refers to the `THIRD` video in that chapter. Also, if you see a `B` at the end of the name, those are how the files looked like at the beginning of the video. And if you see an `E` at the end of the name, that's how the files looked like at the end of the video.

The best way to work with the project is to clone all the branches at once. In order to do that, you'll need Node.js as well as Git installed. You can find Node.js and download the installer at this [URL](https://nodejs.org/en/), and you can find Git and download the installer for your platform at this [URL](https://git-scm.com/). When you install Git, make sure you add the Git Bash terminal in Windows. It makes running the commands more consistent.

So, let me show you how to clone all the branches for this project. First, I'm going to go to the GitHub repo, and I'm going to click on this button to copy the link to the repo.

Once I do that, I'm going to switch over to a Terminal

`> cd ~/Desktop`

On a PC, I'll be running something like Git Bash or something that is compatible with Unix terminal commands. Once I do that, I can create a directory

`> mkdir vueinterface`
`> cd vueinterface`
`> git clone --bare URLTOREPO.git .git`.
`> git config --bool core.bare false`
`> git reset --hard command`

It's going to reset the head pointer, and this is going to give us all of the different branches. Let's go ahead and clear this out, and issue a `git branch` command. You can see that I have not just the master branch, but every other branch in the project.

The next thing we need to do is install the project dependencies we'll need for this project to run properly. In order to do that, I need to issue a

`> npm install`

Once the installation is done, I'm ready to switch to any of the branches.

You should start the videos with the project opened in your favorite text editor. I'll be using Visual Studio Code in this course.

This project uses `WebPack` to create and run a server, which is required for modular Vue.js projects. I've already created all of the automation you'll need. You can run one of two commands and most of the time you'll want to run the `npm run dev` command. That runs webpack in development mode. I'll always have that running at the beginning of each video. When you're ready to put these files on a server you can use the `npm run build` command and that will create all of the files you'll need to upload your application in the app folder.

This is now showing you the code from the end of the course.

If you want to watch a video at the beginning of `CH03`, and it's the `04` movie, and I want to get the files at the end of that video, then I'm going to issue a `git checkout 04_04e`.

If you've made some modifications to files when you do a git checkout command, you can issue a git stash command before, so that it clears out any of the changes you have made. Now let's go ahead and checkout the master branch again.

I'll start each video in the course with the npm run dev command already running in the background, and the code running inside our editor as well as a copy of the browser.

Now that we're ready to get going, let's get started building our application.
