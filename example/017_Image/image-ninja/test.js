const
    Image = require('image-ninja');
    
function main(){
    var image = new Image('d:\\a.jpg');
    image
        .format('png')
        .width(10)
        .height(10)
        .save('d:\\b.jpg')
        .then(function (newImage) {
            // newImage is an Image instance, which points to a newly created image
        });
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
