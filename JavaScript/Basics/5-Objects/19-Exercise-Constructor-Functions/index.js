//Exercise - Constructor Functions

let post = new Post('aaa','bb', 'sam');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.Comments = [];
    this.isLive = false;
}