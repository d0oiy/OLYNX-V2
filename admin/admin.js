
function clear() {
    ambil_tabel=document.getElementById('table')
    ambil_tabel.innerHTML=''
}

saran = "saran.json"
bencana= "/infografis/bencana.json"

function ambil(a) {
    fetch(a)
    .then(function(response) {
        return response.json();
    }) 
    
    .then (function(daftar) {
        if (a==="saran.json") {
            let out = ""
        ambil_tabel=document.getElementById('table')
        for(let item of daftar){
            buat_baris_tabel=document.createElement('tr')
            out = `<td>${item.no}</td>
            <td>${item.nama}</td>
            <td>${item.email}</td>
            <td>${item.saran}</td>`
            buat_baris_tabel.innerHTML=out
            ambil_tabel.appendChild(buat_baris_tabel)
        }
        }
        else if (a==="bencana.json") {
            let out = ""
        ambil_tabel=document.getElementById('table')
        for(let item of daftar){
            buat_baris_tabel=document.createElement('tr')
            out = `<td>${item.tanggal}</td>
            <td>${item.jenis}</td>
            <td>${item.lokasi}</td>
            <td>${item.lat},${item.long}</td>
            <td></td>
            `
            buat_baris_tabel.innerHTML=out
            ambil_tabel.appendChild(buat_baris_tabel)
            }
        }
            
    })

}
