// State o anda uygulamanın elinde tuttuğu verilerdir.
// Herhangi bir veri değiştiğinde o veri farklılaşır. Dolayısıyla state'i yani tuttuğu veriler değişmiş olur.

// Kolay test edilebilir. Projeyi redux'ın istediği yapı ile oluşturmazsak çalıştıramıyoruz dolayısıyla kolay test edilebilir kod yazıyoruz.
// Ekip çalışmasına uygun çünkü her kafadan ayrı bir ses çıkmıyor. Öğreneceğimiz kavramlar bir.

// Çok fazla kavramı içinde barındıran bir yapı. Dolayısıyla öğrenme eğrisi zorlu olabiliyor. Çünkü bir sürü kavram var bunları teorik olarak öğrenmek sonrasında pratik olarak öğrenmek can sıkıcı olabiliyor.
// Redux kullandığımız zaman çok fazla kod yazıyoruz.

//--------------------------------------------------------------------------------------------------------------------------------------

// Immutability

// Immutable (Primitive Values) = undefined, boolean, number, string, bigInt, Symbol, null. (Immutable degiştirilemez yani hafızada kapladığı yer değiştirilemez anlamında.)
// Muttable (Everything Else) = object, array, map, set, date, function, almost everything made with "new" keyword. (Mutable değiştirilebilir yani hafızada kapladığı yer değiştirilebilir anlamında.)

// Mutable yani referans tipli veriler farklı davranır. Çünkü referans tipli verilerin saklandığı yer birdir ve veriler oradan alınarak bize gösterilir. Bunlar bellekte ayrı ayrı tutulmaz. Buradaki karışıklığı önlemek için spread oparatörü {...abc} kullanıyoruz.

// Redux geliştirilirken her zaman bir önceki yapılan değişikliğin kopyası alınıp üzerine yeni değişiklikler ekleyerek uygulamamızı geliştiriyoruz. Mesela microsoft wordde bir şeyler yazdık ve üzerine bir şeyler ekliyoruz. Her yazdığımızda üzerine bir şeyler ekleniyor. Biz kontrol + z ile geri alma işlemi yaptığımızda adım adım geriye gelebiliriz.

// Spread operatörü kullanmak demek istediğimiz array veya objenin hafızada kapladığı alana müdehale etmeden yeni bir hafıza açarak o array veya objenin kopyasını yeni bir hafızaya kaydet demek.

//--------------------------------------------------------------------------------------------------------------------------------------

// Redux'da ve bir state yönetim aracında kullanırken ihtiyaç olan en belirgin şey state'i tanımlamak sonra bu veriyi herhangi bir komponentte göstermek sonrada bir aksiyon olduğunda bu veriyi değiştirebilmek aslında bizim bilmemiz gereken şeyler bundan ibaret.
