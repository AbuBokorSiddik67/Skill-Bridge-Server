# Skill-Bridge-Server
adminToken= Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4YmZjOTUxLTc3MzYtNDhlYS04YWJhLTdjYjhjOGQ5NmMyYSIsIm5hbWUiOiJTeXN0ZW0gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdGF0dXMiOiJBQ1RJVkUiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTc3MjE2MDQ5MSwiZXhwIjoxNzcyNzY1MjkxfQ.ViYIK19rhWQHQahYH9DmB-H_yldOH9i6I3wcIstmYyE

Student/UserRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/auth/register
http://skillbridgeserver-gules.vercel.app/v1/api/auth/login
http://skillbridgeserver-gules.vercel.app/v1/api/auth/me
http://skillbridgeserver-gules.vercel.app/v1/api/students/profile-update/:id
http://skillbridgeserver-gules.vercel.app/v1/api/students/profile-update/:id
http://skillbridgeserver-gules.vercel.app/v1/api/students/delete-profile/:id
}

TutorRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/tutors/create
http://skillbridgeserver-gules.vercel.app/v1/api/tutors
http://skillbridgeserver-gules.vercel.app/v1/api/tutors/id
http://skillbridgeserver-gules.vercel.app/v1/api/tutors/update/:id
http://skillbridgeserver-gules.vercel.app/v1/api/tutors/delete/:id
}

CategoryRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/categories/create
http://skillbridgeserver-gules.vercel.app/v1/api/categories
http://skillbridgeserver-gules.vercel.app/v1/api/categories/:id
http://skillbridgeserver-gules.vercel.app/v1/api/categories/update/:id
http://skillbridgeserver-gules.vercel.app/v1/api/categories/delete/:id
}

BookingsRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/bookings/create
http://skillbridgeserver-gules.vercel.app/v1/api/bookings
http://skillbridgeserver-gules.vercel.app/v1/api/booking/my-bookings/:id
http://skillbridgeserver-gules.vercel.app/v1/api/bookings/update/:id
http://skillbridgeserver-gules.vercel.app/v1/api/bookings/delete/:id
}

ReviewRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/reviews/create
http://skillbridgeserver-gules.vercel.app/v1/api/reviews
http://skillbridgeserver-gules.vercel.app/v1/api/reviews/tutor/:id
http://skillbridgeserver-gules.vercel.app/v1/api/reviews/student/:id
http://skillbridgeserver-gules.vercel.app/v1/api/reviews/delete/:id
}

AdminRoute{
http://skillbridgeserver-gules.vercel.app/v1/api/admin/deleted-users
http://skillbridgeserver-gules.vercel.app/v1/api/admin/delete-users/:id
}

 