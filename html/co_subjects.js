'use scrict'
function submit_btn(){
    const　yourname　= document.getElementById('yourname').value;
    const　youremail　= document.getElementById('youremail').value;
    const　yourtell　= document.getElementById('yourtell').value;
    const yourmessage =document.getElementById('yourmessage').value;

    const li_yourname = '名前　　　　　　' + yourname; 
    const li_youremail = 'メールアドレス　　　' + youremail; 
    const li_yourtell = '電話番号　　　　' + yourtell; 
    const li_yourmassage = 'お問い合わせ内容　' + yourmessage;

    if (window.confirm(li_yourname + '\n' + li_youremail + '\n' + li_yourtell + '\n' + li_yourmassage + '\n' + 'でよろしいでしょうか')){
        window.alert('送信が完了いたしました');
    }else{
    }
}