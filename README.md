# timetable  
[heroku](https://still-brushlands-56875.herokuapp.com/)  

Timetable allows you to see upcoming public transports that will either take you to or take you from `Pohjoinen Rautatiekatu 25` to/from your given address. I am using a free API to fetch the coordinates for your given address, thus it may not always work.  

## How to use  
At the begin type your address in the format `Hämeentie 13 Helsinki` and it will show few locations. Choose the best one for you, usually all of them are good enough. After that you will see 3 different methods of travel to the given location. The routes will automatically update, to always show you the earliest routes.  



## How to install  
### Clone the repository  
Download the repository by typing:  
`git clone https://github.com/uberballo/timetable.git`  

### Install the required dependencies  
Move to the correct folder and type the following:  
`npm install`  
Thus you install all the required dependencies.  


### Start the program  
You may start the program by typing: 
`npm start`  
and on the terminal you will see where the program is running. In this case it would be `http://localhost:3000`  

### Install with Docker  
There is a Dockerfile that can be installed with:  
`docker build -t <name> .`  
Which will install the container.  

### Run with Docker  
To run use: 
`docker run -itp 5000:5000 <name>`  
Use the same name what you gave before. `-p 5000:5000` allows you to access the container from localhost.  
