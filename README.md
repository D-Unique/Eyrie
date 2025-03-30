<h1>EyrieNaija</h1>

<h2>Project Overview</h2>
EyrieNaija is a real estate marketplace designed to connect buyers, sellers, and administrators in a seamless and efficient manner. The platform enables secure authentication, property listings management, messaging, payments, and an admin dashboard for managing users, listings, and approvals. The goal is to provide a reliable, secure, and user-friendly platform for the Nigerian real estate market.

<h2>Objective</h2>
The platform's objective is to create a comprehensive marketplace where users can browse, buy, and sell properties. It will feature secure user authentication, property listings with detailed descriptions, messaging systems for buyer-seller communication, payment systems, and an admin dashboard to manage users and property listings effectively.

<hr/>

<h2>Key Features & Functionalities</h2>

<h3>Version 1.0 - Minimum Viable Product (MVP)</h3>
<h4> 1. User Roles & Authenticatio</h4>

<h5>Visitors (Unregistered Users):</h5>
<ul>
  <li>Browse properties</li>
  <li>search and filter listings</li>
  <li>view property details.</ll>
</ul>

<h5>Buyers (Registered Users):</h5>
<ul>
  <li>Create an account</li>
  <li>log in</li> 
  <li>save favorite properties.</li>
</ul>

<h5>Sellers (Verified Users):</h5>

Register and apply for verification, list properties for sale/rent (with approval needed).

Admin:

Verify and approve sellers, manage users and listings.

Property Listings Management

Sellers can create, edit (before approval), and delete listings.

Upload images, videos, and detailed descriptions.

Listings can be filtered by location, price, and type.

Mark properties as sold/rented.

Search & Filtering

Search properties by location, price range, property type, and number of bedrooms.

Messaging & Inquiry System

Sellers are notified when buyers make inquiries about properties.

Version 2.0 - Enhanced User Experience
Booking & Payment

Buyers can schedule property visits (post-payment).

Secure payment gateway integration for full purchases.

Reviews & Ratings

Buyers can rate and review sellers after property transactions.

Notifications & Alerts

Email & push notifications for new listings, saved searches, and messages.

Subscription Plans for Premium Listings

Free Listings: Lower search ranking, limited active listings (max of 5).

Premium Listings (Paid Subscription): Higher search ranking, featured on homepage, unlimited active listings.

Subscription tiers: Monthly, quarterly, and yearly.

Payment options: Cards, Paystack, bank transfer, USSD.

Automatic Renewal & Cancellation: Auto-renewal, with cancellation before the next billing cycle.

Rate Limiting for Visitors

Soft limits to encourage signups:

Show registration pop-up after 30 minutes.

Limit searches after 15 property views.

Final Version - Advanced Features & Optimization
AI-Powered Property Recommendations

Suggest properties based on search history, preferred locations, and budgets.

Video Property Tours

Sellers can upload virtual tours of properties.

Admin Dashboard Enhancements

Generate detailed reports on listings, sales, rentals, and subscription revenue.

Mobile App Compatibility

Full responsive design for both web and mobile.

Native apps for iOS and Android.

Team Structure for Functional Requirements Implementation
Week 1-2: Core Features & MVP (Version 1.0)
User Roles & Authentication

Frontend:

Build signup & login pages.

Create buyer dashboard (favorites, profile settings).

Develop seller registration & verification form.

Design admin dashboard for approvals.

Backend:

Implement JWT-based authentication.

Set up user roles & permissions.

Develop seller verification system (document upload, approval).

Manage admin functionalities.

Property Listings Management

Frontend:

Design property listing form.

Display listings with images and descriptions.

Implement "Mark as Sold/Rented" button.

Backend:

Develop CRUD operations for property listings.

Implement image/video upload.

Create approval workflow for listings.

Search & Filtering

Frontend:

Implement search bar and filter options.

Backend:

Develop search queries and indexing.

Messaging & Inquiry System

Frontend:

Create messaging UI for buyers & sellers.

Backend:

Implement real-time messaging.

Send email notifications to sellers.

Week 3-4: Enhanced User Experience (Version 2.0)
Booking & Payment System

Frontend:

Develop property visit scheduling form.

Build payment UI (checkout, invoice generation).

Backend:

Integrate payment gateway (Paystack, Cards, Bank Transfer).

Implement secure transaction logic.

Reviews & Ratings

Frontend:

Design review/rating system UI.

Backend:

Develop review submission & moderation system.

Notifications & Alerts

Frontend:

Implement real-time notifications.

Backend:

Set up email and push notifications.

Subscription Plans for Premium Listings

Frontend:

Develop subscription selection page.

Backend:

Implement subscription plans and payment integration.

Week 5-6: Rate Limiting for Visitors
Frontend:

Display registration pop-up after 30 minutes.

Limit searches after 15 property views.

Backend:

Track session time & search activity.

Restrict access after set limits.

Week 7-8: Final Enhancements & Optimization
Mobile App Compatibility

Frontend:

Ensure mobile-friendly UI for all features.

Develop native mobile apps for iOS & Android.

Backend:

Optimize API for mobile performance.

Performance Optimization & Security

Frontend:

Optimize loading speed (lazy loading for images).

Backend:

Improve database queries, implement fraud detection & encryption.

Final Testing & Deployment

Frontend:

Conduct UI/UX testing and bug fixing.

Backend:

Perform API load testing and deploy production.

Team Reshuffling Process
Teams will rotate weekly to encourage cross-functional collaboration and learning.

Weekly retrospective meetings will be held to improve team performance and project workflow.

Week 1-2 Team Assignments
Web Dev: Precious, Christian

Mobile Dev: Ope, Unknown

Backend Dev: Wisdom, Emmanuel

Week 3-4 Team Assignments
Web Dev: Ope, Unknown

Mobile Dev: Precious, Wisdom

Backend Dev: Christian, Emmanuel

Week 5-6 Team Assignments
Web Dev: Wisdom, Unknown

Mobile Dev: Christian, Emmanuel

Backend Dev: Precious, Ope

Week 7-8 Team Assignments
Web Dev: Emmanuel, Unknown

Mobile Dev: Precious, Christian

Backend Dev: Ope, Wisdom
