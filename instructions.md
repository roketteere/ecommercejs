# Sequelize E-Commerce Back End Cheatsheet

## Setup & Configuration
1. Install required packages: `npm install express mysql2 sequelize dotenv`
2. Create `.env` file to store MySQL credentials
3. Update `config/connection.js` to use environment variables and setup Sequelize

## Database Models
1. Category
   - id (Integer, no null, primary key, auto-increment)
   - category_name (String, no null)
2. Product
   - id (Integer, no null, primary key, auto-increment)
   - product_name (String, no null)
   - price (Decimal, no null, validate as decimal)
   - stock (Integer, no null, default 10, validate as numeric)
   - category_id (Integer, references Category's id)
3. Tag
   - id (Integer, no null, primary key, auto-increment)
   - tag_name (String)
4. ProductTag
   - id (Integer, no null, primary key, auto-increment)
   - product_id (Integer, references Product's id)
   - tag_id (Integer, references Tag's id)

## Associations
1. Product belongs to Category, Category has many Products
2. Product belongs to many Tags, Tag belongs to many Products (using ProductTag through model)

## API Routes
1. Complete CRUD operations in `product-routes.js`, `tag-routes.js`, and `category-routes.js` using Sequelize models.
2. Test GET, POST, PUT, DELETE routes for categories, products, and tags using Insomnia.

## Seeding and Syncing
1. Run `npm run seed` to seed data to the database.
2. Update `server.js` to sync Sequelize models to the MySQL database on server start.

## Grading Criteria
1. Deliverables: 10%
2. Walkthrough Video: 37%
3. Technical Acceptance Criteria: 40%
4. Repository Quality: 13%