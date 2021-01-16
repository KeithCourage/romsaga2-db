# RomSaga2 db
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Data](#data)
* [License](#license)
* [Contact](#contact)


<!-- ABOUT THE PROJECT -->
## About The Project

This is a project I started in order to learn Angular while also creating a sortable & filterable tech database for Romancing Saga 2.

<!-- DATA -->
## Data

The data is mostly from [Elliott20's sheets](https://gamefaqs.gamespot.com/boards/588633-romancing-saga-2/76134565). I made an SQLite database for easier updating and such. Then I exported the data for use with Angular.

Rather than changing the techs.ts file directly, it's probably best to update the database and re-export the file.

To get it into the right format for Angular, do the following:
1. Export the angular-skills view as a CSV file.
2. Use the parse-CSV python script to format it for Angular.
3. Place the exported techs.ts file into the src/app/shared folder.

You could also use the SQLite file with an actual backend.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Keith Glazewski - [@KeithComet](https://twitter.com/KeithComet)
