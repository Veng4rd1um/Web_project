Here’s the translated and polished README in English:

Server Rental Backend  

Server Rental Backend is a **Spring Boot** application designed to manage server rentals. It provides RESTful APIs for handling orders, available server configurations, and general management.  


Features  

- Create Order: Add a new server rental order.  
- Update Order: Edit existing order details.  
- Delete Order: Remove order records.  
- Get Order by ID: Retrieve information about a specific order.  
- Search Servers: Search for available servers based on parameters.  
- Popular Servers: Retrieve the most frequently rented servers.  
- Servers by Categories: Group servers by categories or specifications.  

---

Technologies Used  

- Java: Programming language.  
- Spring Boot: Framework for building RESTful APIs.  
- Spring Data JDBC: For database interaction.  
- PostgreSQL: Relational database management system.  
- Maven: Dependency management and build tool.  

---

Getting Started  

Prerequisites  

Ensure you have the following installed:  
- Java: Version 17 or higher  
- Maven: Version 3.6.0 or higher  
- PostgreSQL: A working database  

---

Installation  

1. Clone the repository  
   ```bash  
   git clone https://github.com/Arnatik76/server-rental.git  
   cd server-rental  
   ```  

2. Set up the PostgreSQL database  
   Create a new database:  
   ```sql  
   CREATE DATABASE server_rental;  
   ```  

3. Configure `application.properties`  
   Update the `application.properties` file with your PostgreSQL credentials:  
   ```properties  
   spring.datasource.url=jdbc:postgresql://localhost:5432/server_rental  
   spring.datasource.username=your_username  
   spring.datasource.password=your_password  
   ```  

4. Run the application
   Use Maven to build and run the application:  
   ```bash  
   mvn spring-boot:run  
   ```  

   The application will be available at `http://localhost:8080`.  

---

API Endpoints  

Create Order 
- URL: `/api/order/new`  
- Method: `POST`  
- Request Body:  
  ```json  
  {  
    "serverId": 1,  
    "userId": 42,  
    "duration": 12,  
    "price": 500  
  }  
  ```  
- Response:  
  ```json  
  {  
    "orderId": 101,  
    "serverId": 1,  
    "userId": 42,  
    "duration": 12,  
    "price": 500  
  }  
  ```  

---

Update Order  
- URL: `/api/order/update`  
- Method: `POST`  
- Request Body:  
  ```json  
  {  
    "orderId": 101,  
    "duration": 24,  
    "price": 950  
  }  
  ```  
- Response:  
  ```json  
  {  
    "orderId": 101,  
    "duration": 24,  
    "price": 950  
  }  
  ```  

---

Delete Order  
- URL: `/api/order/delete/{orderId}`  
- Method: `DELETE`  
- Response: `204 No Content`  

---

Get Order by ID  
- URL: `/api/order/{orderId}`  
- Method: `GET`  
- Response:  
  json  
  {  
    "orderId": 101,  
    "serverId": 1,  
    "userId": 42,  
    "duration": 12,  
    "price": 500  
  }  
    

---

Search Servers 
- URL: `/api/servers/search`  
- Method: `GET`  
- Query Parameters: `query`  
- Response:  
  ```json  
  [  
    {  
      "serverId": 1,  
      "name": "High Performance Server",  
      "cpu": "Intel Xeon",  
      "ram": "64GB",  
      "storage": "2TB SSD",  
      "price": 200  
    }  
  ]  
  ```  

---

Popular Servers 
- URL: `/api/servers/popular`  
- Method: `GET`  
- Response:  
  ```json  
  [  
    {  
      "serverId": 1,  
      "name": "High Performance Server",  
      "rentCount": 150  
    }  
  ]  
  ```  

---

Servers by Categories  
- URL: `/api/servers/category/{category}`  
- Method: `GET`  
- Response:  
  ```json  
  [  
    {  
      "serverId": 2,  
      "name": "Budget Server",  
      "cpu": "Intel Core i5",  
      "ram": "16GB",  
      "storage": "500GB SSD",  
      "price": 50  
    }  
  ]  
  ```  
License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  

---
Contributing  

Feel free to fork the repository and submit a pull request with your changes. For significant modifications, please create an issue to discuss your ideas beforehand.  

---

Acknowledgments  

Thanks to everyone who contributes to improving the project.  
