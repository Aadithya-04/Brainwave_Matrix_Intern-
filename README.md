# Brainwave_Matrix_Intern
To-Do List 

# To-Do List Application

This is a simple, responsive To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add, remove, and mark tasks as complete. It also features task filtering and displays task completion statistics using a doughnut chart.

## Features

- **Add Tasks**: Users can add tasks with optional details.
- **Remove Tasks**: Users can remove tasks from the list.
- **Mark as Complete**: Users can mark tasks as complete, which moves them to the end of the list.
- **Filter Tasks**: Users can filter tasks to show all, completed, or incomplete tasks.
- **Task Completion Statistics**: Displays the percentage of completed tasks and other motivational messages.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Files

- `index.html`: The main HTML file that structures the To-Do List application.
- `style.css`: The CSS file that styles the application.
- `script.js`: The JavaScript file that contains the functionality of the application.

## Usage

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```sh
    cd to-do-list
    ```

3. **Open `index.html` in your browser** to use the application.

## HTML Structure (`index.html`)

The HTML file sets up the structure of the To-Do List application. It includes:

- A header with the title "TO-DO List".
- A main container that holds the task input form and the list of tasks.
- A progress container that shows the task completion statistics using a Chart.js doughnut chart.

## CSS Styling (`style.css`)

The CSS file styles the To-Do List application, making it visually appealing and responsive. Key styles include:

- Basic styles for the body and header.
- Styles for the form elements to input tasks.
- Styles for the task list, including completed tasks.
- Animations for adding and removing tasks.
- Styles for the task completion statistics.

## JavaScript Functionality (`script.js`)

The JavaScript file contains the functionality of the To-Do List application, including:

- **Event Listeners**: For adding tasks, handling task clicks (mark as complete/remove), and filtering tasks.
- **Functions**:
  - `addTodo`: Adds a new task to the list.
  - `handleTodoClick`: Handles clicks on task items to mark them as complete or remove them.
  - `filterTodo`: Filters tasks based on their completion status.
  - `moveCompletedToEnd`: Moves completed tasks to the end of the list.
  - `updateTaskGraph`: Updates the task completion statistics using Chart.js.
  - `showAlert`: Displays an alert message for a short duration.

## Dependencies

- **Font Awesome**: For icons used in the buttons.
- **Google Fonts**: For the Poppins font.
- **Chart.js**: For displaying the task completion statistics.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
