# Invoice Management System

A comprehensive Microservices-based application for managing invoices, customers, and products, built with **Spring Boot** and **Spring Cloud**.

## 🚀 Architecture

The system follows a distributed microservices architecture:

*   **Discovery Service (Eureka)**: Service registry for dynamic discovery.
*   **Config Service**: Centralized configuration management backed by a Git repository.
*   **Gateway Service**: API Gateway (Spring Cloud Gateway) for routing and filtering.
*   **Customer Service**: Manages customer data (H2 Database).
*   **Inventory Service**: Manages product inventory (H2 Database).
*   **Billing Service**: Handles invoice generation, communicating with Customer and Inventory services via **OpenFeign**.
*   **Angular Frontend**: A web interface to interact with the system.

## 🛠️ Technologies

*   **Java 17**
*   **Spring Boot 3.2.2**
*   **Spring Cloud 2023.0.0** (Eureka, Config, Gateway, OpenFeign)
*   **Spring Data JPA**
*   **H2 Database**
*   **Angular 17**
*   **Bootstrap 5**

## 📋 Prerequisites

*   JDK 17+
*   Maven 3.8+
*   Node.js 18+ & npm
*   Angular CLI (`npm install -g @angular/cli`)

## 🏃‍♂️ How to Run

### 1. Infrastructure Services (Start First)

Start the **Discovery Service**:
```bash
cd discovery-service
mvn spring-boot:run
```
*Port: 8761*

Start the **Config Service**:
```bash
cd config-service
mvn spring-boot:run
```
*Port: 9999*

### 2. Business Services

Start **Customer Service**:
```bash
cd customer-service
mvn spring-boot:run
```
*Port: 8081*

Start **Inventory Service**:
```bash
cd inventory-service
mvn spring-boot:run
```
*Port: 8082*

Start **Gateway Service**:
```bash
cd gateway-service
mvn spring-boot:run
```
*Port: 8888*

Start **Billing Service**:
```bash
cd billing-service
mvn spring-boot:run
```
*Port: 8083*

### 3. Frontend

Start the **Angular Application**:
```bash
cd angular-front-app
npm install
ng serve
```
*Access at: http://localhost:4200*

## 🔌 API Endpoints (via Gateway)

*   **Customers**: `http://localhost:8888/CUSTOMER-SERVICE/customers`
*   **Products**: `http://localhost:8888/INVENTORY-SERVICE/products`
*   **Billing**: `http://localhost:8888/BILLING-SERVICE/fullBill/{id}`

## 📦 Configuration

All service configurations are managed centrally in the `config-repo` directory and served by the **Config Service**.
