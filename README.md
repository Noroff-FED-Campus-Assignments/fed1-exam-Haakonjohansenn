[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10995697&assignment_repo_type=AssignmentRepo)
# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

<!-- You must replace these links -->

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/8KYzWFed1fSHxX6DuFon6b/Exam-design-Haakon?type=design&node-id=0-1&t=Za2zCJDiuahVyIGs-0)
- [Production deploy](https://fed1-exam-haakonjohansenn-7p28.vercel.app/)
- [Deployment CI](https://vercel.com/fed1-exam/fed1-exam-haakonjohansenn-7p28)
- [API Docs](https://app.getflywheel.com/haakonjohansen/discovertublog)
- [API Endpoint](https://discovertublog.flywheelsites.com/wp-json/wp/v2/posts)

## Deployment

Your deployment is done via static hosting provider (Vercel is recommended).
YOu can update your deployment pipeling by editing the [vercel.json](https://vercel.com/docs/concepts/projects/project-configuration).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FS3ak%2Ffed1-exam-vanilla-frontend-website&env=API_TOKEN,API_SECRET&envDescription=The%20API_TOKEN%20is%20needed%20to%20access%20a%20secure%20API%20endpoint.%20This%20can%20be%20the%20Authorization%20%60Bearer%20Token%60%20header%20used%20to%20make%20queries.&envLink=https%3A%2F%2Fvitejs.dev%2Fguide%2Fenv-and-mode.html&project-name=exam-front-end&repository-name=fed1-exam-vanilla-frontend-website&skippable-integrations=1)

## Report
Summary: For the project, I chose to create a travel-themed website with a focus on clean and simple design. The homepage featured a hero banner with a prominent call-to-action button, creating a visually appealing contrast. I incorporated a simple carousel section using JavaScript to fetch posts from an API and dynamically display them as cards with images and titles. The blog post page followed a clean and minimalist approach, though I faced initial CSS challenges that were eventually resolved. While I regret not including a search bar due to time constraints, I prioritized ensuring the functionality of other elements. On the blog details page, I encountered significant difficulties but managed to implement a modal feature using event listeners, allowing users to view images in a larger format. The contact page consisted of a straightforward contact form, and the about page showcased a unique and captivating design. Feedback received through Hotjar helped me refine certain aspects, such as fixing footer alignment and adjusting form labels and character limits. Despite distractions and time limitations, I found the project both frustrating and rewarding, with a sense of accomplishment in overcoming obstacles. Although I acknowledge room for further improvements and enhancements, considering the hours invested, I am satisfied with the final outcome.


Intro: In this report i will do my best to explain my thought process throughout the assignment. When figuring out the design for my project, i immediately had a thought of going with traveling, but decided to check out a few blogs to see if something else caught my eye. After looking for a good while i decided to go for traveling, i had a clear vision of how i wanted it to look like from the beginning, which was orange/dark kind of vibe, and i thought that would go perfectly with traveling. 

Homepage: For my homepage i decided to go for a hero banner with a call to action button right on top, i thought it contrasted well and looked clean and simple. I also filled in with a section after to make it more catching for the eye. For the carosel part i kept it really simple, all in all i wanted the homepage to look clean and simple.

To make the carousel work, I used JavaScript to fetch posts from an API and dynamically create HTML elements to display them. After fetching the posts, I parsed their content using the DOMParser API to extract images and titles. By appending the constructed HTML elements to a designated container on the webpage, the posts were displayed as cards. To enable carousel navigation, I implemented event listeners for the previous and next buttons. 

Blog post page: For this page i decided to keep it very clean and simple, i think it looks nice. I struggled alot with the css to begin with, i had some issues regarding margin and flex-box, but after a couple hours i figured it out. I did not make a search-bar, i wish i made one, but since i had little time left when i thought about it, i decided to leave it out and focus on everything else working. 

For the javascript fetching part i also decided to stick with my earlier used method of fetching, but i had to make a couple of changes to make my images appear the way i wanted them to, there was probably another way to do it, but after alot of testing and searching and asking chatgpt i found a way i thought worked well for me. As you can see i misunderstood which page i was supposed to make a modal for so i first made one for blog post page.

Blog Details Page: For my details page i had some serious issues making it work, it was quite a long time ago, so to be honest i dont really remember how i made it work, but a couple of days went into finding out what the issue was and how to fix it. For the design part i kept it very basic, i would say i was kind of lazy here.. I finished it very late because of my issues, and i was very frustrated so i ended up keeping it very simple and focus more on everything working as it should. 

I made the modal work by adding event listeners to the images within the post container, I enabled users to view images in a larger format. When an image is clicked, the displayModal function is triggered, creating a modal container dynamically using DOM manipulation. Inside the modal container, an image element is created and assigned the source of the clicked image. The modal container is then appended to the document body, allowing it to overlay the page content. To provide an intuitive way to close the modal, I added a click event listener to the modal container itself. When clicked, the closeModal function is triggered, removing the modal container from the DOM.

Contact page: For the contact page i made a very simple contact form, i used the same javascript from earlier assignment and made sure to change the names to make it work properly. Not much else to say about this page to be honest.

About page: For this page i wanted the design to be unique and catching which i think i made work nicely. The amount of text could probably be more and more filling, but i thought it looked allright so i decided to stick with it. 

Hotjar: Finally i sent my page to a classmate and asked him about things he would have changed, he first of all told me the footer was out of place on the contact page so i changed that, which he was right about. He also noticed that my contact form said invalid address instead of message, so i changed that quickly. Finally he told me that my subjectregex was 10 characters instead of 15, so i changed that as well. 

Conclusion: I really enjoyed this project, it was very frustrating and hard at times, but very rewarding and fun when you made it work. I am not happy with the amount of work i put in to this assignment. I got quite distracted by the beautiful weather and work, as well as a little vacation to my hometown! But with the amount of active hours i worked i think i got alot out of it and i am happy with the end result considering, even though i know i could have made alot more and tweaked the website to be much prettier. 

Referances: 

https://www.w3schools.com/
https://www.google.com/
https://stackoverflow.com/
https://www.youtube.com/
https://unsplash.com/
https://chat.openai.com/
https://coolors.co/
https://vercel.com/


## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] As a customer I can view the title of the item on the browser tab for a details page.
- [x] As a customer I can view validation message when they input an incorrect name.
- [x] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [x] As a customer I can view validation message when they input an incorrect Email address.
- [x] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long.
- [x] As a customer I want to be able to view the latest blog posts on the home page.
- [x] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [x] As a customer I want to be able to view a list of all blog posts on the blog section.
- [x] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [x] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [x] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [x] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [x] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [x] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [x] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [ ] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [ ] Validation still works when End-user uses copy and pastes into input fields.
- [ ] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] As a stakeholder, I want to view the website analytics.
- [ ] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [ ] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [ ] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [ ] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] Colour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [ ] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [ ] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- x] Removed all unused files.
- [ ] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Haakon Johansen (@HaakonJohansenn)
- Monde Sineke (@S3ak)
