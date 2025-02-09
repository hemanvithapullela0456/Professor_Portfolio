# Professor Portfolio Website  

A responsive and modern portfolio website designed for professors to showcase their academic achievements, publications, research work, and more. Built using **Vite**, **React**, and **Tailwind CSS** for the frontend, with **Strapi** as the backend to manage content through an intuitive admin panel.  

---

## 🚀 Features  
- **Frontend:** Elegant and responsive UI  
- **Backend:** Admin panel powered by **Strapi** for easy content management  
- **Dynamic Sections:** Research, Publications, and Contact  
- **Fast Performance:** Optimized for speed with Vite and Tailwind  
- **Seamless Deployment:** Integrated for hosting on Vercel  

---

## 🛠️ Tech Stack  
- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Backend:** [Strapi](https://strapi.io/)  
- **Database:** Cloud-hosted (via Strapi's services)  
- **Deployment:** Vercel (Frontend), Strapi Cloud (Backend)  

---

## 🔧 Installation & Setup  

### Prerequisites  
- Node.js (v14 or higher)  
- npm or yarn  

---

### **1. Clone the Repository**
```bash
git clone https://github.com/hemanvithapullela0456/Professor_Portfolio.git
cd professor-portfolio
```

### **2. Set up the Frontend**
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.  

---

### **3. Backend Information**
The backend is deployed at **[Strapi Admin Panel](https://legendary-garden-b29e23ea65.strapiapp.com/admin)**.  
No local backend setup is required as the backend is hosted in the cloud.  

### **4. Configure Backend API in Frontend**
In the frontend project, update the API base URL in your environment configuration file:
```js
const API_URL = "https://legendary-garden-b29e23ea65.strapiapp.com";
```

---

## 🏗️ Building for Production  

### **Frontend**
```bash
cd frontend
npm run build
```
The build will be available in the `dist` folder.  

---

## 🌐 Deployment  
1. **Frontend Deployment:** Push the code to GitHub and connect to Vercel. Choose **Vite** as the framework.  
2. **Backend Deployment:** Backend already deployed on **Strapi Cloud**.

---

## 🎨 Customization  
- Update content via the **Strapi Admin Panel**.  
- Modify frontend styles via `tailwind.config.js`.  

---


---

## 📄 License  
This project is licensed under the MIT License.  

