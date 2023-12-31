# Blogging application - ECE Webtech project

Node.js is used in order to create a localhost which respond with Hello and a name depending of the url and Next.js is going to be used to create a page.
http://localhost:3000/

## Usage
1. Clone the repository to your machine
``` bash
git clone https://github.com/benjhan/ece-webtech-2023-fall-gr03-05/
```
2. Install prerequisites application : Node.js
```bash 
npm install
```
3. Go to your Terminal and run in the app file: 
```bash
cd app
npm run dev
```
4. Run the supabase server by going into supabase file 
```bash
cd supabase
docker compose -f ./docker-compose.yml -f ./dev/docker-compose.dev.yml up
```
5. Open a web browser and visit the different page
https://ece-webtech-2023-fall-gr03-05.vercel.app/

## Deliverables 

- Vercel URL: https://ece-webtech-2023-fall-gr03-05.vercel.app/
- Supabase project URL:

## Authors

- ThÃ©ophile Broqua
- Benjamin Han    
- Adrian Athanasopoulos

## Evaluation

### Mandatory Tasks

# Project Feedback

* **Naming Convention**
  * Grade: 2/2
  * Comments: We diligently adhered to community conventions and best practices to ensure consistency across our project.
  * Task Feedback: This was a time-intensive task, as it required meticulous checks after each file creation to ensure adherence to standards.

* **Project Structure**
  * Grade: 2/2
  * Comments: We established a robust project structure early in the lab, which streamlined our workflow significantly.
  * Task Feedback: This aspect was straightforward, thanks to our early adoption of an effective organizational framework.

* **Git Usage**
  * Grade: 2/2
  * Comments: We made concerted efforts to maintain a linear and clean main branch.
  * Task Feedback: Initially, we encountered some challenges with GitHub, but these were resolved, allowing for smoother subsequent operations.

* **Code Quality**
  * Grade: 4/4
  * Comments: Our code, crafted with guidance from manuals and online resources, emphasizes clarity and maintainability through proper line spacing and comprehensive commenting.
  * Task Feedback: This required rigorous and repeated code reviews to ensure it met high-quality standards.

* **Design, UX, and Content**
  * Grade: 4/4
  * Comments: We focused on optimizing user experience, leveraging Tailwind CSS extensively for design enhancements.
  * Task Feedback: Implementing the desired user interface required extensive exploration and application of Tailwind CSS commands.

* **Home Page**
  * Grade: 2/2
  * Comments: The homepage design prioritizes user interaction and features welcoming color schemes to foster a sense of security.
  * Task Feedback: The implementation was facilitated using Gravit Designer, allowing for an efficient design process.

* **Navigation**
  * Grade: 2/2
  * Comments: Navigation elements were seamlessly integrated into the header and consistently applied across all pages through the layout template.
  * Task Feedback: Thanks to our foundational coursework, this element was straightforward to implement.

* **Login and Profile Page**
  * Grade: 4/4
  * Comments: Building on our lab exercises, we added a profile page that utilizes fetch functions to retrieve user data from Supabase.
  * Task Feedback: The implementation was streamlined due to the practical skills acquired in our courses.

* **Post Creation and Display**
  * Grade: 5/6
  * Comments: Posts are dynamically generated using a 'Post' component, which is populated with data fetched from Supabase. Challenges arose in creating unique slug pages for each post.
  * Task Feedback: While post creation was manageable, designing unique slugs required innovative use of Supabase's key generation feature. The primary limitation lies in our current inability to edit posts.

* **Comment Creation and Display**
  * Grade: 4/4
  * Comments: Similar to posts, comments are handled through a dedicated component. These are fetched and displayed under the corresponding posts.
  * Task Feedback: This was akin to developing the contact form, albeit with modifications to suit the context of individual posts.

* **Post Modification and Removal**
  * Grade: 2/4
  * Comments: We are able to delete and edit data from supabase, we are able to limit the modification to people authentificated but not restricting for the author
  * Task Feedback: A lot of issues during developpement made this task longer than expected and we can't hide the edit post 

* **Search Functionality**
  * Grade: 0/6
  * Comments: The implementation of a search feature was not realized.
  * Task Feedback: This feature was initially planned but ultimately not executed due to various external constraints.

* **External API Integration**
  * Grade: 0/2
  * Comments: Integration with an external API was not accomplished.
  * Task Feedback: Although planned, this aspect was discontinued due to several external factors.

* **Resource Access Control**
  * Grade: 5/6
  * Comments: Implementing access control via Supabase's RLS was straightforward, enhancing our database security.
  * Task Feedback: While RLS implementation was effective, there's potential for further refinement.

* **Account Settings**
  * Grade: 4/4
  * Comments: We implemented a dynamic profile creation system linked to user accounts, allowing for customizable user profiles.
  * Task Feedback: We encountered issues with automatic profile creation upon new user registration, which required additional coding to resolve.

* **WYSIWYG Integration**
  * Grade: 1/2
  * Comments: Efforts were made to align with WYSIWYG principles, though full integration was not achieved.
  * Task Feedback: Understanding and implementing WYSIWYG integration posed challenges, and our implementation may not fully align with its core principles.

* **Gravatar Integration**
  * Grade: 0/2
  * Comments: Gravatar integration was not implemented.
  * Task Feedback: This feature was part of our initial plan but was ultimately

* **Light/dark mode**
  * Grade: 2/2
  * Comments: HAd created a darkcontext in component folder and have import it into all file so when pressed it's called for the dark context and change all the white background to black
  * Task feedback: Hard to implement but should have a easier way which we didn't find

### Bonus Tasks

* ***Admin mode***   
  * Grade: 0.5
  * Comments: We've try to implement admin mode by putting a boolean attribute to profiles database and by creating the admin/contacts mode. Didn't finished implement it

## Miscellaneous

### Course Feedback

The course was insightful and provided valuable information. However, I encountered some challenges with the final labs and was unable to attend the last session to seek clarification. Due to the high volume of students requiring assistance, I felt that the instructor was overwhelmed, which limited the opportunity for personalized attention to address individual issues.

For future sessions, it may be beneficial to consider:

Additional support sessions or office hours, allowing students to seek help in a more focused setting.
A structured Q&A segment within the class where each student is given a chance to voice their questions.
Supplemental materials or resources that could be referred to outside of class time for common issues encountered in labs.
I believe these suggestions could enhance the learning experience and ensure that all students have the opportunity to fully grasp the course material, even when the instructor's time is in high demand.

### Project Reuse

- [/] We authorize the professors to use our project as an example for the next year students (facultative).