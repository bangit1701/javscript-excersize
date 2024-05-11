console.log('Lam viec voi mang');
//khai bao mang
let arr = ['xanh', 'do', 'tim', 555];
//them phan tu vao mang
arr[4] = 'phan tu them'; // chi so 4 la vi tri phan tu muon them
//neu muon chinh sua phan tu nao thi cung truyen chi so tuong ung nhu tren
console.log(arr);
//dung vong lap duyet mang
for(let i = 0; i <arr.length; i++){
    console.log(`Phan tu thu ${i} la: ${arr[i]}`);
}
// vong lap foEach
arr.forEach( (phan_tu)=> {
    console.log(phan_tu);
});
//su dung hang map de tao mot mang moi co du lieu tuy chinh tu mang ban dau
let mang_moi = arr.map((phan_tu, stt)=>{
    return '<li>' + phan_tu + '</li>';

});
//-----> sau khi co mang moi thi dung ham join() de nhap mang thanh 1 chuoi
let chuoi= mang_moi.join("\n");//ngat dong trong console
console.log(chuoi);