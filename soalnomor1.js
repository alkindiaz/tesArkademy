// name (String)
// - address (String)
//  - hobbies (Array)
//  - is_married (Boolean)
//  - school (Obj) with key highSchool, and university
//  - skills (Array of Obj)
//  Return value harus berupa JSON

var myObj = {name: "Alkindi",
          address: 'Jl. Danau Gelinggang No.74, RT.10/RW.4, Bend. Hilir, Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210',
          hobbies: ['reading','watching','swimming','basket ball','soccer'],
          is_married: false,
          school: {
                  highSchool:'SMK-SMTI Banda Aceh',
                  university:'Universitas Syiah Kuala'
                },
          skills: ['Ms Word','Ms Exel','autocad','HTML & Css','Javascript','able to speak english','able to speak a little bit japaness','able to speak a little bit arabic']
        };
function Biodata(){
  console.log(myObj)
}
Biodata();
