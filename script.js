async function getChuckNorrisJoke() {
    try {
      const url = "https://api.chucknorris.io/jokes/random";
      
      let response = await fetch(url);
      
      response = await response.json();
      
      const joke = response.value;
    
      console.log("Случайная шутка о Чаке Норрисе:", joke);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  
  getChuckNorrisJoke();