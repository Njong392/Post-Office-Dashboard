# 🦄 Post Office System Dashboard
This website serves as the dashboard for a post office management system, and specifically for package management. From the dashboard, the admin can see all packages registered to users who have the mobile application installed, and they are able to also register information about all incoming packages. 

# ⚒️ How does it work?

When a new package arrives at the post office, the admin manually inputs the package details. Details such as where the package is coming from, to who it is to be sent to, the category of the package, and the due dates for collection and resending. Once a package is registered for a user, they get a notification on a mobile app which is linked to the dashboard. Whenever the status of the package changes, the user is also notified. 

When a package is overdue, it is sorted to the top of the list of packages where the admin can immediately see.

![main user table showing all users](<Screenshot (350).png>)

![Post office dashboard with a table showing users and package information](<Screenshot (352).png>)


# ⚙️ Tech Stack
This site runs on
- Reactjs for the frontend
- Firebase for the backend/authentication
- TailwindCSS for styling