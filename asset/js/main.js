$('.nice-select').select2()

window.onload = () => {

    document.querySelector('.btn').onclick = () => {
        console.log('hello')

        let input_select = document.querySelector('.input-select');
        let output_select = document.querySelector('.output-select');
        let input_rate = document.querySelector('.input-rate');
        let output_rate = document.querySelector('.output-rate');

        axios.get(`https://api.fxratesapi.com/convert?date=2024-05-27&from=${input_select.value}&to=${output_select.value}&amount=${input_rate.value}`)
            .then((res) => {
                // let data = res
                // console.log(res)
                output_rate.innerText = res.data.result + " " + output_select.value

            })
    }

}