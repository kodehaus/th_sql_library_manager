#SQL Library Manager


### Notes and Modifications
1. Initialize the Sequelize ORM - This has been modified to store the db in its own folder. There is something just wrong about a naked database in the root of your project waiting to be screwed with. It's been moved to the data folder and there is a modification to the storage path in the config/config.js file. 