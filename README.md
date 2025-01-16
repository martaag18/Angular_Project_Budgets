# S6. Budgets Project with Angular



## 📄 Description
In this project, we are building a dynamic budget calculator for web services. 

The application allows users to generate a budget based on selected services, customize certain parameters, and keep track of multiple budgets. 

The goal is to practice working with Angular, reactive forms, and implement various user interactions, such as checkboxes, input fields, and dynamic components.



|   |   |   |
|---|---|---|
| ![image](https://github.com/user-attachments/assets/e5b8e3fa-c40a-43bd-af10-4a44dd23a8e6) | ![image](https://github.com/user-attachments/assets/a503e957-0daf-4ef6-9b6f-8243d2971759) | ![image](https://github.com/user-attachments/assets/052631a6-38d8-42bc-8f66-65d792eaf521) |



## 🚀 Technologies Used

HTML/SASS/Bootstrap 5: For structuring and styling the application, ensuring responsiveness and ease of use.

Angular: Framework for building the web application, including components, services, and routing.

Reactive Forms: For creating forms with validation using FormGroup and FormControl.

Signals: To manage and render multiple budgets dynamically.

Bootstrap: For UI components like modals and buttons to improve user interaction.



## 📋 Requirements

To run this project, you’ll need:

Node.js (version 14 or higher)

npm (usually included with Node.js)

Angular CLI for project setup and running the application

Visual Studio Code (recommended editor)



## 🌐 Deployment

To run or test changes locally:

Clone the repository:

bash
Copiar código
git clone <repository_url>
Install dependencies:

bash
Copiar código
npm install

Run the application:

bash
Copiar código
ng serve -o



## 📝 Functionality Overview

### Service Selection:
Users can choose from three services to build a budget:

SEO Campaign (300 €)

Advertising Campaign (400 €)

Website Development (500 €)

Dynamic Price Calculation:
As users select services, the total price is dynamically updated.

Panel for Web Services:
Once a user selects a website service, a new panel appears allowing the user to specify the number of pages and languages. 

The cost for the website is calculated as:
(Number of pages * Number of languages * 30 €).

Reactive Forms:
The form uses FormGroup and FormControl to manage input values and ensure proper validation.

Help Modal:
A button with an info icon opens a Bootstrap modal to explain the input fields for pages and languages.

Multiple Budgets:
Users can generate and store multiple budgets, including client information (name, phone, email) and the selected services.

Budget Sorting and Searching:
Users can sort budgets by date, price, or alphabetically and search for budgets based on the client’s name.

Sharing Budgets:
Users can share a specific budget by copying the URL, which will retain the selected options.



## ⚙️ Testing Notes

To ensure the functionality works correctly:

Verify that the dynamic calculation of the budget price works as expected when services and parameters are selected.

Test that the modal with help information opens and displays correctly.

Check that multiple budgets can be created and stored, and verify sorting and searching functionality.

Make sure the URL updates when a budget is selected, and the shared URL shows the correct options.



## 💬 Fun Notes

This project is not just about implementing functionality, but also about improving user interaction. 

Seeing your budget form evolve and allowing users to generate and share their custom budgets will bring a lot of satisfaction as you build this application.

Enjoy the process of working with Angular and mastering reactive forms!
