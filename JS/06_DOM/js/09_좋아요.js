
const icons = document.getElementsByClassName('icon')
let heratIcon = ''

for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    if (icon.classList.contains('icon-heart'))
        heratIcon = icon
    // 아이콘 클릭시 ,selected 클래스 토글
    icon.addEventListener('click', (e) => {
        icon.classList.toggle('selected')
    })

}
//하트 아이콘 클릭 시, 이벤트
heratIcon.addEventListener('click', (e) => {
    if(heratIcon.classList.contains('selected'))
        heartAlert()
})

//이미지 더블 클릭 이벤트
const imgBox = document.getElementById('imgBox')
imgBox.addEventListener('dbclick', (e) => {
    if(!heratIcon.classList.contains('selected'))
        heartAlert()
    heratIcon.classList.toggle('selected')
})

// 좋아요
function heartAlert() {
    // alert('좋아요!')
    Swal.fire({
        title: "Like it",
        text: "Modal with a custom image.",
        imageUrl: "./img/heart.gif",
        imageWidth: 400,
        imageHeight: 200,
        showConfirmButton: false,
        timer: 1500
      });
}