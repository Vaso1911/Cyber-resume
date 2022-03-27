new window.JustValidate('.form', {
  colorWrong:'#e80074',
  messages: {
    name: {
      required: 'заполнить',
      minLength: 'минимум 3 символа',
      maxLength: 'слишко длинное',
    },
    email: {
      email: 'ведите email',
      required: 'заполнить',
    }
  },
});

let instance = OverlayScrollbars(document.getElementById('textarea'), {}); 

// new SimpleBar(document.getElementById('textarea'));
// document.querySelectorAll('.simplebar-modal').forEach(el =>{
//   new SimpleBar(el)
// })