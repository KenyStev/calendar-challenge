# Calendar Reminder

A Calendar for saving reminders made as part of Jobsity code challenge.

## Getting Started
To Properly setup and run this project first you need to get an [`API_KEY`](https://developers.google.com/places/web-service/get-api-key) from the google developers console and enable the Google Places API and Google Geolocation API.

Then you need to either export the `API_KEY` in the env variables or change the file at: `/src/utils/constants.ts`

```bash
$ export API_KEY=<your-key>
``` 

## Pre-requisites

```
yarn  v1.12.3
node  v10.14.2
npm   v6.4.1
```

## Installation

Clone the reposiroty and install dependencies.

```bash
$ git clone https://github.com/KenyStev/calendar-challenge.git
$ cd calendar-challenge
$ yarn install
```

## Running

Run the command below and go to `localhost:3000`

```bash
$ yarn start
```

## Running Tests

```bash
$ yarn test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/KenyStev/calendar-challenge/blob/master/LICENSE) by [kenystev](https://github.com/KenyStev)
