// Slice'ı uygulamanın bütününün bir parçası olarak düşünebiliriz. Yani bir bina tuğlalar örülerek yapılabilir. Her bir tuğlayıda uygulamadaki bir slice olarak düşünebiliriz. Tabi bu tuğlaların kimisi büyük kimisi küçük kimisi fonksiyonlu kimisi fonksiyonsuz olabiliyor. Veya bir pastanın dilimleri olarak düşünebiliriz.

import { createSlice } from "@reduxjs/toolkit"; // createSlice bizim için bir slice oluşturur.

// Slice'ın içinde state'imizin içindeki tüm verilerin duracağı field'a bir isim vereceğiz. Sonra buna bir initial state vereceğiz. Bu initial state dolu olabilir boş olabilir. Aynı zamanda bu state'in verilerini güncelleyecek olan tanımı vereceğiz yani reducerları tanımlayacağız. Reducer'lar içersindede bir takım fonksiyonlar olacak initial state üzerindeki verileri güncelleyecekler. Hikaye bundan ibaret. Sonra da orada yazdığımız fonksiyonları dışarı aktarıcaz.

export const counterSlice = createSlice({
  name: "counter", // name'in anlamı state'e ulaşmak istediğimiz zaman state.counter şeklinde gideceğimiz anlamına gelen bir ifade.
  initialState: {
    value: 0, // state'in o an oluştururkenki değeri ne olacak onu veren ifade bu
  },
  reducers: {
    // state'i güncelleyecek olan tanımları yazdığımız ifade bu.

    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // oluşturduğumuz fonksiyonları componentlerde kullanmak için dışa aktarmalıyız bunu da slice altındaki action'ları kullanarak yapıyoruz.
export default counterSlice.reducer;

// counterSlice'ı store içersinde kullanacağız bu yüzden export ettik.

// Bir veriyi manipüle etmek için createSlice'ın içinde oluşturduğumuz tanımın içindeki reducers tanımının içersine tüm fonksiyonlarımızı yazabiliriz burada bize ilgili state dönecektir ve ilgili state altında nasıl bir güncelleme işlemi yapmak istiyorsak onu yapabiliriz.

// Sonrasında da yazmış olduğumuz o fonksiyonları dışa aktarmamız gerekiyor. Sonrasında da o fonksiyonları kullanabilmek için import etmemiz gerekiyor son olarakta useDispatch tanımını kullanmamız gerekiyor. Ve tek yapmamız gerekenler action'ları parametre olarak vermek olacaktır.
