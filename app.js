const ejsMate = require('ejs-mate');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to models
const Place = require('./models/place');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/bestlocations')
    .then((result) => {
        console.log('connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });

// Implementation engine ejsMate (for layouting ejs)
app.engine('ejs', ejsMate);
// Initiate template engine ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//* Middleware 
// to get data from the body, for example, if you have a form and want to send data from the form 
app.use(express.urlencoded({ extended: true }));
// to change the post method to the desired method through a param query, for example (?_method=PUT)
app.use(methodOverride('_method'));


// Make root simple for open home page
app.get('/', (req, res) => {
    res.render('home'); // located in the views/home.ejs folder
});


//* Main Menu
app.get('/places', async (req, res) => {
    const places = await Place.find(); // show all place data first
    res.render('places/index', { places }); // data is rendered in the folder views/places/index.ejs 
});


//* Accessing the Add Place menu
// Route to access the create page (put above /place/:id so that it doesn't assume the id first and will search the database, because of course it won't find it)
app.get('/places/create', (req, res) => {
    res.render('places/create');
});


//* Create new data (Route when clicking save in create.ejs)
// using async await to store data in the db
app.post('/places', async (req, res) => {
    const place = new Place(req.body.place); // property collection name place[title, name, location, price]
    await place.save(); // wait for the save process before redirecting to the /places/index.ejs page
    res.redirect('/places');
})


//* Display current data in the database when you want to edit data 
// using async await because it needs to get data based on the selected id to appear in the form
app.get('/places/:id/edit', async (req, res) => {
    const place = await Place.findById(req.params.id);
    res.render('places/edit', { place });
});


//* Display the details of each that has been obtained
app.get('/places/:id', async (req, res) => {
    /*
    Alterntive way of code line 57
    const { id } = req.params 
    const place = await Place.findById(id);
    */
    const place = await Place.findById(req.params.id); // get data based on id from request param
    res.render('places/show', { place });
});


//* Edit and save the edited data into the database
// using async await because the data will be stored in the db
app.put('/places/:id', async (req, res) => {
    // first search for the place data in the database, and when the place data is found then immediately do the update process
    await Place.findByIdAndUpdate(req.params.id, { ...req.body.place }); // using the spread operator { ...req.body.place }, because only a few parts need to be updated
    res.redirect('/places'); // if successfully updated it will return to index.ejs
});


//* Hapus data pada database berdasarkan id 
// menggunakan async await karena memastikan sebelum melanjutkan proses selanjutnya atau melakukan redirect, kita harus berhasil menghapus data berdasarkan id nya
app.delete('/places/:id', async (req, res) => {
    await Place.findByIdAndDelete(req.params.id);
    res.redirect('/places');
});

/*
Add place data when accessing the URL http://localhost:3000/seed/place
app.get('/seed/place', async (req, res) => {
    property same like placeSchema in app.js
    const place = new Place({
        title: 'Monumen Nasional',
        price: 'IDR50000',
        description: 'Greet Building',
        location: 'Jakarta, ID'
    })

    save 'bestlocates' to the database in MongoDB
    await place.save();
    show the data in the place object (if successful)
    res.send(place)
})
*/

// Make port listen
app.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
});
