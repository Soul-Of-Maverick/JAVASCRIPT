//  Changing This

const videos = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
       this.tags.forEach(function(tag) {
        console.log(this.title, tag)          
       }, this); 
    }
};
videos.ShowTags();  

// first solution :another ways changing this : not recommended
const videos1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
        const self = this;
        this.tags.forEach(function(tag) {
        console.log(self.title, tag)          
       }); 
    }
};
videos1.ShowTags();

// secound solution : using buind()
const videos2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
       this.tags.forEach(function(tag) {
        console.log(this.title, tag)          
       }.bind(this)); 
    }
};
videos2.ShowTags();  


// best approch
// arrow function
// arrow function is thet they inherit the this value.
const videos3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    ShowTags() {
       this.tags.forEach(tag => {
        console.log(this.title, tag)          
       }); 
    }
};
videos3.ShowTags();  






// another approch
function playVideo(a,b) {
    console.log(this);
}

playVideo.call({name: 'sam'}, 1, 2);        
playVideo.apply({name: 'sam'}, [1, 2]) ;
playVideo.bind({name: 'sam'})() ;

playVideo();
