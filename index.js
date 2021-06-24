// close btn or menu bar
const crossBtn = document.querySelector('.cross-btn')
crossBtn.addEventListener('click', function (e) {
  document.querySelector('.line1').classList.toggle('rotate1')
  document.querySelector('.line2').classList.toggle('rotate2')
  document.querySelector('.menu').classList.toggle('return')
})

// typing effect
function setupTypewriter (t) {
  var HTML = t.innerHTML
  t.innerHTML = ''
  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;

  var type = function() {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }
    };
    return {
        type: type
    };
}
var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();

// validation

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const thank = document.querySelector('.thank-msg')
  const textArea = document.querySelector('textarea')
  if (textArea.value === '') {
    thank.style.display = 'block'
    thank.style.backgroundColor = '#e2070778'
    thank.textContent = 'please write your message'
    setTimeout(function (e) {
      thank.style.display = 'none'
    }, 3000)
  } else {
    textArea.value = ''
    thank.style.display = 'block'
    thank.style.backgroundColor = 'rgb(111, 180, 111)'
    thank.textContent = 'Thanks you for contacting me'
    setTimeout(function (e) {
      thank.style.display = 'none'
    }, 3000)
  }
  inputs.forEach(input => {
    if (input.classList.contains('email')) {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (input.value.match(regex)) {
        input.value = ''
      } else {
        input.style.borderBottomColor = 'red'
      }
    }
    input.value = ''
  })
})
