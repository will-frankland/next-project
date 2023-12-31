## About this app

This app is a prompt creator that allows a user to signin using Google Authentication. They can then create prompts accompanied with #tags.

The app was built with NextJs, Tailwind CSS, MongoDB and utilizes CRUD operations to manage user prompts. 

The site is fully mobile compatible and has a 'My Profile' section which will display the prompts created by that user only. These can be edited and deleted.

There is also search functionality to search by username, tag and phrases within prompts.

Code has been reused in areas such as modifiying the Create Post page to handle Edits when a user chooses to Edit Post.

## Getting Started

First, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- NextJs
- TailwindCSS
- MongoDB
- HTML

## Dependencies

- bcrypt
- next-auth
- Google Auth

## Screenshots

![Screenshot of Homepage](docs/homepage.png)
!["Screenshot of Create Post Page"](docs/createPostPage.png)
!["Screenshot of Mobile View showing Menu"](docs/mobileCompatability.png)
!["Screenshot of Profile Page"](docs/myProfilePage.png)
