document.addEventListener("DOMContentLoaded", function() {
    var category = document.getElementById("category");
    var menuChild = document.querySelector(".menu_child");

    category.addEventListener("click", function(e) {
        e.stopPropagation();
        menuChild.classList.toggle("show");
    });
    document.addEventListener("click", function() {
        menuChild.classList.remove("show");
    });

    menuChild.addEventListener("click", function(e) {
        e.stopPropagation();
    });
});


document.getElementById("back").addEventListener("click", function() {
    const scrollToTop = setInterval(function() {
      // Lấy vị trí cuối cùng hiện tại của người người dùng
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
       console.log(currentPosition);
      // Nếu vị trí hiện tại đã ở đầu trang thì dừng lại
      if (currentPosition === 0) {
        clearInterval(scrollToTop);
      }
      window.scrollBy(0, -50);
    }, 10);
  });

  window.addEventListener("scroll", function() {
    const backBtn = document.getElementById("back");
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Nếu vị trí hiện tại lớn hơn 0 hiển thị nút scroll không hiện
    if (currentPosition > 0) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }
  }); 

