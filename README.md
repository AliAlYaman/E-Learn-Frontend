```
/src
│
├── /assets                 # Static files such as images, fonts, etc.
│
├── /components             # Reusable UI components
│   ├── /auth               # Authentication-related components (Login, Register)
│   ├── /layout             # Layout components (Navbar, Footer, Sidebar, etc.)
│   ├── /common             # Common UI components (Buttons, Inputs, Cards, etc.)
│   └── /course             # Course-related components (CourseCard, CourseList, etc.)
│
├── /pages                  # Pages of the application
│   ├── /auth               # Authentication pages (Login, Register)
│   ├── /courses            # Course pages (CourseDetail, CourseList, etc.)
│   ├── /profile            # User profile-related pages (ProfileView, EditProfile)
│   └── /error              # Error pages (404, 500)
│
├── /services               # API calls and external services
│   └── api.ts              # API service to handle Axios requests
│
├── /styles                 # Tailwind CSS and other global styling files
│   ├── tailwind.css        # Tailwind CSS configuration and global styles
│   └── globals.css         # Global styles if needed
│
├── App.tsx                 # Main app component
├── main.tsx                # App entry point (rendering the root component)
├── vite-env.d.ts           # TypeScript definitions for global types
└── index.css               # CSS file
```