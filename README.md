# Chess Board with Random Common Openings


![Screenshot_1629182878](https://user-images.githubusercontent.com/56064237/129681274-b3f57922-2aca-420a-9d3d-55e62b7e3bd4.png)


### There are two buttons in this one screen app.

> --> Random

> --> Reset

### --> Random

Used to make any random opening move from below five moves.

- 1.e4 (https://www.chess.com/openings/Kings-Pawn-Opening)
- 1.d4 (https://www.chess.com/openings/Queens-Pawn-Opening)
- 1.Nf3 (https://www.chess.com/openings/Reti-Opening)![ChessboardDemo-master WebStorm 17-08-2021 14_45_18](https://user-images.githubusercontent.com/56064237/129698893-943b1181-195c-417b-94ef-f79bc1f6f6bc.png)

- 1.c4(https://www.chess.com/openings/English-Opening)
- 1.g3(https://www.chess.com/openings/Kings-Fianchetto-Opening)



### --> Reset

Used to reset all the chess board pieces into its initial state.



### How to install this app

# Step: 1

Download the project and unzip it.

# Step: 2

Open the project from your IDE's File menu. 

Go to the location where you unzip the downloaded project. Select 'ChessboardDemo-master' directory. Extract it and you will get the another child directory having same name. Open that directory as shown in below image.

![ChessboardDemo-master WebStorm 17-08-2021 14_45_18](https://user-images.githubusercontent.com/56064237/129698979-eed8efa1-42ea-43ee-9c9a-9738231584f8.png)

# Step: 3

After loading the project. You have to make sure that your IDE's terminal current direcotry path set like this

> <YOUR_PROJECT_PATH>\ChessboardDemo-master\ChessboardDemo-master

# Step: 4

Excute below commands one by one into the terminal.

> npm install

> react-native start


To run in Android device or simulator execute below command

> react-native run-android


To run in iOS device or simulator execute below commands one by one

> cd ios

> npx pods install


Make sure that ChessboardDemo.xcworkspace directory should generated after excuting above command.

> cd ..

> react-native run-ios
