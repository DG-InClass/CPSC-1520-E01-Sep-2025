# Agenda (A03)

<!--
Note to self: See https://github.com/CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/
-->

> These are my notes on what I plan to teach in each [**upcoming class**](#-welcome-to-cpsc-1520---revitalized-). Also check out the [**Brightspace Quizzes**](#quiz-links) and the [**Draft Planning Calendar**](./Calendar.md).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)

## Quiz Links

Here are quick links to the quiz readings on Brightspace.

<!-- - [Readings for Quiz/Assessment 1](https://lms.nait.ca/d2l/le/content/97639/viewContent/3998885/View)
- [Readings for Quiz/Assessment 2](https://lms.nait.ca/d2l/le/content/97639/viewContent/3998928/View)
- [Readings for Quiz/Assessment 3](https://lms.nait.ca/d2l/le/content/97639/viewContent/3998978/View)
-->
- [Readings for Quiz/Assessment 4](https://lms.nait.ca/d2l/le/content/97648/viewContent/4139957/View)
- [Readings for Quiz/Assessment 5](https://lms.nait.ca/d2l/le/content/97648/viewContent/4139959/View)
- [Readings for Quiz/Assessment 6](https://lms.nait.ca/d2l/le/content/97648/viewContent/4140007/View) 


> ## Starter Kits
>
> I provide a number of starter kits through the term, which you can grab using the process described below.
>
> 📖 These starter kits often have lots of `ReadMe.md` files. That means I want you to **read** that information. 👀
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*


----

## Sep-Dec 2025 Schedule

<!-- 
### Sep 03

- Course Introduction
- GitHub Account Setup
- Software Setup
- Workbook Setup
- **Homework:**
  - Ensure you have completed the [**system setup**](https://dgilleland.github.io/CPSC-1520/tutorials/0010/) so that you have the software etc. that you need for this course.


### Sep 05

- Workbook Setup
  - Troubleshoot Access
    - 🚨 Contact me via MS Teams outside of class if you have any trouble accessing/using your workbook or other repositories!
  - [000](./src/000/ReadMe.md)
- **Homework:**
  - Complete the [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0011/) tutorial; be sure to publish it as a **public** repository on your **personal** GitHub account.
  - Send me the the link to the repository via MS Teams.

### Sep 08

- **Today's Class**
  - [x] Course Intro [Notes](./src/000/ReadMe.md) and [LOGs](./src/000/LOGs.md)
  - [x] Discuss [key aspects](./src/001-StartHere/LOGs.md) of using git and Markdown
  - [ ] Add the first starter kit to your Student Workbook

    ```ps
    pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
    ```

  - [ ] [Explore JavaScript in the Browser](./src/003/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/003 ./src/003
    ```

- **Homework**
  - [ ] Double check that you have [everything ready](./src/001-StartHere/ReadMe.md) to proceed with our in-class lessons.
  - [ ] Practice git and Markdown on your own using the provided [**instructions**](./src/002/ReadMe.md)
  - [ ] Try the instructions in the [003](./src/003/ReadMe.md) starter kit.
  - [ ] *Quiz Reminder:* [Readings for Quiz 1](https://lms.nait.ca/d2l/le/content/97639/viewContent/3998885/View)
    - *This will be your only reminder that you have readings associated with each quiz. It is **your** responsibility to keep up with the readings and complete your quizzes before the cutoff date.*

### Sep 10

- **Today**
  - [ ] [Explore JavaScript in HTML](./src/004/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/004 ./src/004
    ```

    Remember to clone/push the starter kit you just grabbed:

    ```ps
    git add .
    git commit -m "004 Starter Kit"
    git push
    ``` -->

<!--

- **Homework**
  - Tutorial: [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - Put it in your student workbook under `~/src/query-dom/`
  - Tutorial: [Using Script Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)
    - Put it in your student workbook under `~/src/script-tags/`
  - Bookmark and read the docs on [Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

## Jan 15

- **Today** *(Online)*
  - [ ] Characteristics of JavaScript
    - case-sensitive
    - **not** a type-safe language
    - looks a lot like C#, but has a number of differences
    - string literals can be wrapped in double or single quotes
    - string interpolation is performed with text inside a pair of back-ticks (`` ` ``)
      - placeholders in the form of `${expression}`
      - e.g.: `` `The count is ${count}` ``
  - [ ] ***Variables***
  - [ ] The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
  - [ ] Node also provides/is a REPL for JavaScript
  - [ ] **Demo:** Combine the main points of [003](./src/003/ReadMe.md) and [004](./src/004/ReadMe.md)
    - Find and modify DOM elements with `document.querySelector()`
    - Link a JavaScript file
    - Create and use variables
- **Homework**
  - *Reminder to keep up with Quiz readings and completing the quizzes before their cutoff date.*
  - [ ] Review the [003 LOGs](./src/003/LOGs.md) and the [004 LOGs](./src/004/LOGs.md)
  - [ ] Read the following articles:
    - [Why JavaScript?](https://dgilleland.github.io/CPSC-1520/explanations/0010/)
    - [JavaScript as a Language](https://dgilleland.github.io/CPSC-1520/explanations/0020/)

## Jan 17

- **Today**
  - [ ] Lab 1 released/due **today**

----

## Jan 21 (W03)

- **Today**
  - Notice the `LOGs.md` files under each lesson - pay attention to these
  - Fast-Track [005](./src/005/ReadMe.md)
  - Math Review
    - In JavaScript, all numbers are floating point
  - Quick review on yesterday's code: What are *keywords* and what are *not* keywords.
  - What are *functions* in JavaScript?
  - [**006**](./src/006/ReadMe.md) intro
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
- **Homework**
  - [ ] Do the [**Learn by Play** portion of the `005/ReadMe.md`](./src/005/ReadMe.md#learn-by-play)
  - [ ] Review the new [Finding DOM Elements](https://dgilleland.github.io/CPSC-1520/guides/0030/) guide.
  - [ ] Review [006 LOGs](./src/006/LOGs.md)
  - [ ] Complete [practice in `007`](./src/007/ReadMe.md#practice-agreement)
  - [ ] Review [007 LOGs](./src/007/LOGs.md)
  - [ ] **Optional** - Styling Challenge (CSS only - no JavaScript)

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/005.5 ./src/005.5
    ```


## Jan 22

- [ ] Housekeeping Tasks:
  - [ ] Getting the most out of ***LOGs** (Learning Outcome Guides)*
  - [ ] Version Control: Updating Your Workbook (commit & push)
  - [ ] [Downloading Starter Kits](#starter-kits)
  - [ ] Filling the Gaps: Self-study is the only way to fill in the gaps between what you do and don't know about HTML.

![HTML Iceberg](./docs/images/html-iceberg.jpg)

- **Today** *(Online)*
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-events ./src/008/demo-events
    ```

    - Review [its LOGs](./src/008/LOGs.md)
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- **Homework**
  - Make notes on the LOGs for this lesson
  - Research mouse events on MDN (Mozilla Develop Network)


## Jan 24

- **Today**
  - [ ] **In-Class Lab 2**
  - [ ] A *soft review* of Events and Event Handling in web pages.

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/soft-intro ./src/008/soft-intro
      ```

- **Homework**
  - *TBD*

----

## Jan 28 (W04)

  <!-- - Revisit the "soft-intro" to explore `.stopPropagation()` -- >

- **Today**
  - [x] Recap about [mouse events](./src/008/demo-events/js/main.js) + browsing events
  - [x] Start the demo-text-manipulation
    - `.trim()` (plus left/right trim), `.toUpperCase()`/`.toLowerCase()`, `.padStart()`/`.padEnd()`, `.repeat()`, `.replace()` + `.replaceAll()`, `.substr()` vs. `.substring()`

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-text-manipulation ./src/008/demo-text-manipulation
    ```

  - [ ] **`~/src/008/event-listener/`** - Class time to complete the [Event Listener tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0070/)
    - Discuss `.stopPropagation()` and `.preventDefault()`
  - [ ] **`~/src/008/dom-styling/`** - Class time to complete the [DOM Interactions tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0080/)
- **Homework**
  - [ ] Complete the remaining TODO items from the demo-text-manipulation


## Jan 29

- **Today** *(Online)*
  - [ ] For an ad-hoc exploration of strings and numbers, see the [sample code I posted today](./src/007/ad-hoc/js/main.js).
  - [ ] [Form Processing](./src/008/) Starter Kit:

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/form-processing ./src/008/form-processing
    ```


- **Homework**


## Jan 31

- **Today**
  - [ ] **In-Class Lab 3** (Functions and Events)

> ### Lab 3 Spec Notes
> 
> - **Step 2** - The first point is somewhat vague - which element (there are two)? But, from reading the rest of the steps and seeing the sample screenshot, it would seem that the element is the `divElement`
> - **Step 3** - The instructions are somewhat vague, but get a bit clearer when you look closely at the HTML. One of the parts of this step refers to the "div list group", and that appears to be the same element as the first `divElement` selected in Step 1 (though we selected it by the class '.javascript-resources' and not '.list-group' as somewhat inferred by these instructions).
> - **Step 4** - The instructions mention "the list", and that is (once again), the `divElement`. However, since it's talking about it as "the list", I will look for it by the class `'.list-group'`.

----


-->

<!-- 
### Sep 12

- **Today**
  - [ ] [Handling Information](./src/005/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/005 ./src/005
    ```

    Remember to clone/push the starter kit you just grabbed:

    ```ps
    git add .
    git commit -m "005 Starter Kit"
    git push
    ```

  - [ ] QuickStart Tutorial - `app.js`
    - Before jumping into the [005/ReadMe.md](./src/005/ReadMe.md), take a quick scan of the [learning outcomes](./src/005/LOGs.md) for this starter kit
    - We'll do the first QuickStart *together*: [**Intro to JavaScript**](https://dgilleland.github.io/CPSC-1520/tutorials/0012/)
      - [ ] Create a subfolder of `~/src/005/JS-Quickstart`
  - [ ] Turn the `~/src/005/live-demo` into a Node project that uses Vite.
- **Homework:**
  - [ ] Complete the following QuickStart tutorials:
    - [ ] [JavaScript Math](https://dgilleland.github.io/CPSC-1520/tutorials/0014/)
    - [ ] [Manipulate Strings](https://dgilleland.github.io/CPSC-1520/tutorials/0015/)
    - [ ] [Complex Data Types](https://dgilleland.github.io/CPSC-1520/tutorials/0016/)
  - [ ] Review basics of JavaScript within HTML through the following tutorials:
    - [ ] [Discover Emmet](https://dgilleland.github.io/CPSC-1520/tutorials/0025/)
    - [ ] [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - [ ] [Using `<script>` Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)

### Sep 15

- **Today**
  - [ ] [Intro to Functions](./src/006/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/006 ./src/006
    ```

    ✨ Remember to clone/push the starter kit you just grabbed:
  - [x] *Moved the lesson on Creating Functions to Sep 22*
- **Homework:**
  - [ ] Complete the following QuickStart tutorials:
    - [ ] Try to complete the [Demo Addition](./src/006/demo-addition/script.js) sample from 006.
    - [ ] [Functions in JavaScript](https://dgilleland.github.io/CPSC-1520/tutorials/0017/)
    - [ ] [More Objects](https://dgilleland.github.io/CPSC-1520/tutorials/0018/)
    - [ ] [Reusable Functions](https://dgilleland.github.io/CPSC-1520/tutorials/0060/)

### Sep 17

- **Today**
  - [ ] **Demo Lab** - *See Brightspace announcement*
  - [ ] Complete [006 Demo Addition](./src/006/demo-addition/)
  - [ ] Revisit [005/live-demo](./src/005/live-demo/)
- **Homework:**

### Sep 19

- **In-Class Lab 1**
- **Demo Lab**
  - Check the Pull Request Update ***or***
  - Run the following in the terminal for the demo lab:

    ```ps
    pnpm update vite@latest vitest@latest @vitest/ui@latest jsdom@26.1.0
    ```

### Sep 22 -->

<!-- 
  - [ ] 😢 **TBD** [Modifying the DOM](./src/006/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/006 ./src/006
    ```

    ✨ Remember to clone/push the starter kit you just grabbed:
 -->

<!-- - **Today**
  - [ ] ***Lab 1 Solution Review***
  - [ ] Refresher on DOM modifications, specifically
    - [Selector strings](https://gist.github.com/magicznyleszek/809a69dd05e1d5f12d01) with `document.querySelector()`
    - Recommended usage of `.innerText` instead of `.textContent`
      - We will use **innerText**
      - *but for a deeper comparison, see [this article](https://medium.com/@ashishkumarjena1437/understanding-innertext-textcontent-and-innerhtml-in-javascript-87f3bc2b8e17)*
  - [ ] [Creating Functions](./src/007/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/007 ./src/007
    ```

    ✨ Remember to clone/push the starter kit you just grabbed:
- **Homework:**
  - [ ] Complete the following tutorial(s):
    - [ ] [DOM Interactions](https://dgilleland.github.io/CPSC-1520/tutorials/0080/)
  - [ ] Have you done the other QuickStart tutorials? Are they in your Student Workbook?
    - [ ] [Functions in JavaScript](https://dgilleland.github.io/CPSC-1520/tutorials/0017/)
    - [ ] [More Objects](https://dgilleland.github.io/CPSC-1520/tutorials/0018/)
    - [ ] [Reusable Functions](https://dgilleland.github.io/CPSC-1520/tutorials/0060/)


### Sep 24

- **Today**
  - [ ] A little more about functions
    - The `return` keyword

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/007/color-functions ./src/007/color-functions
      ```

  - [ ] [Event Listeners](./src/008/ReadMe.md) (grab the starter kit first)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/008 ./src/008
    ```

    ✨ Remember to clone/push the starter kit you just grabbed
    - 🚀 Using `import` and `export` with JavaScript Modules
      - *Hint: `<script type="module" src="js/main.js"></script>"
    - Inline function expressions vs. constants for functions
      - Both can be "anonymous"
- **Homework:**
  - [ ] Complete the following QuickStart tutorials:
    - [ ] [Intro to Event Listeners](https://dgilleland.github.io/CPSC-1520/tutorials/0070/)

### Sep 26

- **In-Class Lab 2**
  - 🚨 Remember to **read the lab specs** before you come to class
  - I have posted [short steps for cloning your lab](https://dgilleland.github.io/CPSC-1520/about/lab-setup/).
  - **Time Changes** for Release/Cutoff of in-class labs:
    - Available at 6AM on the Friday of the lab
    - Closed at 6AM the following day
  - **New Reporting** of test results (demo for you today)
  - **Stay in Your Lane!** - Only work on/in the parts described in the ***lab instructions***.

### Sep 29

- **Today:** [👀](http://localhost:4321/CPSC-1520/lessons/008)
  - [Demo Events](./src/008/demo-events/)
  - [Demo Text Manipulation](./src/008/demo-text-manipulation/ReadMe.md)
  - [Form Processing](./src/008/form-processing/ReadMe.md)
- **Homework:**
  - Complete the [Demo Text Manipulation](./src/008/demo-text-manipulation/js/main.js) code.

### Oct 01

- **Today:**
  - QnA Class
  - Study Period

### Oct 03

- **In-Class Lab 3**
  - More `import` and `export`
  - Event listeners
  - Add/Remove/Toggle CSS Classes

### Oct 06

- **Today:**
  - 🚡 Lab 4/5 Date Changes
  - **009** - If/Else

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/009 ./src/009
    ```

    ✨ Remember to commit/push the starter kit you just grabbed
  - *009-a* - Grok Decisions
- **Homework:**
  - ***Rinse-n-Repeat*** - Expand on the `grok-decisions.mjs` file any time you need to better understand an if/else.

### Oct 08

- **Today:**
  - Continue with 009
    - *009-b* - *Freelance Web Development - Quote Estimator*

### Oct 10

- **Today:**
  - 🎉 Assignment 1
    - Startup Help

      ```ps
      pnpm add -D @d2t/vitest-ctrf-json-reporter
      ```

    - Helper Functions

      ```js
      const setInvalid = (field) => {
        field.setAttribute('aria-invalid','true');
        const id = field.getAttribute('aria-describedby');
        if (id) document.getElementById(id)?.classList.remove('hide');
      };
      const clearInvalid = (field) => {
        field.removeAttribute('aria-invalid');
        const id = field.getAttribute('aria-describedby');
        if (id) document.getElementById(id)?.classList.add('hide');
      };
      ```

### Oct 13

- ***No Classes*** - Thanksgiving

### Oct 15

- **Today:**
  - *About **Lab 4***
  - `if`/`else` Questions
  - Introduction to Looping + Arrays
  - Quick Topics:
    - Looping Syntax `for`
    - Arrays
    - Arrow Function Syntax
    - Optional Chaining Operator `?.`
    - Object Literals + Destructuring Objects


### Oct 17

- **Announcements**
  - Assignment 1 Due Date is changed
  - I will make some commentary in class about Assignment 1
    - ♻️ [Apply Lab Updates](https://dgilleland.github.io/CPSC-1520/about/lab-updates/)
    - 📝 TIPS
      - Use `.trim()` whenever retrieving the `.value` of an input
      - Log messages to the Dev Tools Console whenever you need to check the value of things at any point in your code.

        Check out [`console.assert()`](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static) and/or make it stand out with some custom formatting using functions like this:

        ```js
        function logWithColor(title, message, color) {
            console.log(`%c${title}:%c ${message}`, 'color: green; background-color: white; font-size: 1.05rem; font-weight: bold;', `color: ${color ? color : 'inherit'}`);
        }
        ```

- **In-Class Lab 4**
  - Read the [Logical Errors](https://dgilleland.github.io/CPSC-1520/guides/0150/) article on "Faulty" Conditionals

### Oct 20

- **Today**
  - Introduction to Looping + Arrays
    - See this [slideshow](https://programming-0101.github.io/slides/OOP-Ramp-Up/05-Arrays.html) as a reference. Even though it's for C#, most of the principles still apply in JavaScript.
  - Quick Topics:
    - Looping Syntax `for`
    - Arrays
    - Arrow Function Syntax
    - Optional Chaining Operator `?.`
    - Object Literals + Destructuring Objects
-->


<!-- 
  - You can grab the following starter kit on Arrays:

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/011 ./src/011
    ```
-->

<!-- - **Homework** 
  - Study the code for the following files in the starter kit:
    - [`arg-parser.js`](./src/011/JS-Quickstart/arg-parser.js)
    - [`arrays.js`](./src/011/JS-Quickstart/arrays.js)
    - 🎉 [`a-backlog.js`](./src/011/JS-Quickstart/a-backlog.js)
    - 🚀 [`built-in-functions.js`](./src/011/JS-Quickstart/built-in-functions.js)

### Oct 22

- **Today**
  - [About C# Lambdas and Delegates](https://dmit-2018.github.io/topics/linq/lambda.html) -->

## 🎉 Welcome to CPSC-1520 - Revitalized! 🎉

My name is *Dan Gilleland*, and I'm your new instructor for the remainder of the course.

I've been teaching Computer Programming at NAIT for over **25 years**, and I have experience with a wide variety of programming languages.

While I've only been **teaching JavaScript for 8+ years** (off and on), I do have experience with the language and the wider JavaScript ecosystem going back to the late 1990s 😲. At the start of this year (2025), I started up [**my own website on JavaScript**](https://dgilleland.github.io/CPSC-1520/) where I can more rapidly generate resources for my students.

> 🚀 **Tip:** I have an *Instructor Workbook* where I post all my code and things like my [**Agendas** for each class](https://github.com/DG-InClass/CPSC-1520-E01-Sep-2025/blob/main/Agenda.md#-welcome-to-cpsc-1520---revitalized-).

### Transitioning Instructors

I want to acknowledge that having a change in instructors part way through the term will no doubt feel disruptive for you. But I'm here to help you through that transition as well as to teach you JavaScript. You can always direct-message me via **Microsoft Teams** if you have any questions or concerns. I'll help you in any way I can!

> 🚀 **Tip:** Try contacting me right now, just to say "Hi"! That way, I can add your name in my *priority queue* for when you have questions.

If you're feeling a little - or a lot - of uncertainty or hesitancy, I want you to know that's normal. In fact, I happen to know of a good resource that can help you through any sort of changes you face in life - good or bad. That little tool is something called [**The Change Cycle**](https://changecycle.com/change-cycle).


### Getting Back On Track

1. 🕛 There are a few things I want to help everyone get set up on their computers so that we can all be on the same page. It all begins with your [*System Setup*](https://dgilleland.github.io/CPSC-1520/tutorials/0010/). Odds are that you have most of this stuff in place, but we'll double-check just to make sure!
1. 📝 The next thing we'll get you set up with is your **Student Workbook**. I'll give you that link in class and walk you through how and where to put it on your computer.
1. 🏡 Self-Study/Review Tutorials

   I have a number of short tutorials that you can try out on my website. They each take about 30 minutes to complete, and they are chock full of important tidbits that you may not know about JavaScript.
   
   If you feel that a quick review would help, check these out.

   1. [Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0011/) - I encourage students to learn `git` from the command line, and this little tutorial is a great start. You'll also get a little bit of exposure to *Markdown* (which I'm sure you'll love more and more as you try it out 💖)!
   1. [JavaScript Quickstart](https://dgilleland.github.io/CPSC-1520/tutorials/0001/) is a set of tutorials focused just on JavaScript (no HTML or CSS). They range from 20 to 40 minutes to complete each, but if you just want to skim the instructions instead of writing things out, they are quicker to run through.

1. Discovering where you were dropped off
    - [ ] JavaScript modules (`import`/`export`)
    - [ ] Flow-control
    - [ ] Looping statements?
      - [ ] `while`
      - [ ] `do-while`
      - [ ] `for`
      - [ ] `for..in`
      - [ ] `for..of`
    - [ ] Arrays?



### Topical Backlog....

> *Just some notes for my (Dan's) personal reminder. Jump to the [Reboot Timeline (Nov-Dec)](#nov-dec-2025-schedule) for agenda information.*

- Quick Recaps
  - [ ] **Just JavaScript:** Playing with `node --watch ....`
  - [ ] `a-backlog.js`, where we review
    - Simple Object Literals
    - Date Object in JavaScript
    - Math Object in JavaScript
    - Functions as Parameters (Callbacks)
    - Functions as Return Values
    - Arrow Functions
    - Default Parameters
    - Closures
    - Function Hoisting
- **Today**
  - Note the [**Array Function docs**](./src/011/ReadMe.md#built-in-functionsjs)
  - **011**
    - Create the `JS-Quickstart/cards.js` to practice loops within loops
  - **010** - Looping - Node Lists (Checkboxes)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/010/Checkboxes ./src/010/Checkboxes
    ```

    ✨ Remember to commit/push the starter kit before you make edits

  - **011** - Arrays - Web Page Demos
    - Playing Cards

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/011/PlayingCards ./src/011/PlayingCards
      ```

      ✨ Remember to commit/push the starter kit before you make edits

- **Homework**
  - Contact me some time on MS Teams over this coming week, and let me know where you are at. Specifically:
    - What you found challenging?
    - What learning strategies/resources did you lean on?
    - Where you would like some extra focus?


<!-- 
- **Homework:**
  - Slideshow (Practice)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/011/Slideshow ./src/011/Slideshow
    ```

    ✨ Remember to commit/push the starter kit before you make edits
  - Guessing Game 

### Oct 27

- **Today**
-->
  - **012** - JSON and Fetch

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-A03-Sep-2025/sk/012 ./src/012
    ```

    ✨ Remember to commit/push the starter kit you just grabbed


![Separator](./docs/images/Video-Separator.jpg)

----
## Nov-Dec 2025 Schedule

### Oct 29

- **Today**
  - 🕖 Part A) Intro + Reboot
    - [x] [Introductory Comments/Notes](#-welcome-to-cpsc-1520---revitalized-)
    - [x] [System Setup](#getting-back-on-track)
  - 🕗 Part B)
    - [x] Student Workbook Setup
      - *If you missed the class, you can find the links to the student workbook in the MS Teams and the [Brightspace announcements](https://lms.nait.ca/d2l/home/97648).*
    - [x] Terminal commands (`git` and others)
    - [x] A touch of *Markdown*
  - 🕘 Part C)
    - [x] JavaScript in the terminal - [A Recap](./src/001/a-javascript-recap.js)
- **Homework**

----


### Nov 03

> 🙏 ***Disclaimer:** As I teach, there may be bits and pieces of JavaScript that I miss along the way. Please **ask questions** if there are things appearing in labs/assignments that seem entirely new to you.*

- **Today**
  - [***Quiz Reminders***](#quiz-links) - All Brightspace quizzes are available, and links to the related readings can be found above.
    - 📝 Please note the cut-off dates in the [**Calendar**](./Calendar.md)
  - **Start Here:** ![](./docs/images/checkered-flags-45x32.png) (10 min)
    - We're going to quickly review Event Listeners using [**this tutorial**](https://dgilleland.github.io/CPSC-1520/tutorials/0070/)
      - It includes how to [setup a Node project from scratch](./src/003/ReadMe.md)
    - Time for a Starter Kit:

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-E01-Sep-2025/sk/-e01-/003 ./src/003
      ```

  - 🕖 Part A) [Continuing Review](./src/001/ReadMe.md)
    - [`src/001/about-js-oddities.js`](./src/001/ReadMe.md#about-javascript-oddities) - function params/args, etc.
    - [`src/001/about-modules.js`](./src/001/ReadMe.md#about-modules) - why JavaScript modules (*ECM*)?
  - 🕗 Part B) [JavaScript with HTML]
    - HTML Forms, Event Listeners, and If/Else
      - **Principles:** Use the `evt.target` for the `<form>` "context", and use it to get your individual form controls
      - **Flow Control:** This is an involved example (and *practice*) for *decisions* (`if-else`)
      - (🙈 Dan's eyes only... 👀 - see `http://localhost:4321/CPSC-1520/lessons/009/#-freelance-web-development---quote-estimator`)
    - Yet another Starter Kit:

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-E01-Sep-2025/sk/-e01-/004 ./src/004
      ```

  - 🕘 Part C) [Data, data, data]
    - [`src/001/arrays-and-loops.js`](./src/001/ReadMe.md#arrays-and-loops)
- **Homework**
  - Accept and read about ***Assignment 2***
    - (🙈 Preview in Dan's "eyes only")
  - About [***Lab 5***](#nov-5) (available at 11:30 AM | open 36 hours)

### Nov 05

- **Today**
  - 🕖 Part A)
    - Checkboxes demo
    - Playing Cards demo
    - Yet another Starter Kit:

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/CPSC-1520-E01-Sep-2025/sk/-e01-/005 ./src/005
      ```

  - 🕗 Part B)
    - *TBD*
  - 🕘 Part C)
    - Preview Lab 5 before and after
      - (🙈 Preview in Dan's "eyes only")
    - Retro Lab 5 as a practice
- **In-Class Lab 5**
    - Lab 5 (available at 11:30 AM | open 36 hours)
      - [Retro Lab]
      - [Your Actual Lab] - Preview


----


### Nov 10

- *Fall Break*
- **Today**
  - ***Bonus** Class*
    - This is a "catch-up" bonus class where you can ask questions and we can fill any knowledge "pot-holes" in the *Road to Recovery*.
    - Assignment 2 Questions?!


### Nov 12

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

----


### Nov 17

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
    - **In-Class Lab 6**
- **Homework**


### Nov 19

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

----

### Nov 24

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

### Nov 26

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

----


### Dec 01

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
    - **In-Class Lab 7**
- **Homework**


### Dec 03

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

----


### Dec 08

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

### Dec 10

- **Today**
  - 🕖 Part A)
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

----

### Dec 15

- **Today**
  - 🕖 Part A)
    - **In-Class Lab 8**
  - 🕗 Part B)
  - 🕘 Part C)
- **Homework**

