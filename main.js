document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const taskForm = document.getElementById('task-form');
    const employeeList = document.getElementById('employee-list');
    const taskList = document.getElementById('task-list');
    const taskAssignedTo = document.getElementById('task-assignedTo');

    const API_URL = 'http://localhost:3000';

    const fetchEmployees = async () => {
      const response = await fetch(`${API_URL}/employees`);
      const employees = await response.json();
      employeeList.innerHTML = employees.map(employee => `
        <div class="list-item">
          <strong>${employee.name}</strong> - ${employee.position} (${employee.department})
        </div>
      `).join('');

      taskAssignedTo.innerHTML = employees.map(employee => `
        <option value="${employee._id}">${employee.name}</option>
      `).join('');
    };

    const fetchTasks = async () => {
      const response = await fetch(`${API_URL}/tasks`);
      const tasks = await response.json();
      taskList.innerHTML = tasks.map(task => `
        <div class="list-item">
          <strong>${task.title}</strong> - ${task.description}
          <br>Assigned to: ${task.assignedTo ? task.assignedTo.name : 'N/A'}
          <br>Status: ${task.status}
        </div>
      `).join('');
    };

    employeeForm.addEventListener('submit', async (event) => {
event.preventDefault();
const name = document.getElementById('employee-name').value;
const position = document.getElementById('employee-position').value;
const department = document.getElementById('employee-department').value;

await fetch(`${API_URL}/employees`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, position, department })
});

employeeForm.reset();
fetchEmployees(); // Refresh employee list after successful creation
});


    taskForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const title = document.getElementById('task-title').value;
      const description = document.getElementById('task-description').value;
      const assignedTo = document.getElementById('task-assignedTo').value;
      const status = document.getElementById('task-status').value;

      await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, assignedTo, status })
      });

      taskForm.reset();
      fetchTasks();
    });

    fetchEmployees();
    fetchTasks();
  });