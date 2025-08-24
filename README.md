# WireFrame API

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

WireFrame API is a learning project built with Next.js 15+ using the App Router. It demonstrates:

- Fetching data from APIs
- Building layouts with external CSS (no UI libraries)
- Implementing custom dark/light theme toggling
- Organizing pages using the App Router structure

## Features

- **Home Page:** Introduction and learning objectives.
- **About Page:** Project purpose and structure.
- **Contact Page:** Contact form with API integration ([Web3Forms](https://web3forms.com/)).
- **Profile Page:** Example profile layout.
- **Projects Page:** Example of fetching and displaying posts from an external API.
- **Theme Toggle:** Switch between light and dark modes.

## Getting Started

First, install dependencies:

```sh
npm install
```

Then, run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
  app/
    layout.js         # Root layout with Navbar and ThemeToggle
    page.js           # Home page
    about/page.js     # About page
    contact/page.js   # Contact form page
    profile/page.js   # Profile page
    projects/
      page.js         # Projects overview
      posts/page.js   # Posts fetched from API
  components/
    Navbar.js         # Navigation bar
    ThemeToggle.js    # Theme toggle button
  styles/
    *.css             # External CSS files for each section
```

## API Integration

- The **Contact** page uses [Web3Forms](https://web3forms.com/) for form submissions.
- The **Projects > Posts** page fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Customization

- All styling is handled via external CSS in `src/styles/`.
- Theme toggling is implemented in [`ThemeToggle`](src/components/ThemeToggle.js).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE)

## Contact Page Details

The **Contact** page features a simple, accessible form that collects a user's name, email, and message. When the form is submitted:

1. The form data is collected and converted to JSON.
2. An API request is sent to [Web3Forms](https://web3forms.com/) using a secure access key.
3. On successful submission, the user receives a confirmation alert and the form resets.

This approach allows you to handle contact requests without needing your own backend server.

**Contact Form Code Highlights:**
- Uses the native `fetch` API for POST requests.
- Handles form submission asynchronously.
- Provides user feedback on success.

## Wireframe & Styling Approach

This project uses a "wireframe" design philosophy:
- **Minimal UI:** No external UI libraries; only custom CSS.
- **Clear Structure:** Each page and component has its own CSS file in `src/styles/`.
- **Consistent Layout:** The layout is defined in `src/app/layout.js` and includes a navigation bar and theme toggle.
- **Wireframe Look:** The CSS uses simple borders, spacing, and typography to mimic classic wireframe/mockup tools, making the structure and flow of the app clear without visual distractions.

You can easily customize the look by editing the CSS files in the

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

---

> 🚀 **Happy coding!**  
> Build, experiment, and make it your own.  
> If you like this project, feel free to star it or share