
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


async function main(){
    const file = await downloadFile();
    console.log("file downloaded successfully", file);

    const compressedFile = await compressFile(file);
    console.log("file compressed successfully", compressedFile);

    const finalLink = await uploadFile(compressedFile);
    console.log("final Link", finalLink)
}

main();