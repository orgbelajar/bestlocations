const mongoose = require('mongoose');
const Place = require('../models/place');

mongoose.connect('mongodb://127.0.0.1/bestlocations')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

async function seedPlaces() {
    // collection places
    const places = [
        {
            title: 'Taman Mini Indonesia Indah',
            price: 'Rp 20.000',
            description: 'Taman hiburan keluarga dengan berbagai replika bangunan dari seluruh Indonesia',
            location: 'Taman Mini Indonesia Indah, Jakarta',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pantai Kuta',
            price: 'Gratis',
            description: 'Pantai yang terkenal di Bali dengan pemandangan sunset yang indah',
            location: 'Pantai Kuta, Kuta, Badung Regency, Bali',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pantai_Kuta_sejuta_cinta.jpg/1200px-Pantai_Kuta_sejuta_cinta.jpg'
        },
        {
            title: 'Borobudur',
            price: 'Rp 25.000',
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Borobudur, Magelang, Central Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Kawah Putih',
            price: 'Rp 50.000',
            description: 'Kawah vulkanik dengan danau berwarna putih di Bandung, Jawa Barat',
            location: 'Kawah Putih, Ciwidey, West Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Malioboro',
            price: 'Gratis',
            description: 'Jalan utama di Yogyakarta dengan berbagai toko dan kuliner khas',
            location: 'Jl. Malioboro, Yogyakarta City, Special Region of Yogyakarta',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pantai Tanjung Aan',
            price: 'Rp 10.000',
            description: 'Pantai dengan pasir berwarna putih dan air laut yang jernih di Lombok, Nusa Tenggara Barat',
            location: 'Pantai Tanjung Aan, Lombok, West Nusa Tenggara',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Bukit Bintang',
            price: 'Gratis',
            description: 'Kawasan perbelanjaan dan hiburan di Kuala Lumpur, Malaysia',
            location: 'Bukit Bintang, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Candi Prambanan',
            price: 'Rp 25.000',
            description: 'Candi Hindu terbesar di Indonesia yang terletak di Yogyakarta',
            location: 'Candi Prambanan, Sleman, Special Region of Yogyakarta',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Danau Toba',
            price: 'Gratis',
            description: 'Danau vulkanik terbesar di Indonesia yang terletak di Sumatera Utara',
            location: 'Danau Toba, North Sumatra',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Kawah Ijen',
            price: 'Rp 100.000',
            description: 'Kawah vulkanik dengan fenomena blue fire di Banyuwangi, Jawa Timur',
            location: 'Kawah Ijen, Banyuwangi, East Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pantai Sanur',
            price: 'Gratis',
            description: 'Pantai di Bali yang cocok untuk berenang dan melihat matahari terbit',
            location: 'Pantai Sanur, Denpasar, Bali',
            image: 'https://unsplash.com/collections/1517797'
        },

        {
            title: 'Candi Borobudur',
            price: 'Rp 25.000',
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Candi Borobudur, Borobudur, Magelang, Central Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pulau Komodo',
            price: 'Rp 5.000.000',
            description: 'Pulau di Indonesia yang terkenal dengan komodo, hewan terbesar di dunia',
            location: 'Pulau Komodo, East Nusa Tenggara',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Taman Nasional Gunung Rinjani',
            price: 'Rp 150.000',
            description: 'Taman nasional yang terletak di Lombok dan memiliki gunung tertinggi kedua di Indonesia',
            location: 'Taman Nasional Gunung Rinjani, Lombok, West Nusa Tenggara',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Bukit Tinggi',
            price: 'Gratis',
            description: 'Kota kecil yang terletak di Sumatera Barat dengan arsitektur khas Eropa',
            location: 'Bukit Tinggi, West Sumatra',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pulau Weh',
            price: 'Rp 50.000',
            description: 'Pulau yang terletak di ujung barat Indonesia dengan keindahan bawah laut yang luar biasa',
            location: 'Pulau Weh, Sabang, Aceh',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Taman Safari Indonesia',
            price: 'Rp 180.000',
            description: 'Taman hiburan keluarga dengan berbagai satwa liar di Cisarua, Bogor',
            location: 'Taman Safari Indonesia, Cisarua, West Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Gunung Merbabu',
            price: 'Rp 50.000',
            description: 'Gunung yang terletak di Jawa Tengah dengan pemandangan matahari terbit yang indah',
            location: 'Gunung Merbabu, Central Java',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Pulau Lombok',
            price: 'Gratis',
            description: 'Pulau di Indonesia yang terkenal dengan keindahan pantainya',
            location: 'Pulau Lombok, West Nusa Tenggara',
            image: 'https://unsplash.com/collections/1517797'
        },
        {
            title: 'Tanjung Lesung',
            price: 'Rp 100.000',
            description: 'Kawasan wisata pantai di Banten yang cocok untuk bersantai dan berenang',
            location: 'Tanjung Lesung, Pandeglang, Banten',
            image: 'https://unsplash.com/collections/1517797'
        }
    ]

    try {
        await Place.deleteMany({}); // first delete all data in the collection place
        await Place.insertMany(places); // stores many data array places at once
        console.log('Data berhasil disimpan');
    } catch (err) {
        console.log('Terjadi kesalahan saat menyimpan data:', err);
    } finally {
        mongoose.disconnect(); // done
    }
}

seedPlaces();