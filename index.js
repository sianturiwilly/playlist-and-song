// Willi
// Studi Kasus Aplikasi Daftar Lagu
// 8 September 2022

const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./controllers/PlaylistController');

switch(command){
    case 'add':
        PlaylistController.add(params)
        break;
    case 'remove':
        PlaylistController.remove(params)
        break;
    case 'make':
        PlaylistController.make(params)
        break;
    case 'showPlaylist':
        PlaylistController.show()
        break;
    default:
        console.log("Masukkan command yang benar, terima kasih.");
        break;
}

// Node JS: Modul utama dan 3rd party modul