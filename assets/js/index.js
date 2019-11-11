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

$(".form-info").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "user": {
      required: true
    },
    "phone": {
      required: true,
      digits: true
    },
    "money": {
      required: true
    },
    "income": {
      required: true
    }
  },
  messages: {
    "user": {
      required: "Vui lòng nhập họ tên"
    },
    "phone": {
      required: "Vui lòng nhập số điện thoại",
      digits: "Số điện thoại chỉ bao gồm số"
    },
    "money": {
      required: "Vui lòng nhập số tiền cần vay"
    },
    "income": {
      required: "Vui lòng chọn mức thu nhập"
    }
  }
});

$("#page-form").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "user": {
      required: true
    },
    "phone": {
      required: true,
      digits: true
    },
    "money": {
      required: true
    },
    "income": {
      required: true
    }
  },
  messages: {
    "user": {
      required: "Vui lòng nhập họ tên"
    },
    "phone": {
      required: "Vui lòng nhập số điện thoại",
      digits: "Số điện thoại chỉ bao gồm số"
    },
    "money": {
      required: "Vui lòng nhập số tiền cần vay"
    },
    "income": {
      required: "Vui lòng chọn mức thu nhập"
    }
  }
});

$("#popup-form").validate({
  onfocusout: false,
  onkeyup: false,
  onclick: false,
  rules: {
    "user": {
      required: true
    },
    "phone": {
      required: true,
      digits: true
    },
    "money": {
      required: true
    },
    "income": {
      required: true
    }
  },
  messages: {
    "user": {
      required: "Vui lòng nhập họ tên"
    },
    "phone": {
      required: "Vui lòng nhập số điện thoại",
      digits: "Số điện thoại chỉ bao gồm số"
    },
    "money": {
      required: "Vui lòng nhập số tiền cần vay"
    },
    "income": {
      required: "Vui lòng chọn mức thu nhập"
    }
  }
});
