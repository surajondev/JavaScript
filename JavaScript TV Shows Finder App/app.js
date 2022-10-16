const form = $('form');
const result = $('#result');



function getshows(searchText){
    
    // checking empty div

    let already = $('#result div:first-child');            // if result have any child image
    if(already){
        $('.col-3').remove();
    }

    // let already = $('#result img:first-child');            // if result have any child image
    // if(already){
    //     $('img').remove();
    // }

    let col = $('.col-3');            // if result have any child image
    if(already){
        $('.col-3').remove();
    }

    let url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url).
    then((res)=>{
        console.log(res);
        counter = 0;
        for(let item of res.data){
            
            if(item.show.image){

                const col = $('<div/>');
                const card = $('<div/>');
 
                col.attr('class','col-3 mb-2');
                card.attr('class','card');

                
                const card_body = $('<div/>');
                card_body.attr('class','card-body');
                

                const img = $('<img/>');
                img.attr('src', `${item.show.image.medium}`)
                img.attr('class', ' rounded')
                
                const h = $('<h3>');
                h.attr('class', 'card-title');
                h.text(item.show.name);
            

                card.append(img);
                card_body.append(h);
                card_body.append(`<a rel="noreferrer" href="${item.show.url}" target="_blank" class="btn btn-sm btn-dark">Read More</a>`);
                
                console.log(item.show.name,h)
                
                card.append(card_body);
                col.append(card);
                result.append(col);
            }

        }
    })
    .catch((err)=>{
        console.log(err);
    })
}
// search
form.on('submit', function(e){
    e.preventDefault();   

    let searchText = $('#inp').val(); 
    
    console.log(searchText);

    $('#inp').val("");
    getshows(searchText);
})

