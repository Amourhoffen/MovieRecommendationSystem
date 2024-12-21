let USER = prompt("Enter your first name:");
setTimeout(()=>{
    document.getElementById('UserName').innerHTML=("Welcome, "+USER);
},3000);
alert(`Thank you, ${USER}. Your ratings have been recorded.`);

function startSurvey() {
  
    let science = Number(prompt("If you are interested in sci-fi movies, kindly give a rating from 1 to 5:"));
    let comedy = Number(prompt("If you are interested in comedy movies, kindly give a rating from 1 to 5:"));
    let horror = Number(prompt("If you are interested in horror movies, kindly give a rating from 1 to 5:"));
    let kids = Number(prompt("If you are interested in cartoon & animation, kindly give a rating from 1 to 5:"));

    alert(`Thank you, ${USER}. Your ratings are - 
        Sci-Fi: ${science}, 
        Comedy: ${comedy}, 
        Horror: ${horror}, 
        Kids: ${kids}`);

        let RecImage1 = document.getElementById("rec1");
        let RecImage2 = document.getElementById("rec2");
        let RecImage3 = document.getElementById("rec3");
        let RecImage4 = document.getElementById("rec4");
        let RecImage5 = document.getElementById("rec5");
        let RecImage6 = document.getElementById("rec6");
        let RecImage7 = document.getElementById("rec7");
        let RecImage8 = document.getElementById("rec8");

        if (science > comedy && science > horror && science > kids) {
           setTimeout(()=>{RecImage1.src = "https://img.freepik.com/premium-psd/sci-fi-movie-poster_841014-35442.jpg?w=360";},5000);
           RecImage2.src = "https://img.freepik.com/premium-psd/sci-fi-movi-poster-design_841014-23184.jpg?w=360"
           RecImage3.src = "https://img.freepik.com/premium-psd/sci-fi-movi-poster-design_841014-23220.jpg?w=360"
           setTimeout(()=>{RecImage4.src = "https://townsquare.media/site/442/files/2023/04/attachment-back-to-the-future-2.png?w=980&q=75"},2000)
           RecImage5.src = "https://townsquare.media/site/442/files/2023/04/attachment-akira.png?w=980&q=75"
           RecImage6.src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTMsIEp1biAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421158-jbrkqtugkf-portrait.jpg"
           RecImage7.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mickey-17-et00412372-1728541041.jpg"
           setTimeout(()=>{ RecImage8.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/year-10-et00421146-1732529786.jpg"},3000)
          
        }
      else  if (comedy > science && comedy > horror && comedy > kids) {
            RecImage1.src = "https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/anubhav-singh-bassi-new-material-et00355125-2024-10-24-t-10-7-21.jpg";
            setTimeout(()=>{RecImage2.src = "https://assets-in.bmscdn.com/nmcms/events/banner/weblisting/no-country-for-moderation-punit-pania-et00130545-2023-4-20-t-7-32-20.jpg"},5000)
            setTimeout(()=>{RecImage3.src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAyNQ%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00318128-mnaycqdmnd-portrait.jpg"},3000)
            setTimeout(()=>{RecImage4.src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIEFwciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383697-ylkctsgxqw-portrait.jpg"},4000)
            setTimeout(()=>{RecImage5.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/illti-et00406120-1732088611.jpg"},2000)
            setTimeout(()=>{RecImage6.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/out-of-syllabus-et00405438-1721631234.jpg"},6000)
            setTimeout(()=>{RecImage7.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hoshiar-singh-apna-arastu-et00401229-1730968953.jpg"},3000)
            setTimeout(()=>{RecImage8.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vidyapathi-et00420153-1731759268.jpg"},5000)
         }
      else   if (horror > comedy && horror > science && horror > kids) {
            RecImage1.src = "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/08/Stree-2-953-10.jpg";
            setTimeout(()=>{RecImage2.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhooth-bangla-et00411383-1733912555.jpg"},5000)
            setTimeout(()=>{RecImage3.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oye-bhootni-ke-et00415593-1732269978.jpg"},3000)
            setTimeout(()=>{RecImage4.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-dark-matter-et00331624-20-06-2022-01-02-15.jpg"},4000)
            setTimeout(()=>{RecImage5.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-witch-revenge-et00421026-1732522930.jpg"},2000)
            setTimeout(()=>{RecImage6.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sinners-et00413379-1727270565.jpg"},5000)
            setTimeout(()=>{RecImage7.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aapkey-kamre-mein-koi-rehta-hai-et00076443-1665749123.jpg"},3000)
            setTimeout(()=>{RecImage8.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1726558022.jpg"},6000)
         }
        else if (kids > comedy && kids > horror && kids > science) {
            RecImage1.src = "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/08/Stree-2-953-10.jpg";
            setTimeout(()=>{RecImage2.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/karate-kid-legends-et00383498-1729497297.jpg"},5000)
            setTimeout(()=>{RecImage3.src = "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ramayana-the-legend-of-prince-rama-et00413205-1727158131.jpg"},3000)
            setTimeout(()=>{RecImage4.src = "https://rukminim2.flixcart.com/image/416/416/l51d30w0/poster/h/u/a/medium-2702758-famous-kids-movie-poster-harry-potter-movie-original-imagfsx5qgesbsuw.jpeg?q=70&crop=false"},4000)
            setTimeout(()=>{RecImage5.src = "https://cdn.shopify.com/s/files/1/1057/4964/products/Toy-Story-Vintage-Movie-Poster-Original-1-Sheet-27x41_339x.jpg?v=1665811397"},2000)
            setTimeout(()=>{RecImage6.src = "https://cdn.shopify.com/s/files/1/1057/4964/files/Cars-Vintage-Movie-Poster-Original-1-Sheet-27x41_339x.jpg?v=1701982886"},6000)
            setTimeout(()=>{RecImage7.src = "https://cdn.shopify.com/s/files/1/1057/4964/files/Wild-Robot-Vintage-Movie-Poster-Original-1-Sheet-27x41_339x.jpg?v=1733368011"},3000)
            setTimeout(()=>{RecImage8.src = "https://cdn.shopify.com/s/files/1/1057/4964/files/Lady-and-the-Tramp-Vintage-Movie-Poster-Original-1-Sheet-27x41_339x.jpg?v=1712977363"},5000)
         }

}


   
  










