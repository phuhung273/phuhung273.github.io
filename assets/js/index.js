$(document).ready(function () {
  //Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  //End Carousel

  //Test Sheet
  const google_sheet_url = "https://script.google.com/macros/s/AKfycbwnN--tOxFwPFYmMnDGCyo9JQreT15Ned7tz47ePfLW8bkHEWQ/exec";

  //Product Sheet
  //const google_sheet_url = "https://script.google.com/macros/s/AKfycbzk2zvRJXjbP59-jSNy9A2tzSkIiy3P2Fr4tTl041XlF1j8o_gC/exec";

  //Validator
  $("#page-form").validate({
    onfocusout: function (element) {
      this.element(element); // triggers validation
    },
    onkeyup: function (element, event) {
      this.element(element); // triggers validation
    },
    onclick: false,
    rules: {
      "Họ và Tên": {
        required: true
      },
      "Số điện thoại": {
        required: true,
        digits: true
      },
      "Số tiền cần vay": {
        required: true
      },
      "Thu nhập hàng tháng": {
        required: true
      },
      "Địa chỉ chỗ ở hiện tại": {
        required: true
      },
      "Tên công ty đang công tác": {
        required: true
      }
    },
    messages: {
      "Họ và Tên": {
        required: "Vui lòng nhập họ tên"
      },
      "Số điện thoại": {
        required: "Vui lòng nhập số điện thoại",
        digits: "Số điện thoại chỉ bao gồm số từ 0-9"
      },
      "Số tiền cần vay": {
        required: "Vui lòng nhập số tiền cần vay"
      },
      "Thu nhập hàng tháng": {
        required: "Vui lòng chọn mức thu nhập"
      },
      "Địa chỉ chỗ ở hiện tại": {
        required: "Vui lòng nhập địa chỉ"
      },
      "Tên công ty đang công tác": {
        required: "Vui lòng nhập tên công ty"
      }
    },
    submitHandler: function (form) {
      loading()
      showNoti()
      $.post(google_sheet_url, $(form).serialize(), function () {
        success()
      })
    }
  });

  $("#popup-form").validate({
    onfocusout: function (element) {
      this.element(element); // triggers validation
    },
    onkeyup: function (element, event) {
      this.element(element); // triggers validation
    },
    onclick: false,
    rules: {
      "Họ và Tên": {
        required: true
      },
      "Số điện thoại": {
        required: true,
        digits: true
      },
      "Số tiền cần vay": {
        required: true
      },
      "Thu nhập hàng tháng": {
        required: true
      },
      "Địa chỉ chỗ ở hiện tại": {
        required: true
      },
      "Tên công ty đang công tác": {
        required: true
      }
    },
    messages: {
      "Họ và Tên": {
        required: "Vui lòng nhập họ tên"
      },
      "Số điện thoại": {
        required: "Vui lòng nhập số điện thoại",
        digits: "Số điện thoại chỉ bao gồm số từ 0-9"
      },
      "Số tiền cần vay": {
        required: "Vui lòng nhập số tiền cần vay"
      },
      "Thu nhập hàng tháng": {
        required: "Vui lòng chọn mức thu nhập"
      },
      "Địa chỉ chỗ ở hiện tại": {
        required: "Vui lòng nhập địa chỉ"
      },
      "Tên công ty đang công tác": {
        required: "Vui lòng nhập tên công ty"
      }
    },
    submitHandler: function (form) {
      loading()
      showNoti()
      $.post(google_sheet_url, $(form).serialize(), function () {
        success()
        closePopupForm()
      })
    }
  });
  //End Validator
})

function showNoti() {
  $("#success-popup").modal('toggle')
}

function loading() {
  $(".loading").show()
  $(".success").hide()
}

function success() {
  $(".loading").hide()
  $(".success").show()
}

function closePopupForm() {
  $("#exampleModalCenter").modal('hide')
}
