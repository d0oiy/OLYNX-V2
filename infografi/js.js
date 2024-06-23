fetch("bencana.json")
.then(function(response) {
    return response.json();
})

.then (function(products) {
    let placeholder = document.querySelector("#output");
    let out = ""
    for(let product of products){
        out += `
        <tr>
            <td id="${product.jenis}">${product.jenis} di <a href="#">${product.lokasi}</a>, pada tanggal ${product.tanggal}</td>
        </tr>`
    L.marker([product.lat, product.long]).addTo(map)
	.bindTooltip(product.jenis+" di "+product.lokasi+" pada tanggal "+product.tanggal);
    }
    placeholder.innerHTML = out
    for (let product of products)
        document.getElementById(product.jenis).addEventListener('click', function() {{map.setView([product.lat, product.long], 12, { animation: true })}} );
})