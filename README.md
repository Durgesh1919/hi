# Admin Dashboard Backend

This project is a simple admin dashboard where administrators can manage employees and assign tasks. It is built using Node.js, Express, and MongoDB for the backend, and HTML, CSS, and JavaScript for the frontend.

## Features

- Add, view, and manage employees
- Assign tasks to employees
- View tasks and their statuses

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/admin-dashboard-backend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd admin-dashboard-backend
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root of the project and add your MongoDB connection string:
    ```env
    MONGODB_URI=mongodb://localhost:27017/admin_dashboard
    ```

5. Start the server:
    ```sh
    node server.js
    ```

### Frontend

1. Open `index.html` in your web browser to access the admin dashboard.

## Endpoints

### Employees

- **Create Employee**
  - Method: POST
  - URL: `/employees`
  - Body: 
    ```json
    {
      "name": "John Doe",
      "position": "Developer",
      "department": "Engineering"
    }
    ```

- **Get All Employees**
  - Method: GET
  - URL: `/employees`

### Tasks

- **Create Task**
  - Method: POST
  - URL: `/tasks`
  - Body:
    ```json
    {
      "title": "Complete Project",
      "description": "Complete the project by the end of the month",
      "assignedTo": "employee_id_here",
      "status": "Pending"
    }
    ```

- **Get All Tasks**
  - Method: GET
  - URL: `/tasks`

## Running the Application

1. Ensure MongoDB is running:
    ```sh
    mongod
    ```

2. Start the Node.js server:
    ```sh
    node server.js
    ```

3. Open `index.html` in your web browser.

## Folder Structure

- `server.js`: The main server file.
- `models/`: Contains Mongoose schemas for Employee and Task.
- `public/`: Contains HTML, CSS, and JavaScript files for the frontend.

## Notes

- Ensure MongoDB is running before starting the server.
- Replace `"employee_id_here"` with a valid employee ID when creating tasks.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspiration from various online tutorials and resources.

