var m = require("readline-sync")
var blm_menikah = 0
var menikah_single = 54000000
var menikah_no_child = 58500000
var menikah_1_anak = 63000000
var menikah_2_anak = 67000000
var menikah_3_anak = 72000000
var minimum_pajak_1 = 50000000
var minimum_pajak_2 = 250000000
var minimum_pajak_3 = 500000000
var kena_pajak = 0
var kp1 = 0
var kp2 = 0
var kp3 = 0
var kp4 = 0

function total_pajak(gaji){
    kp1 = minimum_pajak_1 * 5 / 100
    var x = gaji - minimum_pajak_1
    if(x < minimum_pajak_1){
        kp2 = x * 15 / 100
    }else{
        kp2 = 200000000 * 15 / 100
        var z = gaji - minimum_pajak_2
        if(z < minimum_pajak_2){
            kp3 = z * 25 / 100
        }else{
            kp3 = 250000000 * 25 / 100
            var q = gaji - minimum_pajak_3
            if(gaji > minimum_pajak_3){
                kp4 = q * 30 /100
            }      
        }
    }
    total = kp1 + kp2 + kp3 + kp4
    return total
}

var gaji = m.question("masukkan nilai gaji : ")
console.log("1. Lajang")
console.log("2. Menikah")
console.log("3. Menikah dengan Janda/Duda")
console.log("4. Menikah dengan Janda/Duda 1 anak")
console.log("5. Menikah dengan Janda/Duda 2 anak")
console.log("6. Menikah dengan Janda/Duda 3 anak")
var tipe = m.question("Pilih tipe karyawan/pegawai : ")

switch(tipe){
    case "1":
        jml_gaji =  gaji * 12 - blm_menikah
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
    case "2":
        jml_gaji =  gaji * 12 - menikah_single
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
    case "3":
        jml_gaji =  gaji * 12 - menikah_no_child
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
    case "4":
        jml_gaji =  gaji * 12 - menikah_1_anak
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
    case "5":
        jml_gaji =  gaji * 12 - menikah_2_anak
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
    case "6":
        jml_gaji =  gaji * 12 - menikah_3_anak
        var a = jml_gaji - minimum_pajak_1
        if(a>0){
            kena_pajak = total_pajak(jml_gaji)
        }else{
            kena_pajak = jml_gaji * 5 / 100
        }
        console.log(kena_pajak)
        break;
}