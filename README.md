# AI Email Sender

A full-stack application built with **Angular** (frontend) and **Node.js** (backend) that allows users to:

- Input recipient email addresses.
- Provide a prompt for an AI-generated email.
- Generate an email using **Groq API** (or any AI model).
- Edit the generated email before sending.
- Send the email to the recipients using **Nodemailer**.

---

## 🚀 Features

1. **AI-Powered Email Generation**  
   Uses Groq API to generate email content from a user-provided prompt.

2. **Editable Email Draft**  
   Generated emails can be edited before sending.

3. **Multiple Recipients Support**  
   Send to one or multiple email addresses at once.

4. **Nodemailer Integration**  
   Securely sends emails from your configured SMTP server.

5. **Responsive UI**  
   Built with Angular for a clean, user-friendly interface.

---

## 🛠️ Tech Stack

**Frontend:** Angular, HTML, SCSS, TypeScript  
**Backend:** Node.js, Express.js  
**AI API:** Groq API  
**Email Sending:** Nodemailer  
**Other:** dotenv for environment variables

---

## 📂 Project Structure
```
AI_Email_Assestant/
├── backend/
│ ├── app.js # Backend entry point
│ ├── routes/
│ │ └── emailRoutes.js # Email-related API routes
│ ├── controllers/
│ │ └── emailController.js # Handles AI and sending logic
│ ├── services/
│ │ ├── mailService.js # Nodemailer setup and sending
│ │ └── groqService.js # Groq API integration
│ ├── package.json
│ └── .env # API keys and SMTP credentials
│
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/
│ │ │ │ └── email-generator/
│ │ │ │ ├── email-generator.component.ts
│ │ │ │ ├── email-generator.component.html
│ │ │ │ ├── email-generator.component.scss
│ │ │ └── services/
│ │ │ └── email.service.ts
│ ├── angular.json
│ └── package.json
└── README.md



```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vaishnavitomar019/AI_Email_Assestant.git
cd ai-email-assestant
```
## backend Setup
```bash
cd backend
npm install
npm start
```
## Frontend Setup
```bash
cd ../frontend
npm install
ng serve
```