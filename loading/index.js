// just practice loading

const spiner = document.getElementById('loading');

const loadingSpiner = (isLoading) => {
    if(isLoading){
        spiner.classList.remove('hidden');
    }else{
        spiner.classList.add('hidden');
    }
}

const loading = async () => {
    loadingSpiner(true)
    const url = "https://openapi.programming-hero.com/api/phones?search=oppo"
    const res = await fetch(url);
    const data = await res.json();
    data.data.forEach(element => {
        console.log(element);
        // data show
        
    });
    loadingSpiner(false)
}
loading()