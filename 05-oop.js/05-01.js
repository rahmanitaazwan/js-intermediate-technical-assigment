// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//fun 1 objecyt dikembalikan
// fun 2 tidak ada apa-apa


// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// tidak sama


// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//karena this arrow mengambil fungsi dan dala soal ini tdak ada.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();
  