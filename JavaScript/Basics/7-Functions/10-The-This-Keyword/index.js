//  The This Keyword

// This references the object that is executing the current function.

// method -> obj
// function -> global (window, global)


// Example - method -> obj
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.play();           // o/p - {title: 'a', play: ƒ}

// adding another method to object
video.stop = function() {
    console.log(this);
}

video.stop();           // o/p - {title: 'a', play: ƒ, stop: ƒ}


// Example - function -> global (window, global)

function playVideo() {
    console.log(this);
}
playVideo();            // o/p - Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// constructor function
// new operator craete a new empty object
// if we call a function, using new operator , in this case foe constructor function, this will reference a new empty onject. 

function PlayVideo(title) {
    this.title = title;
    console.log(this);
}
const pv = new PlayVideo('b');      // o/p - {title: 'b'}


//
const videos = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
       this.tags.forEach(function(tag) {
        console.log(this, tag)          // inside a call backfunction , this function is just a regular function.
        // it's not a method in the video object. becase it's regural function it references the global object.
        // global object that executing this anonymous callback function.
       }, this); // passing second argument as this to forEach method , so this is referencing current object
    }
};
videos.ShowTags();  