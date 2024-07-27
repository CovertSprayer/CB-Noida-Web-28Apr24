
function downloadFile(callback) {
    const file = 'photo.png'
    console.log('File started to download', file);

    setTimeout(() => {
        callback(file);
    }, 3000);
}

function compressFile(file, callback){
    console.log('File started to compress', file);

    setTimeout(() => {
        const compressedFile = file.split('.')[0] + '.zip';
        callback(compressedFile);
    }, 2000);
}

downloadFile(function(file){
    console.log('File downloaded successfully!', file);
    compressFile(file, function(compressedFile){
        console.log('File compressed Successfully!', compressedFile)
    })
});


// const compressdFile = compressFile(file)
// console.log(file);