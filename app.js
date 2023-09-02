//? html'deki onclick özelliğinin çalışması için
function generatepassword(){
    //? Uzunluk 
    let lenght = Number(document.getElementById("length").value);
    //? Karakterlerin seçimi ve oluşturulması
    let charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ";
    //? karakterleri password'un içine at diyoruz
    let password="";

    for(let i = 0; i < lenght; i++){
        //? random index üretiyoruz
        //? Math.floor() ile tamsayıya yuvarlıyorum, bu sayede sadece tam sayılar üretiyor
        //? Math.random()*charset.length ile kullanıcıya rastgele bir değer atansın
        let rndIndex = Math.floor(Math.random() * charset.length)
        password += charset[rndIndex]
    }
    //? Password'i yazdırıp sonlandıran fonksiyonumuz
    document.getElementById("password").innerHTML = "Random Şifreniz : " + password;
}