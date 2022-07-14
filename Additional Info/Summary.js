// Store global state'imizdeki elemanların tuttuğu değerleri barındıran bir genel bir obje. Bunu toolkit altından configureStore'u alarak tanımlayabiliyoruz. configureStore'u kullanarak reducer tanımlarımızı yapmaya başlıyoruz.

// Sonra counterSlice altında name, initialState ve reducers tanımlarını yapıyoruz. Inıtial state'de uygulamanın bu diliminde var olan verilerini tutuyorum. reducers kısmında ise gerekli fonksiyonları yazıyoruz. Burda inputa gelen değeri action ile alıyoruz.

// Son olarakta yazmış olduğumuz tanımları dışa aktarıyoruz, dispatch edilmek üzere yani componentlerimizde o fonksiyonları kullanmak için.

// Index.js'de Provider aracılığı ile store'u kullanarak yapılan değişiklikleri app'deki componentlere aktarıyoruz.
// Store.js'de users: userReducer diye bir şey olsaydı state'in altında counter olduğu gibi user'da olacaktı.

// useSelector ile ulaştığımız verinin değerini değiştirmek için bunu kullanarak action'ı dispatch etmemiz gerekiyor ki reducer'da bu değişim sağlansın ve store'a yazılsın.
