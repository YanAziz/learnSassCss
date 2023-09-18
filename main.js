/*

Css preposesor --> program yang memungkinkan Css dari sintaks khusus preposesor itu sendiri
variabel, fungsi, dsb --> Css lebih terstruktur dan lebih efisien

Jenis
1. Sass
2. Less
3. Stylus
4. Post Css
5. Styled Components
6. Css Crush

*/

// ----------------------------------------------------------------------------------------------------------

/*

Sass --> Syntactically Awesome Stylesheet 
Free to use -- kompatibel pada semua vrsi css -- menghemat waktu dengan mengurangi pengulangan css
https://sass-lang.com/

Less --> Leaner Style Sheets
Free to use -- mudah dan cepat dipelajari
https://lesscss.org/

Stylus --> bahasa stylesheet inovatif yang mengkompilasi ke css
Terinspirasi oleh Sass -- dibangun dengan node.js
https://stylus-lang.com/

*/

// ----------------------------------------------------------------------------------------------------------

/*

Sass Values
Variables - Nesting - Partials - Moduls - Operator, dll

Sass mendukung sejumlah tipe nilai yang sebagian besar berasal langsung dari CSS
Setiap Ekspresi menghasilkan nilai dan variabel menyimpan nilai
Numbers, bisa memiliki unit seperti 100px, atau bisa tidak memiliki unit seperti 12
String, bisa memiliki tanda kutip seperti "Helvetica Neue", atau bisa tidak memiliki tanda kutip seperti bold
Colors bisa berupa kode hex seperti #c6538c atau berupa nama seprti blue, atau berupa fungsi seperti rgb(107,1133,127) atau hsl(210,100%,20%)
List dapat dipisahkan spasi atau koma dan dapat di lampirkan di dalam tanda kurung siku atau bisa juga tanpa tanda kurung siku sama sekali
Contoh: 1.5em 1em 0 2em, Helvetica, Arial, sans-serif,[col1-start].
Nilai yang berlaku khusus untuk Sass:
1. Nilai Boolean berupa True n False
2. Nilai Singleton Null
3. Maps yang mengaitkan nilai dengan key seperti ("background":red,"foreground":pink)
4. Referensi fungsi dikembalikan oleh get-function() dan dipanggil dengan call()

Number dalam Sass memiliki 2 komponen, yaitu number itu sendiri (16) dan unitnya (px)
Number bisa tidak memiliki unit, namun bisa juga memiliki unit yang kompleks
@debug100;//100
@debug0.8;//0.8
@debug16px;//16px
@debug5px*2px;//10px*px(read "square pixels")

Sass mendukung 2 jenis strikng yang struktur internalnya sama tetapi diterjemahkan secara berbeda, yaitu
1. String yang diapit tanda kutip seperti "Helvetica Neue"
2. String tanpa tanda kutip seperti bold

@debug"Helvetica Neue";
@debug"C://Program Files";
@debug"\"Don't Fear the Reaper\"";
@debug"lne1\a line2";
$roboto-variant: "Mono";
@debug"Roboto#{$roboto-variant}";

Sass memiliki dukungan bawaan untuk nilai warna
Kode Hex #ffffff #000000
Transparent, blue, white, dll
fungsi rgb(), rgba(), hsl(), hsla()
@debug#f63a73;//#f63a73
@debugmidnightblue;//#191970
@debugrgb(204,102,153);//#c69
@debughsl(228,7%,86%);//#dadbda

Elemen list dapat dipisahkan oleh koma (Helvetica, Arial, sans-serif) atau spasi (10px 15px 0 0).
Tidak perlu tanda kurung khusus, ekspresi apapun yang dipisahkan oleh oma atau spasi akan dianggai sbg list
Contoh lain ([line1 line2]) yang berguna saat menggunakan grid-template-columns

List Sass dapat berisi satu atau bahkan nol elemen. List elemen tunggal dapat ditulis (<expression>,) atau [<expression>], dan list elemen nol
dapat ditulis () atau []

@debuglist.nth(10px 12px, 2) // 12px
@debuglist.nth([line1,line2,line3],-1) // line3

Dokumen penuh di Sass Values

*/
