# TodoApp

## Overview

**TodoApp** is a simple and intuitive task management application built with React. It allows users to manage tasks, filter tasks based on their status, and search for tasks. The app includes features like task addition, deletion, updating, and toggling completion status. It also provides a responsive sidebar navigation with an offcanvas menu using React Bootstrap.

## Features

- **Add Tasks**: Easily add new tasks with a single button click.
- **Search Tasks**: Search for tasks by name to quickly find specific items.
- **Filter Tasks**: View tasks by status: All, Incomplete, or Completed.
- **Update Tasks**: Modify the name of existing tasks.
- **Toggle Completion**: Mark tasks as completed or incomplete.
- **Responsive Design**: Offcanvas navigation that adapts to different screen sizes.

## Tech Stack

- **Frontend**: React, React Bootstrap, React Icons
- **Styling**: Bootstrap CSS, Custom CSS

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/SubhranShu2332/todo-react.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd todoapp
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```

   The application will be available at `http://localhost:5173`.

## Usage

1. **Adding Tasks**:
   - Type the task name in the input field and click "Add Task".

2. **Searching Tasks**:
   - Enter a keyword in the search field to filter tasks by name.

3. **Filtering Tasks**:
   - Use the buttons in the sidebar to switch between viewing all tasks, incomplete tasks, or completed tasks.

4. **Updating Tasks**:
   - Click on the "Update" button next to a task to change its name.

5. **Toggling Completion**:
   - Click the round checkbox next to a task to mark it as completed or incomplete.

6. **Deleting Tasks**:
   - Click the "Delete" button next to a task to remove it from the list.

7. **Logout**:
   - Click "Log Out" in the sidebar to log out of the application.

## Project Structure

- **src/**: Contains all source files for the application.
  - **components/**: Reusable components like `TodoDisplay` and `AppNavbar`.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.
  - **styles.css**: Custom CSS for additional styling.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make your changes**.
4. **Commit your changes**:

    ```bash
    git commit -m "Add new feature"
    ```

5. **Push to the branch**:

    ```bash
    git push origin feature/your-feature
    ```

6. **Create a Pull Request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components built with React.
- **React Icons**: SVG icon library for React.
