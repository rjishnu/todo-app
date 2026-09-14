# Todo List Web App

A modern, feature-rich todo list application with Firebase backend and dark mode support.

## 🌟 Features

✅ **Add Tasks** - Create new tasks with optional due dates
✅ **Mark Complete** - Click tasks to mark them done (strikethrough effect)
✅ **Delete Tasks** - Remove individual tasks or clear all at once
✅ **Task Counter** - See how many tasks you have
✅ **Dark Mode** - Toggle between light and dark themes
✅ **Firebase Backend** - Tasks save online and sync in real-time
✅ **Persistent Storage** - Tasks saved forever (not just in browser)
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Beautiful UI** - Modern design with smooth animations
✅ **Icons** - Font Awesome icons for better UX

## 🚀 Live Demo

Visit the app online: **[Your GitHub Pages URL]**

## 📋 How to Use

1. **Add a Task:**
   - Type task name in input field
   - (Optional) Select a due date
   - Click "Add" or press Enter

2. **Mark Complete:**
   - Click on the task text
   - Task becomes faded with strikethrough

3. **Delete Task:**
   - Click the trash icon button
   - Task is removed

4. **Clear All:**
   - Click orange "Clear All" button
   - Confirm deletion

5. **Dark Mode:**
   - Click moon icon (top right)
   - Theme preference is saved

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript** - Functionality
- **Firebase Realtime Database** - Backend storage
- **Font Awesome** - Icons

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Main webpage structure |
| `style.css` | Styling and animations |
| `script.js` | All functionality |
| `firebase-config.js` | Firebase configuration |
| `README.md` | This file |

## 🔧 Setup (Local)

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start adding tasks!

## 🔥 Firebase Setup

Tasks are saved to Firebase (online). To set up:

1. Create Firebase project at https://console.firebase.google.com/
2. Create Realtime Database
3. Update `firebase-config.js` with your credentials
4. Done! Tasks now save online

See `FIREBASE_SETUP.md` for detailed instructions.

## 📱 Features Explained

### Task Counter
Shows total number of tasks at the top

### Due Dates
Optional date picker for each task
- Click date input to select date
- Date appears below task name

### Dark Mode
Click moon icon to toggle theme
- Preference is saved in browser
- Works with Firebase

### Animations
- Tasks slide in when added
- Smooth hover effects
- Color transitions

### Responsive Design
- Works on all screen sizes
- Mobile-friendly layout
- Touch-friendly buttons

## 🚀 Deploy to GitHub Pages

1. Create GitHub account (free at github.com)
2. Create repository named `todo-app`
3. Upload these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `firebase-config.js`
   - `README.md`
4. Enable GitHub Pages in Settings
5. Visit: `https://YOUR_USERNAME.github.io/todo-app`

See `DEPLOY_GITHUB_PAGES.md` for detailed instructions.

## 🐛 Troubleshooting

**Tasks not saving?**
- Check Firebase config in `firebase-config.js`
- Check Firebase database rules allow read/write
- Open browser console (F12) for errors

**App not loading?**
- Make sure all files are in same folder
- Check browser console for errors
- Try clearing browser cache

**Dark mode not working?**
- Check browser allows localStorage
- Try different browser

See `DEBUG_FIREBASE.md` for more help.

## 📚 Learning Resources

- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Firebase: https://firebase.google.com/docs
- GitHub Pages: https://pages.github.com/

## 💡 Future Enhancements

- User authentication (login/signup)
- Task categories/tags
- Task priority levels
- Recurring tasks
- Task notes/descriptions
- Collaboration (share tasks)
- Mobile app version

## 📄 License

Free to use and modify!

## 👨‍💻 Created By

Built as a learning project for web development.

---

**Enjoy your todo app! 🎉**