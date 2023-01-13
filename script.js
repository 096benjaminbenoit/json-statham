const fetchData = async () => {
    const result = await fetch("https://api.nasa.gov/planetary/apod?api_key=zX3Mvfcz7iJYZeGozyZyHqh4Z8HctwcK2ZURplqK")
    const data = await result.json()
    console.log(data)
}