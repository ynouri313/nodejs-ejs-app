
# Node.js MVC App with MySQL and Docker

This is a simple Node.js application that follows the **MVC (Model-View-Controller)** structure. It uses **MySQL** as a database and **EJS** as the templating engine to display data. The app is fully containerized using **Docker Compose** for easy deployment.

---

## Features

- **MVC Structure**:
  - Separation of concerns with clear division into Models, Views, and Controllers.
- **Dynamic Views**:
  - EJS templates render dynamic content.
- **Database Integration**:
  - MySQL database to manage students, courses, and teachers.
- **Dockerized**:
  - Multi-container setup for frontend and database.
- **Styling**:
  - Clean and responsive design with a background image and styled buttons.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## Directory Structure

```
my-app/
├── frontend/                  # Node.js app (frontend)
│   ├── public/                # Static files
│   │   ├── css/               # Stylesheets
│   │   │   └── styles.css
│   │   ├── images/            # Images
│   │   │   └── background.jpg
│   ├── views/                 # EJS templates
│   │   ├── index.ejs
│   │   └── students.ejs
│   ├── routes/                # Controllers and routes
│   │   ├── index.js
│   │   └── students.js
│   ├── models/                # Database queries
│   │   └── studentModel.js
│   ├── config/                # Configurations
│   │   └── database.js
│   ├── app.js                 # Main application file
│   └── package.json           # Node.js dependencies and scripts
├── mysql/                     # MySQL database setup
│   ├── setup.sql              # Database initialization script
├── docker-compose.yml         # Docker Compose configuration
└── README.md                  # Project documentation
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Start the Containers

```bash
docker-compose up --build
```

This will start the following services:
- `frontend`: The Node.js app running on port 80.
- `mysql`: The MySQL database running on port 3306.

### 3. Access the App

- Open [http://localhost](http://localhost) in your browser.
- You will see the home page with a "View Students" button.

---

## Application Overview

### Home Page
- Displays a welcome message.
- Includes a button to navigate to the students' page.

### Students Page
- Displays a list of students, their courses, and teachers.
- Fetches data dynamically from the MySQL database.

---

## Environment Variables

The app uses the following environment variables (defined in `docker-compose.yml`):

| Variable       | Default Value | Description                      |
|----------------|---------------|----------------------------------|
| `DB_HOST`      | `mysql`       | Hostname of the MySQL database   |
| `DB_USER`      | `root`        | MySQL username                   |
| `DB_PASSWORD`  | `password`    | MySQL password                   |
| `DB_NAME`      | `school`      | MySQL database name              |

---

## Database Initialization

The `setup.sql` file initializes the database with the following schema and data:

### Tables
- **`teachers`**: Stores teacher details.
- **`courses`**: Stores course details and their assigned teachers.
- **`students`**: Stores student details and their enrolled courses.

### Sample Data
- Teachers: `Mr. Smith`, `Ms. Johnson`
- Courses: `Math`, `Science`
- Students: `Alice`, `Bob`

---

## Styling

The app uses a custom CSS file (`public/css/styles.css`) for styling:

- A **background image** applied to all pages.
- A **responsive button** for the "View Students" link.
- Tables are styled with alternating background colors for better readability.

---

## Docker Setup

### Services
- **`frontend`**: Node.js app (on port 80).
- **`mysql`**: MySQL database (on port 3306).

### Volumes
- `mysql_data`: Persists database data between container restarts.

---

## Debugging and Logs

### Check MySQL Logs
```bash
docker logs mysql
```

### Test Database Connection
Visit `/students/test` to check if the database connection is successful.

---

## Deployment

### Using GitHub Actions
To automate the deployment, you can set up a GitHub Actions workflow to:
1. Build the Docker image.
2. Push it to Docker Hub.
3. Deploy it to your server.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [EJS](https://ejs.co/)

---
