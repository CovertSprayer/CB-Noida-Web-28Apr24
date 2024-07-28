
function downloadFile() {
    const file = 'photo.png'
    console.log('File started to download', file);

    const p = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(file);
        }, 3000);
    })

    return p;

}

function compressFile(file){
    console.log('File started to compress', file);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function uploadFile(file){
    console.log('File started to upload');

   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('https://facebook.cloud.com/' + file);
    }, 2000)
   })
}

downloadFile()
    .then((file)=>{
        console.log('file downloaded successfully!', file)
        return compressFile(file);
    })
    .then((compressedFile)=>{
        console.log('File compressed successfully!', compressedFile);
        return uploadFile(compressedFile);
    })
    .then((finalLink)=>{
        console.log(finalLink)
    })
    .catch((err)=>{
        console.log(err);
    })

// http://facebook.com/downloads/photo.png

// downloadFile(function(file){
//     console.log('File downloaded successfully!', file);
//     compressFile(file, function(compressedFile){
//         console.log('File compressed Successfully!', compressedFile);
//         uploadFile(compressedFile, function(finalLink){
//             console.log('final link', finalLink);
//         });
//     })
// });

// downloadFile()
//     .then((file)=>{
//         console.log(file);
//         //here
//         compressFile(file)
//             .then((compressedFile)=>{
//                 console.log(compressedFile);
//                 uploadFile(compressedFile)
//                     .then((finalLink)=>{
//                         console.log(finalLink)
//                     })
//             })

//     })
//     .catch((err)=>{
//         console.log(err);
//     })






// function fun(){
//     return 123;
// }

// const output = fun();

// function fun(){
//     return new Promise((resolve, reject) => {
//         resolve(123);
//     })
// }

// fun()
//     .then((output)=>{
        
//     })