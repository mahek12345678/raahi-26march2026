# Project Overview

This project is designed to facilitate efficient carpooling services with a fallback taxi option, aimed at promoting shared transportation and reducing carbon emissions.

---

# Core Concept

The core concept revolves around combining carpooling and taxi services to provide users with flexible and cost-effective transportation choices. Users can share rides with others heading in the same direction, and in case of unavailable matches, they have the option to book a fallback taxi.

---

# Features
- **User Registration and Authentication**: Allows users to create accounts and log in securely.
- **Ride Matching Algorithm**: Smart algorithm that matches riders based on proximity, destination, and timing.
- **Fallback Taxi Service**: Provides users with taxi options if a carpool match is not available.
- **User Profiles**: Users can create and manage their profiles, including preferences and vehicle details.
- **Rating and Feedback System**: Users can rate their ride experience and provide feedback to improve service quality.

---

# Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: AWS, Docker

---

# User Types
1. **Passenger**: Users looking for rides, can search for carpool options and book a ride.
2. **Driver**: Users offering rides, can post their available trips for matching.
3. **Admin**: Users with administrative privileges to manage the application, oversee rides, and handle user issues.

---

# Vehicle Types
- **Compact Cars**: Suitable for 1-2 passengers.
- **Sedans**: Can accommodate 3-4 passengers.
- **SUVs**: For larger groups, can accommodate 5-6 passengers.

---

# Core Constraints
- **35km Radius**: Rides are limited to a maximum radius of 35km.
- **Matching Criteria**: Matches are based on departure time, destination proximity, and passenger preferences.

---

# Screen Descriptions
- **Home Screen**: Displays options to search for rides or post a ride.
- **Search Results Screen**: Lists available carpool matches and taxi options.
- **Ride Details Screen**: Provides details about the selected ride including driver info, vehicle type, and fare.
- **Profile Screen**: Allows users to view and edit their personal details and settings.

---

# Backend Features
- **RESTful API**: All functionalities can be accessed through RESTful APIs.
- **User Management**: Handles user registrations, logins, and profile management.
- **Ride Management**: Supports ride posting, searching, and booking.

---

# Database Schema
- **Users**: Stores user details including ID, name, email, user type, and vehicle info.
- **Rides**: Contains ride details including ride ID, driver ID, passenger IDs, start and end points, and timing.
- **Feedback**: Records feedback details such as ratings and comments related to rides.

---

# Project Structure
```
/raahi-26march2026
│
├── /frontend   # Contains all frontend code
│   ├── /src
│   ├── /public
│   └── ...
│
├── /backend    # Contains all backend code
│   ├── /models
│   ├── /controllers
│   └── ...
│
└── /docs       # Documentation files
```

---

# Setup Instructions
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the frontend and backend directories and install dependencies:
   - `cd frontend && npm install`
   - `cd backend && npm install`
3. Set up environment variables as specified in `.env.example` file.
4. Start the application:
   - `npm start` in both `frontend` and `backend` directories.

---

# Deployment Guidelines
1. Ensure that the application is tested thoroughly in a staging environment.
2. Build the frontend application: `cd frontend && npm run build`
3. Deploy the backend API using Docker:
   - Use the Dockerfile located in the backend directory.
   - Set up a MongoDB instance for the database.
4. Configure and deploy to AWS using the Elastic Beanstalk or similar service.

---

Feel free to reach out for further assistance or contributions!