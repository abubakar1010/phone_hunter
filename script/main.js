const data = async () => {

    const getData = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

    const response = await getData.json();

    console.log(response.data);
}

data()