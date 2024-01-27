
# National park data visualization and geographic query system

## Introduction

This project aims to use MongoDB to realize the visual display and geographic query of national park data. By integrating raw geographic data (provided as JSON files), the system can effectively display the geographic location, features and other relevant information of national parks, providing users with an intuitive and easy-to-understand view of the data.


In this personal full-stack project, I was responsible for all development tasks from front-end to back-end. I utilized React, Node.js, and MongoDB Atlas to build a geographical data visualization and querying system for US national parks. This system not only showcases dynamic visualizations of geographical data but also provides efficient data retrieval and user interaction experiences. By leveraging cloud database technology, I ensured the secure storage and efficient management of over 8000 pieces of geographical data. 




## Features introduced

- Designed and implemented an interactive user interface based on the React framework, offering various features including map visualization and data display.
- Implemented dynamic display of geographical data and user interaction using the Leaflet map component within the React environment.
- Developed a Node.js backend service to handle database interactions (using mongoose as the ORM tool) and implemented Cross-Origin Resource Sharing (CORS).
- Chose MongoDB Atlas as the cloud database solution, hosting over 8000 pieces of geographical data, ensuring data maintainability and high security.
- Successfully achieved effective presentation of geographical locations and feature information, including data visualization and querying functionalities, significantly enhancing user experience and information retrieval efficiency.



## 🛠 Skills

### Frontend

- **React**: Built the user interface using the React framework.
- **Leaflet**: Implemented dynamic display of geographical data and user interaction using the Leaflet map component.
- **JavaScript/ES6**: Utilized modern JavaScript language features to enhance frontend development efficiency.

### Backend

- **Node.js**: Developed the backend service for handling database interactions and implementing Cross-Origin Resource Sharing (CORS).
- **Express.js**: Used to build RESTful APIs and simplify backend development.
- **Mongoose**: Employed as the ORM tool, integrated with MongoDB Atlas for managing database models and queries.

### Database

- **MongoDB Atlas**: Chosen cloud database solution, hosting over 8000 pieces of geographical data, ensuring data maintainability and high security.

### Others

- **Data Visualization**: Implemented effective presentation of geographical locations and feature information using React and Leaflet.
- **Query Functionality**: Provided efficient data retrieval and user interactive query features, significantly improving user experience and information retrieval efficiency.
- **Security**: Implemented security measures, including MongoDB Atlas, to ensure the secure storage of data.
- **Cross-Platform**: With the use of React and Node.js, the project possesses cross-platform capabilities, suitable for various devices and browsers.

These technology components enable the project to deliver an interactive US national park geographical data visualization and querying system, enhancing user experience and ensuring data security and maintainability.



## Installation

Install my-project with npm:

Step 1: Clone:

```bash
  git clone [URL]
```
    
Step 2: Dependencies:
```bash
  cd [your propject folder]
  npm install
```

Step 3: Import geographic data:

Use **mongodump** to import the **provided JSON file** into the MongoDB database.

Step 4: Ready to start:
```bash
  npm start
```

## Instruction 

Describes how to use the system for data visualization and geographic queries.

**Login to MongoDB Atlas Cloud Database**: Log in to MongoDB Atlas cloud database, configure IP whitelisting, and provide the necessary database information to ensure that the backend program can correctly access geographical information of national parks from the database. Failure to do so may result in the geographical view not displaying correctly.

**Start the Backend Node.js**: Start the backend Node.js server to retrieve data, implement cloud data downloads, and enable Cross-Origin Resource Sharing (CORS).

**npm start**: Execute 'npm start' to initiate the rendering of the web page.

**Explore Geographical Data**: You can freely query and interact with geographical data views on the webpage.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@w224lin](https://github.com/w224lin)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Demo

Demo picture is shown in folder `./pic`

